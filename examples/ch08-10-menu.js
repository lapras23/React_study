import "./App.css";
import { useState, useEffect, useRef } from "react";

const Menu = () => {
  const [isExpanded, setExpanded] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (!isExpanded) return;

    const onWindowClick = () => setExpanded(false);
    const onMenuClick = (e) => e.stopPropagation(); // stopPropagation : bubble-up 되는 것을 막아줌. 상위 태그가 실행되지 않음
    const menu = menuRef.current;
    window.addEventListener("pointerdown", onWindowClick); // 메뉴 이외의 윈도우를 클릭하면 접힘
    menu.addEventListener("pointerdown", onMenuClick); // 메뉴 영역을 클릭하면 접히는 것을 막아줌
    return () => {
      window.removeEventListener("pointerdown", onWindowClick); // 정리함수로 두 리스너를 모두 제거
      menu.removeEventListener("pointerdown", onMenuClick);
    };
  }, [isExpanded]); // 메뉴가 확장된 상태에서 축소된 상태, 그 반대로 상태가 변경될 때마다 effect 훅이 다시 실행

  // div style 안에 속성 값을 넣을 때 중괄호를 두 번 써야 함!!
  return (
    <main>
      <button onClick={() => setExpanded(true)}>Show menu</button>
      {isExpanded && (
        <div
          ref={menuRef}
          style={{ border: "1px solid black", padding: "1em" }}
        >
          This is the menu
        </div>
      )}
    </main>
  );
};

function App() {
  return <Menu />;
}

export default App;
