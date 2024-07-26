export default function Home() {
  return (
    <main className="flex min-h-screen max-w-7xl p-5 mx-auto flex-col">
      <div className="tracking-tight">
        <h1 className="font-semibold text-xl md:text-2xl">Countries Catalog</h1>
        <p className="text-xs md:text-sm mt-.5">
          <span className="text-slate-500">
            List all countries catalog in a table. Resource:{" "}
          </span>
          <a
            className="text-blue-600 underline"
            href="https://restcountries.com/"
            target="__blank"
          >
            Rest Countries
          </a>
        </p>
      </div>
    </main>
  );
}
