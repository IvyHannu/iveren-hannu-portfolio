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
        <path d="M10 11h.01" />
        <path d="M14 6h.01" />
        <path d="M18 6h.01" />
        <path d="M6.5 13.1h.01" />
        <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
        <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
        <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
        <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
      </svg>
    ),
  },
  {
    label: "Operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Project Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M12 11h4" />
        <path d="M12 16h4" />
        <path d="M8 11h.01" />
        <path d="M8 16h.01" />
      </svg>
    ),
  },
  {
    label: "UI/UX Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    label: "Product + Build",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
        <path d="m7 16.5-4.74-2.85" />
        <path d="m7 16.5 5-3" />
        <path d="M7 16.5v5.17" />
        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
        <path d="m17 16.5-5-3" />
        <path d="m17 16.5 4.74-2.85" />
        <path d="M17 16.5v5.17" />
        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
        <path d="M12 8 7.26 5.15" />
        <path d="m12 8 4.74-2.85" />
        <path d="M12 13.5V8" />
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