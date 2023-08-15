import { useState } from "react";
import "./Counter.scss";

function Counter() {
  const [count, setCount] = useState(0);

  setCount(count + 1);
  return <></>;
}

export default Counter;
