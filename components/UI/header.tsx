"use client";

import Link from "next/link";

export default function HeaderTW() {
  const tabs = [
    { label: "Home", href: "/" },
    { label: "Quiz", href: "/quiz" },
    { label: "Summary", href: "/summary" },
    { label: "WordCard", href: "/wordcard" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">
        <nav className="flex w-full items-center justify-center gap-1">
          {tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition"
            >
              {t.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
