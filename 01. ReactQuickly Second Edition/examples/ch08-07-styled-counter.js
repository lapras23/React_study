import "./App.css";
import { useState } from "react";

const Button = ({ handleClick, label }) => {
  const buttonStyle = {
    color: "blue",
    border: "1px solid",
    background: "transparent",
    borderRadius: ".25em", // em : 상위 요소의 몇 배인지, 버튼의 경우 font-size가 em의 기준이라 함
    padding: ".5em 1em", // fontSize가 20px인 경우 padding은 상하 10px, 좌우 20px가 됨
    margin: ".5em",
  };
  const onClick = () => handleClick();

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

const StyledCounter = () => {
  const [counter, setCounter] = useState(0);
  const update = (d) => setCounter((value) => value + d);

  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        <Button handleClick={() => update(1)} label="Increment" />
        <Button handleClick={() => update(-1)} label="Decrement" />
      </div>
    </section>
  );
};

function App() {
  return <StyledCounter />;
}

export default App;
