"use client";
import type { FormProps } from "antd";
import { Button, Form, Input, Space } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import styles from "./styles.module.css";

export default function WohinFormComponent() {
  const router = useRouter();
  const [form] = Form.useForm();

  type FieldType = {
    von?: string;
    nach?: string;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setIsSubmitting(true);
    router.push(`/apply?von=${values.von}&nach=${values.nach}`);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {};

  return (
    <div className={styles.formSection}>
      <h1>Wohin?</h1>
      <p>Es ist ganz einfach: Teilen Sie uns Ihr Anliegen mit und wir kontaktieren Sie</p>

      <Form
        form={form}
        name='basic'
        className={styles.form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <div className={styles.inputs}>
          <Space.Compact size='large'>
            <Form.Item<FieldType> noStyle name='von' rules={[]}>
              <Input size='large' placeholder='Von ( Ort oder PLZ )' prefix={<IoLocationSharp />} />
            </Form.Item>
            <Form.Item<FieldType> noStyle name='nach'>
              <Input size='large' placeholder='Nach?' prefix={<IoLocationSharp />} />
            </Form.Item>
          </Space.Compact>
        </div>

        <Form.Item label={null} className='btn' noStyle>
          <Button
            loading={isSubmitting}
            size='large'
            variant='solid'
            color='purple'
            htmlType='submit'
            icon={<GrFormNextLink />}
            iconPosition='end'
          >
            Jetzt bewerben
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
