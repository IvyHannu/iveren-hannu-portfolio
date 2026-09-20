"use client";

import SiteHeader from "../../components/SiteHeader";
import styles from "./contact.module.css";

const EMAIL = "ivy.hannu@gmail.com";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iveren-i-hannu/" },
  { label: "Behance", href: "https://www.behance.net/ivyhannu03" },
  { label: "Medium", href: "https://medium.com/@ivy.hannu" },
] as const;

const butterflies = [
  {
    x: 55,
    y: 22,
    size: 20,
    rotate: -32,
  },
  {
    x: 78,
    y: 15,
    size: 16,
    rotate: -12,
  },
  {
    x: 88,
    y: 48,
    size: 30,
    rotate: -6,
  },
  {
    x: 65,
    y: 68,
    size: 38,
    rotate: -22,
  },
];

function Butterfly({ index }: { index: number }) {
  const upper = `contactWingUpper${index}`;
  const lower = `contactWingLower${index}`;

  return (
    <svg
      className={styles.butterflyArt}
      viewBox="0 0 100 100"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={upper} x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#e9b8ff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#f02bff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#9400d3" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id={lower} x1="0.9" y1="0" x2="0.1" y2="1">
          <stop offset="0" stopColor="#d94cff" stopOpacity="0.88" />
          <stop offset="1" stopColor="#9400d3" stopOpacity="0.82" />
        </linearGradient>
      </defs>

      <g>
        <path
          className={styles.wingUpper}
          fill={`url(#${upper})`}
          d="M50 47 C40 27 20 10 11 22 C2 34 20 49 50 50Z"
        />
        <path
          className={styles.wingUpper}
          fill={`url(#${upper})`}
          d="M50 47 C60 27 80 10 89 22 C98 34 80 49 50 50Z"
        />
        <path
          className={styles.wingLower}
          fill={`url(#${lower})`}
          d="M50 52 C42 64 30 78 23 71 C16 64 33 54 50 54Z"
        />
        <path
          className={styles.wingLower}
          fill={`url(#${lower})`}
          d="M50 52 C58 64 70 78 77 71 C84 64 67 54 50 54Z"
        />

        <path className={styles.wingVein} d="M50 48 C42 36 26 22 14 21" />
        <path className={styles.wingVein} d="M50 48 C58 36 74 22 86 21" />

        <path
          className={styles.body}
          d="M50 34 C51.6 42 51.4 60 50 68 C48.6 60 48.4 42 50 34Z"
        />
        <path className={styles.antenna} d="M50 35 C46 29 42 25 37 23" />
        <path className={styles.antenna} d="M50 35 C54 29 58 25 63 23" />
      </g>
    </svg>
  );
}

function ButterflyCluster() {
  return (
    <div className={styles.artwork} aria-hidden="true">
      {butterflies.map((butterfly, index) => (
        <span
          key={`${butterfly.x}-${butterfly.y}`}
          className={styles.butterfly}
          style={
            {
              "--x": `${butterfly.x}%`,
              "--y": `${butterfly.y}%`,
              "--size": `${butterfly.size}%`,
              "--base-rotate": `${butterfly.rotate}deg`,
            } as React.CSSProperties
          }
        >
          <span className={styles.butterflyInner}>
            <Butterfly index={index} />
          </span>
        </span>
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.content}>
        <div className={styles.grid}>
          <section className={styles.left} aria-labelledby="contact-heading">
            <p className={styles.label}>
              Contact / Let&apos;s Talk
            </p>

            <h1 id="contact-heading" className={styles.headline}>
              <span className={styles.headlineLine}>
                Have something worth building?
              </span>
              <span className={styles.headlineLine}>
                Let&apos;s talk<span className={styles.period}>.</span>
              </span>
            </h1>

            <div className={styles.emailBlock}>
              <a className={styles.emailLink} href={`mailto:${EMAIL}`}>
                <span className={styles.emailText}>{EMAIL}</span>
                <span className={styles.emailArrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <p className={styles.supporting}>
              Open to thoughtful product work, collaborations and conversations.
            </p>

            <nav aria-label="Elsewhere" className={styles.socialsWrap}>
              <ul className={styles.socials}>
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      className={styles.socialLink}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label}
                      <span className={styles.arrow} aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <div className={styles.visual}>
            <ButterflyCluster />
          </div>
        </div>
      </div>
    </main>
  );
}