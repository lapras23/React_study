import "./App.css";
import { useEffect } from "react";

const BlogPost = ({ title, body }) => {
  useEffect(() => {
    document.title = title; // 문서 제목을 title의 속성 값으로 설정
  }, [title]); // 문서 제목이 글 제목일 때만 업데이트 됨
  return (
    <article>
      <h1>{title}</h1>
      {body}
    </article>
  );
};

function App() {
  return (
    <main>
      <BlogPost title="First post" body={<p>Welcome to my cool website.</p>} />
    </main>
  );
}

export default App;
