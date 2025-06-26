import { Input, InputRef } from "antd";
import { ReactNode, Ref } from "react";
import { Controller, RegisterOptions, ValidationRule } from "react-hook-form";

interface PropsType {
  name: string;
  placeholder?: string;
  pattern?: ValidationRule<RegExp>;
  isDisabled?: boolean;
  inputRef?: Ref<InputRef>;
  rules?: RegisterOptions;
  iconSuffix?: ReactNode;
}

export default function InputX(props: PropsType) {
  // const {register, formState: {errors}} = useFormContext()

  return (
    <Controller
      name={props.name}
      rules={props.rules}
      render={({ field, fieldState }) => (
        <>
          <Input
            suffix={props.iconSuffix}
            size='large'
            {...field}
            onChange={(e) => {
              field.onChange(e);
            }}
            ref={props.inputRef ? props.inputRef : field.ref}
            placeholder={props.placeholder}
            disabled={props.isDisabled}
            status={fieldState.invalid ? "error" : ""}
          />
          {fieldState.error && <div style={{ color: "red", fontSize: 12 }}>{fieldState.error.message}</div>}
        </>
      )}
    />
  );
}
