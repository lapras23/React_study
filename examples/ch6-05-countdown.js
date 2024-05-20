import "./App.css";
import { useState, useEffect } from "react";

const Countdown = ({ from }) => {
  const [seconds, setSeconds] = useState(from); // from 값을 받아서 seconds의 값으로 초기화
  const [isRunning, SetRunning] = useState(false); // isRunning 의 초기값은 false로 해놔서 버튼을 누르지 않으면 시간이 가지 않음

  useEffect(() => {
    if (!isRunning) return; // running이 실행중이 아니라면, 중단하고 아무것도 반환하지 않음

    const interval = setInterval(
      // running이 진행중이라면
      () =>
        setSeconds((value) => {
          if (value <= 1) {
            // 남은 초가 1초 이하라면 (1초나 0초) running을 중단함
            SetRunning(false);
          }
          return value - 1; // 남은 초가 1초보다 크다면 1초씩 줄어듦
        }),
      1000
    );
    return () => clearInterval(interval); // interval을 완벽히 정리하는 정리 함수를 반환
  }, [isRunning]); // effect가 isRunning 값에 따라 달라짐
  return (
    <section>
      <h2>Time left: {seconds} seconds</h2>
      <button onClick={() => setSeconds(from)}>Reset</button>
      <button onClick={() => SetRunning((v) => !v)} disabled={seconds === 0}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </section>
  );
};

function App() {
  return <Countdown from={10} />;
}

export default App;
