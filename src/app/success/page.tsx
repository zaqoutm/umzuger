import { Button, Result } from "antd";
import { BiHome } from "react-icons/bi";

export default function page() {
  return (
    <Result
      status='success'
      title='Vielen Dank'
      subTitle='Ihre Nachricht wurde erfolgreich gesendet'
      extra={[
        <Button size='large' icon={<BiHome />} type='primary' key='console' href='/' shape='round'>
          Zurück zur Startseite
        </Button>,
      ]}
    />
  );
}
