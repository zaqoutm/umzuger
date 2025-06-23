import { InputNumber } from "antd";
import { ReactNode } from "react";
import { Controller, RegisterOptions } from "react-hook-form";

interface PropsType {
  name: string;
  placeholder?: string;
  rules?: RegisterOptions;
  maxLength?: number;
  isDisabled?: boolean;
  iconSuffix?: ReactNode;
}

export default function InputNumberX(props: PropsType) {
  // const {register, formState: {errors}} = useFormContext()

  return (
    // --------------- form-hook Controller
    <Controller
      name={props.name}
      rules={props.rules}
      // rules={{
      //   required: `${props.placeholder} erforderlich`,
      //   pattern: props.pattern,
      // }}
      render={({ field, fieldState }) => (
        // ------------- antd input
        //
        <>
          <InputNumber
            size='large'
            style={{ width: "100%" }}
            {...field}
            stringMode
            disabled={props.isDisabled}
            controls={false}
            changeOnWheel={false}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            status={fieldState.invalid ? "error" : ""}
            suffix={props.iconSuffix}
          />
          {fieldState.error && <div style={{ color: "red", fontSize: 12 }}>{fieldState.error.message}</div>}
        </>
        //
      )}
    />
  );
}
