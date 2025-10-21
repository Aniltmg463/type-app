"use client";

export default function ServiceList({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-xl font-semibold mb-2">All Services List</h3>
      <ul className="list-disc pl-5">{children}</ul>
    </>
  );
}