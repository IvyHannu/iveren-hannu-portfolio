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
            A dashboard and data platform designed and built for BlueGrid.
          </p>
          <span className={styles.status}>COMPLETED · LIVE</span>
        </header>

        <dl className={styles.meta}>
          <div className={styles.metaRow}>
            <dt>PROJECT</dt>
            <dd>BlueGrid</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>ROLE</dt>
            <dd>Product Design + Build</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>TYPE</dt>
            <dd>Dashboard · Data Platform</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>STATUS</dt>
            <dd>Completed · Live</dd>
          </div>
        </dl>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project overview</h2>
          <p className={styles.sectionText}>
            BlueGrid needed a unified dashboard and data platform to replace fragmented tools. The goal: give operators and stakeholders a single, clear view of grid assets, performance, and alerts — without overwhelming density.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My role</h2>
          <p className={styles.sectionText}>
            End-to-end product design and front-end build. Owned UX strategy, information architecture, UI system, and shipped production code (Next.js + TypeScript + Tailwind).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The problem</h2>
          <p className={styles.sectionText}>
            Operators juggled spreadsheets, legacy portals, and manual reports. Critical data was buried, alerting was noisy, and no single view existed for real-time decision-making. Stakeholders lacked confidence in the numbers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I designed</h2>
          <ul className={styles.bulletList}>
            <li>Information architecture for multi-tenant dashboard with role-based views</li>
            <li>Real-time asset map with clustered markers and drill-down detail panels</li>
            <li>Alert centre with severity tiers, acknowledgment flows, and escalation paths</li>
            <li>Analytics workspace: custom date ranges, comparison views, exportable reports</li>
            <li>Design system: tokens, components, dark mode, motion guidelines</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Design focus</h2>
          <p className={styles.sectionText}>
            Clarity at density. Used progressive disclosure, consistent visual hierarchy, and purposeful colour (semantic, not decorative) so operators scan fast and act faster. Dark mode first — reduces eye strain in control-room environments.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Selected screens</h2>
          <div className={styles.screenGrid}>
            <figure className={styles.screen}>
              <img src="/bluegrid.png" alt="BlueGrid dashboard overview" />
              <figcaption>Dashboard overview</figcaption>
            </figure>
            <figure className={styles.screen}>
              <img src="/BlueGrid cover image.png" alt="BlueGrid asset map view" />
              <figcaption>Asset map with clustering</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Product + Build note</h2>
          <p className={styles.sectionText}>
            Designed in Figma, built in Next.js 14 (App Router) with TypeScript, Tailwind, and Recharts. Components are fully typed, tested, and deployed on Vercel with preview deployments for every PR. Design tokens sync from Figma → code via Style Dictionary.
          </p>
        </section>

        <div className={styles.visitPanel}>
          <p className={styles.visitText}>
            Explore the live BlueGrid application.
          </p>
          <Link
            className={styles.visitLink}
            href="https://bluegrid-five.vercel.app/"
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