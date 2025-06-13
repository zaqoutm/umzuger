"use client";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import type { FormProps } from "antd";
import { Button, Form, Input, Space } from "antd";
import { IoLocationSharp } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";

export default function WohinFormComponent() {
  const router = useRouter();
  const [form] = Form.useForm();

  type FieldType = {
    von?: string;
    nach?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // console.log("Success:", values);
    router.push(`/apply?von=${values.von}&nach=${values.nach}`);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    const firstErrorField = errorInfo?.errorFields?.[0];
    if (firstErrorField) {
      form.scrollToField(firstErrorField.name[0], {});
      form.focusField(firstErrorField.name[0]);
    }
  };

  return (
    <div className={styles.formSection}>
      <h1>Wohin?</h1>
      <p>Es ist ganz einfach: Teilen Sie uns Ihr Anliegen mit und wir kontaktieren Sie</p>

      <Form form={form} name='basic' className={styles.form} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <div className={styles.inputs}>
          <Space.Compact size='large'>
            <Form.Item<FieldType>
              noStyle
              name='von'
              rules={[
                { min: 5, message: "", warningOnly: true },
                { required: true, message: "" },
              ]}
            >
              <Input size='large' placeholder='Von ( Ort oder PLZ )' prefix={<IoLocationSharp />} />
            </Form.Item>
            <Form.Item<FieldType>
              noStyle
              name='nach'
              rules={[
                { min: 5, message: "", warningOnly: true },
                { required: true, message: "" },
              ]}
            >
              <Input size='large' placeholder='Nach?' prefix={<IoLocationSharp />} />
            </Form.Item>
          </Space.Compact>
        </div>

        <Form.Item label={null} className='btn' noStyle>
          <Button size='large' variant='solid' color='purple' htmlType='submit' icon={<GrFormNextLink />} iconPosition='end'>
            Jetzt bewerben
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
