import Menu from "./Menu";
import Main from "./Main";
import { DataProvider } from "./Context"; // App.js에는 value값이 담겨있는 DataProvider를 가져옴
import "./style.css";

function App() {
  // DataProvider를 넣어주면 그 아래 모든 태그들이 Children이 되고, value에 담긴 값을 Menu, Main으로 보내줌
  return (
    <DataProvider>
      <header>
        <Menu />
      </header>
      <Main />
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </DataProvider>
  );
}

export default App;
