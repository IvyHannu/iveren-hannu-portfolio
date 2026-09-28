"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import styles from "./page.module.css";

const butterflies = [
  {
    src: "/butterfly-emblem.png",
    className: styles.butterflyOne,
    x: [0, 4, -3, 0],
    y: [0, -6, 4, 0],
    rotate: [0, 0.4, -0.35, 0],
    timing: [18.4, 21.6, 24.2],
    phase: 3.2,
  },
  {
    src: "/butterfly-line-art.png",
    className: styles.butterflyTwo,
    x: [0, -4, 3, 0],
    y: [0, 5, -6, 0],
    rotate: [0, -0.4, 0.45, 0],
    timing: [16.8, 19.4, 22.1],
    phase: 7.8,
  },
  {
    src: "/butterfly-sticker.png",
    className: styles.butterflyThree,
    x: [0, 3, -4, 0],
    y: [0, -5, 5, 0],
    rotate: [0, 0.45, -0.4, 0],
    timing: [15.2, 17.8, 20.6],
    phase: 5.4,
  },
  {
    src: "/butterfly-ribbon.png",
    className: styles.butterflyFour,
    x: [0, -3, 4, 0],
    y: [0, 4, -5, 0],
    rotate: [0, -0.5, 0.35, 0],
    timing: [14.6, 16.8, 19.8],
    phase: 10.1,
  },
  {
    src: "/hero-butterfly-cluster.png",
    className: styles.butterflyFive,
    x: [0, 4, -2, 0],
    y: [0, -5, 6, 0],
    rotate: [0, 0.35, -0.45, 0],
    timing: [17.2, 19.8, 22.8],
    phase: 12.8,
  },
] as const;

export default function HomeArtwork() {
  const reducedMotion = useReducedMotion();

  return (
    <div className={styles.artwork} aria-hidden="true">
      <div className={styles.artworkStage}>
        <div className={`${styles.artworkLayer} ${styles.ribbonLayer}`}>
          <motion.div
            className={styles.layerMotion}
            animate={
              reducedMotion
                ? { x: 0, y: 0, rotate: 0 }
                : { x: [0, 3, -2, 0], y: [0, -5, 6, 0], rotate: [0, 0.3, -0.35, 0] }
            }
            transition={{ duration: 16.8, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              className={styles.layerImage}
              src="/hero-ribbon.png"
              alt=""
              width={1086}
              height={1448}
              priority
              sizes="(max-width: 640px) 55vw, (max-width: 960px) 45vw, 38vw"
            />
          </motion.div>
        </div>

        {butterflies.map((butterfly) => (
          <div
            className={`${styles.artworkLayer} ${butterfly.className}`}
            key={butterfly.src}
          >
            <motion.div
              className={styles.layerMotion}
              animate={
                reducedMotion
                  ? { x: 0, y: 0, rotate: 0 }
                  : {
                      x: [...butterfly.x],
                      y: [...butterfly.y],
                      rotate: [...butterfly.rotate],
                    }
              }
              transition={{
                x: { duration: butterfly.timing[0], delay: -butterfly.phase, ease: "easeInOut", repeat: Infinity },
                y: { duration: butterfly.timing[1], delay: -butterfly.phase, ease: "easeInOut", repeat: Infinity },
                rotate: { duration: butterfly.timing[2], delay: -butterfly.phase, ease: "easeInOut", repeat: Infinity },
              }}
            >
              <Image
                className={styles.layerImage}
                src={butterfly.src}
                alt=""
                width={1254}
                height={1254}
                sizes="(max-width: 640px) 30vw, (max-width: 960px) 20vw, 16vw"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
