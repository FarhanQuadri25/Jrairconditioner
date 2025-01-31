export default async function Products({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <>
      <div className="new-container-2">
        <h1>{name}</h1>
      </div>
    </>
  );
}
