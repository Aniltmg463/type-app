// import Header from "@/components/Header";
import Header from './../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
        <p className="text-lg">Welcome to our website!</p>
      </main>
    </>
  );
}