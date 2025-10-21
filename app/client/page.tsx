'use client'

import { useContextData } from "../component/Context/RootContext";

export default function Home() {
    const contextData = useContextData()
  return (
    <>
  <h1> Client page</h1>
  Cient Name Name: {contextData.name}
  email : {contextData.email}
  salry: {contextData.salaryy}
    </>
  );
}
