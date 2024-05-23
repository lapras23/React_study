import "./App.css";
import { useState } from "react";

import List from "./ch9-05-todo/List";
import Add from "./ch9-05-todo/Add1";

function App() {
  const [items, setItems] = useState([]);
  const [isAdding, setAdding] = useState(false); // setAdding이 true인 경우 아이템 추가 창을 보여줌
  const handleDelete = (item) =>
    setItems((oldItems) => oldItems.filter((oldItem) => oldItem !== item)); // item을 삭제해주기 위해서 item이 아닌 것만 filter 함수로 저장함
  const handleAdd = (newItem) => {
    setItems((oldItems) => oldItems.concat([newItem])); // concat 함수를 이용해서 oldItems 배열에 newItem을 추가해줌. 배열로 들어가는 것이 아니라 원소로 바로 들어감
    setAdding(false); // 추가가 완료되면 추가 창에서 나감
  };
  const handleCancel = () => setAdding(false);
  return (
    <main>
      <nav>
        <button onClick={() => setAdding(false)}>View list</button>
        <button onClick={() => setAdding(true)}>Add new item</button>
      </nav>
      {isAdding ? (
        <Add handleAdd={handleAdd} handleCancel={handleCancel} />
      ) : (
        <List items={items} handleDelete={handleDelete} />
      )}
    </main>
  );
}

export default App;
