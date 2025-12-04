import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Human enhancement refers to the use of technology to improve physical or cognitive abilities beyond normal human limits.",
  "Modern examples include bionic eyes that restore or improve vision, exoskeleton suits that increase human strength and mobility, and neuroimplants that interact with the brain’s electrical signals.",
  "Cognitive enhancements aim to boost memory, focus, and learning abilities, potentially transforming how people work and study.",
  "Human enhancement technologies can significantly improve the quality of life for people with disabilities, helping them walk, see, or communicate more effectively.",
  "However, the unit also discusses ethical concerns such as inequality of access, privacy risks, and the possibility that enhanced individuals may gain unfair advantages.",
];



const notes: VocabItem[] = [
  { n: 1, term: "enhancement", extra: "[ɪnˈhɑːnsmənt]", ru: "усиление, улучшение" },
  { n: 2, term: "ability", extra: "[əˈbɪləti]", ru: "способность" },
  { n: 3, term: "bionic", extra: "[baɪˈɒnɪk]", ru: "бионический" },
  { n: 4, term: "mobility", extra: "[məʊˈbɪləti]", ru: "подвижность" },
  { n: 5, term: "exoskeleton", extra: "[ˈeksəʊˌskelɪtən]", ru: "экзоскелет" },
  { n: 6, term: "neuroimplant", extra: "", ru: "нейроимплант" },
  { n: 7, term: "electrical signals", extra: "", ru: "электрические сигналы" },
  { n: 8, term: "cognitive", extra: "[ˈkɒɡnətɪv]", ru: "познавательный, когнитивный" },
  { n: 9, term: "ethical", extra: "[ˈeθɪkəl]", ru: "этический" },
  { n: 10, term: "equality", extra: "[ɪˈkwɒləti]", ru: "равенство" },
  { n: 11, term: "advantage", extra: "[ədˈvɑːntɪdʒ]", ru: "преимущество" },
  { n: 12, term: "brain–computer interface", extra: "", ru: "интерфейс мозг-компьютер" },
];


const vocabulary: VocabItem[] = [
  { n: 1, term: "human enhancement", extra: "", ru: "улучшение человека с помощью технологий" },
  { n: 2, term: "physical enhancement", extra: "", ru: "физическое улучшение" },
  { n: 3, term: "cognitive enhancement", extra: "", ru: "когнитивное улучшение" },
  { n: 4, term: "bionic eye", extra: "", ru: "бионический глаз" },
  { n: 5, term: "exoskeleton suit", extra: "", ru: "экзоскелетный костюм" },
  { n: 6, term: "neuroimplant", extra: "", ru: "нейроимплант" },
  { n: 7, term: "memory enhancement", extra: "", ru: "улучшение памяти" },
  { n: 8, term: "mobility assistance", extra: "", ru: "помощь в передвижении" },
  { n: 9, term: "to restore", extra: "[rɪˈstɔː]", ru: "восстанавливать" },
  { n: 10, term: "to augment", extra: "[ɔːɡˈment]", ru: "усиливать, расширять возможности" },
  { n: 11, term: "artificial limb", extra: "", ru: "искусственная конечность" },
  { n: 12, term: "brain interface", extra: "", ru: "мозговой интерфейс" },
  { n: 13, term: "inequality", extra: "", ru: "неравенство" },
  { n: 14, term: "privacy concerns", extra: "", ru: "проблемы конфиденциальности" },
  { n: 15, term: "unfair advantage", extra: "", ru: "несправедливое преимущество" },
  { n: 16, term: "risk", extra: "[rɪsk]", ru: "риск" },
  { n: 17, term: "ethical issue", extra: "", ru: "этическая проблема" },
  { n: 18, term: "biomechatronics", extra: "[ˌbaɪəʊmekəˈtrɒnɪks]", ru: "биомехатроника" },
  { n: 19, term: "prosthetic device", extra: "", ru: "протезное устройство" },
  { n: 20, term: "enhanced abilities", extra: "", ru: "усиленные способности" }
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
          Summary • Unit 7
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Human Enhancement
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
