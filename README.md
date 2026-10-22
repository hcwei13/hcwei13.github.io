# Hongchen Wei

Personal research website. Static HTML, CSS, and JavaScript; no build step or
backend. Open `index.html` directly, or serve this directory with a static server.

## Files

- `index.html`: compact academic introduction, research interests, news, and background.
- `stylesheet.css`: responsive layout and English/Chinese typography.
- `research-data.js`: publication metadata, short research descriptions, and Chinese translations.
- `site.js`: language selection, publication search, figure dialog,
  publication anchors, and email copying.
- `assets/`: optimized copies of original photographs and research figures.
- `weihc_files/pdfs/Hongchen_Wei_CV_en.pdf`: the current, author-supplied CV download.
  Despite its filename, this PDF contains the Chinese CV; the site labels it simply
  **CV / 简历**, with no separate English or bilingual download.

## Content

The September 2026 redesign uses the two PDFs in the workspace's `Final_Resume`
directory as its factual reference. Those originals are not modified.

The October 2026 local design uses an editorial academic layout: serif names and
section headings and the existing Lato body face. Monospace is limited to dates
and index labels; venues, resource links, captions, and the footer use the body
family for a quieter, consistent reading rhythm. A shared 15/14/13/12/11px scale
organizes desktop text, with a 14/13/12/11px mobile scale and 16px search inputs.
English and Chinese share sizes but have language-specific paragraph leading.
The profile uses tighter 1.6 English / 1.7 Chinese leading, with aligned paragraph
edges and a shared baseline for the English and Chinese names. Career information
retains its blue emphasis without a separate left indent.
The original proportional portrait and research interests remain within the biography;
papers are shown as a compact thumbnail-based list.
The desktop reading column is capped at 840px. Profile columns have a 32px gap;
paper thumbnails are 170px wide with a 24px text gap. Body type and the 260px
desktop portrait retain their sizes; the figure dialog remains independently wider.
All 18 entries are shown by default, without category tabs. The restrained
modern additions are bilingual text, search with an explicit clear control, image
enlargement, and sticky section navigation. Numbered headings and alphabetical
publication groups provide a consistent reading order without extra category tabs.
There is no photographic hero, large project showcase, or promotional contact band.
The biography ends with a bilingual note about full-time research opportunities
and expected Ph.D. completion in June 2027. Paper rows use subtle hover elevation,
disabled on touch devices and when reduced motion is requested.
A striped tabby and a black pixel cat replace the H mark. They occasionally
approach each other, close their eyes, and return to their places, with a small
shared heart and tail movements. Most of the 16-second cycle is still.
The paired favicon is static; touch/reduced-motion modes disable header animation.
The footer includes a return-to-top link.
Styles, fonts, icons, and content are all local, so previewing requires no network.

Publications are divided into three always-expanded sections: Preprints (6),
First-Author Publications (7, including co-first and student-first authorship),
and Co-Authored Publications (5 accepted/published non-first-author works).
Search applies to all sections and omits empty sections from its results.

- OfficeTown: organizational simulation resources for benchmarking, SFT, and OPD.
  Released on arXiv in October 2026, with the public author list and links to
  [the paper](https://arxiv.org/abs/2610.23194) and
  [the project homepage](https://officeintelligence.github.io/).
  It remains in the Preprints section. The Figure 1 crop is hosted locally;
  the paper is linked externally rather than copied into this repository.
- DocAtlas and XL-DocBench: NeurIPS 2026.
  Both use the full, author-supplied author lists. Hongchen Wei and Yuanzhe Wang
  are marked with superscript asterisks denoting equal contribution.
- PASA and ANO: publicly labeled **Preprint**, without submission venue.
- LOP: accepted to IEEE TCSVT; RSFAKE-1M: accepted to ACM TIST.
  Journal publication years are not assigned until confirmed.
- The archive contains 18 works, including the 11 first-author/student-first-author
  works in the CV. Existing public author order is retained.
- Missing paper or code links are omitted rather than represented by placeholders.
- Every entry has a short English and Chinese summary, without invented performance claims.
- The profile uses `images/whc.png`, with an uncropped, proportional WebP copy.
  Biography paragraphs are justified; the photo is 260px wide on desktop.
- `tools/pixel-cat-template.svg` and `tools/render_pixel_cats.py` define the pixel
  artwork and the two cats' distinct markings. `assets/pixel-cats.svg` is the
  animated header; `assets/favicon.svg` and the PNG fallbacks are static.
  Regenerate them with `python3 tools/render_pixel_cats.py` (requires Pillow).

To update the CV, copy the approved `Final_Resume/Hongchen_Wei_CV_en.pdf` from the
workspace to `weihc_files/pdfs/Hongchen_Wei_CV_en.pdf` without modifying its contents.
The profile, contact section, and no-JavaScript fallback all link to this file.
The old `CV_en.pdf`, `CV_zh.pdf`, and `CV_bilingual.pdf` downloads have been retired.
Do not re-typeset the original PDF when updating the website.

## Credits

The previous homepage was based on
[Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website).
The redesign retains original publication content and links.

Lato is distributed under the SIL Open Font License (`assets/fonts/OFL.txt`).
Lucide icons are distributed under the ISC license
(`assets/vendor/LICENSE-lucide`).
