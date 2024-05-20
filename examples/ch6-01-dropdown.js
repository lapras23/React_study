import "./App.css";
import { useState, useEffect } from "react";

const RemoteDropdown = () => {
  const [options, setOptions] = useState([]);
  // useEffect를 사용하면 처음 한 번만 실행됨
  useEffect(() => {
    fetch("http://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => data.results) // data.results에 있는 값들을 넘겨줌
      .then((characters) => characters.map(({ name }) => name)) // data.results에 있는 name을 받아서 하나씩 객체에 저장함
      .then((names) => setOptions(names)); // useState를 이용해서 options에 name이 저장된 객체를 넣어줌
  }, []); // 빈 배열을 추가해줘야 마운트 될 때만 실행이 되고 다시는 실행이 되지 않음

  return (
    <select>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

function App() {
  return <RemoteDropdown />;
}

export default App;
