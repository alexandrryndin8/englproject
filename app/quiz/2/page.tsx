"use client";

import { useState } from "react";
import Link from "next/link";

const multipleChoiceQuestions = [
  {
    id: 1,
    question: "What is the main goal of data mining?",
    options: [
      { key: "a", text: "To collect as much data as possible" },
      { key: "b", text: "To find anomalies, patterns and correlations in data to predict outcomes" },
      { key: "c", text: "To replace human workers with machines" },
      { key: "d", text: "To store data more cheaply" },
    ],
    correct: "b",
  },
  {
    id: 2,
    question: "Which three scientific disciplines form the foundation of data mining?",
    options: [
      { key: "a", text: "Physics, chemistry, biology" },
      { key: "b", text: "Statistics, artificial intelligence, machine learning" },
      { key: "c", text: "Economics, marketing, management" },
      { key: "d", text: "Networking, cybersecurity, electronics" },
    ],
    correct: "b",
  },
  {
    id: 3,
    question: "Why has data mining become quicker and easier over the last decade?",
    options: [
      { key: "a", text: "Because companies stopped using manual methods" },
      { key: "b", text: "Because the volume of data has decreased" },
      { key: "c", text: "Because advances in processing power and speed allow automated data analysis" },
      { key: "d", text: "Because people are not interested in data anymore" },
    ],
    correct: "c",
  },
  {
    id: 4,
    question: "Which of the following is not mentioned in the text as a user of data mining?",
    options: [
      { key: "a", text: "Retailers" },
      { key: "b", text: "Banks" },
      { key: "c", text: "Manufacturers" },
      { key: "d", text: "Space agencies" },
    ],
    correct: "d",
  },
  {
    id: 5,
    question: "What is descriptive modeling mainly used for?",
    options: [
      { key: "a", text: "To recommend the best course of action in the future" },
      { key: "b", text: "To uncover similarities in historical data and explain success or failure" },
      { key: "c", text: "To calculate the exact amount of money a company will earn" },
      { key: "d", text: "To predict the weather for the next decade" },
    ],
    correct: "b",
  },
  {
    id: 6,
    question: "What does predictive modeling do according to the text?",
    options: [
      { key: "a", text: "It classifies customers only by age" },
      { key: "b", text: "It focuses only on past events" },
      { key: "c", text: "It classifies future events or estimates unknown outcomes" },
      { key: "d", text: "It only describes existing data without predictions" },
    ],
    correct: "c",
  },
  {
    id: 7,
    question: 'What does the sentence "The term \'data mining\' wasn\'t coined until the 1990s" mean?',
    options: [
      { key: "a", text: "People stopped using the term in the 1990s" },
      { key: "b", text: "The term started to be used in the 1990s" },
      { key: "c", text: "The term was printed on coins in the 1990s" },
      { key: "d", text: "Data mining did not exist before the 1990s" },
    ],
    correct: "b",
  },
];

const trueFalseQuestions = [
  {
    id: 8,
    question: "Data mining helps sift through repetitive noise in data and understand what is relevant.",
    correct: true,
  },
  {
    id: 9,
    question: "Data mining is important because more data automatically means more knowledge.",
    correct: false,
  },
  {
    id: 10,
    question: "Prescriptive modeling looks at internal and external variables and constraints to recommend one or more courses of action.",
    correct: true,
  },
  {
    id: 11,
    question: "According to the text, the volume of data produced is doubling every five years.",
    correct: false,
  },
];

const matchingTerms = [
  { id: 1, term: "anomaly" },
  { id: 2, term: "descriptive modeling" },
  { id: 3, term: "predictive modeling" },
  { id: 4, term: "prescriptive modeling" },
  { id: 5, term: "credit scoring" },
];

const matchingDefinitions = [
  { key: "A", text: "A process that uses a person's data to estimate their likelihood of repaying a loan." },
  { key: "B", text: "A method that goes deeper to classify future events or estimate unknown outcomes." },
  { key: "C", text: "A method that uncovers similarities in historical data to explain success or failure." },
  { key: "D", text: "A rare or unexpected data point that does not fit the general pattern." },
  { key: "E", text: "A method that looks at variables and constraints to recommend one or more courses of action." },
];

const correctMatching: Record<number, string> = {
  1: "D",
  2: "C",
  3: "B",
  4: "E",
  5: "A",
};

export default function DataMiningQuiz() {
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

    // Multiple choice (7 points)
    multipleChoiceQuestions.forEach((q) => {
      if (mcAnswers[q.id] === q.correct) total++;
    });

    // True/False (2 points)
    trueFalseQuestions.forEach((q) => {
      if (tfAnswers[q.id] === q.correct) total++;
    });

    // Matching (5 points)
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
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to units
        </Link>
        <div className="mt-4 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
          Unit 2
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Data Mining
        </h1>
        <p className="mt-2 text-zinc-400">
          Test your knowledge about data mining concepts and techniques.
        </p>
      </div>

      {/* Score Card */}
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
              {percentage >= 80 && (
                <div className="text-5xl">🎉</div>
              )}
              {percentage >= 60 && percentage < 80 && (
                <div className="text-5xl">👍</div>
              )}
              {percentage < 60 && (
                <div className="text-5xl">📚</div>
              )}
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

      {/* Part 1: Multiple Choice */}
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

      {/* Part 2: True/False */}
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

      {/* Part 3: Matching */}
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

      {/* Submit Button */}
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

