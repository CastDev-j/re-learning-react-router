export function Welcome({ message }: { message: string }) {
  return (
    <main className="flex items-center justify-center pb-4">
      <h1 className="text-3xl font-bold">{message}</h1>
    </main>
  );
}
