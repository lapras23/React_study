import { useEffect, useReducer } from "react";

const reducer = (state, { type, payload }) => {
  //state에는 remaining, isRunning, isCompleted 값이 들어가있음
  switch (type) {
    case "PLAY":
      return { ...state, isRunning: true }; // PLAY일 경우 isRunning을 true로 바꿔줌
    case "PAUSE":
      return { ...state, isRunning: false }; // PAUSE일 경우 isRunning을 false로 바꿔줌
    case "RESTART":
      return {
        ...state,
        remaining: state.initialRemaining, // RESTART 버튼을 누르면 remaining을 초기 시간으로 다시 설정하고, isCompleted를 false로 바꿔줌
        isCompleted: false,
      };
    case "TICK": {
      const remaining = state.remaining - 1; // remaining값을 지금 상태값에서 -1을 감소시킴
      if (remaining > 0) {
        // remaining이 0보다 크면 지금 상태에서 remaining값을 감소시킨 값을 넣어서 리턴해줌
        return {
          ...state,
          remaining,
        };
      }
      return {
        // 만약 remaining이 0이면, remaining을 0으로 바꾸고, isRunning을 false로, isCompleted를 true로 바꿔줌
        ...state,
        remaining: 0,
        isRunning: false,
        isCompleted: true,
      };
    }
    default:
      return state;
  }
};

const useTimer = (initialRemaining) => {
  //useTimer hook은 초기 시간을 받아서 initialRemaining값으로 넣어주고, remaining값은 초기 값으로 설정해준다
  const initialState = {
    initialRemaining,
    remaining: initialRemaining,
    isRunning: false,
    isCompleted: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState); // reducer 함수와 useTimer로 초기값을 받아서 생성한 초기 객체를 넣어줌

  useEffect(() => {
    if (!state.isRunning) {
      // isRunning이 false면 아무 것도 반환하지 않는다
      return;
    }

    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000); // 1초마다 TICK을 실행, remaining이 1초씩 감소함
    return () => clearInterval(interval); // 정리함수
  }, [state.isRunning, dispatch]); // isRunning 상태가 변하거나, dispatch 액션이 바뀌면 훅이 다시 실행됨

  return { state, dispatch }; // 현재 상태와 dispatch를 반환함
};

export default useTimer;
