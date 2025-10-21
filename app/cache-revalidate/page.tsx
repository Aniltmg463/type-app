//2. Server-Side Caching with Route Handlers


// export async function GET() {
//   const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());

//   return new Response(JSON.stringify(data), {
//     headers: {
//       "Cache-Control": "s-maxage=60, stale-while-revalidate=30"
//     },
//   });
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


import { useQuery } from "@tanstack/react-query";

// const { data } = useQuery({
//   queryKey: ['posts'],
//   queryFn: () => fetch('/api/posts').then(res => res.json()),
//   staleTime: 60 * 1000, // 1 minute
//   cacheTime: 5 * 60 * 1000, // 5 minutes
// });
