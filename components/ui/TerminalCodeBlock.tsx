"use client";

import { useEffect, useState } from "react";

const CODE_LINES = [
  "const developer = {",
  '  name: "Rakibul Hasan Joy",',
  '  role: "Full Stack Developer",',
  '  skills: ["Laravel", "React", "AI"],',
  '  status: "open_to_work",',
  '  location: "Bangladesh 🇧🇩",',
  "}",
];

function renderLine(line: string) {
  return line.split(/("(?:[^"\\]|\\.)*")/g).map((part, i) =>
    part.startsWith('"') ? (
      <span key={i} className="text-green">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function TerminalCodeBlock() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= CODE_LINES.length) return;

    const currentLine = CODE_LINES[lineIndex];

    if (charIndex >= currentLine.length) {
      const timeout = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => setCharIndex((i) => i + 1), 22);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex]);

  const done = lineIndex >= CODE_LINES.length;
  const completedLines = CODE_LINES.slice(0, lineIndex);
  const typingLine = done ? "" : CODE_LINES[lineIndex].slice(0, charIndex);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green/80" />
        <span className="ml-2 font-mono text-xs text-muted">developer.ts</span>
      </div>
      <pre className="px-5 py-6 font-mono text-sm leading-7 text-foreground/90">
        {completedLines.map((line, i) => (
          <div key={i}>{renderLine(line)}</div>
        ))}
        {!done && (
          <div>
            {renderLine(typingLine)}
            <span className="ml-0.5 inline-block h-4 w-[2px] -translate-y-0.5 animate-pulse bg-green align-middle" />
          </div>
        )}
      </pre>
    </div>
  );
}
