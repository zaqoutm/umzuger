import { Radio } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import { Controller } from "react-hook-form";

interface PropsType {
  name: string;
  options?: CheckboxGroupProps<string>["options"];
  defaultValue?: string;
}

export default function RadioX(props: PropsType) {
  return (
    <Controller
      name={props.name}
      render={({ field }) => (
        <>
          <Radio.Group
            {...field}
            defaultValue={props.defaultValue}
            options={props.options}
            block
            optionType='button'
            buttonStyle='solid'
          />
        </>
      )}
    />
  );
}
