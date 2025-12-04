<<<<<<< HEAD
export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <h1>Quiz</h1>
      </div>
    </main>
  );
}
=======
"use client";

import { useState } from "react";
import Link from "next/link";

const multipleChoiceQuestions = [
    {
      id: 1,
      question: "What does data security refer to?",
      options: [
        { key: "a", text: "Efficient data compression during transmission" },
        { key: "b", text: "Protecting data from unauthorized access and data corruption throughout its lifecycle" },
        { key: "c", text: "Storing all data in the cloud" },
        { key: "d", text: "Organizing data into databases" },
      ],
      correct: "b",
    },
    {
      id: 2,
      question: "Which term is also used to describe data security?",
      options: [
        { key: "a", text: "Data mining" },
        { key: "b", text: "Information security or computer security" },
        { key: "c", text: "Cloud computing" },
        { key: "d", text: "Data compression" },
      ],
      correct: "b",
    },
    {
      id: 3,
      question: "What is encryption?",
      options: [
        { key: "a", text: "The process of deleting data that is no longer needed" },
        { key: "b", text: "The process of turning random characters into meaningful data" },
        { key: "c", text: "The process of transforming plain text into a non-readable form called ciphertext" },
        { key: "d", text: "The process of storing data in a token vault" },
      ],
      correct: "c",
    },
    {
      id: 4,
      question: "What is required to decrypt encrypted information and return it to its original plain text format?",
      options: [
        { key: "a", text: "Only a user password" },
        { key: "b", text: "An algorithm and an encryption key" },
        { key: "c", text: "A token vault with all user accounts" },
        { key: "d", text: "Cloud storage with backups" },
      ],
      correct: "b",
    },
    {
      id: 5,
      question: "What is tokenization according to the text?",
      options: [
        { key: "a", text: "The process of compressing data to save storage" },
        { key: "b", text: "The process of turning a meaningful piece of data into a random string of characters called a token" },
        { key: "c", text: "The process of turning ciphertext back into plain text" },
        { key: "d", text: "The process of backing up data to the cloud" },
      ],
      correct: "b",
    },
    {
      id: 6,
      question: "What does a token vault store?",
      options: [
        { key: "a", text: "All user passwords and login attempts" },
        { key: "b", text: "The relationship between the sensitive value and the token" },
        { key: "c", text: "All encryption algorithms used in the system" },
        { key: "d", text: "System logs for all applications" },
      ],
      correct: "b",
    },
    {
      id: 7,
      question: "Which rule is mentioned in the text as important for key management?",
      options: [
        { key: "a", text: "Keys can be safely stored in the same place as encrypted data" },
        { key: "b", text: "Keys should be shared with all employees for convenience" },
        { key: "c", text: "Keys must never be stored in the same place as encrypted data" },
        { key: "d", text: "Keys do not need special protection if strong algorithms are used" },
      ],
      correct: "c",
    },
  ];
  
  const trueFalseQuestions = [
    {
      id: 8,
      question: "Data security is important only for large organizations with many servers.",
      correct: false,
    },
    {
      id: 9,
      question: "Tokenization turns a meaningful piece of data into a random string of characters called a token.",
      correct: true,
    },
    {
      id: 10,
      question: "The advantage of tokens is that, if they are breached, they have no meaning because they are not mathematically related to the real data.",
      correct: true,
    },
    {
      id: 11,
      question: "Every access to highly sensitive encrypted data should be logged in detail, including who accessed it, what data was accessed, and when.",
      correct: true,
    },
  ];
  
  const matchingTerms = [
    { id: 1, term: "encryption" },
    { id: 2, term: "tokenization" },
    { id: 3, term: "token vault" },
    { id: 4, term: "key management" },
    { id: 5, term: "data security" },
  ];
  
  const matchingDefinitions = [
    {
      key: "A",
      text: "The process of protecting data from unauthorized access and data corruption throughout its lifecycle.",
    },
    {
      key: "B",
      text: "The process of using an algorithm to transform plain text information into a non-readable form.",
    },
    {
      key: "C",
      text: "The process of turning a meaningful piece of data into a random string of characters.",
    },
    {
      key: "D",
      text: "A database that stores the relationship between a sensitive value and its token.",
    },
    {
      key: "E",
      text: "The practices of protecting cryptographic keys from unauthorized access and use and tracking their usage.",
    },
  ];
  
  const correctMatching: Record<number, string> = {
    1: "B", // encryption
    2: "C", // tokenization
    3: "D", // token vault
    4: "E", // key management
    5: "A", // data security
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
          Unit 3
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Data Security
        </h1>
        <p className="mt-2 text-zinc-400">
          Test your knowledge about data security concepts and techniques.
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

>>>>>>> aee5d243a0b12036b56da34aeb7709f2d9feacd5
