import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Data security refers to the process of protecting data from unauthorized access and data corruption throughout its lifecycle.",
  "Data security is also known as information security or computer security and is essential for organizations of every size and type.",
  "Security measures include data encryption, tokenization, and key management practices.",
  "Encryption transforms plain text information into a non-readable form called ciphertext using an algorithm and an encryption key.",
  "Tokenization turns meaningful data, such as an account number, into a random string of characters called a token.",
  "The advantage of tokens is that there is no mathematical relationship to the real data they represent, so if breached, they have no meaning.",
  "Tokenization uses a database called a token vault, which stores the relationship between the sensitive value and the token.",
  "Good key management practices are essential for protecting sensitive data, as its security depends on the security of the cryptographic key.",
  "Keys must never be stored in the same place as encrypted data, and only authenticated users should get access to encrypted resources.",
  "Another important component of key management is keeping track of events and logging every access to highly sensitive encrypted data in detail.",
];

const notes: VocabItem[] = [
  { n: 1, term: "lifecycle", extra: "[ˈlaɪf saɪkl]", ru: "жизненный цикл" },
  { n: 2, term: "original", extra: "[əˈrɪdʒənl]", ru: "первоначальный" },
  { n: 3, term: "original format", extra: "[ˈfɔːmat]", ru: "первоначальный формат" },
  { n: 4, term: "random", extra: "[ˈrændəm]", ru: "случайный, произвольно выбранный" },
  { n: 5, term: "character", extra: "[ˈkærəktə]", ru: "цифра, буква, знак, символ" },
  { n: 6, term: "to represent", extra: "[ˌreprɪˈzent]", ru: "представлять" },
  { n: 7, term: "to reverse", extra: "[rɪˈvɜːs]", ru: "возвращать, обращать" },
  { n: 8, term: "SSN", extra: "", ru: "Social Security Number - номер свидетельства соц. страхования" },
  { n: 9, term: "sensitive", extra: "[ˈsensətɪv]", ru: "засекреченный, секретный, уязвимый" },
  { n: 10, term: "sensitive value", extra: "[ˈvælju:]", ru: "засекреченное цифровое значение" },
  { n: 11, term: "sensitive data", extra: "", ru: "секретные данные, конфиденциальная информация" },
  { n: 12, term: "sensitivity", extra: "", ru: "конфиденциальность" },
  { n: 13, term: "substitute", extra: "[ˈsʌbstɪtjuːt]", ru: "заменитель, замена" },
  { n: 14, term: "various", extra: "[ˈveəriəs]", ru: "различный" },
  { n: 15, term: "component", extra: "[kəmˈpəʊnənt]", ru: "часть, деталь, компонент" },
  { n: 16, term: "to identify", extra: "[aɪˈdentɪfaɪ]", ru: "определить, установить личность" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "throughout", extra: "[θruːˈaʊt]", ru: "на всём протяжении" },
  { n: 2, term: "to authorize", extra: "[ˈɔːθəraɪz]", ru: "давать разрешение" },
  { n: 3, term: "unauthorized access", extra: "[ˈæksəs]", ru: "несанкционированный доступ" },
  { n: 4, term: "authorization", extra: "[ˌɔːθəraɪˈzeɪʃn]", ru: "проверка регистрационной информации о пользователе" },
  { n: 5, term: "corruption", extra: "[kəˈrʌpʃn]", ru: "повреждение, разрушение" },
  { n: 6, term: "data corruption", extra: "", ru: "нарушение целостности данных" },
  { n: 7, term: "measure", extra: "[ˈmeʒə]", ru: "мера" },
  { n: 8, term: "security measures", extra: "", ru: "меры безопасности" },
  { n: 9, term: "encryption", extra: "[ɪnˈkrɪpʃn]", ru: "шифрование" },
  { n: 10, term: "data encryption", extra: "", ru: "шифрование данных" },
  { n: 11, term: "to encrypt / to decrypt", extra: "", ru: "зашифровать / расшифровать" },
  { n: 12, term: "plain", extra: "[pleɪn]", ru: "простой, понятный" },
  { n: 13, term: "plain text", extra: "", ru: "обычный, незашифрованный текст" },
  { n: 14, term: "ciphertext", extra: "[ˈsaɪfətekst]", ru: "зашифрованный текст" },
  { n: 15, term: "token", extra: "[ˈtəʊkən]", ru: "токен, жетон, ярлык, символ" },
  { n: 16, term: "tokenization", extra: "[ˈtəʊkənaɪˈzeɪʃn]", ru: "токенизация" },
  { n: 17, term: "string", extra: "[strɪŋ]", ru: "строка" },
  { n: 18, term: "random string of characters", extra: "", ru: "случайная последовательность символов" },
  { n: 19, term: "vault", extra: "[vɔːlt]", ru: "хранилище" },
  { n: 20, term: "token vault", extra: "", ru: "хранилище токенов" },
  { n: 21, term: "advantage", extra: "[ədˈvɑːntɪdʒ]", ru: "преимущество" },
  { n: 22, term: "disadvantage", extra: "[ˌdɪsədˈvɑ:ntɪdʒ]", ru: "недостаток" },
  { n: 23, term: "to breach", extra: "[briːtʃ]", ru: "нарушить целостность, создать брешь" },
  { n: 24, term: "security breach", extra: "", ru: "нарушение защиты" },
  { n: 25, term: "value", extra: "[ˈvæljuː]", ru: "значение" },
  { n: 26, term: "data values", extra: "", ru: "значения данных" },
  { n: 27, term: "account", extra: "[əˈkaʊnt]", ru: "счет" },
  { n: 28, term: "account number", extra: "", ru: "номер счета" },
  { n: 29, term: "to submit", extra: "[səbˈmɪt]", ru: "представлять на рассмотрение, предъявлять" },
  { n: 30, term: "to retrieve", extra: "[rɪˈtriːv]", ru: "извлекать" },
  { n: 31, term: "to be aware of smth", extra: "[əˈweə]", ru: "быть в курсе чего-л., отдавать себе отчет в чем-л." },
  { n: 32, term: "to reduce smth to smth", extra: "[rɪˈdjuːs]", ru: "сводить что-л. к чему-л." },
  { n: 33, term: "authenticated user", extra: "[ɔːˈθentɪkeɪtɪd]", ru: "аутентифицированный пользователь" },
  { n: 34, term: "to keep track of smth", extra: "[træk]", ru: "отслеживать, фиксировать" },
  { n: 35, term: "degree", extra: "[dɪˈɡriː]", ru: "степень" },
  { n: 36, term: "high degree of sensitivity", extra: "", ru: "высокая степень конфиденциальности" },
  { n: 37, term: "to log smb's access to data in detail", extra: "[ˈæksəs]", ru: "подробно залогировать ч-л доступ к данным" },
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

export default function SummaryUnit3Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          Summary • Unit 3
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          DATA SECURITY
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
            <div className="text-sm font-semibold text-white">Key idea: Three Security Methods</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Encryption</span> — transforms plain text into ciphertext using an algorithm and encryption key. Requires the key to decrypt back to original format.
              </li>
              <li>
                <span className="font-medium text-white">Tokenization</span> — turns meaningful data into random tokens with no mathematical relationship to real data. Uses a token vault to store relationships.
              </li>
              <li>
                <span className="font-medium text-white">Key Management</span> — protects cryptographic keys (never store with encrypted data), tracks access events, and logs all access to highly sensitive data in detail.
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
