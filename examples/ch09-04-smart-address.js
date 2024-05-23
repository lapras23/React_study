import "./App.css";
import { useState } from "react";

const Address = () => {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });

  const onChange = (e) => {
    const key = e.target.name; // address1, address2, zip, city, state, country 값
    const value = e.target.value; // input으로 입력 받는 값

    setData((oldData) => ({ ...oldData, [key]: value })); // rest로 이전 배열 가져온 후에, address1: 입력값 이런 식으로 넣어줌. 객체 안에 변수 넣으려면 대괄호[] 써야함
  };
  // <pre></pre> 태그: 입력한 형태 그대로 보여줌
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Address line 1:
        <input value={data.address1} name="address1" onChange={onChange} />
      </label>
      <label>
        Address line 2:
        <input value={data.address2} name="address2" onChange={onChange} />
      </label>
      <label>
        Zip:
        <input value={data.zip} name="zip" onChange={onChange} />
      </label>
      <label>
        City:
        <input value={data.city} name="city" onChange={onChange} />
      </label>
      <label>
        State:
        <input value={data.state} name="state" onChange={onChange} />
      </label>
      <label>
        Country:
        <input value={data.country} name="country" onChange={onChange} />
      </label>
      <pre>{JSON.stringify(data, true, 2)}</pre>
    </form>
  );
};

function App() {
  return <Address />;
}

export default App;
