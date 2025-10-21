"use client";

import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

export default function Page() {
  const name = "Akash";
  const gender = "male";

  return (
    <>
      <h1>Main Page</h1>
      {/* Pass props directly */}
      <ChildB name={name} gender={gender} />
    </>
  );
}
