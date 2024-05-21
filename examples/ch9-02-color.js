import "./App.css";
import { useState } from "react";

// conic-gradient 그라데이션을 그려주는 함수, 시계방향으로 움직인다.
const PLACEHOLDER = `conic-gradient(
  gray 0.25turn, white 0 0.5turn,
  gray 0 0.75turn, white 0 1turn
)`;

const HexColor = () => {
  const [color, setColor] = useState("BADA55");
  const onChange = (e) =>
    setColor(e.target.value.replace(/0-9a-f]/gi, "").toUpperCase()); // 정규식 전체 값을 붙여넣을 수도 있으므로 g / i는 대소문자 구분 안함 / 결과를 대문자로 바꿔줌
  const outputStyle = {
    width: "20px",
    border: "1px solid",
    background: color.length === 6 ? `#${color}` : PLACEHOLDER,
  };

  return (
    <form style={{ display: "flex" }}>
      <label>
        Hex color:
        <input value={color} onChange={onChange} />
      </label>
      <span style={outputStyle} />
    </form>
  );
};

function App() {
  return <HexColor />;
}

export default App;
