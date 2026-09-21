"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import styles from "./about.module.css";

const careerPath = [
  "Theatre Arts",
  "Operations",
  "Project Management",
  "UI/UX Design",
  "Product + Build",
];

const story = [
  "I didn’t arrive in product design through a straight line. I came through Theatre Arts, operations, telecoms and project management. Different rooms, but the same questions kept following me: Who is this for? What are they trying to do? Where does the process break down? How do we make it clearer?",
  "Theatre Arts taught me to pay attention to people, communication and experience. Operations and telecoms taught me about systems, customers, constraints, targets and coordination. Project management sharpened how I think about structure, requirements, stakeholders and delivery.",
  "Design gave me a visual and product language for all of that. Today, I work across UI/UX and product design, with a particular interest in clarity, accessibility, predictability, trust and making complex journeys easier to understand.",
  "I’m also increasingly interested in what happens after the prototype. AI-assisted development lets me stay closer to implementation, test design decisions in working products and carry ideas further without pretending to be a software engineer.",
];

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.portrait}>
      {!failed && (
        <Image
          src="/iveren-hannu.jpg"
          alt="Portrait of Iveren I. Hannu"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 80vw, 36vw"
          className={styles.portraitImage}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className={styles.portraitPlaceholder}>
          <span className={styles.placeholderLabel}>Portrait</span>
          <span className={styles.placeholderPath}>
            Add public/iveren-hannu.jpg
          </span>
        </div>
      )}

      <span className={styles.portraitEdge} aria-hidden="true" />
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
          <ul className={styles.path}>
            {careerPath.map((stage) => (
              <li key={stage} className={styles.pathStage}>
                <span className={styles.pathMarker} aria-hidden="true" />
                <span className={styles.pathLabel}>{stage}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
