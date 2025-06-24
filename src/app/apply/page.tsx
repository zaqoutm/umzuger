"use client";
import { Button, Steps } from "antd";
import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import AuszugortStep from "./AuszugortStep";
import styles from "./styles.module.css";
import { AuszugortType, EinzugortType } from "./types";

type FinalFormDataType = {
  auszugort?: AuszugortType;
  einzugort?: EinzugortType;
};

export default function ApplyPage() {
  const steps = [{ title: "Auszugsort" }, { title: "Einzugsort" }, { title: "Termin" }];
  const [currentStep, setCurrent] = useState(0);

  // store all data here
  const [finalFormData, setFinalFormData] = useState<FinalFormDataType>();

  const next = () => {
    setCurrent(currentStep + 1);
    window.scrollTo(0, 0);
    setIsSubmitting(false);
  };
  const prev = () => {
    setCurrent(currentStep - 1);
  };

  // handle auszugort form
  function updateAuszugData(data: AuszugortType) {
    setIsSubmitting(true);
    setFinalFormData({ auszugort: data });

    // for loading simulation
    setTimeout(() => {
      next();
    }, 1000);
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  const StepsButotns = (
    <div className={styles.stepsButtons}>
      {currentStep > 0 && (
        <Button type='default' style={{ margin: "0 8px" }} onClick={prev}>
          Previous
        </Button>
      )}
      <Button
        loading={isSubmitting}
        htmlType='submit'
        type='primary'
        icon={<GrFormNextLink />}
        iconPosition='end'
        disabled={!(currentStep < steps.length - 1)}
      >
        Weiter
      </Button>
    </div>
  );

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
        <Steps size='small' items={steps} current={currentStep} labelPlacement='vertical' />

        {/*  */}
        <div className={styles.stepContent}>
          {currentStep == 0 ? (
            // mount, unmount to dom
            <AuszugortStep stepButtons={StepsButotns} next={updateAuszugData} data={finalFormData?.auszugort} />
          ) : currentStep == 1 ? (
            <>
              <div>
                <h1>EinzugsortForm</h1>
                {StepsButotns}
              </div>
            </>
          ) : (
            <div>Termin</div>
          )}
        </div>
      </div>
    </div>
  );
}
