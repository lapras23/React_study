import "./App.css";
import { useState } from "react";

function App() {
  const Counter = ({ start }) => {
    const [counter, setCounter] = useState(start);
    return (
      <main>
        <p>Clicks: {counter}</p>
        <button onClick={() => setCounter((value) => value + 1)}>
          Increment
        </button>
        <button onClick={() => setCounter(start)}>Reset</button>
      </main>
    );
  };

  return (
    <>
      <Counter start={0} />
      <Counter start={123} />
      <Counter start={-64} />
    </>
  );
}

export default App;
