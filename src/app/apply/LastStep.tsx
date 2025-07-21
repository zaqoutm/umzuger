"use client";
import InputX from "@/components/inputs/InputX";
import { sendEmail } from "@/lib/resend";
import { Button, Divider, Spin, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsChevronLeft, BsSend } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { TbMeterSquare } from "react-icons/tb";
import styles from "./styles.module.css";
import { Customer, FinalFormDataType } from "./types";

type PropsType = {
  prev: any;
  data: FinalFormDataType;
};

export default function LastStep({ prev, data }: PropsType) {
  const [showSpinner, setShowSpinner] = useState(false);
  const form = useForm<Customer>();
  const router = useRouter();

  function submit(customerInputData: any) {
    const xx: FinalFormDataType = {
      auszugort: data.auszugort,
      einzugort: data.einzugort,
      customer: { phoneOrEmail: customerInputData.phoneOrEmail },
    };
    sendEmailNow(xx);
  }

  async function sendEmailNow(data: FinalFormDataType) {
    const result = await sendEmail("Neu aufgabe", "Admin", data);

    setShowSpinner(true);

    if (result.data?.id) {
      router.push("/success");
    } else {
      setTimeout(() => {
        setShowSpinner(false);
        // console.log(result.error);
        messageApi.open({
          type: "error",
          content: "Entschuldigung, etwas ist schiefgelaufen!",
        });
      }, 1000);
    }
  }

  const emailOrPhoneRegexInternational = /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\+?\d[\d\s\-()]{5,})$/;
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div className={styles.lastStep}>
      {showSpinner && <Spin size='large' fullscreen />}
      {contextHolder}

      {/*  */}
      <div className={styles.lastStepContent}>
        <h2>Auszugsort</h2>
        <div className={styles.inputContainer}>
          <p className={styles.secondayText}>Adresse</p>
          <p>{data.auszugort?.plz}</p>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.secondayText}>Auszug aus</p>
          <p>{data.auszugort?.ausZugAus.homeType}</p>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.secondayText}>Wohnfläche</p>
          <p>
            {data.auszugort?.ausZugAus.livingSpace} <TbMeterSquare size={18} />
          </p>
        </div>
      </div>

      <Divider />

      {/*  */}
      <div className={styles.lastStepContent}>
        <h2>Einzugsort</h2>
        <div className={styles.inputContainer}>
          <p className={styles.secondayText}>Adresse</p>
          <p>{data.einzugort?.plz}</p>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.secondayText}>Einzug in</p>
          <p>{data.einzugort?.ausZugIn.homeType}</p>
        </div>
      </div>

      <Divider />

      {/*  */}
      <div className={styles.lastStepContent}>
        <h2>Für die Kontaktaufnahme benötigen wir folgende Information</h2>
        <p>Für die Kontaktaufnahme benötigen wir folgende Information</p>
        <br />
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className={styles.inputContainer}>
              <InputX
                name='phoneOrEmail'
                placeholder=' E-Mail-Adresse oder Mobiltelefonnummer'
                iconSuffix={<RiContactsLine />}
                rules={{
                  required: "Bitte geben Sie Ihre E-Mail-Adresse oder Mobiltelefonnummer an",
                  pattern: {
                    value: emailOrPhoneRegexInternational,
                    message: "Bitte geben Sie Ihre E-Mail-Adresse oder Mobiltelefonnummer an",
                  },
                }}
              />
            </div>

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
                htmlType='submit'
                size={"large"}
                type='primary'
                variant='solid'
                color='purple'
                icon={<BsSend />}
                iconPosition='end'
                disabled={showSpinner}
                loading={showSpinner}
              >
                Senden
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>

      {/*  */}
    </div>
  );
}
