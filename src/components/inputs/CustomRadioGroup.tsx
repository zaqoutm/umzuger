import Image from "next/image";
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
  options: Option[];
};

const CustomRadioGroup = ({ name, options }: Props) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <>
          {options && (
            <p className={styles.extraInfo}>
              <FcInfo size={18} />
              {options[options.findIndex((x) => x.value === field.value)].info}
            </p>
          )}

          <div className={styles.CustomRadioGroupContainer}>
            {/*  */}
            {options.map((opt) => (
              <label
                className={styles.label + " " + `${field.value === opt.value ? styles.checked : ""}`}
                key={opt.value}
              >
                <input
                  name={name}
                  type='radio'
                  value={opt.value}
                  checked={field.value === opt.value}
                  onChange={() => {
                    field.onChange(opt.value);
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
