export default function Card({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <article className="p-6 border rounded-lg border-accent">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </article>
  );
}
