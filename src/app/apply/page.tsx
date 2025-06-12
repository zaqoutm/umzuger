"use client";
import styles from "./styles.module.css";
import { useState } from "react";

export default function ApplyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{ title: "Auszugsort" }, { title: "Einzugsort" }, { title: "Termin" }];

  return (
    <div className={styles.page}>
      {/* 
        forms:
        - Auszugsort [Auszugsort, Auszug aus, Aufzug & Laufweg, Zusatzleistungen für Ihren Auszug ]
        - Einzugsort [Einzugsort, Einzug in, Aufzug & Laufweg, Zusatzleistungen für Ihren Einzug]
        Einreichen step
      */}
      <div className={styles.stepper}>
        {/* step icons */}
        <div className={styles.header}>
          {steps.map((a, i) => (
            <div key={i} className='flex'>
              <div className={styles.headerItem}>
                <span className={`${styles["stepNumber"]}  ${activeStep == i && styles["activeStepNumber"]}`}>{i + 1}</span>
                <p className={`${styles["stepTitle"]}  ${activeStep == i && styles["activeStepTitle"]}`}>{a.title}</p>
              </div>
              {steps.length == i + 1 ? "" : <div className={styles.separator} />}
            </div>
          ))}
        </div>

        {/*  */}
        {/* step content */}
        <div className={styles.stepsContainer}>
          <div className={`${styles["step"]}  ${activeStep == 0 && styles["activeStep"]}`}>
            <h1>Auszugsort</h1>
          </div>
          <div className={`${styles["step"]}  ${activeStep == 1 && styles["activeStep"]}`}>
            <h1>Einzugsort</h1>
          </div>
          <div className={`${styles["step"]}  ${activeStep == 2 && styles["activeStep"]}`}>
            <h1>Termin</h1>
          </div>
          <div className={styles.stepsButtons}>
            <button
              className='notFilledBtn'
              disabled={activeStep == 0}
              onClick={() => {
                if (activeStep == 0) return;
                setActiveStep(activeStep - 1);
              }}
            >
              zurück
            </button>
            <button
              disabled={activeStep == steps.length - 1}
              onClick={() => {
                if (activeStep == steps.length - 1) return;
                setActiveStep(activeStep + 1);
              }}
            >
              Weiter
            </button>
          </div>
        </div>
      </div>
      {/* stepper ends */}
      {/*  */}
    </div>
  );
}
