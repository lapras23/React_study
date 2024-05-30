import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);
  const update = (d) => setCounter((v) => v + d);
  const handleIncrement = () => update(1);
  const handleDecrement = () => update(-1);
  return { counter, handleIncrement, handleDecrement };
}

export default useCounter;

/*
import useCounter from "./useCounter";

function StyledCounter() {
    const {counter, handleIncrement, handleDecrement} = useCounter();
    return (
        <section>
          <h1>Counter: {counter}</h1>
          <div>
            <Button handleClick={handleIncrement} label="Increment" />
            <Button handleClick={handleDecrement} label="Decrement" />
          </div>
        </section>
    );
}
*/
