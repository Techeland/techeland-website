export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
