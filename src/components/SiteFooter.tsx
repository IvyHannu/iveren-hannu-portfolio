import Link from "next/link";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p className={styles.footerStatement}>
          Finished here<span className={styles.period}>.</span> Ready to start?
        </p>
        <div className={styles.footerCta}>
          <span className={styles.footerRule} aria-hidden="true" />
          <Link className={styles.footerLink} href="/contact">
            Start a Conversation
          </Link>
        </div>
      </div>
      <div className={styles.wordmarkWrap} aria-hidden="true">
        <span className={styles.wordmark}>IVEREN HANNU</span>
      </div>
    </footer>
  );
}