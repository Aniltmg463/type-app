// import { useContext } from "react";

// export default function ChildC() {
//     const name = useContext(data);
//     const gender = useContext(data1);

    
//   return <>
//   <h1>CHild c</h1>
//   <p>Namw: {name} and gender: {gender}</p>
//   </>
// }


"use client";

type Props = {
  name: string;
  gender: string;
};

export default function ChildC({ name, gender }: Props) {
  return (
    <>
      <h1>Child C</h1>
      <p>Name: {name} and Gender: {gender}</p>
    </>
  );
}
