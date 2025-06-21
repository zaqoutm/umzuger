import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputNumberX from "./InputNumberX";
import InputX from "./InputX";
import { AuszugortType } from "./page";
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
  const formxAuszugsort = useForm<AuszugortType>();
  const { subscribe, setValue } = formxAuszugsort;

  function submit(data: AuszugortType) {
    // console.log(data);
    next(data);
  }

  const [isStreetNumberDisabled, setIsStreetNumberDisabled] = useState(true);

  useEffect(() => {
    /**
     * set data if founded
     */
    if (data) {
      setValue("plz", data.plz);
      if (data.street) setIsStreetNumberDisabled(false);
      setValue("street", data.street);
      setValue("streetNumber", data.streetNumber);
      setValue("ausZugAus.livingSpace", data.ausZugAus.livingSpace);
    }

    /**
     * watch street input to disable Nr.
     */
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        console.log(values);

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
          <div className={styles.formBox}>
            <h2>Auszug aus</h2>
            <div className={styles.inputsGroupRow}>
              <InputNumberX
                name='ausZugAus.livingSpace'
                placeholder='Wohnfläche'
                maxLength={4}
                pattern={{
                  value: /^\d{4}$/,
                  message: "PLZ muss 4 Ziffern haben",
                }}
              />
            </div>
          </div>

          {stepButtons}
        </form>
      </FormProvider>
    </div>
  );
}

export default AuszugortStep;
