"use client";
import { Steps } from "antd";
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

  const next = () => {
    setCurrent(currentStep + 1);
    window.scrollTo(0, 0);
  };
  const prev = () => {
    setCurrent(currentStep - 1);
  };

  // handle auszugort form
  function updateAuszugData(data: AuszugortType) {
    setFinalFormData((prevState) => ({ ...prevState, auszugort: data }));
    next();
  }

  // handle Einzugort form, @next and prev
  function updateEinzugData(data: EinzugortType) {
    setFinalFormData((prevState) => ({ ...prevState, einzugort: data }));
    next();
  }
  function updateEinzugDataPrev(data: EinzugortType) {
    setFinalFormData((prevState) => ({ ...prevState, einzugort: data }));
    prev();
  }

  useEffect(() => {
    console.log("Aus: ", finalFormData?.auszugort);
    console.log("Ein: ", finalFormData?.einzugort);
    console.log("------------");
  }, [currentStep]);

  return (
    <div className={styles.page}>
      {/* 
        forms:
        - Auszugsort [Auszugsort, Auszug aus, Aufzug & Laufweg, Zusatzleistungen für Ihren Auszug ]
        - Einzugsort [Einzugsort, Einzug in, Aufzug & Laufweg, Zusatzleistungen für Ihren Einzug]
        - Einreichen step
      */}

      <div className={styles.stepper}>
        <Steps size='small' items={steps} current={currentStep} labelPlacement='vertical' />
        {/*  */}
        <div className={styles.stepContent}>
          {currentStep == 0 ? (
            <AuszugortStep next={updateAuszugData} data={finalFormData?.auszugort} />
          ) : currentStep == 1 ? (
            <EinzugStep prev={updateEinzugDataPrev} next={updateEinzugData} data={finalFormData?.einzugort} />
          ) : (
            <LastStep prev={prev} data={finalFormData} />
          )}
        </div>
      </div>
    </div>
  );
}
