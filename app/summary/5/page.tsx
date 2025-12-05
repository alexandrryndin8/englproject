import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Cloud computing provides on-demand access to computing resources over the internet.",
  "IaaS offers virtualized hardware, PaaS provides platforms for development, and SaaS delivers software online.",
  "Public clouds are accessible by anyone, private clouds are restricted to an organization, and hybrid clouds combine both.",
  "Scalability allows cloud users to increase or decrease resources based on demand.",
  "Multi-tenancy enables multiple users to share the same infrastructure while keeping data separate.",
  "Cloud computing improves flexibility, cost-efficiency, and accessibility of IT services."
];

const notes: VocabItem[] = [
  { n: 1, term: "cloud computing", extra: "", ru: "облачные вычисления" },
  { n: 2, term: "IaaS", extra: "", ru: "инфраструктура как услуга" },
  { n: 3, term: "PaaS", extra: "", ru: "платформа как услуга" },
  { n: 4, term: "SaaS", extra: "", ru: "программное обеспечение как услуга" },
  { n: 5, term: "public cloud", extra: "", ru: "публичное облако" },
  { n: 6, term: "private cloud", extra: "", ru: "частное облако" },
  { n: 7, term: "hybrid cloud", extra: "", ru: "гибридное облако" },
  { n: 8, term: "scalability", extra: "", ru: "масштабируемость" },
  { n: 9, term: "multi-tenancy", extra: "", ru: "мультиарендность" },
  { n: 10, term: "redundancy", extra: "", ru: "резервирование" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "virtual machine", extra: "", ru: "виртуальная машина" },
  { n: 2, term: "cloud service", extra: "", ru: "облачная услуга" },
  { n: 3, term: "elasticity", extra: "", ru: "эластичность" },
  { n: 4, term: "API (Application Programming Interface)", extra: "", ru: "интерфейс программирования приложений" },
  { n: 5, term: "on-demand resources", extra: "", ru: "ресурсы по требованию" },
  { n: 6, term: "availability", extra: "", ru: "доступность" },
  { n: 7, term: "redundant storage", extra: "", ru: "резервное хранилище" },
  { n: 8, term: "data center", extra: "", ru: "центр обработки данных" },
  { n: 9, term: "virtual network", extra: "", ru: "виртуальная сеть" },
  { n: 10, term: "service-level agreement (SLA)", extra: "", ru: "соглашение об уровне сервиса" },
];


function ListCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function VocabGrid({ items }: { items: VocabItem[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li
          key={it.n}
          className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs text-zinc-400">#{it.n}</div>
              <div className="mt-1 truncate text-sm font-semibold text-white">
                {it.term}{" "}
                {it.extra ? (
                  <span className="font-medium text-zinc-400">{it.extra}</span>
                ) : null}
              </div>
              <div className="mt-2 text-sm text-zinc-300">{it.ru}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function SummaryUnit1Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          Summary • Unit 6
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Biometric Authentication
        </h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Retelling, vocabulary.
        </p>
      </div>

      <div className="grid gap-4">
        <ListCard
          title="Retelling (EN)"
          subtitle="Short paraphrase of the text in simple English."
        >
          <ol className="space-y-3">
            {summary.map((p, i) => (
              <li key={i} className="text-sm leading-relaxed text-zinc-200">
                <span className="mr-2 text-zinc-500">{i + 1}.</span>
                {p}
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
            <div className="text-sm font-semibold text-white">Key idea: 3Vs</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Volume</span> — the amount of data (can be enormous).
              </li>
              <li>
                <span className="font-medium text-white">Velocity</span> — the speed of incoming data (streams, uploads, sensors).
              </li>
              <li>
                <span className="font-medium text-white">Variety</span> — many formats (text, images, audio, video, logs, GPS, etc.).
              </li>
            </ul>
          </div>
        </ListCard>

        <ListCard title="II. Notes" subtitle="Extra words from the notes table.">
          <VocabGrid items={notes} />
        </ListCard>

        <ListCard title="III. Vocabulary" subtitle="All vocabulary items from the unit.">
          <VocabGrid items={vocabulary} />
        </ListCard>
      </div>
    </main>
  );
}
