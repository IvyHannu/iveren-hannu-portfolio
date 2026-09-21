"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import styles from "./page.module.css";

const butterflies = [
  {
    src: "/butterfly-emblem.png",
    className: styles.butterflyOne,
    x: [0, 2, -1, 0],
    y: [0, -4, 2, 0],
    rotate: [0, 0.25, -0.2, 0],
    timing: [14.2, 16.8, 18.4],
    phase: 2.1,
  },
  {
    src: "/butterfly-line-art.png",
    className: styles.butterflyTwo,
    x: [0, -2, 1, 0],
    y: [0, 3, -4, 0],
    rotate: [0, -0.25, 0.3, 0],
    timing: [12.6, 15.1, 17.3],
    phase: 5.3,
  },
  {
    src: "/butterfly-sticker.png",
    className: styles.butterflyThree,
    x: [0, 2, -2, 0],
    y: [0, -3, 3, 0],
    rotate: [0, 0.3, -0.25, 0],
    timing: [11.4, 13.8, 16.2],
    phase: 3.7,
  },
  {
    src: "/butterfly-ribbon.png",
    className: styles.butterflyFour,
    x: [0, -1, 2, 0],
    y: [0, 3, -2, 0],
    rotate: [0, -0.35, 0.2, 0],
    timing: [10.9, 12.7, 15.6],
    phase: 7.2,
  },
  {
    src: "/hero-butterfly-cluster.png",
    className: styles.butterflyFive,
    x: [0, 2, -1, 0],
    y: [0, -3, 4, 0],
    rotate: [0, 0.2, -0.3, 0],
    timing: [13.2, 15.7, 17.9],
    phase: 9.4,
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
                : { x: [0, 2, -1, 0], y: [0, -4, 4, 0], rotate: [0, 0.2, -0.25, 0] }
            }
            transition={{ duration: 13.4, ease: "easeInOut", repeat: Infinity }}
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
