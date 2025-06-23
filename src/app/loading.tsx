import { Spin } from "antd";

export default function Loading() {
  return (
    <div className='loadingPage'>
      <div>
        <Spin size='large' />
      </div>
      <h1>Bitte warten...</h1>
    </div>
  );
}
