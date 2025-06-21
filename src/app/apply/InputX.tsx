import { Input, InputRef } from "antd";
import { Ref } from "react";
import { Controller, ValidationRule } from "react-hook-form";

interface PropsType {
  name: string;
  placeholder?: string;
  pattern?: ValidationRule<RegExp>;
  isDisabled?: boolean;
  inputRef?: Ref<InputRef>;
}

export default function InputX(props: PropsType) {
  // const {register, formState: {errors}} = useFormContext()

  return (
    <Controller
      name={props.name}
      render={({ field, fieldState }) => (
        <>
          <Input
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
