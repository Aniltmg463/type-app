// import ChildB from "./ChildB";

// export default function ChildA() {
    
//   return <>
//   <h1>ChildA</h1>
//   <ChildB/>
//   </>
// }


"use client";

import ChildB from "./ChildB";

type Props = {
  name: string;
  gender: string;
};

export default function ChildA({ name, gender }: Props) {
  return (
    <>
      <h1>Child A</h1>
      <ChildB name={name} gender={gender} />
    </>
  );
}
