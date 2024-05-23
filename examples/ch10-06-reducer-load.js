import "./App.css";
import { useReducer, useEffect } from "react";

const URL = "//swapi.dev/api/films";

// 초기 상태를 지정해줌
const INITIAL_STATE = {
  status: "INITIALIZE",
  result: null,
  error: null,
};

// 이전 예제에서 payload가 추가됨
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, status: "LOADING" };
    case "FAILURE":
      return { ...state, status: "FAILURE", error: payload };
    case "SUCCESS":
      return { ...state, status: "SUCCESS", result: payload };
    default:
      return state;
  }
};

const Loader = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch(URL)
      .then((res) => res.json())
      .then(
        (
          { results } // fetch data 객체 중에 results에 정보들이 담겨있음
        ) =>
          dispatch({
            type: "SUCCESS",
            payload: results,
          })
      )
      .catch(({ message }) =>
        dispatch({
          type: "FAILURE",
          payload: message,
        })
      );
  }, []);

  const { status, error, result } = state; // reducer state에 저장된 값을 Destructuring

  if (status === "INITIALIZE") {
    return <h1>Initializing...</h1>;
  }
  if (status === "LOADING") {
    return <h1>Loading...</h1>;
  }
  if (status === "FAILURE") {
    return <h1>Error occurred: {error}</h1>;
  }

  return (
    <>
      <h1>Results are in</h1>
      <ul>
        {result.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
};
function App() {
  return <Loader />;
}

export default App;
