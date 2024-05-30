import "./App.css";
import { useState, useEffect, useRef } from "react";

const Transition = () => {
  const [isRunning, setRunning] = useState(false);
  const div = useRef(); // useRef를 이용해서 div의 요소를 참조함

  useEffect(() => {
    const onStart = () => setRunning(true);
    const onEnd = () => setRunning(false);
    const node = div.current;
    node.addEventListener("transitionstart", onStart); // CSS의 transition이 시작되면 이벤트가 발생함
    node.addEventListener("transitionend", onEnd); // CSS의 transition이 끝나면 이벤트가 발생함
    return () => {
      node.removeEventListener("transitionstart", onStart); // 정리할 때 동일한 리스너를 제거함
      node.removeEventListener("transitionend", onEnd);
    };
  }, [setRunning]);
  // div style 안에 속성 값을 넣을 때는 중괄호를 두 번 써야함!!
  return (
    <section>
      <h1>Transition is {!isRunning && "not"} running</h1>
      <div style={{ color: "red", transition: "color 1s linear" }} ref={div}>
        COLORFUL TEXT
      </div>
      <button onClick={() => (div.current.style.color = "blue")}>
        Go Blue
      </button>
      <button onClick={() => (div.current.style.color = "red")}>Go Red</button>
    </section>
  );
};

function App() {
  return <Transition />;
}

export default App;
