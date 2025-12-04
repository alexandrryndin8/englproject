"use client";

import { useState } from "react";
import Link from "next/link";

const multipleChoiceQuestions = [
  {
    id: 1,
    question: "What is the main idea of human enhancement?",
    options: [
      { key: "a", text: "To replace all biological organs with mechanical ones" },
      { key: "b", text: "To improve human physical or cognitive abilities using technology" },
      { key: "c", text: "To reduce dependence on computers" },
      { key: "d", text: "To limit technological progress for safety" },
    ],
    correct: "b",
  },
  {
    id: 2,
    question: "Which enhancement is mentioned in the text as a way to restore or improve vision?",
    options: [
      { key: "a", text: "Neurochips" },
      { key: "b", text: "Bionic eyes" },
      { key: "c", text: "Exoskeleton suits" },
      { key: "d", text: "Genetic modification" },
    ],
    correct: "b",
  },
  {
    id: 3,
    question: "What is the purpose of exoskeletons according to the text?",
    options: [
      { key: "a", text: "To improve hearing" },
      { key: "b", text: "To increase strength and mobility" },
      { key: "c", text: "To record brain activity" },
      { key: "d", text: "To store additional memory" },
    ],
    correct: "b",
  },
  {
    id: 4,
    question: "What is a potential cognitive enhancement mentioned in the unit?",
    options: [
      { key: "a", text: "Artificial lungs" },
      { key: "b", text: "Memory-improving implants" },
      { key: "c", text: "Robotic arms" },
      { key: "d", text: "Smart clothing" },
    ],
    correct: "b",
  },
  {
    id: 5,
    question: "Which ethical concern about enhancement is discussed?",
    options: [
      { key: "a", text: "Enhanced people may become slower" },
      { key: "b", text: "Only wealthy people may get access to enhancements" },
      { key: "c", text: "Technology might stop working forever" },
      { key: "d", text: "Enhancement will make humans identical" },
    ],
    correct: "b",
  },
  {
    id: 6,
    question: "What do neuroimplants primarily interact with?",
    options: [
      { key: "a", text: "The digestive system" },
      { key: "b", text: "The electrical activity of the brain" },
      { key: "c", text: "The immune system" },
      { key: "d", text: "The circulatory system" },
    ],
    correct: "b",
  },
  {
    id: 7,
    question: "Which advantage of human enhancement is mentioned in the unit?",
    options: [
      { key: "a", text: "People can work without sleeping" },
      { key: "b", text: "It can improve the quality of life for disabled individuals" },
      { key: "c", text: "It eliminates all health problems" },
      { key: "d", text: "It guarantees 100% safety in all tasks" },
    ],
    correct: "b",
  },
];



const trueFalseQuestions = [
  {
    id: 8,
    question: "Human enhancement may include both physical and cognitive improvements.",
    correct: true,
  },
  {
    id: 9,
    question: "Exoskeletons are designed mainly to improve memory functions.",
    correct: false,
  },
  {
    id: 10,
    question: "One ethical concern is that enhancements could create inequality between people.",
    correct: true,
  },
  {
    id: 11,
    question: "Bionic eyes are described as a technology that can restore or improve vision.",
    correct: true,
  },
];



const matchingTerms = [
  { id: 1, term: "Bionic eye" },
  { id: 2, term: "Exoskeleton" },
  { id: 3, term: "Neuroimplant" },
  { id: 4, term: "Cognitive enhancement" },
  { id: 5, term: "Ethical concern" },
];


const matchingDefinitions = [
  { key: "A", text: "A technology that interacts with the brain’s electrical signals." },
  { key: "B", text: "Improving memory, learning, or thinking abilities." },
  { key: "C", text: "An external mechanical suit that increases strength and mobility." },
  { key: "D", text: "A device that can restore or improve eyesight." },
  { key: "E", text: "A moral issue related to fairness, safety, or access." },
];


const correctMatching: Record<number, string> = {
  1: "D",
  2: "C",
  3: "A",
  4: "B",
  5: "E",
};


export default function BigDataQuiz() {
  const [mcAnswers, setMcAnswers] = useState<Record<number, string>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<number, boolean | null>>({});
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleMcChange = (questionId: number, answer: string) => {
    setMcAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleTfChange = (questionId: number, answer: boolean) => {
    setTfAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleMatchChange = (termId: number, defKey: string) => {
    setMatchAnswers((prev) => ({ ...prev, [termId]: defKey }));
  };

  const calculateScore = () => {
    let total = 0;

    multipleChoiceQuestions.forEach((q) => {
      if (mcAnswers[q.id] === q.correct) total++;
    });

    trueFalseQuestions.forEach((q) => {
      if (tfAnswers[q.id] === q.correct) total++;
    });

    matchingTerms.forEach((t) => {
      if (matchAnswers[t.id] === correctMatching[t.id]) total++;
    });

    return total;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setMcAnswers({});
    setTfAnswers({});
    setMatchAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const totalQuestions = 16;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return "text-emerald-400";
    if (percentage >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const isCorrectMc = (questionId: number) => {
    const q = multipleChoiceQuestions.find((q) => q.id === questionId);
    return q && mcAnswers[questionId] === q.correct;
  };

  const isCorrectTf = (questionId: number) => {
    const q = trueFalseQuestions.find((q) => q.id === questionId);
    return q && tfAnswers[questionId] === q.correct;
  };

  const isCorrectMatch = (termId: number) => {
    return matchAnswers[termId] === correctMatching[termId];
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to units
        </Link>
        <div className="mt-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
          Unit 7
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Human Enhancement
        </h1>
        <p className="mt-2 text-zinc-400">
          Answer using the information from the unit text (3Vs, snapshots, and key ideas).
        </p>
      </div>

      {submitted && (
        <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Your Score</p>
              <p className={`text-4xl font-bold ${getScoreColor()}`}>
                {score} / {totalQuestions}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{percentage}% correct</p>
            </div>
            <div className="text-right">
              {percentage >= 80 && <div className="text-5xl">🎉</div>}
              {percentage >= 60 && percentage < 80 && <div className="text-5xl">👍</div>}
              {percentage < 60 && <div className="text-5xl">📚</div>}
              <p className="mt-2 text-sm text-zinc-400">
                {percentage >= 80 && "Excellent work!"}
                {percentage >= 60 && percentage < 80 && "Good job!"}
                {percentage < 60 && "Keep studying!"}
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="mt-4 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Try Again
          </button>
        </div>
      )}

      <section className="mb-10">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Part 1. Multiple Choice
          <span className="ml-2 text-sm font-normal text-zinc-500">(7 questions)</span>
        </h2>

        <div className="space-y-6">
          {multipleChoiceQuestions.map((q) => (
            <div
              key={q.id}
              className={`rounded-2xl border p-5 transition ${
                submitted
                  ? isCorrectMc(q.id)
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-red-500/30 bg-red-500/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p className="mb-4 font-medium text-white">
                <span className="mr-2 text-zinc-500">{q.id}.</span>
                {q.question}
              </p>

              <div className="space-y-2">
                {q.options.map((opt) => (
                  <label
                    key={opt.key}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                      submitted
                        ? opt.key === q.correct
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                          : mcAnswers[q.id] === opt.key
                          ? "border-red-500/50 bg-red-500/10 text-red-300"
                          : "border-white/5 bg-white/5 text-zinc-400"
                        : mcAnswers[q.id] === opt.key
                        ? "border-cyan-500/50 bg-cyan-500/10 text-white"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`mc-${q.id}`}
                      value={opt.key}
                      checked={mcAnswers[q.id] === opt.key}
                      onChange={() => handleMcChange(q.id, opt.key)}
                      disabled={submitted}
                      className="sr-only"
                    />
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-xs font-medium">
                      {opt.key}
                    </span>
                    <span className="text-sm">{opt.text}</span>
                  </label>
                ))}
              </div>

              {submitted && !isCorrectMc(q.id) && (
                <p className="mt-3 text-sm text-emerald-400">
                  ✓ Correct answer: {q.correct}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Part 2. True / False
          <span className="ml-2 text-sm font-normal text-zinc-500">(4 questions)</span>
        </h2>

        <div className="space-y-6">
          {trueFalseQuestions.map((q) => (
            <div
              key={q.id}
              className={`rounded-2xl border p-5 transition ${
                submitted
                  ? isCorrectTf(q.id)
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-red-500/30 bg-red-500/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p className="mb-4 font-medium text-white">
                <span className="mr-2 text-zinc-500">{q.id}.</span>
                {q.question}
              </p>

              <div className="flex gap-3">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    onClick={() => handleTfChange(q.id, val)}
                    disabled={submitted}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                      submitted
                        ? val === q.correct
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-300"
                          : tfAnswers[q.id] === val
                          ? "border-red-500/50 bg-red-500/10 text-red-300"
                          : "border-white/5 bg-white/5 text-zinc-400"
                        : tfAnswers[q.id] === val
                        ? "border-cyan-500/50 bg-cyan-500/10 text-white"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    {val ? "True" : "False"}
                  </button>
                ))}
              </div>

              {submitted && !isCorrectTf(q.id) && (
                <p className="mt-3 text-sm text-emerald-400">
                  ✓ Correct answer: {q.correct ? "True" : "False"}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Part 3. Matching
          <span className="ml-2 text-sm font-normal text-zinc-500">(match terms with definitions)</span>
        </h2>

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="mb-4 text-sm font-medium text-zinc-400">Definitions:</p>
          <div className="space-y-2">
            {matchingDefinitions.map((def) => (
              <p key={def.key} className="text-sm text-zinc-300">
                <span className="mr-2 font-medium text-cyan-400">{def.key}.</span>
                {def.text}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {matchingTerms.map((term) => (
            <div
              key={term.id}
              className={`flex items-center justify-between rounded-2xl border p-4 transition ${
                submitted
                  ? isCorrectMatch(term.id)
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-red-500/30 bg-red-500/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-sm font-medium text-white">
                  {term.id}
                </span>
                <span className="font-medium text-white">{term.term}</span>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={matchAnswers[term.id] || ""}
                  onChange={(e) => handleMatchChange(term.id, e.target.value)}
                  disabled={submitted}
                  className={`rounded-xl border bg-zinc-900 px-4 py-2 text-sm font-medium outline-none transition ${
                    submitted
                      ? isCorrectMatch(term.id)
                        ? "border-emerald-500/50 text-emerald-300"
                        : "border-red-500/50 text-red-300"
                      : matchAnswers[term.id]
                      ? "border-cyan-500/50 text-white"
                      : "border-white/10 text-zinc-400"
                  }`}
                >
                  <option value="">Select...</option>
                  {matchingDefinitions.map((def) => (
                    <option key={def.key} value={def.key}>
                      {def.key}
                    </option>
                  ))}
                </select>

                {submitted && !isCorrectMatch(term.id) && (
                  <span className="text-sm text-emerald-400">→ {correctMatching[term.id]}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
        >
          Submit Quiz
        </button>
      )}
    </main>
  );
}
