import "./App.css";
import { useRef, useState } from "react";

const THRESHOLD = 300;

const DoubleClickCounter = () => {
  const [counter, setCounter] = useState(0);
  const lastClickTime = useRef(null); // useRef 값의 마지막 클릭 시간을 기억함

  const onClick = () => {
    const isDoubleClick = Date.now() - lastClickTime.current < THRESHOLD; // current 속성 값을 통해 클릭 시간을 받아올 수 있음

    if (isDoubleClick) {
      setCounter((value) => value + 1);
    } else {
      lastClickTime.current = Date.now(); // 더블 클릭이 아닌 경우 마지막 클릭 시간을 현재 시간으로 초기화함
    }
  };
  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Increment</button>
    </main>
  );
};

function App() {
  return <DoubleClickCounter />;
}

export default App;
