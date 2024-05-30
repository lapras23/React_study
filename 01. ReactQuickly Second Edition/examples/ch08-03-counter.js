import "./App.css";
import { useState, useRef } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = useRef(); // HTML 노드에 액세스
  const onClick = (e) => {
    const delta = e.target === increment.current ? 1 : -1; // 현재 버튼이 눌리면 1, 아니면 -1 값으로 초기화함
    setCounter((value) => value + delta);
  };

  return (
    <section>
      <h1>value: {counter}</h1>
      <button ref={increment} onClick={onClick}>
        Increment
      </button>
      <button onClick={onClick}>Decrement</button>
    </section>
  );
};

function App() {
  return <Counter />;
}

export default App;
