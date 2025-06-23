import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FcInfo } from "react-icons/fc";
import { PiSignpostLight } from "react-icons/pi";
import { TbMeterSquare } from "react-icons/tb";
import CustomRadioGroup from "./CustomRadioGroup";
import InputNumberX from "./InputNumberX";
import InputX from "./InputX";
import { AuszugortType } from "./page";
import RadioX from "./RadioX";
import SelectX from "./SelectX";
import styles from "./styles.module.css";

interface PropsType {
  stepButtons: any;
  next: any;
  data: any;
  searchParams?: ReadonlyURLSearchParams;
}

/**
 *
 */
function AuszugortStep({ stepButtons, next, data }: PropsType) {
  const searhParams = useSearchParams();

  const streetRef = useRef(null);
  const formxAuszugsort = useForm<AuszugortType>({
    defaultValues: {
      ausZugAus: { homeType: "wohnung", degreeOfFurnishing: "low" },
    },
  });
  const { subscribe, setValue } = formxAuszugsort;

  function submit(data: AuszugortType) {
    next(data);
  }

  const [isStreetNumberDisabled, setIsStreetNumberDisabled] = useState(true);

  /** */
  useEffect(() => {
    console.log(searhParams.get("x"));
    // TODO: check regix
    // set plz

    /**
     * set data if founded
     */
    if (data) {
      console.log("setting data...");
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
    }

    /**
     * watch street input to disable Nr.
     */
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        if (values.street) {
          setIsStreetNumberDisabled(false);
        } else {
          setIsStreetNumberDisabled(true);
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
                defaultValue={"low"}
                options={[
                  {
                    value: "low",
                    label: "niedrig",
                    image: "niedrig.png",
                    info: "Weniger als die Hälfte der Bodenfläche ist mit Möbeln belegt.",
                  },
                  {
                    value: "mid",
                    label: "mittel",
                    image: "mid.png",
                    info: "50 - 70 % der Bodenfläche ist mit Möbeln belegt.",
                  },
                  {
                    value: "high",
                    label: "hoch",
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
            </div>

            {/*  */}
          </div>

          {stepButtons}
        </form>
      </FormProvider>
    </div>
  );
}

export default AuszugortStep;
