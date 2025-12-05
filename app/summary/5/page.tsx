import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Artificial intelligence (AI) is the simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.",
  "Particular applications of AI include expert systems, speech recognition, and machine vision.",
  "AI has gained prominence recently due to big data — the increase in speed, size and variety of data businesses are now collecting.",
  "AI can identify patterns in data more efficiently than humans, enabling businesses to gain more insight from their data.",
  "Examples of AI technology include automation, machine learning, machine vision, natural language processing, and robotics.",
  "Automation is the process of making a system function automatically. RPA (Robotic Process Automation) can adapt to changing circumstances.",
  "There are three types of machine learning: supervised learning (labeled data), unsupervised learning (unlabeled data sorted by similarities), and reinforcement learning (feedback after actions).",
  "Machine vision captures and analyzes visual information using cameras. It isn't bound by biology and can be programmed to see through walls.",
  "Natural language processing (NLP) processes human language by computer programs. Examples include spam detection, text translation, and sentiment analysis.",
  "Robotics focuses on design and manufacturing of robots used for difficult tasks, such as assembly lines or moving objects in space.",
];

const notes: VocabItem[] = [
  { n: 1, term: "simulation", extra: "[ˌsɪmjʊˈleɪʃn]", ru: "симуляция, моделирование" },
  { n: 2, term: "process", extra: "[ˈprəʊses]", ru: "процесс" },
  { n: 3, term: "efficiently", extra: "[ɪˈfɪʃəntlɪ]", ru: "эффективно" },
  { n: 4, term: "self-correction", extra: "[ˌself kəˈrekʃn]", ru: "самокоррекция" },
  { n: 5, term: "to collect", extra: "[kəˈlekt]", ru: "собирать" },
  { n: 6, term: "to identify", extra: "[aɪˈdentɪfaɪ]", ru: "идентифицировать" },
  { n: 7, term: "robotic process automation", extra: "[rəʊˈbɒtɪk ˈprəʊses ˌɔːtəˈmeɪʃn]", ru: "роботизированная автоматизация процессов" },
  { n: 8, term: "natural language processing", extra: "[ˈnætʃərəl ˈlæŋɡwɪdʒ ˈprəʊsəsɪŋ]", ru: "обработка текстов на естественном языке" },
  { n: 9, term: "robotics", extra: "[rəʊˈbɒtɪks]", ru: "робототехника" },
  { n: 10, term: "to adapt", extra: "[əˈdæpt]", ru: "адаптировать" },
  { n: 11, term: "machine vision", extra: "[məˈʃiːn ˈvɪʒn]", ru: "машинное зрение" },
  { n: 12, term: "to analyze", extra: "[ˈænəlaɪz]", ru: "анализировать" },
  { n: 13, term: "visual", extra: "[ˈvɪʒʊəl]", ru: "визуальный" },
  { n: 14, term: "analog-to-digital conversion", extra: "[kənˈvɜːʃn]", ru: "преобразование из аналоговой формы в цифровую" },
  { n: 15, term: "eyesight", extra: "[ˈaɪˌsaɪt]", ru: "зрение" },
  { n: 16, term: "biology", extra: "[baɪˈɒlədʒi]", ru: "биология" },
  { n: 17, term: "identification", extra: "[aɪˌdentɪfɪˈkeɪʃn]", ru: "идентификация" },
  { n: 18, term: "medical image analysis", extra: "[ˈmedɪkəl ˈɪmɪdʒ əˈnæləsɪs]", ru: "анализ медицинских снимков" },
  { n: 19, term: "spam", extra: "[spæm]", ru: "спам" },
  { n: 20, term: "subject", extra: "[ˈsʌbdʒɪkt]", ru: "субъект, тема" },
  { n: 21, term: "current", extra: "[ˈkʌrənt]", ru: "современный" },
  { n: 22, term: "sentiment analysis", extra: "[ˈsentɪmənt əˈnæləsɪs]", ru: "анализ тональности высказываний" },
  { n: 23, term: "focus", extra: "[ˈfəʊkəs]", ru: "фокус" },
  { n: 24, term: "object", extra: "[ˈɒbdʒekt]", ru: "объект" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "intelligence", extra: "[ɪnˈtelɪdʒəns]", ru: "интеллект" },
  { n: 2, term: "artificial intelligence", extra: "[ˌɑːtɪˈfɪʃəl]", ru: "искусственный интеллект (ИИ)" },
  { n: 3, term: "human intelligence", extra: "[ˈhjuːmən]", ru: "человеческий интеллект" },
  { n: 4, term: "to retrieve", extra: "[rɪˈtriːv]", ru: "извлекать" },
  { n: 5, term: "to retrieve information", extra: "", ru: "извлекать информацию" },
  { n: 6, term: "to reason", extra: "[ˈriːzn]", ru: "рассуждать, делать выводы" },
  { n: 7, term: "reasoning", extra: "", ru: "рассуждение" },
  { n: 8, term: "conclusion", extra: "[kənˈkluːʒn]", ru: "вывод" },
  { n: 9, term: "to reach a conclusion", extra: "", ru: "приходить к выводу" },
  { n: 10, term: "approximate conclusions", extra: "[əˈprɒksɪmət]", ru: "промежуточные выводы" },
  { n: 11, term: "definite conclusions", extra: "", ru: "окончательные выводы" },
  { n: 12, term: "particular", extra: "[pəˈtɪkjʊlə]", ru: "отдельный" },
  { n: 13, term: "recognition", extra: "[ˌrekəɡˈnɪʃn]", ru: "распознавание" },
  { n: 14, term: "speech recognition", extra: "", ru: "распознавание речи" },
  { n: 15, term: "to gain", extra: "[ɡeɪn]", ru: "получать" },
  { n: 16, term: "to gain prominence", extra: "[ˈprɒmɪnəns]", ru: "завоевать известность" },
  { n: 17, term: "to gain insight", extra: "[ˈɪnsaɪt]", ru: "вникать, получать чёткую картину" },
  { n: 18, term: "circumstance", extra: "[ˈsɜːkəmstəns]", ru: "обстоятельство" },
  { n: 19, term: "machine learning", extra: "", ru: "машинное обучение" },
  { n: 20, term: "deep learning", extra: "", ru: "глубокое обучение" },
  { n: 21, term: "supervised learning", extra: "[ˈsuːpəvaɪzd]", ru: "обучение с учителем" },
  { n: 22, term: "unsupervised learning", extra: "", ru: "обучение без учителя" },
  { n: 23, term: "reinforcement learning", extra: "[ˌriːɪnˈfɔːsmənt]", ru: "обучение с подкреплением" },
  { n: 24, term: "to label", extra: "[ˈleɪbl]", ru: "маркировать, размечать" },
  { n: 25, term: "to be labeled", extra: "", ru: "быть размеченным" },
  { n: 26, term: "similarity", extra: "[ˌsɪməˈlærəti]", ru: "совпадение, сходство" },
  { n: 27, term: "similarities and differences", extra: "", ru: "сходства и различия" },
  { n: 28, term: "to be compared to smth", extra: "[kəmˈpeəd]", ru: "быть сравниваемым с ч.-л." },
  { n: 29, term: "to be bound by smth", extra: "[baʊnd]", ru: "быть ограниченным ч.-л." },
  { n: 30, term: "signature", extra: "[ˈsɪɡnətʃə]", ru: "подпись" },
  { n: 31, term: "signature identification", extra: "", ru: "идентификация по подписи" },
  { n: 32, term: "junk", extra: "[dʒʌŋk]", ru: "ненужный хлам" },
  { n: 33, term: "approach", extra: "[əˈprəʊtʃ]", ru: "подход" },
  { n: 34, term: "current approaches", extra: "", ru: "современные подходы" },
  { n: 35, term: "to perform", extra: "[pəˈfɔːm]", ru: "выполнять" },
  { n: 36, term: "to perform repeatable tasks", extra: "[rɪˈpiːtəbl]", ru: "выполнять повторяющиеся задачи" },
  { n: 37, term: "to capture", extra: "[ˈkæptʃə]", ru: "захватывать" },
  { n: 38, term: "assembly line", extra: "[əˈsembli laɪn]", ru: "конвейер" },
  { n: 39, term: "social setting", extra: "[ˌsəʊʃəl ˈsetɪŋ]", ru: "ситуации социального общения" },
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

export default function SummaryUnit5Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          Summary • Unit 5
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          ARTIFICIAL INTELLIGENCE
        </h1>
        <p className="mt-2 max-w-prose text-zinc-300">
          Retelling, vocabulary, and notes.
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
            <div className="text-sm font-semibold text-white">Key idea: Three Types of Machine Learning</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Supervised Learning</span> — data sets are labeled so that patterns can be detected and used to label new data sets.
              </li>
              <li>
                <span className="font-medium text-white">Unsupervised Learning</span> — data sets aren't labeled and are sorted according to similarities or differences.
              </li>
              <li>
                <span className="font-medium text-white">Reinforcement Learning</span> — data sets aren't labeled but the AI system is given feedback after performing actions.
              </li>
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
            <div className="text-sm font-semibold text-white">AI Technology Examples</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Automation</span> — making systems function automatically (RPA adapts to changing circumstances).
              </li>
              <li>
                <span className="font-medium text-white">Machine Vision</span> — captures and analyzes visual information, not bound by biology.
              </li>
              <li>
                <span className="font-medium text-white">NLP</span> — processing human language (spam detection, text translation, sentiment analysis).
              </li>
              <li>
                <span className="font-medium text-white">Robotics</span> — design and manufacturing of robots for difficult tasks.
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
