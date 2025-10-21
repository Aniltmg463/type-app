
"use client"; // Must mark as Client Component to use useState

import { useEffect, useState } from "react";

export default function Page() {
  // Declare state
  const [count, setCount] = useState(0);
  const [data,setData] = useState('Ram');

  useEffect( ()=>{
    console.log("componet mounted")
  },[data,count])

  // Function to update state
  function updateCount() {
    setCount(count + 1);
  }
  function updateData() {
    setData("sita");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Button clicked {count} times</h1>
      <button onClick={updateCount}>Click me</button>
        <button onClick={updateData}>Update me</button>
    </div>
  );
}
