import { CheckboxOptionType, Select } from "antd";
import { Controller } from "react-hook-form";

interface PropsType {
  name: string;
  options: CheckboxOptionType[];
  defaultValue?: string;
  placeHolder?: string;
}

export default function SelectX(props: PropsType) {
  return (
    <Controller
      name={props.name}
      rules={{ required: "Bitte wählen Sie eine Antwort aus." }}
      render={({ field, fieldState }) => (
        <>
          <h1>{props.defaultValue}</h1>
          <Select
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
