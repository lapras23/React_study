const Number = ({ value, label }) => {
  // Timer.js 에서 시간을 넘겨주면 TimerDisplay.js에서 분과 초를 계산해서 Number.js로 넘겨줌, label은 minutes와 seconds
  // padStart: 문자의 시작을 다른 문자열로 채워서, 주어진 길이를 만족하는 새로운 문자열을 반환
  // padStart(문자열 길이, 채워넣을 문자열)
  return (
    <li className="part">
      <p className="number">{String(value).padStart(2, "0")}</p>
      <p className="unit">{label}</p>
    </li>
  );
};

export default Number;
