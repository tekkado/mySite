import type { ReactNode } from "react";

type Props = { status?: "pass" | "skip"; result?: string; children: ReactNode };

const MARK = { pass: "✓", skip: "○" };

export default function CheckRow({ status = "pass", result, children }: Props) {
  return (
    <li className="grid grid-cols-[1.25rem_1fr] gap-x-2 gap-y-1 py-3 sm:grid-cols-[1.25rem_1fr_auto] sm:gap-x-6">
      <span aria-hidden className={`font-mono ${status === "pass" ? "text-pass" : "text-skip"}`}>
        {MARK[status]}
      </span>
      <span className="leading-relaxed">{children}</span>
      {result && (
        <span className="col-start-2 font-mono text-sm tabular-nums text-muted sm:col-start-auto sm:pt-0.5 sm:text-right">
          {result}
        </span>
      )}
    </li>
  );
}
