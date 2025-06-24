"use client";
import CheckX from "@/components/inputs/CheckX";
import InputNumberX from "@/components/inputs/InputNumberX";
import InputX from "@/components/inputs/InputX";
import RadioX from "@/components/inputs/RadioX";
import SelectX from "@/components/inputs/SelectX";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import { PiSignpostLight } from "react-icons/pi";
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
  const [isStreetNumberDisabled, setIsStreetNumberDisabled] = useState(true);
  const [showZimmerInput, setShowZimmer] = useState(true);

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

    /**
     * watch street input to disable Nr.
     */
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        if (values.ausZugIn.homeType === "zimmer") {
          setShowZimmer(false);
        } else {
          setShowZimmer(true);
        }
        if (values.street) {
          setIsStreetNumberDisabled(false);
        } else {
          setIsStreetNumberDisabled(true);
          if (values.streetNumber) {
            setValue("streetNumber", "");
          }
        }
      },
    });

    return () => callback();
  }, [subscribe]);

  return (
    <div className={styles.form}>
      <FormProvider {...formEinzugsort}>
        <form onSubmit={formEinzugsort.handleSubmit(submit)}>
          {/*  */}
          <div className={styles.formBox}>
            <h2>Einzugsort</h2>
            <div className={styles.inputContainer}>
              <InputNumberX
                name='plz'
                placeholder='PLZ'
                iconSuffix={<PiSignpostLight />}
                maxLength={5}
                rules={{
                  required: "PLZ. erforderlich",
                  pattern: { value: /^\d{5}$/, message: "PLZ. muss 5 Ziffern haben" },
                }}
              />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputsGroupRow}>
                <InputX name='street' placeholder='Straße' inputRef={streetRef} />
                <InputX name='streetNumber' placeholder='Nr.' isDisabled={isStreetNumberDisabled} />
              </div>
              <p className={styles.extraInfo}>
                <FcInfo size={18} />
                Tipp: Geben Sie eine Straße an, um genauere Angebote zu erhalten.
              </p>
            </div>
          </div>

          {/*  */}
          <div className={styles.formBox}>
            <h2>Einzug in</h2>
            <div className={styles.inputContainer}>
              <RadioX
                name='ausZugIn.homeType'
                options={[
                  { value: "wohnung", label: "Wohnung" },
                  { value: "haus", label: "Haus" },
                  { value: "zimmer", label: "Zimmer" },
                ]}
              />
            </div>
            <div className={styles.inputContainer}>
              <SelectX
                name='ausZugIn.floor'
                placeHolder='Etage'
                rules={{ required: "Bitte geben Sie eine Etage an." }}
                options={[
                  { value: "souterrain", label: "Souterrain" },
                  { value: "erdgeschoss", label: "Erdgeschoss" },
                  { value: "hochparterre", label: "Hochparterre" },
                  { value: "1", label: "1. Etage" },
                  { value: "2", label: "2. Etage" },
                  { value: "3", label: "3. Etage" },
                  { value: "4", label: "4. Etage" },
                  { value: "5", label: "5. Etage" },
                  { value: "6", label: "6. Etage order höher" },
                ]}
              />
            </div>
          </div>

          <div className={styles.formBox}>
            <h2>Aufzug & Laufweg</h2>

            {/*  */}

            <div className={styles.inputContainer}>
              <p>Laufweg von Parkzone</p>
              <SelectX
                name='laufweg.parkzone'
                placeHolder='Bitte wählen'
                rules={{ required: "Bitte wählen Sie eine Antwort aus." }}
                options={[
                  { value: "10", label: "bis 10 m" },
                  { value: "20", label: "10-20 m" },
                  { value: "30", label: "10-30 m" },
                  { value: "40", label: "10-40 m" },
                  { value: "50", label: "10-50 m" },
                  { value: "60", label: "über 50 m" },
                ]}
              />
              <p className={styles.extraInfo}>
                <FcInfo size={18} />
                Wie lang ist der Weg zwischen der potenziellen Park- und Beladezone für den Transporter des
                Umzugsunternehmens und Ihrer Wohnungstür?
              </p>
            </div>
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
