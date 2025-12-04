"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  { english: "data mining [ˈdeɪtəˈmaɪnɪŋ]", russian: "дата майнинг, интеллектуальный анализ данных" },
  { english: "anomaly [əˈnɔməlɪ]", russian: "аномалия" },
  { english: "analytics [ˌænəˈlɪtɪks]", russian: "аналитика" },
  { english: "automated [ˈɔtəˌmeɪtɪd]", russian: "автоматизированный" },
  { english: "chaotic [keɪˈɔtɪk]", russian: "хаотичный" },
  { english: "correlation [ˌkɒrəˈleɪʃn]", russian: "соотношение, взаимоотношение" },
  { english: "cornerstone [ˈkɔːnəstəʊn]", russian: "основа, краеугольный камень" },
  { english: "trend [trend]", russian: "тенденция" },
  { english: "manual [ˈmænjuəl]", russian: "ручной" },
  { english: "decade [ˈdekeɪd]", russian: "десятилетие" },
  { english: "retailer [ˈriːteɪlə]", russian: "ритейлер, предприятие розничной торговли" },
  { english: "manufacturer [ˌmænjuˈfæktʃərə]", russian: "производитель" },
  { english: "insurer [ɪnˈʃʊərə]", russian: "страховая компания, страховщик" },
  { english: "descriptive modeling", russian: "дескриптивное моделирование" },
  { english: "predictive modeling", russian: "предиктивное моделирование" },
  { english: "prescriptive modeling", russian: "прескриптивное моделирование" },
  { english: "similarity [ˌsɪməˈlærəti]", russian: "сходство" },
  { english: "preferences [ˈprefərənsəz]", russian: "предпочтения" },
  { english: "sentiment [ˈsentɪmənt]", russian: "отношение" },
  { english: "variable [ˈveriəbəl]", russian: "переменная" },
  { english: "patterns [ˈpætnz]", russian: "шаблоны, модели, принципы" },
  { english: "outcome [ˈaʊtkʌm]", russian: "вероятное событие" },
  { english: "range [reɪndʒ]", russian: "диапазон, спектр" },
  { english: "broad range of techniques", russian: "широкий спектр приемов" },
  { english: "to increase revenues [ɪnˈkriːs ˈrevənjuːz]", russian: "увеличить доходы" },
  { english: "to cut costs [kɒsts]", russian: "снизить затраты" },
  { english: "to reduce risks [rɪˈdjuːs]", russian: "снизить риски" },
  { english: "to coin [kɔɪn]", russian: "вводить в обращение, в употребление" },
  { english: "to intertwine [ˌɪntəˈtwaɪn]", russian: "переплетаться" },
  { english: "intertwined disciplines", russian: "связанные отрасли знания" },
  { english: "artificial intelligence [ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns], AI", russian: "искусственный разум" },
  { english: "advances [ədˈvɑːnsɪz] in smth", russian: "прогресс в чём-л., достижения" },
  { english: "beyond [bɪˈjɒnd]", russian: "вне, за рамками" },
  { english: "to move beyond smth to smth", russian: "перейти от чего-л. к чему-л." },
  { english: "tedious [ˈtiːdiəs]", russian: "утомительный, трудоёмкий" },
  { english: "promotion [prəˈməʊʃn]", russian: "рекламная кампания, продвижение" },
  { english: "to affect smth [əˈfekt]", russian: "влиять на что-л." },
  { english: "to double [ˈdʌbl]", russian: "удваиваться" },
  { english: "to sift through smth [sɪft θruː]", russian: "отфильтровать что-л." },
  { english: "repetitive [rɪˈpetətɪv]", russian: "повторяющийся" },
  { english: "likely [ˈlaɪkli]", russian: "вероятный" },
  { english: "to assess likely outcomes [əˈses]", russian: "оценивать вероятные результаты" },
  { english: "likelihood [ˈlaɪklihʊd]", russian: "вероятность" },
  { english: "pace [peɪs]", russian: "темп" },
  { english: "to accelerate the pace [əkˈseləreɪt]", russian: "ускорить темп чего-л." },
  { english: "to determine [dɪˈtɜːmɪn]", russian: "определять" },
  { english: "score [skɔː]", russian: "сумма баллов" },
  { english: "credit scoring", russian: "рейтинг кредитоспособности" },
  { english: "to estimate ['estɪmeɪt]", russian: "оценивать" },
  { english: "to estimate unknown outcomes", russian: "оценивать возможный результат" },
  { english: "loan [ləʊn]", russian: "кредит" },
  { english: "to repay a loan", russian: "выплатить кредит" },
  { english: "constraint [kənˈstreɪnt]", russian: "ограничение" },
  { english: "course of action [ˌkɔːs əv ˈækʃn]", russian: "план действий" },
  { english: "to recommend a course of action", russian: "рекомендовать план действий" },
];

export default function DataMiningWordCard() {
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
        <div className="mt-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-400">
          Unit 2
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Data Mining
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
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
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
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-purple-400">
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
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:shadow-purple-500/40"
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
                ? "bg-purple-500"
                : index < currentIndex
                ? "bg-purple-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}

