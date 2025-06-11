"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { motion } from "motion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const company_email = "example@mail.com";
  const company_phone = "+49123456789";
  const whatsappPhone = "+49123456789";

  const router = useRouter();

  type Inputs = {
    von: string;
    nach: string;
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: {} });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push(`/apply?von=${data.von}&nach=${data.nach}`);
  };

  return (
    <div>
      <div className={styles.introSection}>
        {/*  */}
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`${styles["block"]} ${styles["firstBlock"]}`}
        >
          <p>Umzüge</p>
          <svg width='28' height='26' viewBox='0 0 35 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.42805 0.635892L33.6053 12.5968C34.4459 12.9193 34.4655 14.1014 33.6361 14.4517L21.6734 19.503C21.4013 19.6179 21.1938 19.8473 21.1068 20.1295L17.7852 30.9008C17.5204 31.7595 16.3454 31.8603 15.9382 31.0592L1.17842 2.02268C0.763439 1.20629 1.57301 0.307862 2.42805 0.635892Z'
              fill='#FCC003'
              stroke='#D2A20B'
            />
          </svg>
        </motion.div>

        {/*  */}
        <div className={styles.introSectionTitle}>
          <h1>[Company] Lösungen</h1>
          <p className='secondary-color'>Wie können wir Ihnen helfen?</p>
        </div>

        {/*  */}
        <div className={styles.introSectionBottom}>
          <motion.div
            initial={{ rotateZ: -4 }}
            animate={{ x: 20 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={styles.block}
          >
            <p>Möbel Montage</p>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={styles.block}
          >
            <p>Wohnungsauflösung</p>
          </motion.div>
        </div>
      </div>

      <div className={styles.page}>
        <div className={styles.roundTop}>
          {/* fill='#9322c5' */}
          {/* fillOpacity='0.05' */}

          <svg width='900' viewBox='0 0 900 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 6H8.8C17.7 6 35.3 6 53 6.2C70.7 6.3 88.3 6.7 106 6C123.7 5.3 141.3 3.7 159 2.8C176.7 2 194.3 2 212 2C229.7 2 247.3 2 265 3.2C282.7 4.3 300.3 6.7 318 7C335.7 7.3 353.3 5.7 371 5C388.7 4.3 406.3 4.7 423.8 4.8C441.3 5 458.7 5 476.2 4.3C493.7 3.7 511.3 2.3 529 2.3C546.7 2.3 564.3 3.7 582 4.7C599.7 5.7 617.3 6.3 635 5.7C652.7 5 670.3 3 688 2.3C705.7 1.7 723.3 2.3 741 2.3C758.7 2.3 776.3 1.7 794 2.5C811.7 3.3 829.3 5.7 847 5.5C864.7 5.3 882.3 2.7 891.2 1.3L900 0H891.2C882.3 0 864.7 0 847 0C829.3 0 811.7 0 794 0C776.3 0 758.7 0 741 0C723.3 0 705.7 0 688 0C670.3 0 652.7 0 635 0C617.3 0 599.7 0 582 0C564.3 0 546.7 0 529 0C511.3 0 493.7 0 476.2 0C458.7 0 441.3 0 423.8 0C406.3 0 388.7 0 371 0C353.3 0 335.7 0 318 0C300.3 0 282.7 0 265 0C247.3 0 229.7 0 212 0C194.3 0 176.7 0 159 0C141.3 0 123.7 0 106 0C88.3 0 70.7 0 53 0C35.3 0 17.7 0 8.8 0H0V6Z'
              fill='var(--accent)'
              fillOpacity='0.05'
            />
          </svg>
        </div>

        <div className={styles.pageContainer}>
          {/*  */}
          {/* form section */}
          <div className={styles.formSection}>
            <h1>Wohin?</h1>
            <p>Es ist ganz einfach: Teilen Sie uns Ihr Anliegen mit und wir kontaktieren Sie</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.inputs}>
                {/* iconedInput */}

                <div className={styles.iconedInput}>
                  <Image src='/location.svg' alt='' width={18} height={18} loading='eager' />
                  <input
                    placeholder='VonVon ( Ort oder PLZ )'
                    {...register("von", { required: true, minLength: 4 })}
                    className={errors.von && "inputError"}
                  />
                </div>
                <div className={styles.iconedInput}>
                  <Image src='/location.svg' alt='' width={18} height={18} loading='eager' />
                  <input placeholder='Nach?' {...register("nach", { required: true, minLength: 4 })} className={errors.nach && "inputError"} />
                </div>
              </div>
              <button type='submit'>Apply now</button>
            </form>
          </div>

          <div className={styles.transportImage}>
            <Image src={"/Moving-pana.svg"} alt='' width={24} height={24} loading='eager' />
          </div>

          {/*  */}
          {/* contact section */}
          <div className={styles.contactSection}>
            <div>
              <h2>Kontaktieren Sie uns direkt</h2>
              <p>Montag - Sontag</p>
              <p>8:00 - 20:00 Uhr</p>
            </div>
            <div className={styles.contactSectionLinks}>
              <Link href={`tel:${company_phone}`}>
                <Image src={"/phone.svg"} width={34} height={34} alt='phone-icon' />
              </Link>
              <Link href={`https://wa.me/${whatsappPhone}`}>
                <Image src={"/whatsapp-icon.svg"} width={34} height={34} alt='phone-icon' />
              </Link>
              <Link href={`mailto:${company_email}`}>
                <Image src={"/email-icon.svg"} width={34} height={34} alt='phone-icon' />
              </Link>
            </div>
          </div>

          <div className={styles.transportImage}>
            <Image src={"/Moving-pana-2.svg"} alt='' width={24} height={24} loading='eager' />
          </div>
        </div>
      </div>
    </div>
  );
}
