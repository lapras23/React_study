import Number from "./Number";

const TimeDisplay = ({ time }) => {
  // Timer.js에서 남은 시간(remaining) 값을 넘겨줌
  const minutes = Math.floor(time / 60); // floor: 버림
  const seconds = time % 60; // 시간을 60으로 나누고 남은 나머지가 초가 됨

  return (
    <ul className="parts">
      <Number value={minutes} label="minutes" />
      <li className="colon">:</li>
      <Number value={seconds} label="seconds" />
    </ul>
  );
};

export default TimeDisplay;
