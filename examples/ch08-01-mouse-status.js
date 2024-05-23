import "./App.css";
import { useState, useEffect } from "react";

const MouseStatus = () => {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true); // onMouseMove: 마우스 포인터가 요소 위에 있거나 움직일 때 작동함
  useEffect(() => {
    if (!isMoving) return; // 마우스가 움직이지 않으면 아무 것도 안함

    const timeout = setTimeout(() => setMoving(false), 500); // 0.5초가 지나면 isMoving을 false로 설정
    return () => clearTimeout(timeout);
  }, [isMoving]); // isMoving 상태가 변할 때마다 effect 호출

  return (
    <section onMouseMove={onMouseMove}>
      <h2>
        The mouse is {!isMoving && "not"} moving: {isMoving ? "✓" : "✗"}
      </h2>
    </section>
  );
};

function App() {
  return <MouseStatus />;
}

export default App;
