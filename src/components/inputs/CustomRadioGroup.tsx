import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FcInfo } from "react-icons/fc";
import styles from "./styles.module.css";

type Option = {
  value: string;
  label: string;
  image: string;
  info: string;
};

type Props = {
  name: string;
  defaultValue: string;
  options: Option[];
};

const CustomRadioGroup = ({ name, defaultValue, options }: Props) => {
  const [def, setDef] = useState(defaultValue);
  const [info, setInfo] = useState("");

  useEffect(() => {
    setDef(defaultValue);
    if (options) setInfo(options[0].info);
  }, []);

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <>
          {info && (
            <p className={styles.extraInfo}>
              <FcInfo size={18} />
              {info}
            </p>
          )}

          <div className={styles.CustomRadioGroupContainer}>
            {/*  */}
            {options.map((opt) => (
              <label
                className={
                  styles.label + " " + `${field.value === opt.value || def === opt.value ? styles.checked : ""}`
                }
                key={opt.value}
              >
                <input
                  type='radio'
                  value={opt.value}
                  checked={field.value === opt.value}
                  onChange={() => {
                    field.onChange(opt.value);
                    setDef(opt.value);
                    setInfo(opt.info);
                  }}
                  style={{ display: "none" }}
                />

                <div className={styles.image}>
                  <Image src={"/" + opt.image} alt={opt.label} width={111} height={111} loading='eager' />
                  {/* <h1>image</h1> */}
                </div>

                <p>{opt.label}</p>
              </label>
            ))}
            {/*  */}
          </div>
        </>
      )}
    />
  );
};

export default CustomRadioGroup;
