import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

// 초기값, 처음 생성될 때 0분 0초로 표시됨
const EMPTY = { minutes: 0, seconds: 0 };

const AddTimer = ({ onAdd }) => {
  // TimerManager.js에서 기존 타이머들과 새로 생성된 타이머의 id 생성값, startTime이 넘어옴
  const [data, setData] = useState(EMPTY); // 기본 값은 00:00

  const onChange = (e) => {
    setData((oldData) => ({
      ...oldData,
      [e.target.name]: e.target.valueAsNumber, // e.target.name: minutes, seconds 그리고 value값이 number로 변환되어서 data 값으로 저장됨
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(data.minutes * 60 + data.seconds); // start버튼을 누르면 폼이 submit되는데, TimerDisplay.js의 onAdd함수에 시간을 넘겨줌
    setData(EMPTY); // 값을 넘겨주고 난 후에 data 값을 다시 초기값으로 설정
  };

  return (
    <form onSubmit={onSubmit} className="timer timer-new">
      <ul className="parts">
        <Input name="minutes" value={data.minutes} onChange={onChange} />
        <li className="colon">:</li>
        <Input name="seconds" value={data.seconds} onChange={onChange} />
      </ul>
      <Button icon="play" label="Start" />
    </form>
  );
};

export default AddTimer;
