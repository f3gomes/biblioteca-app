import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-6
        overflow-hidden border border-slate-200 shadow-sm
      "
    >
      {children}
    </div>
  );
}
