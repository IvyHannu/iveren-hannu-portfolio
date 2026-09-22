"use client";

import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import styles from "./superhost-archive.module.css";

const screenshots = [
  {
    label: "HOME",
    src: "/superhost-management.jpg",
    alt: "Superhost Management homepage — hero section with hospitality property management overview",
  },
  {
    label: "ABOUT US",
    src: "/superhost-about-us.jpg",
    alt: "Superhost Management About Us page — company background and mission",
  },
  {
    label: "SERVICES",
    src: "/superhost-services.jpg",
    alt: "Superhost Management Services page — property management service offerings",
  },
  {
    label: "SUPERHOST DESIGN SERVICES",
    src: "/superhost-design-services.jpg",
    alt: "Superhost Management Design Services page — interior design and staging services",
  },
  {
    label: "PRICING",
    src: "/superhost-pricing.jpg",
    alt: "Superhost Management Pricing page — service packages and pricing tiers",
  },
  {
    label: "PACKAGES",
    src: "/superhost-packages.jpg",
    alt: "Superhost Management Packages page — detailed service package breakdowns",
  },
  {
    label: "CONTACT",
    src: "/superhost-contact.jpg",
    alt: "Superhost Management Contact page — inquiry form and contact details",
  },
];

export default function SuperhostArchivePage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>ARCHIVED CLIENT PROJECT · WEBSITE DESIGN + BUILD</p>
          <h1 className={styles.title}>Superhost Management</h1>
          <p className={styles.description}>
            A hospitality and property management website designed and delivered for Superhost Management.
          </p>
          <span className={styles.status}>ARCHIVED · ORIGINAL WEBSITE NO LONGER LIVE</span>
        </header>

        <dl className={styles.meta}>
          <div className={styles.metaRow}>
            <dt>PROJECT</dt>
            <dd>Superhost Management</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>ROLE</dt>
            <dd>Website Design + Build</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>TYPE</dt>
            <dd>Hospitality · Property Management</dd>
          </div>
          <div className={styles.metaRow}>
            <dt>STATUS</dt>
            <dd>Delivered · Archived</dd>
          </div>
        </dl>

        <section className={styles.screenshots} aria-labelledby="screenshots-heading">
          <h2 id="screenshots-heading" className={styles.screenshotsTitle}>
            SCREENSHOT ARCHIVE
          </h2>
          <div className={styles.screenshotGrid}>
            {screenshots.map((shot) => (
              <figure key={shot.src} className={styles.screenshotFigure}>
                <figcaption className={styles.screenshotLabel}>{shot.label}</figcaption>
                <div className={styles.screenshotFrame}>
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className={styles.screenshotImage}
                    loading="lazy"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <nav className={styles.backNav}>
          <Link href="/work" className={styles.backLink}>
            <span aria-hidden="true">← </span>BACK TO WORK
          </Link>
        </nav>
      </div>
    </main>
  );
}