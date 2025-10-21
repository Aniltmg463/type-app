export default function ServiceItem({ serviceName }: { serviceName: string }) {
  return (
    <li className="py-1">{serviceName}</li>
  );
}