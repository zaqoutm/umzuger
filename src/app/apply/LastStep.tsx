"use client";
import { Button, Divider, Spin } from "antd";
import { useState } from "react";
import { BsChevronLeft, BsSend } from "react-icons/bs";
import { TbMeterSquare } from "react-icons/tb";
import styles from "./styles.module.css";
import { FinalFormDataType } from "./types";

type PropsType = {
  prev: any;
  data: FinalFormDataType;
};

export default function LastStep({ prev, data }: PropsType) {
  const [showSpinner, setShowSpinner] = useState(false);

  function send() {
    // TODOs:
    // send email
    // clean data
    // redirect to /home
    setShowSpinner(!showSpinner);

    setTimeout(() => {
      setShowSpinner(false);

      console.log("email sent");
    }, 2000);
  }

  return (
    <div className={styles.lastStep}>
      {/* view data */}

      <div className={styles.lastStepContent}>
        <h2>Auszugsort</h2>

        <div className={styles.inputContainer}>
          <span>Adresse</span>
          <p>{data.auszugort?.plz}</p>
        </div>
        <div className={styles.inputContainer}>
          <span>Auszug aus</span>
          <p>{data.auszugort?.ausZugAus.homeType}</p>
        </div>
        <div className={styles.inputContainer}>
          <span>Wohnfläche</span>
          <p>
            {data.auszugort?.ausZugAus.livingSpace} <TbMeterSquare size={18} />
          </p>
        </div>
      </div>

      <Divider />

      <div className={styles.lastStepContent}>
        <h2>Einzugsort</h2>

        <div className={styles.inputContainer}>
          <span>Adresse</span>
          <p>{data.einzugort?.plz}</p>
        </div>
        <div className={styles.inputContainer}>
          <span>Einzug in</span>
          <p>{data.einzugort?.ausZugIn.homeType}</p>
        </div>
      </div>
      {/* Erledigt */}
      {/* Vielen Dank, wir werden Sie so schnell wie möglich kontaktieren */}

      {showSpinner && <Spin size='large' fullscreen />}

      <div className={styles.stepsButtons}>
        <Button
          disabled={showSpinner}
          size='large'
          icon={<BsChevronLeft />}
          type='text'
          style={{ margin: "0 8px" }}
          onClick={prev}
        >
          zurück
        </Button>
        <Button
          size={"large"}
          type='primary'
          variant='solid'
          color='purple'
          icon={<BsSend />}
          iconPosition='end'
          onClick={send}
          loading={showSpinner}
        >
          Senden
        </Button>
      </div>
    </div>
  );
}
