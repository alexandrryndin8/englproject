"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  // Notes
  { english: "simulation [ˌsɪmjʊˈleɪʃn]", russian: "симуляция, моделирование" },
  { english: "process [ˈprəʊses]", russian: "процесс" },
  { english: "efficiently [ɪˈfɪʃəntlɪ]", russian: "эффективно" },
  { english: "self-correction [ˌself kəˈrekʃn]", russian: "самокоррекция" },
  { english: "to collect [kəˈlekt]", russian: "собирать" },
  { english: "to identify [aɪˈdentɪfaɪ]", russian: "идентифицировать" },
  { english: "robotic process automation [rəʊˈbɒtɪk ˈprəʊses ˌɔːtəˈmeɪʃn]", russian: "роботизированная автоматизация процессов" },
  { english: "natural language processing [ˈnætʃərəl ˈlæŋɡwɪdʒ ˈprəʊsəsɪŋ]", russian: "обработка текстов на естественном языке" },
  { english: "robotics [rəʊˈbɒtɪks]", russian: "робототехника" },
  { english: "to adapt [əˈdæpt]", russian: "адаптировать" },
  { english: "machine vision [məˈʃiːn ˈvɪʒn]", russian: "машинное зрение, автоматический анализ видеоинформации" },
  { english: "to analyze [tə ˈænəlaɪz]", russian: "анализировать" },
  { english: "visual [ˈvɪʒʊəl]", russian: "визуальный" },
  { english: "analog-to-digital conversion [kənˈvɜːʃn]", russian: "преобразование из аналоговой формы в цифровую" },
  { english: "eyesight [ˈaɪˌsaɪt]", russian: "зрение" },
  { english: "biology [baɪˈɒlədʒi]", russian: "биология" },
  { english: "identification [aɪˌdentɪfɪˈkeɪʃn]", russian: "идентификация" },
  { english: "medical image analysis [ˈmedɪkəl ˈɪmɪdʒ əˈnæləsɪs]", russian: "анализ медицинских снимков" },
  { english: "spam [spæm]", russian: "спам" },
  { english: "subject [ˈsʌbdʒɪkt]", russian: "субъект" },
  { english: "current [ˈkʌrənt]", russian: "современный" },
  { english: "sentiment analysis [ˈsentɪmənt əˈnæləsɪs]", russian: "анализ тональности, эмоциональной окраски высказываний" },
  { english: "focus [ˈfəʊkəs]", russian: "фокус" },
  { english: "object [ˈɒbdʒekt]", russian: "объект" },
  // Vocabulary
  { english: "intelligence [ɪnˈtelɪdʒəns]", russian: "интеллект" },
  { english: "artificial [ˌɑːtɪˈfɪʃəl] intelligence", russian: "искусственный интеллект (ИИ)" },
  { english: "human [ˈhjuːmən] intelligence", russian: "человеческий интеллект" },
  { english: "to retrieve [rɪˈtriːv]", russian: "извлекать" },
  { english: "to retrieve information", russian: "извлекать информацию" },
  { english: "to reason [ˈriːzn]", russian: "рассуждать, делать выводы" },
  { english: "reasoning", russian: "рассуждение" },
  { english: "conclusion [kənˈkluːʒn]", russian: "вывод" },
  { english: "to reach a conclusion", russian: "приходить к выводу" },
  { english: "approximate [əˈprɒksɪmət] conclusions", russian: "промежуточные выводы" },
  { english: "definite conclusions", russian: "окончательные выводы" },
  { english: "particular [pəˈtɪkjʊlə]", russian: "отдельный" },
  { english: "Particular applications of AI include expert systems, speech recognition and machine vision.", russian: "Отдельные ИИ приложения включают экспертные системы, распознавание речи и машинное зрение." },
  { english: "recognition [ˌrekəɡˈnɪʃn]", russian: "распознавание" },
  { english: "speech recognition", russian: "распознавание речи" },
  { english: "to gain [ɡeɪn]", russian: "получать" },
  { english: "to gain prominence [ˈprɒmɪnəns]", russian: "завоевать известность" },
  { english: "to gain insight [ˈɪnsaɪt]", russian: "вникать, получать чёткую картину происходящего" },
  { english: "AI enables businesses to gain more insight out of their data.", russian: "ИИ позволяет компаниям получать более чёткую картину происходящего на основе их данных." },
  { english: "circumstance [ˈsɜːkəmstəns]", russian: "обстоятельство" },
  { english: "Robotic process automation is different from IT automation in that it can adapt to changing circumstances.", russian: "Роботизированная автоматизация процессов отличается от автоматизации в информационных технологиях тем, что она может адаптироваться к изменяющимся обстоятельствам." },
  { english: "learning [ˈlɜːnɪŋ]", russian: "обучение" },
  { english: "machine learning", russian: "машинное обучение" },
  { english: "deep learning", russian: "глубокое обучение" },
  { english: "supervised [ˈsuːpəvaɪzd] learning", russian: "обучение с учителем" },
  { english: "unsupervised learning", russian: "обучение без учителя" },
  { english: "reinforcement [ˌriːɪnˈfɔːsmənt] learning", russian: "обучение с подкреплением" },
  { english: "to label [ˈleɪbl]", russian: "маркировать, размечать" },
  { english: "to be labeled", russian: "быть промаркированным, размеченным по принадлежности к к.-л. классу" },
  { english: "similarity [ˌsɪməˈlærəti]", russian: "совпадение, сходство" },
  { english: "similarities and differences", russian: "сходства и различия" },
  { english: "In unsupervised learning data sets are not labeled and are sorted according to similarities or differences.", russian: "При обучении без учителя наборы данных не размечаются и сортируются в соответствии со сходствами или различиями." },
  { english: "to be compared [kəmˈpeəd] to smth", russian: "быть сравниваемым с ч.-л." },
  { english: "Machine vision is often compared to human eyesight", russian: "Машинное зрение часто сравнивается со зрением человека" },
  { english: "to be bound [baʊnd] by smth", russian: "быть связанным (ограниченным) ч.-л." },
  { english: "Machine vision isn't bound by biology and can be programmed to see through walls.", russian: "Машинное зрение не ограничено биологическими возможностями и может быть запрограммировано, чтобы видеть сквозь стены." },
  { english: "signature [ˈsɪɡnətʃə]", russian: "подпись" },
  { english: "signature identification", russian: "идентификация по подписи" },
  { english: "junk [dʒʌŋk]", russian: "ненужный хлам" },
  { english: "Spam detection looks at the subject line and the text of an email and decides if it's junk.", russian: "Обнаружение спама рассматривает тему и текст сообщения электронной почты и решает, является ли это нежелательным." },
  { english: "approach [əˈprəʊtʃ]", russian: "подход" },
  { english: "current approaches", russian: "современные подходы" },
  { english: "to perform [pəˈfɔːm]", russian: "выполнять" },
  { english: "to perform high-volume, repeatable [rɪˈpiːtəbl] tasks", russian: "выполнять крупномасштабные повторяющиеся задачи" },
  { english: "to capture [ˈkæptʃə]", russian: "захватывать" },
  { english: "Machine vision captures and analyzes visual information using a camera.", russian: "Машинное зрение захватывает и анализирует визуальную информацию с помощью камеры." },
  { english: "assembly line [əˈsembli laɪn]", russian: "конвейер" },
  { english: "Robots are used in assembly lines for car production.", russian: "Роботы используются на конвейерах для производства автомобилей." },
  { english: "social setting [ˌsəʊʃəl ˈsetɪŋ]", russian: "ситуации социального общения" },
  { english: "Researchers use machine learning to build robots that can interact in social settings.", russian: "Исследователи используют машинное обучение для создания роботов, которые могут взаимодействовать в условиях социального общения." },
];

export default function ArtificialIntelligenceWordCard() {
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
        <div className="mt-4 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
          Unit 5
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Artificial Intelligence
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
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
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
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-indigo-400">
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
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
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
                ? "bg-indigo-500"
                : index < currentIndex
                ? "bg-indigo-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
