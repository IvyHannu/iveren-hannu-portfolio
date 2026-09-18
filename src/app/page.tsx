"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import styles from "./page.module.css";

function HeroArtwork() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.artworkWrap} aria-hidden="true">
      {!reduceMotion && (
        <motion.div
          className={styles.artworkGlow}
          animate={{
            x: [-12, 12, -12],
            y: [-8, 8, -8],
            opacity: [0.05, 0.09, 0.05],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className={styles.artworkInner}>
        <motion.div
          className={styles.artworkMotion}
          animate={
            reduceMotion
              ? undefined
              : {
                x: [-2, 2, -2],
                y: [-4, 4, -4],
                rotate: [-0.25, 0.25, -0.25],
              }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            className={styles.heroImage}
            src="/hero-ribbon-butterflies.png"
            alt=""
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 600px) 96vw, (max-width: 900px) 88vw, 48vw"
          />
        </motion.div>
      </div>
    </div>
  );
}

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

        <HeroArtwork />

        <p className={styles.process}>
          Think. Design. Build.
        </p>
      </section>
    </main>
  );
}