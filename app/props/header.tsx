// function Header(){
//     return <h1>Hello header</h1>
// }

// export default Header


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function add(a) {
//   return a + a;
// }

// console.log(add(5)); // Output: 10

//>>>>>>>>
// header.tsx
//Option 1: Destructure only
type HeaderProps = {
  name: string;
};

export default function Header({ name }: HeaderProps) {
      console.log("Header props:", { name }); // log props object in console
  return <>
  <h2>Welcome, {name}</h2>
  </>
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Option 2: Use props directly
// type HeaderProps = {
//   name: string;
// };

// export default function Header(props: HeaderProps) {
//   return (
//     <>
//       <h2>Welcome, {props.name}</h2>
//       <p>hello {props.name}</p>
//     </>
//   );
// }
