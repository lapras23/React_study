import "./App.css";
import { useState } from "react";

const Die = () => {
  const style = {
    border: "2px solid black",
    display: "inline-block",
    width: "2em",
    height: "2em",
    textAlign: "center",
    lineHeight: 2,
  };
  const value = Math.floor(6 * Math.random()); // rendering할 때마다 새로운 것을 반환
  return <span style={style}>{value}</span>; // 테두리 안에 숫자를 표시
};

const DieRoller = () => {
  const [rolls, setRolls] = useState(1); // 주사위를 굴린 횟수니까 초깃값은 1
  // 버튼을 누를 때마다 rolls를 1씩 증가시킴
  return (
    <main>
      <h1>Rolls: {rolls}</h1>
      <button onClick={() => setRolls((r) => r + 1)}>Re-roll</button>
      <div>
        <Die />
        <Die />
        <Die />
      </div>
    </main>
  );
};

function App() {
  return <DieRoller />;
}

export default App;
