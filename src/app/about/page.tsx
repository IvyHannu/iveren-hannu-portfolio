"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import styles from "./about.module.css";

const phraseGroups = [
  ["People", "Ideas", "Systems", "A Brighter Tomorrow"],
  ["Design", "Builds", "Bridges"],
];

const careerPath = [
  "Theatre Arts",
  "Operations",
  "Project Management",
  "UI/UX Design",
  "Product + Build",
];

const story = [
  "I’m Iveren Hannu, a UI/UX and Product Designer creating clear, accessible digital experiences across web and mobile.",
  "My path through operations and project management taught me to work with constraints, people and delivery, not just screens.",
  "Today, I combine product design with AI assisted development to move ideas closer to working products.",
];

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.portrait}>
      {!failed && (
        <Image
          src="/about/iveren-hannu.jpg"
          alt="Portrait of Iveren Hannu"
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
            Add public/about/iveren-hannu.jpg
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
            <p className={styles.label}>About / Iveren Hannu</p>
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
            <div className={styles.phrases}>
              {phraseGroups.map((group) => (
                <ul key={group[0]} className={styles.phraseGroup}>
                  {group.map((phrase) => (
                    <li key={phrase}>{phrase}</li>
                  ))}
                </ul>
              ))}
            </div>

            <Portrait />
          </div>
        </section>

        <section className={styles.career} aria-label="Career path">
          <ol className={styles.path}>
            {careerPath.map((stage) => (
              <li key={stage} className={styles.pathStage}>
                <span className={styles.pathMarker} aria-hidden="true" />
                <span className={styles.pathLabel}>{stage}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}