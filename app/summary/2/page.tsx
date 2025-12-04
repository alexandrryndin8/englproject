import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Data mining is the process of finding anomalies, patterns and correlations within large data sets to predict outcomes.",
  "The term 'data mining' wasn't coined until the 1990s, though the practice has a long history.",
  "Its foundation comprises three scientific disciplines: statistics, artificial intelligence, and machine learning.",
  "Over the last decade, advances in processing power enabled quick, automated data analysis instead of manual, tedious practices.",
  "Retailers, banks, manufacturers, telecommunications providers and insurers use data mining to discover relationships among pricing, promotions, demographics, and business factors.",
  "While the volume of data produced is doubling every two years, more information does not necessarily mean more knowledge.",
  "Data mining allows you to sift through chaotic data, understand what is relevant, and accelerate informed decision-making.",
  "There are three types of modeling: descriptive (uncovers similarities in historical data), predictive (classifies future events), and prescriptive (recommends courses of action).",
];

const notes: VocabItem[] = [
  { n: 1, term: "data mining", extra: "[ˈdeɪtəˈmaɪnɪŋ]", ru: "дата майнинг, интеллектуальный анализ данных" },
  { n: 2, term: "anomaly", extra: "[əˈnɔməlɪ]", ru: "аномалия" },
  { n: 3, term: "analytics", extra: "[ˌænəˈlɪtɪks]", ru: "аналитика" },
  { n: 4, term: "automated", extra: "[ˈɔtəˌmeɪtɪd]", ru: "автоматизированный" },
  { n: 5, term: "chaotic", extra: "[keɪˈɔtɪk]", ru: "хаотичный" },
  { n: 6, term: "correlation", extra: "[ˌkɒrəˈleɪʃn]", ru: "соотношение, взаимоотношение" },
  { n: 7, term: "cornerstone", extra: "[ˈkɔːnəstəʊn]", ru: "основа, краеугольный камень" },
  { n: 8, term: "trend", extra: "[trend]", ru: "тенденция" },
  { n: 9, term: "manual", extra: "[ˈmænjuəl]", ru: "ручной" },
  { n: 10, term: "decade", extra: "[ˈdekeɪd]", ru: "десятилетие" },
  { n: 11, term: "retailer", extra: "[ˈriːteɪlə]", ru: "ритейлер, предприятие розничной торговли" },
  { n: 12, term: "manufacturer", extra: "[ˌmænjuˈfæktʃərə]", ru: "производитель" },
  { n: 13, term: "insurer", extra: "[ɪnˈʃʊərə]", ru: "страховая компания, страховщик" },
  { n: 14, term: "descriptive modeling", extra: "", ru: "дискриптивное моделирование" },
  { n: 15, term: "predictive modeling", extra: "", ru: "предиктивное моделирование" },
  { n: 16, term: "prescriptive modeling", extra: "", ru: "прескриптивное моделирование" },
  { n: 17, term: "similarity", extra: "[ˌsɪməˈlærəti]", ru: "сходство" },
  { n: 18, term: "preferences", extra: "[ˈprefərənsəz]", ru: "предпочтения" },
  { n: 19, term: "sentiment", extra: "[ˈsentɪmənt]", ru: "отношение" },
  { n: 20, term: "variable", extra: "[ˈveriəbəl]", ru: "переменная" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "patterns", extra: "[ˈpætnz]", ru: "шаблоны, модели, принципы" },
  { n: 2, term: "outcome", extra: "[ˈaʊtkʌm]", ru: "вероятное событие" },
  { n: 3, term: "range", extra: "[reɪndʒ]", ru: "диапазон, спектр" },
  { n: 4, term: "broad range of techniques", extra: "[tekˈniːks]", ru: "широкий спектр приемов" },
  { n: 5, term: "to increase revenues", extra: "[ɪnˈkriːs ˈrevənjuːz]", ru: "увеличить доходы" },
  { n: 6, term: "to cut costs", extra: "[kɒsts]", ru: "снизить затраты" },
  { n: 7, term: "to reduce risks", extra: "[rɪˈdjuːs]", ru: "снизить риски" },
  { n: 8, term: "to coin", extra: "[kɔɪn]", ru: "вводить в обращение, в употребление" },
  { n: 9, term: "to intertwine", extra: "[ˌɪntəˈtwaɪn]", ru: "переплетаться" },
  { n: 10, term: "intertwined disciplines", extra: "", ru: "связанные отрасли знания" },
  { n: 11, term: "artificial intelligence", extra: "[ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns]", ru: "искусственный разум" },
  { n: 12, term: "AI", extra: "[eɪˈaɪ]", ru: "искусственный разум" },
  { n: 13, term: "advances in smth", extra: "[ədˈvɑːnsɪz]", ru: "прогресс в чем-л, достижения" },
  { n: 14, term: "beyond", extra: "[bɪˈjɒnd]", ru: "вне, за рамками" },
  { n: 15, term: "to move beyond smth to smth", extra: "", ru: "перейти от чего-л. к чему-л." },
  { n: 16, term: "tedious", extra: "[ˈtiːdiəs]", ru: "утомительный, трудоемкий" },
  { n: 17, term: "promotion", extra: "[prəˈməʊʃn]", ru: "рекламная кампания, продвижение" },
  { n: 18, term: "to affect smth", extra: "[əˈfekt]", ru: "влиять на что-л." },
  { n: 19, term: "to double", extra: "[ˈdʌbl]", ru: "удваиваться" },
  { n: 20, term: "to sift through smth", extra: "[sɪft θruː]", ru: "отфильтровать что-л." },
  { n: 21, term: "repetitive", extra: "[rɪˈpetətɪv]", ru: "повторяющийся" },
  { n: 22, term: "likely", extra: "[ˈlaɪkli]", ru: "вероятный" },
  { n: 23, term: "to assess likely outcomes", extra: "[əˈses]", ru: "оценивать вероятные результаты" },
  { n: 24, term: "likelihood", extra: "[ˈlaɪklihʊd]", ru: "вероятность" },
  { n: 25, term: "pace", extra: "[peɪs]", ru: "темп" },
  { n: 26, term: "to accelerate the pace of smth", extra: "[əkˈseləreɪt]", ru: "ускорить темп чего-л." },
  { n: 27, term: "to determine", extra: "[dɪˈtɜːmɪn]", ru: "определять" },
  { n: 28, term: "score", extra: "[skɔː]", ru: "сумма баллов" },
  { n: 29, term: "credit scoring", extra: "", ru: "рейтинг кредитоспособности" },
  { n: 30, term: "to estimate", extra: "[ˈestɪmeɪt]", ru: "оценивать" },
  { n: 31, term: "to estimate unknown outcomes", extra: "", ru: "оценивать возможный результат" },
  { n: 32, term: "loan", extra: "[ləʊn]", ru: "кредит" },
  { n: 33, term: "to repay a loan", extra: "", ru: "выплатить кредит" },
  { n: 34, term: "constraint", extra: "[kənˈstreɪnt]", ru: "ограничение" },
  { n: 35, term: "course of action", extra: "[ˌkɔːs əv ˈækʃn]", ru: "план действий" },
  { n: 36, term: "to recommend a course of action", extra: "[ˌrekəˈmend]", ru: "рекомендовать план действий" },
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

export default function SummaryUnit2Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          Summary • Unit 2
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          DATA MINING
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
            <div className="text-sm font-semibold text-white">Key idea: Three Types of Modeling</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Descriptive modeling</span> — uncovers similarities in historical data to determine reasons behind success or failure (e.g., categorizing customers by product preferences).
              </li>
              <li>
                <span className="font-medium text-white">Predictive modeling</span> — classifies events in the future or estimates unknown outcomes (e.g., using credit scoring to determine likelihood of repaying a loan).
              </li>
              <li>
                <span className="font-medium text-white">Prescriptive modeling</span> — looks at variables and constraints to recommend courses of action (e.g., determining the best marketing offer for each customer).
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
          title="V. Grammar (EN): Double Negation as Emphatic Construction"
          subtitle="How double negation works in English for emphasis."
        >
          <div className="space-y-4 text-sm leading-relaxed text-zinc-200">
            <p>
              In English, double negation is used only for <span className="font-semibold text-white">emphasis</span>. 
              Two negatives neutralize each other and create an affirmative meaning. One negation is expressed 
              grammatically, and the second through prefixes or words with negative meaning.
            </p>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
              <div className="text-sm font-semibold text-white">Form: not...until</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                <li>
                  <span className="font-medium text-white">The term "data mining" wasn't coined until the 1990s.</span>
                  <br />
                  <span className="text-zinc-400">Термин «data mining» был введен в обращение только в 90-е гг.</span>
                </li>
                <li>
                  <span className="font-medium text-white">It is not until...that...</span> — "Only after..."
                  <br />
                  <span className="text-zinc-400">Только после того, как...</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
              <div className="text-sm font-semibold text-white">Form: not + negative prefix</div>
              <p className="mt-2 text-sm text-zinc-300">
                When <span className="font-medium text-white">not</span> is used before adjectives or adverbs with 
                negative prefixes (<span className="font-medium text-white">un-, in-, il-, im-, ir-, dis-</span>), 
                it has an emphatic meaning, usually corresponding to Russian "вполне, весьма, довольно + adjective/adverb".
              </p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                <li>
                  <span className="font-medium text-white">not uncommon</span> — довольно обычный
                </li>
                <li>
                  <span className="font-medium text-white">not infrequently</span> — довольно часто
                </li>
                <li>
                  <span className="font-medium text-white">not impossible</span> — вполне возможно
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
              <div className="text-sm font-semibold text-white">Examples</div>
              <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                <li>
                  <span className="font-medium text-white">It is not until</span> the business owners see some actual data mining models{" "}
                  <span className="font-medium text-white">that</span> they start to understand the potential outcomes.
                </li>
                <li>
                  Data breaches are <span className="font-medium text-white">not uncommon</span> in large organizations.
                </li>
                <li>
                  Such problems occur <span className="font-medium text-white">not infrequently</span> in complex systems.
                </li>
              </ul>
            </div>

            <p className="text-zinc-300">
              Tip: Remember that in standard English, double negatives cancel each other out and create a positive meaning, 
              unlike in some dialects where they intensify the negation.
            </p>
          </div>
        </ListCard>
      </div>
    </main>
  );
}
