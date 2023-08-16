import { useState } from "react";
import "./Counter.scss";

const Counter = ({}) => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <div>Ticket Count:</div>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default Counter;
