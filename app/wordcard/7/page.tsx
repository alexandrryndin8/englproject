"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  // Notes
  { english: "regulate [ˈrɛɡjʊleɪt]", russian: "регулировать" },
  { english: "heartbeat [ˈhɑːtbiːt]", russian: "сердцебиение" },
  { english: "increasingly [ɪnˈkriːsɪŋli]", russian: "всё более" },
  { english: "RFID [ɑːef aɪˈdi], radio frequency identification", russian: "радиочастотная идентификация" },
  { english: "biohacker [ˈbaɪoʊˈhækə]", russian: "биохакер" },
  { english: "advanced [ədˈvænst]", russian: "продвинутый, развитый" },
  { english: "practice [ˈpræktəs]", russian: "практика" },
  { english: "routinely [ru:ˈti:nlɪ]", russian: "повседневно, на регулярной основе" },
  { english: "to implant [ɪmˈplænt] a chip", russian: "вставить чип, чипировать" },
  { english: "implant [ˈɪmˌplænt]", russian: "имплантант" },
  { english: "human [ˈhjumən]", russian: "человек" },
  { english: "DIY, 'do-it-yourself' [diː aɪ waɪ]", russian: "сделанный самостоятельно" },
  { english: "tattoo studio [tæˈtu ˈstjudɪˌoʊ]", russian: "тату-студия" },
  { english: "ritual [ˈrɪtʃuəl]", russian: "ритуал" },
  { english: "electronically [ˌɪlɛkˈtrɒnɪklɪ]", russian: "посредством электронных устройств" },
  { english: "jogging [ˈdʒɒɡɪŋ]", russian: "пробежка" },
  { english: "Australian [ɔˈstreɪlɪən]", russian: "австралийский" },
  { english: "Belgian [ˈbeldʒən]", russian: "бельгийский" },
  { english: "Swedish [ˈswi:dɪʃ]", russian: "шведский" },
  { english: "basics [ˈbeɪsɪks]", russian: "основы" },
  { english: "passport [ˈpæsˌpɔrt]", russian: "паспорт" },
  { english: "transhumanist [trænsˈhjumənɪst]", russian: "трансгуманист" },
  { english: "candidate [ˈkændɪdət]", russian: "кандидат" },
  { english: "governor [ˈɡʌvənər]", russian: "губернатор" },
  { english: "voluntary [ˈvɒlənˌtərɪ]", russian: "добровольный" },
  { english: "firm [f ɜːm]", russian: "фирма" },
  // Vocabulary
  { english: "enhancement [ɪnˈh ɑːnsˌmənt]", russian: "улучшение, совершенствование" },
  { english: "human [ˈhju:mən] enhancement", russian: "расширение возможностей человека" },
  { english: "to enhance one's mind [ˈmaind]", russian: "усиливать умственные способности" },
  { english: "spectacles [ˈspektəkəlz]", russian: "очки" },
  { english: "pacemaker [ˈpeɪsˌmeɪkər]", russian: "кардиостимулятор" },
  { english: "Your smartphone enhances your mind, your spectacles enhance your vision, and your pacemaker regulates your heartbeat.", russian: "Ваш смартфон делает вас умнее, очки улучшают ваше зрение, а кардиостимулятор регулирует сердцебиение." },
  { english: "environment [ɪnˈvaɪrənmənt]", russian: "окружающая среда, окружение" },
  { english: "to develop new marketable applications", russian: "разработать новые востребованные на рынке приложения" },
  { english: "New marketable applications for advanced technologies are designed to help humans to be stronger, smarter, better-looking.", russian: "Новые востребованные на рынке приложения новейшим технологиям создаются, чтобы помочь людям быть сильнее, умнее, красивее." },
  { english: "to cultivate [ˈkʌltɪˌveɪt] new abilities", russian: "развивать новые способности" },
  { english: "by the standards [ˈstændədz] of smth", russian: "по стандартам чего-л." },
  { english: "These new abilities seem like superpowers by the standards of the past.", russian: "Эти новые способности кажутся суперспособностями по меркам прошлого." },
  { english: "to undergo [ˌəndəˈɡoʊ]", russian: "переносить, претерпевать" },
  { english: "to undergo а surgery [ˈsərdʒərɪ]", russian: "перенести операцию" },
  { english: "wrist [rɪst]", russian: "запястье" },
  { english: "citizen [ˈsɪtɪzən]", russian: "гражданин" },
  { english: "citizen cyborg [ˈsaɪbɔːɡ]", russian: "гражданин-киборг" },
  { english: "to eliminate [ɪˈlɪmɪneɪt] smth.", russian: "устранять что-л., избавиться от чего-л." },
  { english: "to eliminate a tedious [ˈtiːdɪəs] ritual from one's daily life", russian: "избавиться от утомительной рутины в своей повседневной жизни" },
  { english: "wallet [ˈwɒlɪt]", russian: "бумажник" },
  { english: "to make a tap-and-go payment [tæpənˈɡoʊ ˈpeɪmənt]", russian: "производить «оплату в одно касание»" },
  { english: "to be used on a national scale [skeɪl]", russian: "использоваться в общенациональном масштабе" },
  { english: "Chipping could soon be used on a national scale for identification and security.", russian: "Чипирование, возможно, скоро будет использоваться в общенациональном масштабе в целях идентификации и безопасности." },
  { english: "identity theft [θɛft]", russian: "кража идентификационных данных" },
  { english: "to be a concern [kənˈsəːn]", russian: "вызывать озабоченность" },
  { english: "Hacking and identity theft will certainly be a concern.", russian: "Взлом и кража идентификационных данных, безусловно, будут вызывать озабоченность." },
  { english: "on the plus side [plʌs saɪd]", russian: "плюсом является…" },
  { english: "anxiety [æŋˈzaɪətɪ] about smth.", russian: "тревога по поводу чего-л." },
  { english: "But on the plus side there will be no more anxiety about losing your passport when you travel!", russian: "Плюсом является то, что больше не будет тревоги по поводу утери паспорта во время путешествий!" },
  { english: "to be adopted [əˈdɒptɪd]", russian: "применяться, осваиваться" },
];

export default function HumanEnhancementWordCard() {
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
        <div className="mt-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
          Unit 7
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Human Enhancement
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
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300"
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
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-violet-400">
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
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40"
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
                ? "bg-violet-500"
                : index < currentIndex
                ? "bg-violet-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
