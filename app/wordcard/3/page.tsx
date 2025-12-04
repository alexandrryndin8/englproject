"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  { english: "lifecycle [ˈlaɪf saɪkl]", russian: "жизненный цикл" },
  { english: "original [əˈrɪdʒənl]", russian: "первоначальный" },
  { english: "original format [ˈfɔːmat]", russian: "первоначальный формат" },
  { english: "random [ˈrændəm]", russian: "случайный, произвольно выбранный" },
  { english: "character [ˈkærəktə]", russian: "цифра, буква, знак, символ" },
  { english: "to represent [ˌreprɪˈzent]", russian: "представлять" },
  { english: "to reverse [rɪˈvɜːs]", russian: "возвращать, обращать" },
  { english: "SSN – Social Security Number", russian: "номер свидетельства соц. страхования" },
  { english: "sensitive [ˈsensətɪv]", russian: "засекреченный, секретный, уязвимый" },
  { english: "sensitive value [ˈvælju:]", russian: "засекреченное цифровое значение" },
  { english: "sensitive data", russian: "секретные данные, конфиденциальная информация" },
  { english: "sensitivity", russian: "конфиденциальность" },
  { english: "substitute [ˈsʌbstɪtjuːt]", russian: "заменитель, замена" },
  { english: "various [ˈveəriəs]", russian: "различный" },
  { english: "component [kəmˈpəʊnənt]", russian: "часть, деталь, компонент" },
  { english: "to identify [aɪˈdentɪfaɪ]", russian: "определить, установить личность" },
  { english: "throughout [θruːˈaʊt]", russian: "на всём протяжении" },
  { english: "to authorize [ˈɔːθəraɪz]", russian: "давать разрешение" },
  { english: "unauthorized access [ˈæksəs]", russian: "несанкционированный доступ" },
  { english: "authorization [ˌɔːθəraɪˈzeɪʃn]", russian: "проверка регистрационной информации о пользователе" },
  { english: "corruption [kəˈrʌpʃn]", russian: "повреждение, разрушение" },
  { english: "data corruption", russian: "нарушение целостности данных" },
  { english: "measure [ˈmeʒə]", russian: "мера" },
  { english: "security measures", russian: "меры безопасности" },
  { english: "encryption [ɪnˈkrɪpʃn]", russian: "шифрование" },
  { english: "data encryption", russian: "шифрование данных" },
  { english: "to encrypt / to decrypt", russian: "зашифровать / расшифровать" },
  { english: "plain [pleɪn]", russian: "простой, понятный" },
  { english: "plain text", russian: "обычный, незашифрованный текст" },
  { english: "ciphertext [ˈsaɪfətekst]", russian: "зашифрованный текст" },
  { english: "token [ˈtəʊkən]", russian: "токен, жетон, ярлык, символ" },
  { english: "tokenization [ˈtəʊkənaɪˈzeɪʃn]", russian: "токенизация" },
  { english: "string [strɪŋ]", russian: "строка" },
  { english: "random string of characters", russian: "случайная последовательность символов" },
  { english: "vault [vɔːlt]", russian: "хранилище" },
  { english: "advantage [ədˈvɑːntɪdʒ]", russian: "преимущество" },
  { english: "disadvantage [ˌdɪsədˈvɑ:ntɪdʒ]", russian: "недостаток" },
  { english: "to breach [briːtʃ]", russian: "нарушить целостность, создать брешь" },
  { english: "security breach", russian: "нарушение защиты" },
  { english: "value [ˈvæljuː]", russian: "значение" },
  { english: "data values", russian: "значения данных" },
  { english: "account [əˈkaʊnt]", russian: "счёт" },
  { english: "account number", russian: "номер счёта" },
  { english: "to submit [səbˈmɪt]", russian: "представлять на рассмотрение, предъявлять" },
  { english: "to retrieve [rɪˈtriːv]", russian: "извлекать" },
  { english: "to be aware [əˈweə] of smth", russian: "быть в курсе чего-л., отдавать себе отчёт в чём-л." },
  { english: "to reduce [rɪˈdjuːs] smth to smth", russian: "сводить что-л. к чему-л." },
  { english: "authenticated [ɔːˈθentɪkeɪtɪd] user", russian: "аутентифицированный пользователь" },
  { english: "to keep track [træk] of smth", russian: "отслеживать, фиксировать" },
  { english: "degree [dɪˈɡriː]", russian: "степень" },
  { english: "high degree of sensitivity", russian: "высокая степень конфиденциальности" },
  { english: "to log smb's access to data in detail", russian: "подробно залогировать чей-л. доступ к данным" },
];

export default function DataSecurityWordCard() {
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
        <div className="mt-4 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
          Unit 3
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Data Security
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
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
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
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-emerald-400">
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
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-emerald-500/40"
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
                ? "bg-emerald-500"
                : index < currentIndex
                ? "bg-emerald-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}

