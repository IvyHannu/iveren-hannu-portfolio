"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import styles from "./about.module.css";

const careerPath = [
  {
    label: "Theatre Arts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 17a2 2 0 0 0-1.58-1.93 4 4 0 0 0-7.85-.33A2 2 0 0 0 6 17" />
        <path d="M6 17v-3a4 4 0 0 1 8 0v3" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
      </svg>
    ),
  },
  {
    label: "Operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Project Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
        <path d="M12 3v2" />
        <path d="M12 19v2" />
      </svg>
    ),
  },
  {
    label: "UI/UX Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M8 7h8" />
        <path d="M12 3v4" />
      </svg>
    ),
  },
  {
    label: "Product + Build",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
        <path d="M9 3v14" />
        <path d="M5 9h14" />
        <path d="M15 3v14" />
      </svg>
    ),
  },
];

const intro = "I turn complex problems into clear, usable products. My path has been nonlinear — theatre, operations, project management — each room taught me how people work, where systems break, and what clarity actually looks like.";

const story = [
  "Theatre Arts taught me to pay attention to people, communication and experience. Operations and telecoms taught me about systems, customers, constraints, targets and coordination. Project management sharpened how I think about structure, requirements, stakeholders and delivery.",
  "Design gave me a visual and product language for all of that. Today, I work across UI/UX and product design, with a particular interest in clarity, accessibility, predictability, trust and making complex journeys easier to understand.",
  "I'm also increasingly interested in what happens after the prototype. AI-assisted development lets me stay closer to implementation, test design decisions in working products and carry ideas further without pretending to be a software engineer.",
];

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.portrait}>
      {!failed && (
        <Image
          src="/iveren-i-hannu-portrait.png"
          alt="Portrait of Iveren I. Hannu"
          fill
          sizes="(max-width: 900px) 100vw, 32vw"
          className={styles.portraitImage}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className={styles.portraitPlaceholder}>
          <span className={styles.placeholderLabel}>Portrait</span>
          <span className={styles.placeholderPath}>
            Add public/iveren-i-hannu-portrait.png
          </span>
        </div>
      )}

      <span className={styles.portraitEdge} aria-hidden="true" />
      <span className={styles.portraitVignette} aria-hidden="true" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.content}>
        <section className={styles.hero} aria-labelledby="about-heading">
          <div className={styles.left}>
            <p className={styles.label}>About / IVEREN I. HANNU</p>
            <h1 id="about-heading" className={styles.headline}>
              <span className={styles.headlineLine}>I design with clarity.</span>
              <span className={styles.headlineLine}>
                I build with curiosity<span className={styles.period}>.</span>
              </span>
            </h1>
            <p className={styles.intro}>{intro}</p>
          </div>

          <div className={styles.middle}>
            <p className={styles.sectionLabel}>MY STORY</p>
            <h2 className={styles.sectionHeadline}>
              A nonlinear path<span className={styles.period}>.</span>
              <br />
              A clearer purpose<span className={styles.period}>.</span>
            </h2>
            <div className={styles.story}>
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <Portrait />
          </div>
        </section>

        <section className={styles.career} aria-label="Career path">
          <p className={styles.pathHeading}>MY CAREER PATH</p>
          <ul className={styles.path}>
            {careerPath.map((stage) => (
              <li key={stage.label} className={styles.pathStage}>
                <span className={styles.pathIconWrapper} aria-hidden="true">
                  <span className={styles.pathIcon}>{stage.icon}</span>
                  <span className={styles.pathAccent} aria-hidden="true" />
                </span>
                <span className={styles.pathLabel}>{stage.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}