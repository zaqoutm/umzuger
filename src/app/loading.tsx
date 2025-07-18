import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loading() {
  return (
    <div className='loadingPage'>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color: "#9322c5" }} spin />} />
      <p>Bitte warten...</p>
    </div>
  );
}
