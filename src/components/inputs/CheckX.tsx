import { Checkbox } from "antd";
import { Controller } from "react-hook-form";

interface PropsType {
  name: string;
  placeholder?: string;
}

export default function CheckX({ name, placeholder }: PropsType) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <>
          <Checkbox checked={field.value} {...field}>
            {placeholder}
          </Checkbox>
        </>
      )}
    />
  );
}
