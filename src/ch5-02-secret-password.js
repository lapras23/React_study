import "./App.css";
import { useState } from "react";

function App() {
  const Accordian = () => {
    const [isExpended, setExpended] = useState(false);

    return (
      <main>
        <h2 style={{ display: "flex", gap: "6px" }}>
          Secret password
          <button onClick={() => setExpended(false)}>-</button>
          <button onClick={() => setExpended(true)}>+</button>
        </h2>
        {isExpended && (
          <p>
            password: <code>hunter2</code>
          </p>
        )}
      </main>
    );
  };
  return <Accordian />;
}

export default App;
