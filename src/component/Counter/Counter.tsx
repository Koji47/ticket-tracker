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
      <div className="counter">
        <button onClick={decrementCount}>-</button>
        <h3>Tickets: </h3>
        <h3> {count}</h3>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  );
};

export default Counter;
