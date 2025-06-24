"use client";
import CheckX from "@/components/inputs/CheckX";
import { Button } from "antd";
import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./styles.module.css";
import { EinzugortType } from "./types";

interface PropsType {
  next: any;
  prev: any;
  data: any;
}

export default function EinzugStep({ next, data, prev }: PropsType) {
  const formEinzugsort = useForm<EinzugortType>({
    defaultValues: {
      plz: "12345",
      ausZugIn: { homeType: "wohnung", floor: "2" },
      laufweg: {
        parkzone: "30",
      },
    },
  });

  const streetRef = useRef(null);
  const { subscribe, setValue } = formEinzugsort;

  function submit(data: EinzugortType) {
    next(data);
  }

  function handlePrevious() {
    prev(formEinzugsort.getValues());
  }

  useEffect(() => {
    // set values
    if (data) {
      setValue("plz", data.plz);
      setValue("street", data.street);
      setValue("streetNumber", data.streetNumber);

      setValue("ausZugIn.homeType", data.ausZugIn.homeType);
      setValue("ausZugIn.floor", data.ausZugIn.floor);

      setValue("laufweg.elevatorAvailable", data.laufweg.elevatorAvailable);
      setValue("laufweg.parkzone", data.laufweg.parkzone);

      setValue("zusatzleistungen.packing", data.zusatzleistungen.packing);
      setValue("zusatzleistungen.dismantlingFurniture", data.zusatzleistungen.dismantlingFurniture);
      setValue("zusatzleistungen.dismantlingKitchen", data.zusatzleistungen.dismantlingKitchen);
      setValue("zusatzleistungen.connectingWashingMachine", data.zusatzleistungen.connectingWashingMachine);
      setValue("zusatzleistungen.drillingDowelingWork", data.zusatzleistungen.drillingDowelingWork);
      setValue("zusatzleistungen.furnitureLift", data.zusatzleistungen.furnitureLift);
      setValue("zusatzleistungen.establishParkingZone", data.zusatzleistungen.establishParkingZone);
    }
  }, []);

  return (
    <div className={styles.form}>
      <FormProvider {...formEinzugsort}>
        <form onSubmit={formEinzugsort.handleSubmit(submit)}>
          {/*  */}
          <div className={styles.formBox}>
            <h2>Einzugsort</h2>
          </div>

          <div className={styles.formBox}>
            <h2>Einzug in</h2>
          </div>

          <div className={styles.formBox}>
            <h2>Aufzug & Laufweg</h2>
          </div>

          {/*  */}
          <div className={styles.formBox}>
            <h2>Zusatzleistungen für Ihren Einzug</h2>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.packing"} placeholder='Auspackservice von Umzugskartons' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.dismantlingFurniture"} placeholder='Aufbau von Möbeln' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.dismantlingKitchen"} placeholder='Aufbau von Küche' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.connectingWashingMachine"} placeholder='Anschluss von Waschmaschine' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.drillingDowelingWork"} placeholder='Bohr- und Dübelarbeiten' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.furnitureLift"} placeholder='Verladung mit Möbellift' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.establishParkingZone"} placeholder='Einrichtung Halteverbotszone' />
            </div>
          </div>
          {/*  */}

          <div className={styles.stepsButtons}>
            <Button icon={<BsChevronLeft />} type='link' style={{ margin: "0 8px" }} onClick={handlePrevious}>
              zurück
            </Button>
            <Button htmlType='submit' type='primary' icon={<BsChevronRight />} iconPosition='end'>
              Weiter
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
