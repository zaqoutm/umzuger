import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
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
}

/**
 *
 */
function AuszugortStep({ stepButtons, next, data }: PropsType) {
  const streetRef = useRef(null);
  const formxAuszugsort = useForm<AuszugortType>({
    defaultValues: {
      ausZugAus: { homeType: "wohnung", degreeOfFurnishing: "low" },
    },
  });
  const { subscribe, setValue } = formxAuszugsort;

  function submit(data: AuszugortType) {
    // console.log(data);
    // console.log(data.ausZugAus);
    next(data);
  }

  const [isStreetNumberDisabled, setIsStreetNumberDisabled] = useState(true);

  /** */
  useEffect(() => {
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
            <InputNumberX
              name='plz'
              placeholder='PLZ'
              maxLength={5}
              pattern={{
                value: /^\d{5}$/,
                message: "PLZ muss 5 Ziffern haben",
              }}
            />
            <div className={styles.inputsGroupRow}>
              <InputX name='street' placeholder='Straße' inputRef={streetRef} />
              <InputX name='streetNumber' placeholder='Nr.' isDisabled={isStreetNumberDisabled} />
            </div>
          </div>

          {/*  */}
          <div className={styles.formBox}>
            <h2>Auszug aus</h2>

            {/*  */}
            <RadioX
              name='ausZugAus.homeType'
              options={[
                { value: "wohnung", label: "Wohnung" },
                { value: "haus", label: "Haus" },
                { value: "zimmer", label: "Zimmer" },
              ]}
            />

            <div className={styles.inputsGroupRow}>
              {/*  */}
              <div>
                <InputNumberX
                  name='ausZugAus.livingSpace'
                  placeholder='Wohnfläche'
                  maxLength={4}
                  pattern={{
                    value: /^\d{4}$/,
                    message: "PLZ muss 4 Ziffern haben",
                  }}
                />
                <span>m²</span>
              </div>
              {/*  */}
              <SelectX
                name='ausZugAus.rooms'
                placeHolder='Zimmeranzahl'
                options={[
                  { value: "1", label: <span>1 Zimmer</span> },
                  { value: "2", label: "2 Zimmer" },
                  { value: "3", label: "3 Zimmer" },
                  { value: "4", label: "3 Zimmer" },
                  { value: "5", label: "3 Zimmer" },
                ]}
              />
            </div>

            {/*  */}
            <SelectX
              name='ausZugAus.floor'
              placeHolder='Etage'
              options={[
                { value: "souterrain", label: "Souterrain" },
                { value: "erdgeschoss", label: "Erdgeschoss" },
                { value: "1", label: "1. Etage" },
                { value: "2", label: "2. Etage" },
                { value: "3", label: "3. Etage" },
              ]}
            />

            {/*  */}
            <div>
              <p>Möblierungsgrad</p>
              <RadioX
                name='ausZugAus.degreeOfFurnishing'
                defaultValue={"LOW"}
                options={[
                  { value: "low", label: "niedrig" },
                  { value: "mid", label: "mittel" },
                  { value: "high", label: "hoch" },
                ]}
              />
            </div>

            {/*  */}
            <div>
              <p>Weitere Flächen mit Umzugsgut (z.B. Keller)</p>
              <InputNumberX
                name='ausZugAus.storageAreas'
                placeholder='Lagerflächen'
                maxLength={4}
                pattern={{
                  value: /^\d{4}$/,
                  message: "PLZ muss 4 Ziffern haben",
                }}
              />
              <span>m²</span>
            </div>
          </div>

          {stepButtons}
        </form>
      </FormProvider>
    </div>
  );
}

export default AuszugortStep;
