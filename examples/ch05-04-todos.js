import "./App.css";
import { useState } from "react";

const TodoApplication = ({ initialList }) => {
  const [todos, setTodos] = useState(initialList);
  return (
    <main>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo}
          <button
            onClick={() => {
              setTodos((value) => [
                // slice (3,1) index가 3인 자료 부터 1개를 가져옴! <-> splice와는 다르다!!!!!!
                ...value.slice(0, index), // 두번 째 end인자 전 까지만 가져온다. index가 3이면 index가 0, 1, 2인 자료를 가져온다.
                ...value.slice(index + 1), // 두번 째 인자를 넘기지 않으면 첫번 째 인자 그 이후 모든 자료를 가져온다. index가 3이면, 4부터 모든 자료를 다 가져온다.
              ]);
            }}
          >
            x
          </button>
        </p>
      ))}
    </main>
  );
};

function App() {
  const items = [
    "Feed the plants",
    "Water the dishes",
    "Clean the cat",
    "밥먹기",
    "세수하기",
    "샤워하기",
  ];
  return <TodoApplication initialList={items} />;
}

export default App;
