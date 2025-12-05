import React from "react";

type VocabItem = {
  n: number;
  term: string;
  extra?: string;
  ru: string;
};

const summary = [
  "Cloud technology services cover a vast range of options, from basics like storage, networking, and processing power to AI, natural language processing, and standard office applications.",
  "Companies offering cloud computing services are called cloud providers, and they typically charge based on usage, similar to water or electricity bills.",
  "Cloud computing services can be private, public, or hybrid. Private cloud services are delivered from a business's data center to internal users.",
  "In the public cloud model, a third-party provider delivers services over the Internet, and customers pay only for CPU cycles, storage, or bandwidth they consume.",
  "A hybrid cloud combines public cloud services with an on-premises private cloud, with orchestration and automation between them.",
  "The goal of a hybrid cloud is to create a unified, automated, scalable environment while maintaining control over mission-critical data.",
  "Cloud architecture has two sections: front-end (the visible interface for users) and back-end (the 'cloud' part with servers, storage, VMs, and security).",
  "Security remains a primary concern for businesses, especially for public cloud adoption, as it's a multi-tenant environment where hardware is shared.",
  "Access to public cloud storage and compute resources is guarded by account login credentials.",
];

const notes: VocabItem[] = [
  { n: 1, term: "to constitute", extra: "[ˈkɒnstɪˌtjuːt]", ru: "составлять" },
  { n: 2, term: "orchestration", extra: "[ˈɔːkɪˌstreɪʃn]", ru: "взаимодействие, механизм управления" },
  { n: 3, term: "automation", extra: "[ˌɔːtəˈmeɪʃn]", ru: "автоматизация" },
  { n: 4, term: "infrastructure", extra: "[ˈɪnfrəˌstrʌktʃə]", ru: "инфраструктура" },
  { n: 5, term: "unique", extra: "[juːˈniːk]", ru: "уникальный" },
  { n: 6, term: "architecture", extra: "[ˈɑːkɪˌtektʃə]", ru: "архитектура" },
  { n: 7, term: "structure", extra: "[ˈstrʌktʃə]", ru: "структура" },
  { n: 8, term: "to classify", extra: "[ˈklæsɪfaɪ]", ru: "классифицировать" },
  { n: 9, term: "section", extra: "[ˈsekʃn]", ru: "секция, часть" },
  { n: 10, term: "hybrid", extra: "[ˈhaɪbrɪd]", ru: "гибридный" },
  { n: 11, term: "public", extra: "[ˈpʌblɪk]", ru: "общедоступный" },
  { n: 12, term: "unified", extra: "[ˈjuːnɪfaɪd]", ru: "унифицированный" },
  { n: 13, term: "mechanism", extra: "[ˈmekəˌnɪzm]", ru: "механизм" },
  { n: 14, term: "numerous", extra: "[ˈnjuːmərəs]", ru: "многочисленный" },
  { n: 15, term: "various", extra: "[ˈveəriəs]", ru: "различный" },
  { n: 16, term: "mission", extra: "[ˈmɪʃn]", ru: "миссия" },
  { n: 17, term: "isolation", extra: "[ˌaɪsəˈleɪʃn]", ru: "разделение" },
  { n: 18, term: "to guard", extra: "[ɡɑːd]", ru: "защищать" },
];

const vocabulary: VocabItem[] = [
  { n: 1, term: "cloud technology", extra: "", ru: "облачные технологии" },
  { n: 2, term: "cloud adoption", extra: "", ru: "переход на облачные технологии" },
  { n: 3, term: "cloud providers", extra: "", ru: "поставщики облачных услуг" },
  { n: 4, term: "public cloud", extra: "", ru: "общедоступное облако" },
  { n: 5, term: "hybrid cloud", extra: "", ru: "гибридное облако" },
  { n: 6, term: "private cloud service", extra: "", ru: "услуга по предоставлению частного облака" },
  { n: 7, term: "on-premises private cloud", extra: "[ən ˈpremɪsɪz]", ru: "локальное частное облако (на площадке заказчика)" },
  { n: 8, term: "to charge for smth", extra: "[tʃɑːdʒ]", ru: "брать плату за ч.-л." },
  { n: 9, term: "to bill", extra: "[bɪl]", ru: "выставлять счёт" },
  { n: 10, term: "to be billed for smth", extra: "", ru: "получать счет за что-л." },
  { n: 11, term: "IT chargeback", extra: "", ru: "электронные возвратные платежи" },
  { n: 12, term: "scalable environment", extra: "[ɪnˈvaɪrənmənt]", ru: "масштабируемая среда" },
  { n: 13, term: "multi-tenant environment", extra: "", ru: "мультиарендная среда" },
  { n: 14, term: "to deliver services over the Internet", extra: "[dɪˈlɪvə]", ru: "предоставлять услуги через Интернет" },
  { n: 15, term: "a third-party service provider", extra: "", ru: "сторонний поставщик" },
  { n: 16, term: "to take advantage of smth", extra: "", ru: "воспользоваться ч.-л." },
  { n: 17, term: "to maintain control over smth", extra: "[meɪnˈteɪn]", ru: "поддерживать контроль над ч-л." },
  { n: 18, term: "mission-critical data", extra: "", ru: "особо важные данные" },
  { n: 19, term: "front-end", extra: "[ˈfrʌnt end]", ru: "фронтэнд; внешний, клиентский" },
  { n: 20, term: "back-end", extra: "[ˈbæk end]", ru: "бэкенд; внутренний, серверная часть" },
  { n: 21, term: "to encounter smth", extra: "[ɪnˈkaʊntə]", ru: "иметь дело с ч-л." },
  { n: 22, term: "web-enabled client devices", extra: "", ru: "устройства с доступом к сети" },
  { n: 23, term: "to comprise", extra: "[kəmˈpraɪz]", ru: "включать, охватывать" },
  { n: 24, term: "in conformance with", extra: "[kənˈfɔːməns]", ru: "в соответствии с" },
  { n: 25, term: "deployment model", extra: "", ru: "модель развертывания" },
  { n: 26, term: "to remain a primary concern", extra: "[ˈpraɪmərɪ kənˈsɜːn]", ru: "оставаться основным приоритетом" },
  { n: 27, term: "login credentials", extra: "[krɪˈdenʃəlz]", ru: "учётные данные" },
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

export default function SummaryUnit4Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          Summary • Unit 4
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          CLOUD TECHNOLOGY
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
            <div className="text-sm font-semibold text-white">Key idea: Three Types of Cloud Services</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Private Cloud</span> — delivered from a business's data center to internal users. Users may or may not be billed through IT chargeback.
              </li>
              <li>
                <span className="font-medium text-white">Public Cloud</span> — a third-party provider delivers services over the Internet. Customers pay only for CPU cycles, storage, or bandwidth consumed.
              </li>
              <li>
                <span className="font-medium text-white">Hybrid Cloud</span> — combines public cloud with on-premises private cloud. Creates a unified, scalable environment while maintaining control over mission-critical data.
              </li>
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
            <div className="text-sm font-semibold text-white">Cloud Architecture: Two Sections</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-300">
              <li>
                <span className="font-medium text-white">Front-End</span> — the visible interface that users encounter through web-enabled client devices.
              </li>
              <li>
                <span className="font-medium text-white">Back-End</span> — the "cloud" part comprising servers, data storage, virtual machines, security mechanisms, and services built in conformance with a deployment model.
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

