"use client";

import Image from "next/image";
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.page} ${styles.pageHome}`}>
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.textComposition}>
          <p className={styles.eyebrow}>
            Product Designer · UI/UX + Build
          </p>

          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.headingLine}>
              I don&apos;t hand off
            </span>

            <span className={styles.headingLine}>
              designs.
            </span>

            <span className={styles.headingLine}>
              I finish them<span className={styles.period}>.</span>
            </span>
          </h1>

          <div className={styles.supportingComposition}>
            <p className={styles.supporting}>
              I design clear digital products, then help bring them to life.
            </p>

            <Link className={styles.workLink} href="/work">
              Enter Work
              <span aria-hidden="true" className={styles.arrow}>
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.artworkWrap} aria-hidden="true">
          <Image
            className={styles.heroImage}
            src="/hero-ribbon-butterflies.png"
            alt=""
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 600px) 96vw, (max-width: 900px) 88vw, 48vw"
          />
        </div>

        <p className={styles.process}>
          Think. Design. Build.
        </p>
      </section>
    </main>
  );
}