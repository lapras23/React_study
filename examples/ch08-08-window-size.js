import "./App.css";
import { useState, useEffect } from "react";

const getWindowSize = () => {
  return `${window.innerWidth}x${window.innerHeight}`; // 현재 윈도우의 width, height 값을 반환함
};

const WindowSize = () => {
  const [size, setSize] = useState(getWindowSize()); // 초기값은 현재 window 크기 값
  useEffect(() => {
    const onResize = () => setSize(getWindowSize());
    window.addEventListener("resize", onResize); // window 조정 이벤트는 React에서 지원을 하지 않기 때문에 addEventListner를 사용해야 함
    return () => window.removeEventListener("resize", onResize); // 정리 함수
  }, [setSize]); // 그냥 []로 해도 작동하지만 투명성을 위해 setSize 함수를 포함시킴

  return <h1>Window size: {size}</h1>;
};

function App() {
  return <WindowSize />;
}

export default App;
