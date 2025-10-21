// 'use client'
// import React from 'react'
// import Home from './usetanstack'

// const page = () => {
//   return (
//     <div>todo component</div>
//     // <Home/> //throw error bcux it is not function
    
//   )
// }

// export default page


// ?????????????????????????????????????????

'use client'

import Home from "./usetanstack"

export default function Page(){
    return (
         <>
   <h1>hello</h1>
   <Home/>
    </>
    )
   
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// "use client";

// import { useQuery } from "@tanstack/react-query";

// export default function Home() {
//   const { data, isLoading, isError } = useQuery({
//     queryKey: ["todos"],
//     queryFn: () =>
//       fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()),
//   });

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   if (isError) {
//     return <div>Something went wrong!</div>;
//   }

//   return (
//     <div>
//       <h1>Todos</h1>
//       <ul>
//         {data.slice(0, 5).map((todo: any) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
