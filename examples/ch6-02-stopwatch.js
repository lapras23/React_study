import "./App.css";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      // setInterval(func, delay): delay(밀리초)마다 func 실행
      () => setSeconds((seconds) => seconds + 1), // 1000밀리초(1초) 마다 seconds+1을 해줌
      1000
    );
    return () => clearInterval(interval); // clearInterval을 사용해서 진행 중인 Interval을 취소함
  }, []);
  return <h1>Seconds: {seconds}</h1>;
};

function App() {
  const [showWatch, setShowWatch] = useState(false);
  return (
    <>
      <button onClick={() => setShowWatch((b) => !b)}>Toggle watch</button>
      {showWatch && <Stopwatch />}
    </>
  );
}

export default App;
