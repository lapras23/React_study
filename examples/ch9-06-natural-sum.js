import "./App.css";
import { useState } from "react";

const NaturalSum = () => {
  const [sum, setSum] = useState(0);

  const onSubmit = (e) => {
    const value = e.target.elements.operand.valueAsNumber;
    // input의 onChange로 받아오는게 아니니까 폼 elements에서 이름이 operand인 것의 value를 number로 받아옴
    // elements[0]이나 elements["operand"] 이렇게 인덱스로도 받아올 수 있음
    const naturalSum = (value * (value + 1)) / 2;
    setSum(naturalSum);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Number:
        <input type="number" min="1" defaultValue="1" name="operand" />
      </label>
      <div>
        <button>Submit</button>
      </div>
      <div>Sum: {sum}</div>
    </form>
  );
};

function App() {
  return <NaturalSum />;
}

export default App;
