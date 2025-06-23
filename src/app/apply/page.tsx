"use client";
import { Button, Steps } from "antd";
import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import AuszugortStep from "./AuszugortStep";
import styles from "./styles.module.css";

export type AuszugortType = {
  // location
  plz?: string;
  street?: string;
  streetNumber?: string;
  ausZugAus: {
    homeType?: "wohnung" | "haus" | "zimmer"; // radio
    livingSpace?: string; // input max 4 m2
    rooms?: string; // select  max 7
    floor?: string; // select
    degreeOfFurnishing?: "low" | "mid" | "high"; // radio
    storageAreas?: string; // input max 4 m2
  };
};
type EinzugortType = {
  einzugPLZ?: string;
  einzugStreet?: string;
  einzugStreetNumber?: string;
};

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
  };
  const prev = () => {
    setCurrent(currentStep - 1);
  };

  // handle auszugort form
  function updateAuszugData(data: AuszugortType) {
    setFinalFormData({ auszugort: data });
    next();
  }

  const StepsButotns = (
    <div className={styles.stepsButtons}>
      {currentStep > 0 && (
        <Button type='default' style={{ margin: "0 8px" }} onClick={prev}>
          Previous
        </Button>
      )}
      <Button
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
