import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import HomeArtwork from "./HomeArtwork";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pageHome}>
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="home-heading">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Product Designer · UI/UX + Build</p>

          <h1 id="home-heading" className={styles.heading}>
            <span className={styles.headingLine}>I don’t hand off</span>
            <span className={styles.headingLine}>designs.</span>
            <span className={styles.headingLine}>
              I finish them<span className={styles.period}>.</span>
            </span>
          </h1>

          <p className={styles.summary}>
            I design clear digital products, then help bring them to life.
          </p>

          <Link className={styles.workLink} href="/work">
            Enter Work
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <HomeArtwork />

        <p className={styles.tagline}>Think. Design. Build.</p>
      </section>
    </main>
  );
}
