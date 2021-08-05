import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Count Me</h1>
      <button onClick={() => setCount(count + 1)}>Count Me</button>
      <p>{count}</p>
    </div>
  );
}
