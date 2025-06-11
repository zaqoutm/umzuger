"use client";
import styles from "./styles.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WohinFormComponent() {
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
    <div className={styles.formSection}>
      <h1>Wohin?</h1>
      <p>Es ist ganz einfach: Teilen Sie uns Ihr Anliegen mit und wir kontaktieren Sie</p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.iconedInput}>
            <Image src='/location.svg' alt='' width={18} height={18} loading='eager' />
            <input placeholder='Von ( Ort oder PLZ )' {...register("von", { required: true, minLength: 4 })} className={errors.von && "inputError"} />
          </div>
          <div className={styles.iconedInput}>
            <Image src='/location.svg' alt='' width={18} height={18} loading='eager' />
            <input placeholder='Nach?' {...register("nach", { required: true, minLength: 4 })} className={errors.nach && "inputError"} />
          </div>
        </div>
        <button type='submit'>Jetzt bewerben</button>
      </form>
    </div>
  );
}
