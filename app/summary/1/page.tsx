import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Big data is an accumulation of information that is too large and complex for traditional database management tools to handle efficiently.",
  "It is often described through the “3Vs”: volume (how much data), velocity (how fast data arrives), and variety (how many different formats and sources).",
  "Modern systems can store and process massive streams of data, but making sense of it is difficult: tools can be expensive, complex, and may not produce results fast enough.",
  "Because of these limits, companies sometimes analyze only “snapshots” of data, which can cause them to miss important events that happen outside that captured moment.",
  "Organizations that use big data pragmatically can gain new insights, improve processes, and even predict future outcomes.",
];

const notes: VocabItem[] = [
  { n: 1, term: "accumulation", extra: "[əˌkjuːmjəˈleɪʃn]", ru: "накопление, скопление" },
  { n: 2, term: "vector", extra: "[ˈvektə]", ru: "вектор" },
  { n: 3, term: "complex", extra: "[ˈkɒmpleks]", ru: "сложный" },
  { n: 4, term: "associated", extra: "[əˈsəʊsieɪtɪd]", ru: "связанный, ассоциируемый" },
  { n: 5, term: "tsunami", extra: "[tsuːˈnɑːmi]", ru: "цунами" },
  { n: 6, term: "to file smth", extra: "[faɪl]", ru: "регистрировать и хранить (документы)" },
  { n: 7, term: "type", extra: "[taɪp]", ru: "тип" },
  { n: 8, term: "category", extra: "[ˈkætəɡəri]", ru: "категория" },
  { n: 9, term: "excel table", extra: "[ˈeksəl]", ru: "таблица Excel" },
  { n: 10, term: "pdf", extra: "[piː diː ef]", ru: "формат PDF (Portable Document Format)" },
  { n: 11, term: "audio", extra: "[ˈɔːdiəʊ]", ru: "аудио" },
  { n: 12, term: "structure", extra: "[ˈstrʌktʃə]", ru: "структура" },
  { n: 13, term: "enormous", extra: "[ɪˈnɔːməs]", ru: "огромный" },
  { n: 14, term: "pragmatically", extra: "[præɡˈmætɪkli]", ru: "прагматично, практично" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "big data", extra: "[ˌbɪɡ ˈdeɪtə]", ru: "большие данные, «биг дата»" },
  { n: 2, term: "to refer to smth", extra: "[rɪˈfɜː]", ru: "относиться к чему-то, отсылать" },
  { n: 3, term: "tool", extra: "[tuːl]", ru: "инструмент, средство" },
  { n: 4, term: "to gain", extra: "[ɡeɪn]", ru: "получить; добиться" },
  { n: 5, term: "volume", extra: "[ˈvɒljuːm]", ru: "объём" },
  { n: 6, term: "velocity", extra: "[vəˈlɒsəti]", ru: "скорость" },
  { n: 7, term: "variety", extra: "[vəˈraɪəti]", ru: "разнообразие, многообразие" },
  { n: 8, term: "to incorporate", extra: "[ɪnˈkɔːpəreɪt]", ru: "включать в себя, вбирать в себя" },
  { n: 9, term: "incomprehensible", extra: "[ˌɪnkɒmprɪˈhensəb(ə)l]", ru: "непостижимый, недоступный пониманию" },
  { n: 10, term: "roughly", extra: "[ˈrʌfli]", ru: "приблизительно, примерно" },
  { n: 11, term: "measure", extra: "[ˈmeʒə]", ru: "мера, степень, масштаб; измерять" },
  { n: 12, term: "to ingest", extra: "[ɪnˈdʒest]", ru: "поглощать/принимать внутрь (данные)" },
  { n: 13, term: "to retrieve", extra: "[rɪˈtriːv]", ru: "извлечь, найти, восстановить" },
  { n: 14, term: "pure (text)", extra: "[pjʊə]", ru: "чистый, без примесей; простой текст" },
  { n: 15, term: "majority", extra: "[məˈdʒɒrəti]", ru: "большинство, большая часть" },
  { n: 16, term: "vast", extra: "[vɑːst]", ru: "огромный, значительный" },
  { n: 17, term: "to expand (in smth)", extra: "", ru: "расширяться, увеличиваться в чём-то" },
  { n: 18, term: "overwhelming", extra: "[ˌəʊvəˈwelmɪŋ]", ru: "слишком трудоёмкий; ошеломляющий" },
  { n: 19, term: "to make sense of smth", extra: "", ru: "осмыслить, разобраться в чём-то" },
  { n: 20, term: "reasonable", extra: "[ˈriːzənəb(ə)l]", ru: "разумный, приемлемый" },
  { n: 21, term: "to be forced to do smth", extra: "", ru: "быть вынужденным делать что-то" },
  { n: 22, term: "snapshot", extra: "[ˈsnæpʃɒt]", ru: "моментальный снимок; «снимок данных»" },
  { n: 23, term: "undesirable", extra: "[ˌʌndɪˈzaɪərəb(ə)l]", ru: "нежелательный" },
  { n: 24, term: "to miss smth", extra: "", ru: "пропустить, упустить" },
  { n: 25, term: "event", extra: "[ɪˈvent]", ru: "событие" },
  { n: 26, term: "particular", extra: "[pəˈtɪkjələ]", ru: "определённый; отдельный" },
  { n: 27, term: "effort", extra: "[ˈefət]", ru: "усилие" },
  { n: 28, term: "to predict", extra: "[prɪˈdɪkt]", ru: "предсказывать" },
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
          Summary • Unit 1
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          BIG DATA
        </h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Retelling, vocabulary, and grammar notes.
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

        <ListCard
          title="V. Grammar (EN): Emphatic DO/DOES/DID + Verb"
          subtitle="How to emphasize an action in English (Simple Present / Simple Past)."
        >
          <div className="space-y-4 text-sm leading-relaxed text-zinc-200">
            <p>
              We can use <span className="font-semibold text-white">do / does / did</span>{" "}
              before the base form of a verb to add emphasis. It means “really”, “indeed”,
              or “I want to stress this is true”.
            </p>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
              <div className="text-sm font-semibold text-white">Form</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                <li>
                  <span className="font-medium text-white">Present:</span> I{" "}
                  <span className="font-semibold text-white">do</span> + verb, he/she/it{" "}
                  <span className="font-semibold text-white">does</span> + verb
                </li>
                <li>
                  <span className="font-medium text-white">Past:</span> I/he/she/they{" "}
                  <span className="font-semibold text-white">did</span> + verb
                </li>
                <li>
                  The verb after do/does/did is always the{" "}
                  <span className="font-medium text-white">base form</span>:{" "}
                  <span className="text-zinc-200">do want</span>,{" "}
                  <span className="text-zinc-200">does like</span>,{" "}
                  <span className="text-zinc-200">did come</span>.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
              <div className="text-sm font-semibold text-white">Examples</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                <li>
                  <span className="font-medium text-white">I do want</span> to come to the party.
                </li>
                <li>
                  <span className="font-medium text-white">Susan does like</span> to talk a lot!
                </li>
                <li>
                  <span className="font-medium text-white">He did come</span> yesterday.
                </li>
                <li>
                  Many companies <span className="font-medium text-white">do capture</span> data,
                  but they don’t have the tools to analyze it easily.
                </li>
              </ul>
            </div>

            <p className="text-zinc-300">
              Tip: questions already use do/does/did (Do you…? Did he…?), so the emphatic
              use is most noticeable in affirmative sentences when you want extra stress.
            </p>
          </div>
        </ListCard>
      </div>
    </main>
  );
}
