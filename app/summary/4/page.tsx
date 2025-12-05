import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Data security involves protecting digital information from unauthorized access, corruption, or theft.",
  "Encryption is a key method to make data unreadable to anyone without the proper access key.",
  "Firewalls help filter incoming and outgoing network traffic to block potential threats.",
  "Multi-factor authentication (MFA) adds extra layers of verification beyond passwords.",
  "Ransomware is malicious software that encrypts files and demands payment for release.",
  "Implementing strong security policies and regular backups reduces the risk of data loss."
];

const notes: VocabItem[] = [
  { n: 1, term: "encryption", extra: "[ɪnˈkrɪpʃən]", ru: "шифрование" },
  { n: 2, term: "firewall", extra: "[ˈfaɪəwɔːl]", ru: "межсетевой экран" },
  { n: 3, term: "authentication", extra: "[ɔːˌθentɪˈkeɪʃən]", ru: "аутентификация" },
  { n: 4, term: "multi-factor", extra: "[ˈmʌlti ˈfæktər]", ru: "многофакторный" },
  { n: 5, term: "ransomware", extra: "[ˈrænsəmweər]", ru: "вымогательское ПО" },
  { n: 6, term: "backup", extra: "[ˈbækʌp]", ru: "резервная копия" },
  { n: 7, term: "threat", extra: "[θret]", ru: "угроза" },
  { n: 8, term: "data breach", extra: "[ˈdeɪtə briːtʃ]", ru: "утечка данных" },
  { n: 9, term: "access control", extra: "", ru: "контроль доступа" },
  { n: 10, term: "security policy", extra: "", ru: "политика безопасности" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "data security", extra: "", ru: "безопасность данных" },
  { n: 2, term: "encryption key", extra: "", ru: "ключ шифрования" },
  { n: 3, term: "firewall rules", extra: "", ru: "правила межсетевого экрана" },
  { n: 4, term: "user credentials", extra: "", ru: "учётные данные пользователя" },
  { n: 5, term: "ransom", extra: "", ru: "вымогательство" },
  { n: 6, term: "MFA (Multi-Factor Authentication)", extra: "", ru: "многофакторная аутентификация" },
  { n: 7, term: "data integrity", extra: "", ru: "целостность данных" },
  { n: 8, term: "malware", extra: "", ru: "вредоносное ПО" },
  { n: 9, term: "phishing", extra: "", ru: "фишинг" },
  { n: 10, term: "backup strategy", extra: "", ru: "стратегия резервного копирования" },
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
