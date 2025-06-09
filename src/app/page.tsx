"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push(`/apply?von=${"Heilbron"}&nach=${"Berlin"}`);
  }

  return (
    <div>
      <div className={styles.introSection}>
        <h1>Company name Lösungen</h1>
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
