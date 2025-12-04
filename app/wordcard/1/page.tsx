"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  // Notes
  { english: "accumulation [əˌkjuːmjəˈleɪʃn]", russian: "накопление, скопление" },
  { english: "vector [ˈvektə]", russian: "вектор" },
  { english: "complex BrE [ˈkɒmpleks], AmE [kəmˈpleks]", russian: "сложный" },
  { english: "associated [əˈsəʊʃieɪtɪd] [əˈsəʊsieɪtɪd]", russian: "связанный, ассоциируемый" },
  { english: "tsunami [tsuːˈnɑːmi]", russian: "цунами" },
  { english: "to file smth [faɪl]", russian: "регистрировать и хранить (документы)" },
  { english: "type [taɪp]", russian: "тип" },
  { english: "category [ˈkætəɡəri]", russian: "категория" },
  { english: "excel [ɪkˈsel] table", russian: "таблица Excel" },
  { english: "pdf [ˌpiː diː ˈef]", russian: "формат pdf (Portable Document Format)" },
  { english: "audio [ˈɔ:dɪəu]", russian: "аудио" },
  { english: "structure [ˈstrʌktʃə]", russian: "структура" },
  { english: "enormous [ɪˈnɔːməs]", russian: "огромный" },
  { english: "pragmatically [præɡˈmætɪkli]", russian: "прагматично, практично" },
  // Vocabulary
  { english: "big data [ˈdeɪtə]", russian: "большие данные, «биг дата»" },
  { english: "to refer to smth [rɪˈfɜː]", russian: "относиться к чему-то, отсылать" },
  { english: "tool [tuːl]", russian: "инструмент, средство" },
  { english: "database management tools", russian: "средства управления базами данных" },
  { english: "to gain [ɡeɪn]", russian: "получить" },
  { english: "to gain a better understanding of smth", russian: "лучше понять что-либо" },
  { english: "to gain new insights", russian: "увидеть что-то по-новому, осознать на основе имеющейся информации" },
  { english: "volume [ˈvɒljuːm]", russian: "объём" },
  { english: "velocity [vəˈlɒsəti]", russian: "скорость" },
  { english: "variety [vəˈraɪəti]", russian: "разнообразие, многообразие" },
  { english: "to incorporate [ɪnˈkɔːpəreɪt]", russian: "включать в себя, вбирать в себя" },
  { english: "incomprehensible [ɪnˌkɒmprɪˈhensəbl]", russian: "непостижимый, недоступный пониманию" },
  { english: "to reach incomprehensible proportions", russian: "достигать невероятных размеров" },
  { english: "roughly [ˈrʌfli]", russian: "приблизительно, примерно" },
  { english: "roughly 250 billion images", russian: "примерно 250 миллиардов изображений" },
  { english: "measure [ˈmeʒə]", russian: "мера, степень, масштаб" },
  { english: "to measure", russian: "измерять" },
  { english: "to ingest [ɪnˈdʒest]", russian: "поглотить, принимать внутрь" },
  { english: "to retrieve [rɪˈtriːv]", russian: "извлечь, найти, восстановить" },
  { english: "pure [pjʊə]", russian: "чистый, без примесей" },
  { english: "pure text", russian: "простой текст" },
  { english: "majority [məˈdʒɒrəti]", russian: "большинство, большая часть" },
  { english: "The majority of data is unstructured.", russian: "Большую часть составляют неструктурированные данные." },
  { english: "vast [vɑːst]", russian: "обширный, огромный, значительный" },
  { english: "vast amount", russian: "огромное количество" },
  { english: "to expand in smth [ɪkˈspænd]", russian: "расширяться, увеличиваться в чем-л." },
  { english: "overwhelming [ˌəʊvəˈwelmɪŋ]", russian: "слишком трудоёмкий, приводящий в замешательство" },
  { english: "to make sense of smth", russian: "осмыслить что-л., разобраться в чем-л." },
  { english: "It doesn't make sense.", russian: "Это непонятно." },
  { english: "reasonable [ˈriːznəbl]", russian: "разумный, обоснованный, приемлемый" },
  { english: "to produce results in a reasonable time frame", russian: "выдавать результаты в приемлемые сроки" },
  { english: "to be forced to do smth", russian: "быть вынужденным делать что-то" },
  { english: "snapshot [ˈsnæpʃɒt]", russian: "моментальный снимок" },
  { english: "snapshot of data", russian: "снимок данных, консолидированные за заданный период времени данные" },
  { english: "undesirable [ˌʌndɪˈzaɪərəbl]", russian: "нежелательный" },
  { english: "to have an undesirable effect [ɪˈfekt]", russian: "иметь нежелательный эффект" },
  { english: "to miss smth", russian: "пропустить, упустить" },
  { english: "event [ɪˈvent]", russian: "событие" },
  { english: "particular [pəˈtɪkjələ]", russian: "отдельно взятый, определенный" },
  { english: "effort [ˈefət]", russian: "усилие" },
  { english: "to go to the enormous effort of…", russian: "предпринять огромные усилия по…" },
  { english: "to predict [prɪˈdɪkt]", russian: "предсказывать" },
  { english: "Companies that know how to pragmatically use big data are able to predict the future.", russian: "Компании, умеющие извлекать практическую пользу из больших массивов данных, способны предсказывать будущее." },
];

export default function BigDataWordCard() {
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
        <div className="mt-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
          Unit 1
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Big Data
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
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
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
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-cyan-400">
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
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
          >
            Далее
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-emerald-500/40"
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
                ? "bg-cyan-500"
                : index < currentIndex
                ? "bg-cyan-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
