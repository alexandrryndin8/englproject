import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Biometric authentication uses unique physical or behavioral traits, such as fingerprints, facial geometry, or eye patterns, to verify a person’s identity.",
  "Fingerprint scanners analyze distinctive features of the fingertip and convert them into a digital identification code for comparison.",
  "Facial recognition systems measure key facial contours and can work even with low lighting by using infrared technology.",
  "Retinal and iris scanners capture detailed images of the eye to analyze blood vessel patterns or patterns in the coloured part of the eye.",
  "Biometric systems are widely used in smartphones, security checkpoints, banking, and access control due to their accuracy and convenience.",
  "However, biometrics also raise privacy concerns, because biological data cannot be changed if stolen, unlike passwords or PINs."
];


const notes: VocabItem[] = [
  { n: 1, term: "unique", extra: "[juːˈniːk]", ru: "уникальный" },
  { n: 2, term: "trait", extra: "[treɪt]", ru: "черта, характеристика" },
  { n: 3, term: "pattern", extra: "[ˈpætən]", ru: "узор, шаблон" },
  { n: 4, term: "contour", extra: "[ˈkɒntʊə]", ru: "контур, очертание" },
  { n: 5, term: "recognition", extra: "[ˌrekəɡˈnɪʃn]", ru: "распознавание" },
  { n: 6, term: "infrared", extra: "[ˌɪnfrəˈred]", ru: "инфракрасный" },
  { n: 7, term: "scanner", extra: "[ˈskænə]", ru: "сканер" },
  { n: 8, term: "retina", extra: "[ˈretɪnə]", ru: "сетчатка глаза" },
  { n: 9, term: "iris", extra: "[ˈaɪərɪs]", ru: "радужка глаза" },
  { n: 10, term: "to illuminate", extra: "[ɪˈluːmɪneɪt]", ru: "освещать" },
  { n: 11, term: "to verify", extra: "[ˈverɪfaɪ]", ru: "проверять, подтверждать" },
  { n: 12, term: "to capture", extra: "[ˈkæptʃə]", ru: "захватывать (изображение, данные)" },
  { n: 13, term: "comparison", extra: "[kəmˈpærɪsn]", ru: "сравнение" },
  { n: 14, term: "security checkpoint", extra: "", ru: "контроль безопасности" },
  { n: 15, term: "privacy", extra: "[ˈpraɪvəsi]", ru: "конфиденциальность" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "biometric authentication", extra: "", ru: "биометрическая аутентификация" },
  { n: 2, term: "fingerprint", extra: "[ˈfɪŋɡəprɪnt]", ru: "отпечаток пальца" },
  { n: 3, term: "facial recognition", extra: "", ru: "распознавание лица" },
  { n: 4, term: "retinal scan", extra: "", ru: "сканирование сетчатки" },
  { n: 5, term: "iris scan", extra: "", ru: "сканирование радужки" },
  { n: 6, term: "to authenticate", extra: "[ɔːˈθentɪkeɪt]", ru: "подтверждать личность" },
  { n: 7, term: "to enroll", extra: "[ɪnˈrəʊl]", ru: "зарегистрировать (в системе)" },
  { n: 8, term: "feature", extra: "[ˈfiːtʃə]", ru: "особенность, характеристика" },
  { n: 9, term: "template", extra: "[ˈtempleɪt]", ru: "шаблон, образец данных" },
  { n: 10, term: "sensor", extra: "[ˈsensə]", ru: "датчик, сенсор" },
  { n: 11, term: "capacitance", extra: "[kəˈpæsɪtəns]", ru: "электрическая ёмкость" },
  { n: 12, term: "infrared light", extra: "", ru: "инфракрасный свет" },
  { n: 13, term: "comparison", extra: "", ru: "сравнение данных" },
  { n: 14, term: "accuracy", extra: "[ˈækjərəsi]", ru: "точность" },
  { n: 15, term: "security", extra: "[sɪˈkjʊərəti]", ru: "безопасность" },
  { n: 16, term: "identity theft", extra: "", ru: "кража личных данных" },
  { n: 17, term: "database", extra: "[ˈdeɪtəbeɪs]", ru: "база данных" },
  { n: 18, term: "algorithm", extra: "[ˈælɡərɪðəm]", ru: "алгоритм" },
  { n: 19, term: "recognition system", extra: "", ru: "система распознавания" },
  { n: 20, term: "biological data", extra: "", ru: "биологические данные" },
  { n: 21, term: "privacy risks", extra: "", ru: "риски для конфиденциальности" },
  { n: 22, term: "sensitive data", extra: "", ru: "чувствительные данные" },
  { n: 23, term: "contactless", extra: "[ˈkɒntæktləs]", ru: "бесконтактный" },
  { n: 24, term: "pattern recognition", extra: "", ru: "распознавание образов" },
  { n: 25, term: "eye geometry", extra: "", ru: "геометрия глаза" },
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
