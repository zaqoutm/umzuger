"use client";
import CheckX from "@/components/inputs/CheckX";
import CustomRadioGroup from "@/components/inputs/CustomRadioGroup";
import InputNumberX from "@/components/inputs/InputNumberX";
import InputX from "@/components/inputs/InputX";
import RadioX from "@/components/inputs/RadioX";
import SelectX from "@/components/inputs/SelectX";
import { Button } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BiChevronRight } from "react-icons/bi";
import { FcInfo } from "react-icons/fc";
import { PiSignpostLight } from "react-icons/pi";
import { TbMeterSquare } from "react-icons/tb";
import styles from "./styles.module.css";
import { AuszugortType } from "./types";

interface PropsType {
  next: any;
  data: any;
}

/**
 *
 */
function AuszugortStep({ next, data }: PropsType) {
  const searhParams = useSearchParams();

  const streetRef = useRef(null);
  const formxAuszugsort = useForm<AuszugortType>({
    defaultValues: {
      plz: "12345",
      ausZugAus: { homeType: "wohnung", degreeOfFurnishing: "low", floor: "2", rooms: undefined, livingSpace: "8" },
      laufweg: {
        parkzone: "30",
      },
    },
  });
  const { subscribe, setValue } = formxAuszugsort;

  function submit(data: AuszugortType) {
    next(data);
  }

  const [isStreetNumberDisabled, setIsStreetNumberDisabled] = useState(true);
  const [showZimmerInput, setShowZimmer] = useState(true);

  /** */
  useEffect(() => {
    // console.log(searhParams.get("x"));
    // TODO: check regix
    // set plz

    /**
     * set data if founded
     */
    if (data) {
      if (data.street) setIsStreetNumberDisabled(false);
      setValue("plz", data.plz);
      setValue("street", data.street);
      setValue("streetNumber", data.streetNumber);

      setValue("ausZugAus.homeType", data.ausZugAus.homeType);
      setValue("ausZugAus.livingSpace", data.ausZugAus.livingSpace);
      setValue("ausZugAus.rooms", data.ausZugAus.rooms);
      setValue("ausZugAus.floor", data.ausZugAus.floor);
      setValue("ausZugAus.degreeOfFurnishing", data.ausZugAus.degreeOfFurnishing);
      setValue("ausZugAus.storageAreas", data.ausZugAus.storageAreas);
      if (!data.ausZugAus.rooms) setShowZimmer(false);

      setValue("laufweg.parkzone", data.laufweg.parkzone);

      setValue("zusatzleistungen.packing", data.zusatzleistungen.packing);
      setValue("zusatzleistungen.dismantlingFurniture", data.zusatzleistungen.dismantlingFurniture);
      setValue("zusatzleistungen.dismantlingKitchen", data.zusatzleistungen.dismantlingKitchen);
      setValue("zusatzleistungen.provisionBoxes", data.zusatzleistungen.provisionBoxes);
      setValue("zusatzleistungen.storageFurniture", data.zusatzleistungen.storageFurniture);
      setValue("zusatzleistungen.disposalFurniture", data.zusatzleistungen.disposalFurniture);
      setValue("zusatzleistungen.finalCleaning", data.zusatzleistungen.finalCleaning);
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
        //
        if (values.ausZugAus.homeType === "zimmer") {
          setShowZimmer(false);
          if (values.ausZugAus.rooms) {
            setValue("ausZugAus.rooms", undefined);
          }
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
      {/* react-hook-form context */}
      <FormProvider {...formxAuszugsort}>
        <form onSubmit={formxAuszugsort.handleSubmit(submit)}>
          {/*  */}
          <div className={styles.formBox}>
            <h2>Auszugsort</h2>
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
            <h2>Auszug aus</h2>
            {/*  */}
            <div className={styles.inputContainer}>
              <RadioX
                name='ausZugAus.homeType'
                options={[
                  { value: "wohnung", label: "Wohnung" },
                  { value: "haus", label: "Haus" },
                  { value: "zimmer", label: "Zimmer" },
                ]}
              />
            </div>

            {showZimmerInput && (
              <div className={styles.inputContainer}>
                <SelectX
                  name='ausZugAus.rooms'
                  placeHolder='Zimmeranzahl'
                  rules={{ required: "Bitte wählen Sie eine Antwort aus." }}
                  options={[
                    { value: "1", label: <span>1 Zimmer</span> },
                    { value: "2", label: "2 Zimmer" },
                    { value: "3", label: "3 Zimmer" },
                    { value: "4", label: "4 Zimmer" },
                    { value: "5", label: "5 Zimmer" },
                    { value: "6", label: "6 Zimmer" },
                    { value: "7", label: "7 Zimmer" },
                    { value: "100", label: "mehr als 7 Zimmer" },
                  ]}
                />
              </div>
            )}

            <div className={styles.inputsGroupRow}>
              {/* Wohnfläche */}
              <div className={styles.inputContainer}>
                <InputNumberX
                  name='ausZugAus.livingSpace'
                  placeholder='Wohnfläche'
                  iconSuffix={<TbMeterSquare size={24} />}
                  maxLength={4}
                  rules={{
                    required: "Bitte geben Sie die Wohnfläche an.",
                    pattern: { value: /^\d{1,4}$/, message: "" },
                  }}
                />
              </div>
              {/*  */}
            </div>

            {/*  */}
            <div className={styles.inputContainer}>
              <SelectX
                name='ausZugAus.floor'
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

            {/*  */}
            <div className={styles.inputContainer}>
              <br />
              <h4>Möblierungsgrad</h4>
              <p>Bitte wählen Sie das Bild aus, welches Ihre Wohnung am besten widerspiegelt</p>

              {/*  */}
              <CustomRadioGroup
                name='ausZugAus.degreeOfFurnishing'
                options={[
                  {
                    value: "low",
                    label: "Niedrig",
                    image: "niedrig.png",
                    info: "Weniger als die Hälfte der Bodenfläche ist mit Möbeln belegt.",
                  },
                  {
                    value: "mid",
                    label: "Mittel",
                    image: "mid.png",
                    info: "50 - 70 % der Bodenfläche ist mit Möbeln belegt.",
                  },
                  {
                    value: "high",
                    label: "Hoch",
                    image: "hoch.png",
                    info: "Mehr als 70 % der Bodenfläche ist mit Möbeln belegt.",
                  },
                ]}
              />
            </div>

            {/*  */}
            <div className={styles.inputContainer}>
              <p>Weitere Flächen mit Umzugsgut (z.B. Keller)</p>
              <InputNumberX
                name='ausZugAus.storageAreas'
                placeholder='Lagerflächen'
                maxLength={4}
                rules={{
                  pattern: { value: /^\d{0,4}$/, message: "" },
                }}
                iconSuffix={<TbMeterSquare size={24} />}
              />
              <p className={styles.extraInfo}>
                <FcInfo size={18} />
                Bitte geben Sie an, ob es über Ihre angegebene Wohnfläche hinaus weitere Flächen mit Umzugsgut gibt.
                Hierzu zählen beispielsweise Kellerräume, Dachboden, ein Garten- oder Gerätehaus oder eine Garage, die
                zur Lagerung genutzt wird. Bitte zählen Sie nur die zusätzlichen Flächen, die Sie nicht bei der
                Wohnfläche angegeben haben.
              </p>
            </div>
          </div>

          {/*  */}
          <div className={styles.formBox}>
            <h2>Laufweg</h2>
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
            <h2>Zusatzleistungen für Ihren Auszug</h2>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.packing"} placeholder='Einpackservice von Umzugskartons' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.dismantlingFurniture"} placeholder='Abbau von Möbeln' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.dismantlingKitchen"} placeholder='Abbau von Küche' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.provisionBoxes"} placeholder='Bereitstellung von Umzugskartons' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.storageFurniture"} placeholder='Einlagerung von Möbeln' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.disposalFurniture"} placeholder='Entsorgung von Möbeln' />
            </div>
            <div className={styles.inputContainer}>
              <CheckX name={"zusatzleistungen.finalCleaning"} placeholder='Endreinigung' />
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
            <></>
            <Button htmlType='submit' type='primary' icon={<BiChevronRight />} iconPosition='end'>
              Weiter
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AuszugortStep;
