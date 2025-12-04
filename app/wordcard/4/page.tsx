"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  // Notes
  { english: "to constitute [ ˈkɒnstɪˌtjuːt ]", russian: "составлять" },
  { english: "orchestration [ ˈɔːkɪˌstreɪʃn]", russian: "взаимодействие, механизм управления" },
  { english: "automation [ ˌɔːtəˈmeɪʃn]", russian: "автоматизация" },
  { english: "infrastructure [ ˈɪnfrəˌstrʌktʃə]", russian: "инфраструктура" },
  { english: "unique [ juːˈniːk ]", russian: "уникальный" },
  { english: "architecture [ ˈɑːkɪˌtektʃə ]", russian: "архитектура" },
  { english: "structure [ ˈstrʌktʃə]", russian: "структура" },
  { english: "to classify [ ˈklæsɪfaɪ]", russian: "классифицировать" },
  { english: "section [ˈsekʃn]", russian: "секция, часть" },
  { english: "hybrid [ˈhaɪbrɪd]", russian: "гибридный" },
  { english: "public [ˈpʌblɪk]", russian: "общедоступный" },
  { english: "unified [ˈjuːnɪfaɪd ]", russian: "унифицированный" },
  { english: "mechanism [ˈmekəˌnɪzm]", russian: "механизм" },
  { english: "numerous [ˈnjuːmərəs]", russian: "многочисленный" },
  { english: "various [ˈveəriəs]", russian: "различный" },
  { english: "mission [ˈmɪʃn]", russian: "миссия" },
  { english: "isolation [ˌaɪsə'leɪʃn]", russian: "разделение" },
  { english: "to guard [ɡɑːd]", russian: "защищать" },
  // Vocabulary
  { english: "cloud [klaʊd]", russian: "облако" },
  { english: "cloud technology", russian: "облачные технологии" },
  { english: "cloud adoption", russian: "переход на облачные технологии" },
  { english: "cloud providers", russian: "поставщики облачных услуг" },
  { english: "public cloud", russian: "общедоступное облако" },
  { english: "hybrid cloud", russian: "гибридное облако" },
  { english: "private cloud service", russian: "услуга по предоставлению частного облака" },
  { english: "on-premises [ən ˈpremɪsɪz] private cloud", russian: "локальное частное облако (установленное на площадке заказчика)" },
  { english: "to charge [tʃɑːdʒ] for smth", russian: "брать плату за ч.-л." },
  { english: "to charge for cloud computing services", russian: "брать плату за услуги облачных вычислений" },
  { english: "to bill [bɪl]", russian: "выставлять счёт" },
  { english: "to be billed for smth", russian: "получать счет за что-л." },
  { english: "to be billed for water or electricity", russian: "получать счет за воду или электричество" },
  { english: "to be billed for services through IT chargeback", russian: "получать счет за услуги посредством электронных возвратных платежей" },
  { english: "environment [ɪnˈvaɪrənmənt]", russian: "среда" },
  { english: "scalable environment", russian: "масштабируемая среда" },
  { english: "multi-tenant environment", russian: "мультиарендная среда" },
  { english: "to deliver [dɪˈlɪvə]", russian: "поставлять" },
  { english: "to deliver services over the Internet", russian: "предоставлять услуги через Интернет" },
  { english: "a third-party service provider [ə θɜːd ˈpɑːtɪ sɜːvɪs prəˈvaɪdə]", russian: "предоставляющая услуги третья сторона; сторонний поставщик" },
  { english: "to take advantage of smth", russian: "воспользоваться ч.-л." },
  { english: "to take advantage of all that a public cloud infrastructure can provide", russian: "воспользоваться всем тем, что может предоставить инфраструктура общедоступного облака" },
  { english: "to maintain control over smth [meɪnˈteɪn]", russian: "поддерживать контроль над ч-л." },
  { english: "to maintain control over mission-critical data", russian: "поддерживать контроль над особо важными данными" },
  { english: "front-end [ˈfrʌnt end]", russian: "фронтэнд; внешний, клиентский" },
  { english: "back-end [ˈbæk end]", russian: "бэкенд; внутренний, серверная часть" },
  { english: "to encounter [ɪnˈkaʊntə] smb/smth", russian: "иметь дело с к-л., ч-л" },
  { english: "to encounter through web-enabled client devices", russian: "иметь дело с доступом к сети посредством устройств" },
  { english: "to comprise [kəmˈpraɪz]", russian: "включать, охватывать" },
  { english: "to comprise all the resources required to deliver cloud-technologies services", russian: "включать все ресурсы, необходимые для предоставления услуг облачных технологий" },
  { english: "in conformance [kənˈfɔːməns] with", russian: "в соответствии с" },
  { english: "to be built in conformance with a deployment model", russian: "быть построенным в соответствии с моделью развертывания" },
  { english: "to remain a primary concern for smb [ˈpraɪmərɪ kənˈsɜːn]", russian: "оставаться основным приоритетом" },
  { english: "Security remains a primary concern for businesses.", russian: "Безопасность остается основным приоритетом для предприятий." },
  { english: "login credentials [krɪˈdenʃəlz]", russian: "учётные данные" },
  { english: "Access to public cloud storage and compute resources is guarded by account login credentials.", russian: "Доступ к общедоступным облачным хранилищам и вычислительным ресурсам охраняется учетными данными входа в учетную запись." },
];

export default function CloudComputingWordCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentWord = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/wordcard"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to units
        </Link>
        <div className="mt-4 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
          Unit 4
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Cloud Computing
        </h1>
        <p className="mt-2 text-zinc-400">
          Tap on the card to reveal the translation
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>Card {currentIndex + 1} of {words.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective-1000 mb-8">
        <div
          onClick={handleFlip}
          className={`relative h-72 w-full cursor-pointer transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Russian */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-zinc-500">
              Русский
            </div>
            <p className="text-center text-2xl font-medium text-white">
              {currentWord.russian}
            </p>
            <div className="mt-6 text-sm text-zinc-500">
              Нажмите для перевода
            </div>
          </div>

          {/* Back - English */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-orange-400">
              English
            </div>
            <p className="text-center text-2xl font-medium text-white">
              {currentWord.english}
            </p>
            <div className="mt-6 text-sm text-zinc-500">
              Нажмите ещё раз
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ←
        </button>

        {currentIndex < words.length - 1 ? (
          <button
            onClick={handleNext}
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-8 font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40"
          >
            Далее
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
          >
            Начать сначала
          </button>
        )}

        <button
          onClick={handleNext}
          disabled={currentIndex === words.length - 1}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>

      {/* Quick navigation */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {words.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsFlipped(false);
            }}
            className={`h-2 w-2 rounded-full transition ${
              index === currentIndex
                ? "bg-orange-500"
                : index < currentIndex
                ? "bg-orange-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
