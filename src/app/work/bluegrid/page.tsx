"use client";

import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import styles from "./bluegrid-archive.module.css";

export default function BlueGridArchivePage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>COMPLETED PROJECT · PRODUCT DESIGN + BUILD</p>
          <h1 className={styles.title}>BlueGrid</h1>
          <p className={styles.description}>
            Water Infrastructure · Field Survey Platform
          </p>
          <p className={styles.description}>
            Completed · Live Prototype
          </p>
          <span className={styles.status}>COMPLETED · LIVE</span>
        </header>

        <dl className={styles.meta}>
          <div className={styles.metaRow}>
            <dt>ROLE</dt>
            <dd>Product Design · UX/UI · AI-assisted Development</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>TYPE</dt>
            <dd>Field Survey Platform</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>STATUS</dt>
            <dd>Completed · Live Prototype</dd>
          </div>
        </dl>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.sectionText}>
            BlueGrid is a field survey platform designed to make water infrastructure data collection clearer, more structured, and easier to complete in the field.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Problem</h2>
          <p className={styles.sectionText}>
            Field surveys involve complex information, conditional questions, validation, location data, and interrupted submissions. The challenge was making the process clear without removing important information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Designed</h2>
          <ul className={styles.bulletList}>
            <li>Structured questionnaire</li>
            <li>Conditional/skip logic</li>
            <li>Validation and error handling</li>
            <li>Review-before-submit flow</li>
            <li>Offline/pending-sync states</li>
            <li>Field and survey IDs</li>
            <li>GPS/location information</li>
            <li>Submission feedback</li>
            <li>Accessible interaction patterns</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Design Focus</h2>
          <p className={styles.sectionText}>
            Precision without unnecessary complexity. Clear hierarchy, predictable interactions, progressive disclosure, validation, and meaningful feedback.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Product + Build</h2>
          <p className={styles.sectionText}>
            Designed in Figma and brought to life as a working prototype through AI-assisted development. I directed the implementation, tested the experience, corrected issues, and made the final product decisions.
          </p>
        </section>

        <div className={styles.visitPanel}>
          <p className={styles.visitText}>
            Explore the live BlueGrid prototype.
          </p>
          <Link
            className={styles.visitLink}
            href="https://bluegrid-blue.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore BlueGrid
            <span className={styles.visitArrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        <nav className={styles.backNav}>
          <Link href="/work" className={styles.backLink}>
            <span aria-hidden="true">← </span>BACK TO WORK
          </Link>
        </nav>
      </div>
    </main>
  );
}