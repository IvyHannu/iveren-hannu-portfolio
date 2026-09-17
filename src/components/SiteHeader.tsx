"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../app/page.module.css";

const navigation = [
  ["Work", "/work"],
  ["Writing", "/writing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
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
  );
}