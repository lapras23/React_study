import "./App.css";
import { useState } from "react";

const Sum = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const onChangeFirst = (e) => setFirst(e.target.valueAsNumber); // valueAsNumber : input text 값을 숫자로 받아옴
  const onChangeSecond = (e) => setSecond(e.target.valueAsNumber);

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        A:
        <input type="number" value={first} onChange={onChangeFirst} />
      </label>
      <label>
        B:
        <input type="number" value={second} onChange={onChangeSecond} />
      </label>
      <div>A+B: {first + second}</div>
    </form>
  );
};

function App() {
  return <Sum />;
}

export default App;
