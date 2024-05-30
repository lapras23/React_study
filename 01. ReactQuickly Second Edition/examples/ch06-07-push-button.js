import "./App.css";
import { useState } from "react";

const Icon = ({ type }) => {
  return <img src={`/images/${type}.png`} width="16" alt="" />; // alt는 이미지가 안 보일 경우 표시해줄 TEXT
};

const Button = ({ label, ButtonIcon }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={() => setPressed((p) => !p)}>
      <ButtonIcon pressed={pressed} />
      {label}
    </button>
  );
};

// Pressed가 true이면 Icon 함수에서 lock.png 이미지를 반환, false이면 Icon 함수에서 unlock.png를 반환함
const LockIcon = ({ pressed }) => {
  return pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
};

// 버튼을 생성하는 함수. property로 label, ButtonIcon을 Button 함수로 넘겨주며, Lock TEXT가 표시되고, Button Icon은 LockIcon값을 넘겨줌
const LockButton = () => {
  return <Button label="Lock" ButtonIcon={LockIcon} />;
};

function App() {
  return <LockButton />;
}

export default App;
