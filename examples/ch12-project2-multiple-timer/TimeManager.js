import { useState } from "react";
import Timer from "./Timer";
import AddTimer from "./AddTimer";

const TimeManager = () => {
  const [timers, setTimers] = useState([{ id: "first", startTime: 300 }]); // 기본값은 시작 시간이 5분인 타이머, id와 startTime이 객체로 들어감
  const [isAdding, setAdding] = useState(false);

  const onAdd = (startTime) => {
    const id = `timer-${Math.random()}`; // 타이머가 생성될 때 태그 id가 랜덤으로 생성됨
    setTimers((oldTimers) => [...oldTimers, { id, startTime }]); // ...rest를 이용해서 기존 타이머에 랜덤으로 생성된 id와 매개변수로 받은 startTime이 추가됨
    setAdding(false); // 추가가 끝났으니 Adding 상태를 false로 바꿔줌
  };

  const onDelete = (idToDelete) =>
    setTimers((oldTimers) => oldTimers.filter(({ id }) => id !== idToDelete)); //삭제할 타이머의 id를 변수로 받아서 그 id가 아닌 타이머들만 저장함

  // 여러 타이머들을 map으로 표시해줌
  // 타이머들 아래에 ADD 버튼을 누르면 AddTimer.js에서 타이머를 생성
  // isAdding이 false 값이면 ADD 버튼이 생기고, 버튼을 클릭하면 setAdding이 true가 됨
  // isAdding이 true 값이면, 이전에 생성된 타이머들과 새로 생성된 타이머의 id, startTime값을 onAdd로 넘겨줌
  return (
    <div className="timers">
      {timers.map(({ id, startTime }) => (
        <Timer key={id} startTime={startTime} id={id} onDelete={onDelete} />
      ))}
      {isAdding ? (
        <AddTimer onAdd={onAdd} />
      ) : (
        <button className="timer timer-add" onClick={() => setAdding(true)}>
          +
        </button>
      )}
    </div>
  );
};

export default TimeManager;
