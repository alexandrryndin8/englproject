"use client";

import { useState } from "react";
import Link from "next/link";

const words = [
  // Notes
  { english: "biometric [ˌbaɪəʊˈmetrɪk]", russian: "биометрический" },
  { english: "expand [ɪkˈspænd]", russian: "расширять(ся)" },
  { english: "unique [juːˈniːk]", russian: "уникальный" },
  { english: "characteristic [ˌkærɪktəˈrɪstɪk]", russian: "характерный" },
  { english: "capacitive [kəˈpæsətiv]", russian: "ёмкостный" },
  { english: "method [ˈmeθəd]", russian: "метод" },
  { english: "algorithm [ˈælɡəˌrɪðm]", russian: "алгоритм" },
  { english: "numeric [njuːˌmerɪk]", russian: "цифровой" },
  { english: "identification [aɪˌdentɪfɪˈkeɪʃn]", russian: "идентификация" },
  { english: "ultrasound [ˈʌltrəˌsaʊnd]", russian: "ультразвуковой" },
  { english: "absolutely [ˈæbsəluːtli]", russian: "абсолютно" },
  { english: "surface [ˈsɜːfɪs]", russian: "поверхность" },
  { english: "safe [seɪf]", russian: "сейф" },
  { english: "to illuminate [ɪˈluːmɪneɪt]", russian: "освещать" },
  { english: "automobile [ˈɔːtəməˌbiːl]", russian: "автомобиль" },
  { english: "secure [sɪˈkjʊə]", russian: "безопасный" },
  { english: "privileged [ˈprɪvəlɪdʒd]", russian: "привилегированный" },
  { english: "infrared [ˌɪnfrəˈred]", russian: "инфракрасный" },
  { english: "technique [tekˈniːk]", russian: "технический приём" },
  { english: "contour [ˈkɒntʊə]", russian: "контур" },
  { english: "personalized [ˈpɜːsənəlaɪzd]", russian: "персонифицированный" },
  { english: "selection [sɪˈlekʃn]", russian: "набор" },
  // Vocabulary
  { english: "authentication [ɔːˌθentɪˈkeɪʃn]", russian: "аутентификация" },
  { english: "biometric authentication", russian: "биометрическая аутентификация" },
  { english: "wireless-device-based authentication", russian: "аутентификация на основе беспроводных устройств" },
  { english: "credit card authentication", russian: "аутентификация кредитной карты" },
  { english: "to rely [rɪˈlaɪ] on smb/smth", russian: "доверять, полагаться" },
  { english: "more and more people rely on it", russian: "все больше людей полагаются на это" },
  { english: "to verify [ˈverɪfaɪ]", russian: "подтверждать" },
  { english: "to verify one's identity", russian: "подтверждать личность" },
  { english: "to verify oneself", russian: "подтверждение" },
  { english: "verification [ˌverɪfɪˈkeɪʃn]", russian: "подтверждение" },
  { english: "It is enough to make a selfie to verify yourself when making a payment.", russian: "Достаточно сделать селфи для того, чтобы подтвердить свою личность при осуществлении платежа." },
  { english: "to measure [ˈmeʒə]", russian: "измерять" },
  { english: "measurement [ˈmeʒəmənt]", russian: "измерение, размер" },
  { english: "Biometric authentication is the process of verifying your identity using your measurements or other unique characteristics of your body.", russian: "Биометрическая аутентификация - это процесс проверки вашей личности с использованием ваших параметров или других уникальных характеристик вашего тела." },
  { english: "retina [ˈretɪnə]", russian: "сетчатка глаза" },
  { english: "retinal scan", russian: "сканирование сетчатки глаза" },
  { english: "iris [ˈaɪrɪs]", russian: "радужная оболочка глаза" },
  { english: "recognition [ˌrekəɡˈnɪʃn]", russian: "распознавание" },
  { english: "facial [ˈfeɪʃəl] recognition system", russian: "система распознавания лица" },
  { english: "to grant [ɡrɑːnt]", russian: "предоставить" },
  { english: "to grant user access", russian: "предоставить доступ пользователю" },
  { english: "to approve [əˈpruːv]", russian: "подтверждать" },
  { english: "to approve transactions [trænˈzækʃn]", russian: "подтверждать операции" },
  { english: "A fingerprint scanning is used to grant user access to information.", russian: "Дактилоскопический сканер используется при сканировании отпечатков пальцев для того, чтобы предоставить пользователю доступ к информации." },
  { english: "pattern [ˈpætən]", russian: "образец, рисунок" },
  { english: "print pattern", russian: "печатный образец" },
  { english: "to compile [kəmˈpaɪl] smth into smth", russian: "компилировать ч.-л. во ч.-л." },
  { english: "An optical scanner takes a photo of the finger, identifies the print pattern, and then compiles it into an identification code.", russian: "Оптический сканер делает фотографию пальца, идентифицирует печатный рисунок, а затем компилирует его в код идентификации." },
  { english: "gap [ɡæp]", russian: "промежуток" },
  { english: "air gap", russian: "воздушный промежуток" },
  { english: "to map [mæp] smth out", russian: "отображать ч.-л." },
  { english: "to map out the contact points and air gaps", russian: "отображать контактные точки и воздушные промежутки" },
  { english: "A capacitive scanner measures electrical signals sent from the finger to the scanner, maps out the contact points and air gaps, resulting in an absolutely unique pattern.", russian: "Емкостный сканер измеряет электрические сигналы, передаваемые от пальца к сканеру, отображает контактные точки и воздушные зазоры, в результате чего появляется абсолютно уникальный рисунок." },
  { english: "kit [kɪt]", russian: "набор" },
  { english: "biometric car starter kit", russian: "биометрический стартер автомобиля" },
  { english: "padlock [ˈpædˌlɒk]", russian: "висячий замок" },
  { english: "fingerprint-scanning padlocks", russian: "навесной замок со сканером отпечатков пальцев" },
  { english: "vessel [ˈvesl]", russian: "сосуд" },
  { english: "blood [blʌd] vessels", russian: "кровеносные сосуды" },
  { english: "tissue [ˈtɪʃjuː]", russian: "ткань" },
  { english: "surrounding [səˈraʊndɪŋ] tissue", russian: "окружающая ткань" },
  { english: "A retinal scan illuminates the complex blood vessels in a person's eye using infrared light, making them more visible than the surrounding tissue.", russian: "Сканирование сетчатки освещает извитые кровеносные сосуды в глазу человека с помощью инфракрасного света, делая их более заметными, чем окружающие ткани." },
  { english: "current [ˈkʌrənt]", russian: "текущий, современный" },
  { english: "current and future application", russian: "текущие и будущие применения" },
  { english: "border [ˈbɔːdə]", russian: "граница" },
  { english: "national border control", russian: "пограничный контроль, охрана государственной границы" },
  { english: "ignition [ɪɡˈnɪʃn]", russian: "зажигание автомобиля" },
  { english: "automobile ignition and unlocking", russian: "запуск и разблокировка дверей автомобиля" },
  { english: "theft [θeft]", russian: "кража" },
  { english: "anti-theft devices", russian: "противоугонные устройства" },
  { english: "distinctive [dɪˈstɪŋktɪv]", russian: "отличительный" },
  { english: "to capture and identify distinctive features", russian: "запечатлевать и идентифицировать отличительные черты" },
  { english: "socket [ˈsɒkɪt]", russian: "впадина, углубление" },
  { english: "eye socket", russian: "глазница" },
  { english: "chin [tʃɪn]", russian: "подбородок" },
  { english: "to assure [əˈʃʊə]", russian: "заверять, подтверждать" },
  { english: "assured online exams", russian: "подтвержденные онлайн-экзамены" },
  { english: "Today facial recognition allows to identify students at assured online exams.", russian: "Сегодня распознавание лица позволяет идентифицировать учащихся на подтвержденных онлайн экзаменах." },
];

export default function BiometricAuthenticationWordCard() {
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
        <div className="mt-4 inline-flex items-center rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-400">
          Unit 6
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Biometric Authentication
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
            className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300"
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
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-950/50 to-zinc-950 p-8"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-4 text-xs uppercase tracking-wider text-rose-400">
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
            className="flex h-12 flex-1 max-w-xs items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 font-semibold text-white shadow-lg shadow-rose-500/25 transition hover:shadow-rose-500/40"
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
                ? "bg-rose-500"
                : index < currentIndex
                ? "bg-rose-500/50"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
