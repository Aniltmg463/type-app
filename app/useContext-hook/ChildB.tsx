// import ChildC from "./ChildC";

// export default function ChildB() {
    
//   return <>
//   <h1>Child B</h1>
//   <ChildC/>
//   </>
// }

"use client";

import ChildC from "./ChildC";

type Props = {
  name: string;
  gender: string;
};

export default function ChildB({ name, gender }: Props) {
  return (
    <>
      <h1>Child B</h1>
      <ChildC name={name} gender={gender} />
    </>
  );
}
