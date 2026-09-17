"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import styles from "./writing.module.css";

const MEDIUM_PROFILE = "https://medium.com/@ivy.hannu";

type Article = {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readingTime: string;
  href: string;
  image: string;
};

const articles: Article[] = [
  {
    id: "vibe-coding-prd",
    title:
      "Why Your Vibe Coding Project Failed (And How a PRD Could Have Saved It)",
    category: "Product · AI",
    summary:
      "Why fast, AI-built features drift without a clear problem statement, and how a lightweight PRD keeps the work aimed at real users.",
    date: "Feb 2026",
    readingTime: "— min read",
    href: "https://medium.com/@ivy.hannu/why-your-vibe-coding-project-failed-and-how-a-prd-could-have-saved-it-90be3be72e4a",
    image: "/writing/vibe-coding-prd.jpg",
  },
  {
    id: "wcag-design-systems",
    title:
      "When Accessibility Is No Longer Just a Checklist: Integrating WCAG Into Design Systems That Truly Scale",
    category: "Design Systems · Accessibility",
    summary:
      "Moving accessibility out of late-stage fixes and into the foundation of a system — semantic tokens, focus states and testing.",
    date: "Jan 2026",
    readingTime: "— min read",
    href: "https://www.designsystemscollective.com/when-accessibility-is-no-longer-just-a-checklist-integrating-wcag-into-design-systems-that-truly-af16f118ac54",
    image: "/writing/wcag-design-systems.jpg",
  },
  {
    id: "designing-for-clarity",
    title: "Designing for Clarity: Why WCAG Became Essential in My Work",
    category: "Accessibility · WCAG",
    summary:
      "A personal case for WCAG: how living with low vision reshaped the way I choose type, colour, contrast and space.",
    date: "Jan 2026",
    readingTime: "— min read",
    href: "https://medium.com/@ivy.hannu/designing-for-clarity-why-wcag-became-essential-in-my-work-fc72ba9d7461",
    image: "/writing/designing-for-clarity.jpg",
  },
  {
    id: "color-as-strategy",
    title: "Color as Strategy: Building Systems with Intent",
    category: "Design Systems · Colour",
    summary:
      "Why colour belongs in the system rather than the screen — semantic tokens, layered naming and restraint over decoration.",
    date: "Dec 2025",
    readingTime: "— min read",
    href: "https://www.designsystemscollective.com/color-as-strategy-building-systems-with-intent-a89c0934983d",
    image: "/writing/color-as-strategy.jpg",
  },
];

function PreviewImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
          className={styles.previewImage}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <span className={styles.imagePlaceholder}>
          <span className={styles.placeholderLabel}>Article image</span>
          <span className={styles.placeholderPath}>Add public{src}</span>
        </span>
      )}
    </>
  );
}

export default function WritingPage() {
  const [activeId, setActiveId] = useState(articles[0].id);

  const active = articles.find((article) => article.id === activeId) ?? articles[0];

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => {
    const index = articles.findIndex((article) => article.id === id);
    let nextIndex = -1;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % articles.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + articles.length) % articles.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = articles.length - 1;
    }

    if (nextIndex >= 0) {
      event.preventDefault();
      const next = articles[nextIndex];
      setActiveId(next.id);
      document.getElementById(`tab-${next.id}`)?.focus();
    }
  };

  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.label}>Writing / Ideas in Practice</p>
            <h1 className={styles.heading}>
              What I learn while designing, testing and building.
            </h1>
            <p className={styles.supporting}>
              Notes on product decisions, accessibility and making ideas real.
            </p>
          </div>

          <div
            className={styles.list}
            role="tablist"
            aria-label="Articles"
            aria-orientation="vertical"
          >
            {articles.map((article) => {
              const selected = article.id === activeId;
              return (
                <button
                  key={article.id}
                  type="button"
                  role="tab"
                  id={`tab-${article.id}`}
                  className={styles.row}
                  aria-selected={selected}
                  aria-controls={`panel-${article.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(article.id)}
                  onMouseEnter={() => setActiveId(article.id)}
                  onFocus={() => setActiveId(article.id)}
                  onKeyDown={(event) => handleKeyDown(event, article.id)}
                >
                  <span className={styles.rowMeta}>
                    <span className={styles.activeDot} aria-hidden="true" />
                    <span>{article.category}</span>
                    <span className={styles.separator} aria-hidden="true">
                      ·
                    </span>
                    <span>{article.readingTime}</span>
                    <span className={styles.separator} aria-hidden="true">
                      ·
                    </span>
                    <span>{article.date}</span>
                  </span>
                  <span className={styles.rowMain}>
                    <span className={styles.rowTitle}>{article.title}</span>
                    <span className={styles.rowArrow} aria-hidden="true">
                      →
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <Link
            className={styles.allArticles}
            href={MEDIUM_PROFILE}
            target="_blank"
            rel="noreferrer"
          >
            All articles published on Medium
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </Link>

          <div
            className={styles.preview}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            tabIndex={0}
          >
            <div className={styles.previewMedia}>
              <PreviewImage
                key={active.id}
                src={active.image}
                alt={`${active.title} cover`}
              />
              <span className={styles.previewHint}>
                <span className={styles.hintHover}>Hover to preview</span>
                <span className={styles.hintTouch}>Tap to preview</span>
              </span>
            </div>

            <div className={styles.previewBody}>
              <p className={styles.previewCategory}>{active.category}</p>
              <p className={styles.previewSummary}>{active.summary}</p>
              <Link
                className={styles.previewLink}
                href={active.href}
                target="_blank"
                rel="noreferrer"
              >
                Read on Medium
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.quietFooter}>
        <p className={styles.quietStatement}>Finished here. Ready to start?</p>
        <Link className={styles.quietLink} href="/contact">
          Let’s make something good
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </footer>
    </main>
  );
}