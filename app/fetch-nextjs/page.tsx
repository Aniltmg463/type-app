export default async function Page() {
//   let data = await fetch('https://api.vercel.app/blog')
let data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  let posts = await data.json()
  return (
    // <ul>
    //   {posts.map((post: any) => (
    //     // <li key={post.id}>{post.title}</li>
    //     //  <li key={post.id}>{post.body}</li>
    //   ))}
    // </ul>

    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </li>
      ))}
    </ul>
  )
}