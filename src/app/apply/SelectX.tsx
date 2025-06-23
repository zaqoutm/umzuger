import { CheckboxOptionType, Select } from "antd";
import { Controller, RegisterOptions } from "react-hook-form";

interface PropsType {
  name: string;
  options: CheckboxOptionType[];
  defaultValue?: string;
  placeHolder?: string;
  rules?: RegisterOptions;
}

export default function SelectX(props: PropsType) {
  return (
    <Controller
      name={props.name}
      rules={props.rules}
      render={({ field, fieldState }) => (
        <>
          <Select
            size='large'
            placeholder={props.placeHolder}
            {...field}
            options={props.options}
            defaultValue={props.defaultValue}
            status={fieldState.invalid ? "error" : ""}
          />
          {fieldState.error && <div style={{ color: "red", fontSize: 12 }}>{fieldState.error.message}</div>}
        </>
      )}
    />
  );
}
