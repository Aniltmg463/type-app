"use client";

import { useState } from "react";
import Counter from "./Counter";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Button clicked {count} times</h1>

      {/* Pass props to child */}
      <Counter count={count} setCount={setCount} />
    </div>
  );
}
