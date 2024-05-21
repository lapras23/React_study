import "./App.css";
import { useState } from "react";

// 이런 방식은 보안에 좋지 않다
const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault(); // 기본 동작 수행하지 않도록 해야함. 안그러면 페이지가 새로고침됨.
    if (password === "platypus") {
      setAdmin(true);
    }
  };
  return isAdmin ? (
    <h1>Bacon is delicious!</h1>
  ) : (
    <form onSubmit={onSubmit}>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
};

function App() {
  return <Admin />;
}

export default App;
