import "./App.css";

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

const Button = ({ children }) => {
  return <button style={BUTTON_STYLE}>{children}</button>;
};

const UserButton = ({ name }) => {
  return <Button>👤 {name}</Button>;
};

const Header = ({ name }) => {
  return (
    <header style={HEADER_STYLE}>
      <Button>Home</Button>
      <Button>Groups</Button>
      <Button>Profile</Button>
      <UserButton name={name}></UserButton>
    </header>
  );
};

const Welcome = ({ name }) => {
  return (
    <main>
      <h1>Welcome, {name}!</h1>
    </main>
  );
};

const Main = ({ name }) => {
  return (
    <main>
      <Welcome name={name} />
    </main>
  );
};

const Dashboard = ({ name }) => {
  return (
    <>
      <Header name={name} />
      <Main name={name} />
    </>
  );
};

function App() {
  return <Dashboard name="Elice" />;
}

export default App;
