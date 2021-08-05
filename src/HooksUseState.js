import React, { useState } from "react";

export default function HooksUseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="HooksUseState">
      <h1>UseState</h1>
      <button onClick={() => setCount(count + 1)}>Count Me</button>
      <p>{count}</p>
    </div>
  );
}
