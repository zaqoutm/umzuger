import { InputNumber } from "antd";
import { Controller, ValidationRule } from "react-hook-form";

interface PropsType {
  name: string;
  placeholder?: string;
  pattern?: ValidationRule<RegExp>;
  maxLength?: number;
  isDisabled?: boolean;
}

export default function InputNumberX(props: PropsType) {
  // const {register, formState: {errors}} = useFormContext()

  return (
    // --------------- form-hook Controller
    <Controller
      name={props.name}
      rules={{
        required: `${props.placeholder} erforderlich`,
        pattern: props.pattern,
      }}
      render={({ field, fieldState }) => (
        // ------------- antd input
        //
        <>
          <InputNumber
            {...field}
            stringMode
            disabled={props.isDisabled}
            controls={false}
            changeOnWheel={false}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            status={fieldState.invalid ? "error" : ""}
          />
          {fieldState.error && <div style={{ color: "red", fontSize: 12 }}>{fieldState.error.message}</div>}
        </>
        //
      )}
    />
  );
}
