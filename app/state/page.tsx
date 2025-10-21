
//normal js
// export default function Page() {
//     var x=10;
//   function updateState(){
  
//   }
//   return (
//     <>
//       <h1>Learnig state {x}</h1>
//       <button onClick={updateState}>Clickme</button>
//     </>
//   );
// }

// >>>>>>>>>>>>>>>>>>>>>>>
//run correctly
"use client"; // 👈 must be at the very top if you use onClick or any interactivity

export default function Page() {
  let x = 10;

  function updateState() {
    x = x + 1;
    console.log("Updated x:", x);
  }

  return (
    <>
      <h1>Learning state {x}</h1>
      <button onClick={updateState}>Click me</button>
    </>
  );
}



// >>>>>>>>>
//run corrctly with valye change whe click
// "use client";

// import { useState } from "react";

// export default function Page() {
//   const [x, setX] = useState(10);

//   function updateState() {
//     setX(x + 1);
//   }

//   return (
//     <>
//       <h1>Learning state {x}</h1>
//       <button onClick={updateState}>Click me</button>
//     </>
//   );
// }
