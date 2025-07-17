import { Button } from "antd";
import { BiHome } from "react-icons/bi";

export default function NotFountPage() {
  return (
    <div className='loadingPage'>
      <h2>404</h2>
      <p>Entschuldigung, die von Ihnen besuchte Seite existiert nicht.</p>

      {/*  */}
      <Button href='/' icon={<BiHome />} type='primary' style={{ margin: "0 8px" }} shape='round'>
        Zurück zur Startseite
      </Button>
    </div>
  );
}
