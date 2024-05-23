import "./App.css";
import { useState, createContext, useContext } from "react";

const BUTTON_STYLE = {
  display: "inline-block",
  padding: "4px 10px",
  background: "transparent",
  border: "0",
};

const HEADER_STYLE = {
  display: "flex",
  justifyContent: "flex-end",
  borderBottom: "1px solid",
};

const NameContext = createContext(); // 전역 범위에서 context를 생성해서 어디서든 참조할 수 있음

const Button = ({ children }) => {
  return <button style={BUTTON_STYLE}>{children}</button>;
};

const UserButton = () => {
  const name = useContext(NameContext); // useContext를 사용해서 NameContext에 접근할 수 있음
  return <Button>👤 {name}</Button>;
};

const Header = () => {
  return (
    <header style={HEADER_STYLE}>
      <Button>Home</Button>
      <Button>Groups</Button>
      <Button>Profile</Button>
      <UserButton />
    </header>
  );
};

const Welcome = () => {
  const name = useContext(NameContext);
  return (
    <section>
      <h1>Welcome, {name}!</h1>
    </section>
  );
};

const Main = () => {
  return (
    <main>
      <Welcome />
    </main>
  );
};

// name을 Context 값으로 사용하여 전체 트리를 Context Provider로 감싼다.
const Dashboard = ({ name }) => {
  return (
    <NameContext.Provider value={name}>
      <Header />
      <Main />
    </NameContext.Provider>
  );
};

// useState를 이용해서 다른 값을 전달할 수 있음
const AdminnDashboard = () => {
  const [user, setUser] = useState("Elice");
  return (
    <>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option>Elice</option>
        <option>Bob</option>
        <option>Carol</option>
      </select>
      <Dashboard name={user} />
    </>
  );
};

function App() {
  return <AdminnDashboard />;
}

export default App;
