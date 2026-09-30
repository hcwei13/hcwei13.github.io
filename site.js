(() => {
  "use strict";
  const papers = window.researchPapers;
  const presentation = window.paperPresentation;
  const chinese = window.homepageChinese;
  const english = new Map();
  const translated = [...document.querySelectorAll("[data-i18n]")];
  translated.forEach((element) => english.set(element, element.innerHTML));
  let language = "en";
  const search = document.querySelector("#paper-search");
  const list = document.querySelector("#paper-list");
  const linkNames = {
    en: {
      paper: "paper",
      project: "project",
      code: "code",
      dataset: "dataset",
    },
    zh: {
      paper: "阅读论文",
      project: "项目主页",
      code: "源代码",
      dataset: "数据集",
    },
  };
  const icon = (name) => {
    const element = document.createElement("i");
    element.dataset.lucide = name;
    element.setAttribute("aria-hidden", "true");
    return element;
  };
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function refreshIcons() {
    window.lucide?.createIcons({ attrs: { "aria-hidden": "true" } });
  }
  function publicationGroup(paper) {
    if (paper.status !== "published") return "preprints";
    return paper.firstAuthor ? "first-author" : "coauthored";
  }
  function renderPapers() {
    const query = search.value.trim().toLocaleLowerCase();
    const results = papers.filter((paper) => {
      const haystack = [
        paper.title,
        paper.venue,
        paper.year,
        ...(paper.authors || ["Hongchen Wei"]),
        paper.keywords,
        presentation[paper.id]?.description.en,
        presentation[paper.id]?.description.zh,
      ]
        .join(" ")
        .toLocaleLowerCase();
      return !query || haystack.includes(query);
    });
    const fragment = document.createDocumentFragment();
    const groupedContainers = new Map();
    const groups = [
      {
        id: "preprints",
        title: language === "zh" ? chinese.groupPreprints : "Preprints",
      },
      {
        id: "first-author",
        title:
          language === "zh"
            ? chinese.groupFirstAuthor
            : "First-Author Publications",
        note:
          language === "zh"
            ? chinese.groupFirstAuthorNote
            : "Accepted / published, including co-first and student-first authorship",
      },
      {
        id: "coauthored",
        title:
          language === "zh"
            ? chinese.groupCoAuthored
            : "Co-Authored Publications",
        note:
          language === "zh"
            ? chinese.groupCoAuthoredNote
            : "Accepted / published, non-first-author contributions",
      },
    ];
    groups.forEach((group) => {
      const count = results.filter(
        (paper) => publicationGroup(paper) === group.id,
      ).length;
      if (!count) return;
      const section = element("section", "publication-group");
      section.id = `publications-${group.id}`;
      section.dataset.group = group.id;
      const header = element("div", "publication-group-heading");
      const heading = element("h3", "", group.title);
      heading.id = `${section.id}-title`;
      section.setAttribute("aria-labelledby", heading.id);
      header.append(
        heading,
        element(
          "span",
          "publication-group-count",
          language === "zh" ? `${count} 篇` : `${count} papers`,
        ),
      );
      section.append(header);
      if (group.note)
        section.append(element("p", "publication-group-note", group.note));
      fragment.append(section);
      groupedContainers.set(group.id, section);
    });
    results.forEach((paper) => {
      const row = element("article", "paper-row");
      const display = presentation[paper.id] || {};
      if (display.featured) row.classList.add("is-featured");
      row.dataset.paper = paper.id;
      row.id = `paper-${paper.id}`;
      const visual = element("div", "paper-visual");
      const thumbnail = element("button", "paper-image");
      thumbnail.type = "button";
      thumbnail.dataset.zoom =
        display.zoom || `assets/research/${paper.id}.webp`;
      thumbnail.dataset.caption = display.caption?.[language] || paper.title;
      const zoomLabel =
        language === "zh" ? "放大论文图" : "Enlarge paper figure";
      thumbnail.setAttribute("aria-label", `${zoomLabel}: ${paper.title}`);
      thumbnail.title = zoomLabel;
      const image = element("img");
      image.src = `assets/research/${paper.id}.webp`;
      image.alt = paper.title;
      image.width = 520;
      image.height = 360;
      image.loading = "lazy";
      thumbnail.append(image);
      const zoomSymbol = element("span", "zoom-symbol");
      zoomSymbol.append(icon("maximize-2"));
      thumbnail.append(zoomSymbol);
      visual.append(thumbnail);
      row.append(visual);
      const content = element("div", "paper-content");
      const heading = element("h4", "paper-title");
      const titleUrl = paper.links.paper || paper.links.project;
      if (titleUrl) {
        const anchor = element("a", "", paper.title);
        anchor.href = titleUrl;
        anchor.target = "_blank";
        anchor.rel = "noopener";
        heading.append(anchor);
      } else heading.textContent = paper.title;
      content.append(heading);
      const authors = element("p", "paper-authors");
      if (paper.authors) {
        paper.authors.forEach((author, index) => {
          if (index) authors.append(document.createTextNode(", "));
          const authorName = element(
            author === "Hongchen Wei" ? "strong" : "span",
            "",
            author,
          );
          authorName.dataset.author = author;
          if (author === "Bei Liu") {
            const profile = element("a", "", author);
            profile.href = "https://bei21.github.io/";
            profile.target = "_blank";
            profile.rel = "noopener";
            authorName.replaceChildren(profile);
          }
          if (paper.equalContributors?.includes(author)) {
            const mark = element("sup", "author-mark");
            const abbreviation = element("abbr", "", "*");
            abbreviation.title =
              language === "zh" ? "共同第一作者" : "Equal contribution";
            mark.append(abbreviation);
            authorName.append(mark);
          }
          authors.append(authorName);
        });
      } else {
        authors.append(
          document.createTextNode(
            language === "zh" ? "合作作者包括 " : "Co-authored by ",
          ),
        );
        authors.append(element("strong", "", "Hongchen Wei"));
      }
      content.append(authors);
      const meta = element("div", "paper-venue");
      let venue = paper.venue;
      if (language === "zh")
        venue = venue
          .replace("Preprint", "预印本")
          .replace("(under review)", "（在审）");
      const venueLabel = element("span");
      venueLabel.append(
        element(
          "em",
          paper.status === "published" ? "venue-accepted" : "preprint",
          venue,
        ),
      );
      // An acceptance does not establish the journal's final publication year.
      if (!paper.accepted && !venue.includes(String(paper.year))) {
        venueLabel.append(document.createTextNode(`, ${paper.year}`));
      }
      meta.append(venueLabel);
      if (paper.note === "msra")
        meta.append(
          element(
            "span",
            "paper-note",
            language === "zh" ? "工作完成于 MSRA" : "Work done at MSRA",
          ),
        );
      if (paper.studentFirst)
        meta.append(
          element(
            "span",
            "paper-note",
            language === "zh" ? "学生第一作者" : "Student first author",
          ),
        );
      content.append(meta);
      const actions = element("div", "paper-actions");
      Object.entries(paper.links).forEach(([type, url]) => {
        const anchor = element("a", "", linkNames[language][type]);
        anchor.href = url;
        anchor.target = "_blank";
        anchor.rel = "noopener";
        anchor.title = linkNames[language][type];
        anchor.setAttribute(
          "aria-label",
          `${linkNames[language][type]}: ${paper.title}`,
        );
        actions.append(anchor);
      });
      if (actions.childElementCount) content.append(actions);
      if (display.description) {
        content.append(
          element("p", "paper-description", display.description[language]),
        );
      }
      row.append(content);
      groupedContainers.get(publicationGroup(paper)).append(row);
    });
    list.replaceChildren(fragment);
    document.querySelector("#paper-empty").hidden = results.length !== 0;
    document.querySelector("#paper-count").textContent =
      language === "zh"
        ? `${results.length} / ${papers.length} 篇`
        : `${results.length} of ${papers.length} papers`;
    refreshIcons();
  }
  function setLanguage(next) {
    language = next === "zh" ? "zh" : "en";
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "魏红陈 | 学术主页" : "Hongchen Wei";
    translated.forEach((node) => {
      const value = chinese[node.dataset.i18n];
      // Translations are authored locally, including the profile's academic links.
      if (language === "zh" && value) node.innerHTML = value;
      else node.innerHTML = english.get(node);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      );
    });
    search.placeholder =
      language === "zh" ? chinese.searchPlaceholder : "Search publications";
    search.setAttribute("aria-label", search.placeholder);
    const copy = document.querySelector("#copy-email");
    copy.title = language === "zh" ? "复制邮箱" : "Copy email";
    copy.setAttribute("aria-label", copy.title);
    document.querySelector("#copy-status").textContent = "";
    try {
      localStorage.setItem("homepage-language", language);
    } catch {
      /* Optional persistence. */
    }
    renderPapers();
  }
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () =>
      setLanguage(button.dataset.language),
    );
  });
  search.addEventListener("input", () => {
    renderPapers();
  });
  document.querySelector("#reset-search").addEventListener("click", () => {
    search.value = "";
    renderPapers();
    search.focus();
  });

  const dialog = document.querySelector("#image-dialog");
  let dialogTrigger = null;
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-zoom]");
    if (!button) return;
    dialogTrigger = button;
    const image = document.querySelector("#dialog-image");
    image.src = button.dataset.zoom;
    image.alt = button.dataset.caption;
    document.querySelector("#dialog-caption").textContent =
      button.dataset.caption;
    document.body.classList.add("modal-open");
    dialog.showModal();
    document.querySelector("#close-dialog").focus();
  });
  document
    .querySelector("#close-dialog")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    dialogTrigger?.focus({ preventScroll: true });
  });

  function revealLinkedPaper(hash) {
    if (!/^#paper-[a-z0-9-]+$/.test(hash)) return false;
    const id = hash.slice("#paper-".length);
    if (!papers.some((paper) => paper.id === id)) return false;
    if (!document.getElementById(hash.slice(1))) {
      search.value = "";
      renderPapers();
    }
    return true;
  }
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#paper-"]');
    if (link) revealLinkedPaper(link.hash);
  });
  window.addEventListener("hashchange", () => {
    if (revealLinkedPaper(location.hash)) {
      document.getElementById(location.hash.slice(1)).scrollIntoView();
    }
  });
  let copyTimer;
  document.querySelector("#copy-email").addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");
    const email = "hc_wei@whu.edu.cn";
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      status.textContent = language === "zh" ? "已复制" : "Copied";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector(".contact-actions > a"));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent =
        language === "zh"
          ? "邮箱已选中，可手动复制"
          : "Email selected for copying";
    }
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      status.textContent = "";
    }, 4000);
  });

  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  let scrollScheduled = false;
  function updateNavigation() {
    let current = "";
    for (const link of navLinks) {
      if (document.querySelector(link.hash).getBoundingClientRect().top <= 160)
        current = link.hash;
    }
    navLinks.forEach((link) => {
      const active = link.hash === current;
      link.classList.toggle("is-current", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scrollScheduled = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollScheduled) {
        scrollScheduled = true;
        requestAnimationFrame(updateNavigation);
      }
    },
    { passive: true },
  );
  let saved = "en";
  try {
    saved = localStorage.getItem("homepage-language") || "en";
  } catch {
    /* file:// can deny storage. */
  }
  setLanguage(saved);
  if (revealLinkedPaper(location.hash)) {
    requestAnimationFrame(() =>
      document.getElementById(location.hash.slice(1)).scrollIntoView(),
    );
  }
  updateNavigation();
})();
