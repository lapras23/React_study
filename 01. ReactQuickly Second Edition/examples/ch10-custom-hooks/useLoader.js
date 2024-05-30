import { useReducer } from "react";

function reducer(state, { type, payload }) {
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
}

function useLoader(initialState) {
  return useReducer(reducer, initialState);
}

export default useLoader;

/*
import useLoader from "./useLoader";
const INITIAL_STATE = {status: "INITIALIZE", result: null, error: null};

function Loader() {
    const [state, dispatch] = useLoader(INITIAL_STATE);
}

...
*/
