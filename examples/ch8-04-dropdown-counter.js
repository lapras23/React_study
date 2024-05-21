import "./App.css";
import { useState } from "react";

const DropdownCounter = () => {
  const [counter, setCounter] = useState(0);
  const onChange = (e) => {
    setCounter((value) => value + parseInt(e.target.value)); // 이벤트 값이 바뀔 때마다 counter의 값에 이벤트 값을 더해줌
  };
  const values = [1, 2, 3, 4, 5];
  return (
    <section>
      <h1>Counter: {counter}</h1>
      <select onChange={onChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
  );
};

function App() {
  return <DropdownCounter />;
}

export default App;
