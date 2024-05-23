import { useData } from "./Context";

const Main = () => {
  const { isLoggedIn, login, logout } = useData(); // DataProvider에서 받은 값들을 구조분해할당으로 가져옴, 여기선 links가 필요 없음

  return (
    <main>
      <h1>Welcome to this website</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <button onClick={login}>Log in</button>
      )}
    </main>
  );
};

export default Main;
