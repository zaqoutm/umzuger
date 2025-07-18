"use client";
import { Steps } from "antd";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import AuszugortStep from "./AuszugortStep";
import EinzugStep from "./EinzugStep";
import LastStep from "./LastStep";
import styles from "./styles.module.css";
import { AuszugortType, EinzugortType, FinalFormDataType } from "./types";

export default function ApplyPage() {
  const steps = [{ title: "Auszugsort" }, { title: "Einzugsort" }, { title: "Schicken" }];
  const [currentStep, setCurrent] = useState(0);

  // store all data here
  const [finalFormData, setFinalFormData] = useState<FinalFormDataType>({});

  const scrollTop = () => window.scrollTo(0, 0);
  const next = () => {
    setCurrent(currentStep + 1);
    scrollTop();
  };
  const prev = () => {
    setCurrent(currentStep - 1);
    scrollTop();
  };

  // handle auszugort form
  function updateAuszugData(data: AuszugortType) {
    setFinalFormData((prevState) => ({ ...prevState, auszugort: data }));
    next();
  }

  // handle Einzugort form, at next() and prev()
  function updateEinzugData(data: EinzugortType) {
    setFinalFormData((prevState) => ({ ...prevState, einzugort: data }));
    next();
  }
  function updateEinzugDataPrev(data: EinzugortType) {
    setFinalFormData((prevState) => ({ ...prevState, einzugort: data }));
    prev();
  }

  useEffect(() => {}, [currentStep]);

  return (
    <div className={styles.page}>
      {/* 
        forms:
        - Auszugsort [Auszugsort, Auszug aus, Aufzug & Laufweg, Zusatzleistungen für Ihren Auszug ]
        - Einzugsort [Einzugsort, Einzug in, Aufzug & Laufweg, Zusatzleistungen für Ihren Einzug]
        - Einreichen step
      */}

      <div className={styles.stepper}>
        <Steps
          responsive={false}
          size='small'
          items={steps}
          current={currentStep}
          labelPlacement='vertical'
          onChange={(v) => {
            switch (v) {
              case 0:
                setCurrent(v);
                break;
              case 1:
                if (finalFormData.auszugort) setCurrent(v);
                break;
              case 2:
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
                break;
            }
          }}
        />
        {/*  */}
        <motion.div
          key={currentStep}
          initial={{ y: 40, opacity: 0, scale: 1.02 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 0.37,
            ease: "easeIn",
          }}
        >
          <div className={styles.stepContent}>
            {currentStep == 0 ? (
              <AuszugortStep next={updateAuszugData} data={finalFormData?.auszugort} />
            ) : currentStep == 1 ? (
              <EinzugStep prev={updateEinzugDataPrev} next={updateEinzugData} data={finalFormData?.einzugort} />
            ) : (
              <LastStep prev={prev} data={finalFormData} />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
