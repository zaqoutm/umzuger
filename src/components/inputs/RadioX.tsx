import { Radio } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import { Controller } from "react-hook-form";

interface PropsType {
  name: string;
  options?: CheckboxGroupProps<string>["options"];
}

export default function RadioX(props: PropsType) {
  return (
    <Controller
      name={props.name}
      render={({ field }) => (
        <>
          <Radio.Group size='large' {...field} options={props.options} block optionType='button' buttonStyle='solid' />
        </>
      )}
    />
  );
}
