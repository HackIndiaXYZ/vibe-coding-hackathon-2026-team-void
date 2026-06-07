export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">
      <h1 className="text-6xl font-bold">
        SignalX
      </h1>

      <p className="mt-4 text-zinc-400">
        AI Early Warning System for Student Success
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/dashboard"
          className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          Open Dashboard
        </a>
      </div>
    </main>
  );
}