import "./App.css";
import { useState } from "react";

const FOCUS_NONE = 0; // 숫자 0은 FALSE로 반환됨
const FOCUS_USER = 1; // 숫자 0 이외의 숫자들은 TRUE로 반환됨
const FOCUS_REQUEST = 2;

const getStyle = (isActive) => {
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: isActive ? "oldlace" : "transparent", // isActive값은 숫자로 들어오는데, NONE일 때 0이니까 투명으로, 나머지 숫자들은 배경색을 표시
  };
};

// label, children 값을 받아서 label명 뒤에 :을 붙여서 넣어 주고, 한칸 띄어서 children을 넣어줌. 여기서는 input 필드를 넣어줌.
const Field = ({ label, children }) => {
  return (
    <label>
      {label}:
      <br />
      {children}
    </label>
  );
};

const Contact = () => {
  const [focus, setFocus] = useState(FOCUS_NONE);
  const onUserFocus = () => setFocus(FOCUS_USER);
  const onRequestFocus = () => setFocus(FOCUS_REQUEST);
  const onBlur = () => setFocus(FOCUS_NONE);

  // onFocus : 포커스를 받았을 때 User면 focus를 1로 설정하고 Request면 focus를 2로 설정함.
  // fieldset : 폼 요소를 그룹으로 묶는 태그. 테두리가 생긴다.
  // legend : fieldset의 제목을 붙이는 태그. 테두리에 제목이 생긴다.
  return (
    <form onBlur={onBlur}>
      <h1>Contact</h1>
      <fieldset onFocus={onUserFocus} style={getStyle(focus === FOCUS_USER)}>
        <legend>User</legend>
        <Field label="Name">
          <input />
        </Field>
        <Field label="Email">
          <input type="email" />
        </Field>
      </fieldset>
      <fieldset
        onFocus={onRequestFocus}
        style={getStyle(focus === FOCUS_REQUEST)}
      >
        <legend>Request</legend>
        <Field label="Subject">
          <input />
        </Field>
        <Field label="Body">
          <textarea />
        </Field>
      </fieldset>
    </form>
  );
};

function App() {
  return <Contact />;
}

export default App;
