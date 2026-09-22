"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./SiteHeader.module.css";

const navigation = [
  ["Work", "/work"],
  ["Writing", "/writing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

const resumeLink = {
  label: "Resume",
  href: "/Iveren Hannu Design Resume.pdf",
} as const;

export default function SiteHeader() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
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

  const isActive = (href: string) => pathname === href;

  return (
    <header className={styles.header} style={{ backdropFilter: "blur(38px)" }}>
      <Link
        className={styles.identity}
        href="/"
        aria-label="Iveren I. Hannu, home"
      >
        Iveren I. Hannu
      </Link>

      <nav
        aria-label="Primary navigation"
        className={styles.desktopNav}
      >
        <ul className={styles.navigation}>
          {navigation.map(([label, href]) => {
            const active = isActive(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={resumeLink.href}
              target="_blank"
              rel="noreferrer"
              className={styles.resumeButton}
            >
              {resumeLink.label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.mobileMenu} ref={menuRef}>
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          style={{ backdropFilter: "blur(30px)" }}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.stepsIcon} aria-hidden="true">
            <span
              className={`${styles.stepsBar} ${styles.stepTop}`}
            />
            <span
              className={`${styles.stepsBar} ${styles.stepMid}`}
            />
            <span
              className={`${styles.stepsBar} ${styles.stepBottom}`}
            />
          </span>
        </button>

        {menuOpen && (
          <div
            id="mobile-menu"
            className={styles.menuDropdown}
          >
            <ul>
              {navigation.map(([label, href]) => {
                const active = isActive(href);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={
                        active ? "page" : undefined
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={resumeLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.resumeButton}
                  onClick={() => setMenuOpen(false)}
                >
                  {resumeLink.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
