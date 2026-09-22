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

        <div className={styles.visitPanel}>
          <p className={styles.visitText}>
            View the live BlueGrid application.
          </p>
          <Link
            className={styles.visitLink}
            href="https://bluegrid-blue.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit BlueGrid
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
