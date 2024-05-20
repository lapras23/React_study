import "./App.css";
import { useState } from "react";

function App() {
  const PLUS = (a, b) => a + b;
  const MINUS = (a, b) => a - b;
  const MULTIPLY = (a, b) => a * b;

  const Calculator = ({ a, b }) => {
    const [operator, setOperator] = useState(() => PLUS); // 인자가 있을 때는 그냥 PLUS라고 해주면 안되고 이렇게 해줘야 함!!!!!!

    return (
      <main>
        <h1>Calculator</h1>
        <button onClick={() => setOperator(() => PLUS)}>Plus</button>
        <button onClick={() => setOperator(() => MINUS)}>Minus</button>
        <button onClick={() => setOperator(() => MULTIPLY)}>Multiply</button>
        <p>
          Result of applying operator to {a} and {b} :{" "}
          <code>{operator(a, b)}</code>
        </p>
      </main>
    );
  };
  return <Calculator a={7} b={4} />; // props에 변수값 넣을 때는 이렇게?
}

export default App;
