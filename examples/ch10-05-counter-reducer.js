import "./App.css";
import { useReducer } from "react";

// 이전 상태(state)와 action type을 받는 reducer 함수를 생성
const reducer = (state, { type }) => {
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0); // reducer 함수와 초기값을 넣어줌
  return (
    <section>
      <h1>Counter: {state}</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </section>
  );
};

function App() {
  return <Counter />;
}

export default App;
