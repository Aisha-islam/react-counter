import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={"box"}>
        <h1>Counter</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          plus{" "}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>minus</button>
        <button onClick={() => setCount(0)}>reset</button>
        <p>{count}</p>
      </div>
    </>
  );
}

export default Counter;
