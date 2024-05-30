import { Fragment } from "react";

const Breeds = (props) => {
  // map 함수 중괄호가 아닌 괄호를 써야함
  return (
    <dl>
      {props.list.map(({ breed, description }) => (
        <Fragment key={breed}>
          <dt>{breed}</dt>
          <dd>{description}</dd>
        </Fragment>
      ))}
    </dl>
  );
};

const lists = [
  { breed: "치와와", description: "작은 품종의 개." },
  { breed: "코기", description: "귀여운 품종의 개." },
  { breed: "컴벌랜드 시프도그", description: "멸종된 품종의 개." },
];

function App() {
  return <Breeds list={lists} />;
}

export default App;
