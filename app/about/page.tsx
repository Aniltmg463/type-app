// import Header from "@/components/Header";
import Header from './../../components/Header';

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">Learn more about our company and mission.</p>
      </main>
    </>
  );
}