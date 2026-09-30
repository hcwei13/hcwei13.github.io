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
- `weihc_files/pdfs/`: final Chinese, English, and bilingual CV downloads.

## Content

The September 2026 redesign uses the two PDFs in the workspace's `Final_Resume`
directory as its factual reference. Those originals are not modified.

The page follows a compact, Jon Barron-inspired academic layout: a small profile
photo, research interests within the biography, and a thumbnail-based publication list.
All 18 entries are shown by default, without category tabs. The restrained
modern additions are bilingual text, search, and image enlargement.
There is no photographic hero, large project showcase, or promotional contact band.
The biography ends with a bilingual note about full-time research opportunities
and expected Ph.D. completion in June 2027. Paper rows use subtle hover elevation,
disabled on touch devices and when reduced motion is requested.

Publications are divided into three always-expanded sections: Preprints (6),
First-Author Publications (7, including co-first and student-first authorship),
and Co-Authored Publications (5 accepted/published non-first-author works).
Search applies to all sections and omits empty sections from its results.

- OfficeTown: organizational simulation resources for benchmarking, SFT, and OPD.
  Labeled **Preprint**, with no paper download. Only the requested Figure 1 image crop is included;
  the source PDF, submission header, and paper text are not copied into this repository.
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
- `assets/favicon.svg` is a custom smiling H mark, with PNG fallbacks.

To update the final CV, replace `CV_en.pdf` and `CV_zh.pdf` with the approved
originals and rebuild `CV_bilingual.pdf` by appending Chinese pages before English.
Do not re-typeset the original PDFs when updating the website.

## Credits

The previous homepage was based on
[Jon Barron's academic website](https://github.com/jonbarron/jonbarron_website).
The redesign retains original publication content and links.

Lato is distributed under the SIL Open Font License (`assets/fonts/OFL.txt`).
Lucide icons are distributed under the ISC license
(`assets/vendor/LICENSE-lucide`).
