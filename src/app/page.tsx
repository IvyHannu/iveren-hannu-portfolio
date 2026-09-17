"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const navigation = [
  ["Work", "/work"],
  ["Writing", "/writing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.identity} href="/" aria-label="Iveren Hannu, home">
          Iveren Hannu
        </Link>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          <ul className={styles.navigation}>
            {navigation.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileMenu} ref={menuRef}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.stepsIcon} aria-hidden="true">
              <span className={`${styles.stepsBar} ${styles.stepTop}`} />
              <span className={`${styles.stepsBar} ${styles.stepMid}`} />
              <span className={`${styles.stepsBar} ${styles.stepBottom}`} />
            </span>
          </button>

          {menuOpen && (
            <div id="mobile-menu" className={styles.menuDropdown}>
              <ul>
                {navigation.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.textComposition}>
          <p className={styles.eyebrow}>Product Designer · UI/UX + Build</p>

          <h1 id="hero-heading" className={styles.heading}>
            <span className={styles.headingLine}>I don&apos;t hand off</span>
            <span className={styles.headingLine}>designs.</span>
            <span className={styles.headingLine}>
              I finish them<span className={styles.period}>.</span>
            </span>
          </h1>

          <div className={styles.supportingComposition}>
            <p className={styles.supporting}>
              I design clear digital products, then help bring them to life.
            </p>
            <Link className={styles.workLink} href="/work">
              Enter Work <span aria-hidden="true" className={styles.arrow}>↗</span>
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
            sizes="(max-width: 600px) 135vw, (max-width: 900px) 88vw, 48vw"
          />
        </div>

        <p className={styles.process}>Think. Design. Build.</p>
      </section>
    </main>
  );
}