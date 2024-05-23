import { useState } from "react";

// 추가와 취소를 props로 받아옴
const Add = ({ handleAdd, handleCancel }) => {
  const [data, setData] = useState({
    title: "",
    category: "",
    date: "",
  });

  // input의 key를 객체의 속성으로, value를 값으로 넣어줌
  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData((oldData) => ({ ...oldData, [key]: value }));
  };

  // Form을 제출하면 data를 oldItems에 concat 함수로 넣어줌
  const onSubmit = (e) => {
    handleAdd(data);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Title:
        <input value={data.title} name="title" onChange={onChange} />
      </label>
      <label>
        Category:
        <input value={data.category} name="category" onChange={onChange} />
      </label>
      <label>
        Due date:
        <input value={data.date} name="date" onChange={onChange} />
      </label>
      <div>
        <button>Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Add;
