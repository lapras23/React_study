import "./App.css";
import { createContext, useContext } from "react";

const BorderContext = createContext(1);

const Button = ({ children }) => {
  const borderWidth = useContext(BorderContext);
  const style = {
    border: `${borderWidth}px solid black`,
    background: "transparent",
  };
  return <button style={style}>{children}</button>;
};

// Cart 버튼은 border 5로 함
const CartButton = () => {
  return (
    <BorderContext.Provider value={5}>
      <Button>Cart</Button>
    </BorderContext.Provider>
  );
};

const Header = () => {
  const style = {
    padding: "5px",
    borderBottom: "1px solid black",
    marginBottom: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "flex-end",
  };
  return (
    <header style={style}>
      <Button>Clothes</Button>
      <Button>Toys</Button>
      <CartButton />
    </header>
  );
};

const Footer = () => {
  const style = {
    padding: "5px",
    borderTop: "1px solic black",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <footer style={style}>
      <Button>About</Button>
      <Button>Jobs</Button>
      <CartButton />
    </footer>
  );
};

function App() {
  return (
    <main>
      <Header />
      <h1>Welcome to the shop!</h1>
      <BorderContext.Provider value={2}>
        <Footer />
      </BorderContext.Provider>
    </main>
  );
}

export default App;
