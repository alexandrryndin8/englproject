import Link from "next/link";

const units = [
  { id: 1, title: "BIG DATA", href: "/wordcard/1" },
  { id: 2, title: "DATA MINING", href: "/wordcard/2" },
  { id: 3, title: "DATA SECURITY", href: "/wordcard/3" },
  { id: 4, title: "CLOUD TECHNOLOGY", href: "/wordcard/4" },
  { id: 5, title: "ARTIFICIAL INTELLIGENCE", href: "/wordcard/5" },
  { id: 6, title: "BIOMETRIC AUTHENTICATION", href: "/wordcard/6" },
  { id: 7, title: "HUMAN ENHANCEMENT", href: "/wordcard/7" },
];

export default function WordCardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          WordCard
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Select unit
        </h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Choose a unit to practice vocabulary with flashcards.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((u) => (
          <li key={u.id}>
            <Link
              href={u.href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:bg-white/10"
            >
              <div className="min-w-0">
                <div className="text-xs text-zinc-400">Unit {u.id}</div>
                <div className="mt-1 truncate text-sm font-medium text-white">
                  {u.title}
                </div>
              </div>

              <span className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/60 text-zinc-200 transition group-hover:bg-zinc-950">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

