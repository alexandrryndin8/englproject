export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <section className="space-y-5">

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Exam preparation 
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-zinc-300 sm:text-lg">
            This website will help you review the entire textbook and prepare for the exam. Here you can find quizzes and chapter summaries.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
            You can find all the content you need at the top in the header.
          </div>
        </section>

        <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />

          <div className="relative p-4 sm:p-6">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
              <img
                src="/book.jpg"
                alt="Book"
                className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
              />
            </div>

            <div className="mt-4 space-y-1">
              <div className="text-sm font-medium text-white">PROFESSIONAL IT ENGLISH</div>
              <div className="text-xs text-zinc-400">
                By <span className="text-zinc-300">V. G. Besedina, and I. A. Manukhina</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
