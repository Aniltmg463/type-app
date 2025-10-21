"use client";

type CounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Counter({ count, setCount }: CounterProps) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
