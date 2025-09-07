import React from "react";
import { useState } from "react";

function Calculaet() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev+1)
  }
  return <div>
    <button onClick={increment}>Plus</button>
    <div>{count}</div>
  </div>;
}

export default Calculaet;
