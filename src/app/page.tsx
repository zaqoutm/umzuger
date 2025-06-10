"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { motion } from "motion/react";

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push(`/apply?von=${"Heilbron"}&nach=${"Berlin"}`);
  }

  return (
    <div>
      <div className={styles.introSection}>
        {/*  */}
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`${styles["block"]} ${styles["firstBlock"]}`}
        >
          <p>Umzüge</p>
          <svg width='28' height='26' viewBox='0 0 35 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.42805 0.635892L33.6053 12.5968C34.4459 12.9193 34.4655 14.1014 33.6361 14.4517L21.6734 19.503C21.4013 19.6179 21.1938 19.8473 21.1068 20.1295L17.7852 30.9008C17.5204 31.7595 16.3454 31.8603 15.9382 31.0592L1.17842 2.02268C0.763439 1.20629 1.57301 0.307862 2.42805 0.635892Z'
              fill='#FCC003'
              stroke='#D2A20B'
            />
          </svg>
        </motion.div>

        {/*  */}
        <div className={styles.introSectionTitle}>
          <h1>[Company] Lösungen</h1>
          <p className='secondary-color'>Wie können wir Ihnen helfen?</p>
        </div>

        {/*  */}
        <div className={styles.introSectionBottom}>
          <motion.div
            initial={{ rotateZ: -4 }}
            animate={{ x: 20 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={styles.block}
          >
            <p>Möbel Montage</p>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={styles.block}
          >
            <p>Wohnungsauflösung</p>
          </motion.div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={styles.roundTop}>
          {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#9322c5'
              fillOpacity='0.05'
              d='M0,32L60,53.3C120,75,240,117,360,128C480,139,600,117,720,144C840,171,960,245,1080,240C1200,235,1320,149,1380,106.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
            ></path>
          </svg> */}
        </div>

        <div className={styles.pageContainer}>
          {/* form section */}
          <div className={styles.formSection}>
            <h1>Wohin?</h1>
            <p>Es ist ganz einfach: Teilen Sie uns Ihr Anliegen mit und wir kontaktieren Sie</p>

            <div className={styles.form}>
              <div className={styles.inputs}>
                <input type='text' placeholder='VonVon ( Ort oder PLZ )' />
                <input type='text' placeholder='Nach?' />
              </div>
              <button onClick={handleClick}>Apply now</button>
            </div>
          </div>

          {/* contact section */}
          <div className={styles.contactSection}>
            <h2>Kontaktieren Sie uns direkt</h2>
            <p>Montag - Sontag</p>
            <p>8:00 - 20:00 Uhr</p>
          </div>
        </div>
      </div>
    </div>
  );
}
