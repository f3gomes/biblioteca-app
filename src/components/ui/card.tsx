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
        border border-slate-200 shadow-sm
        overflow-x-auto
        overflow-y-hidden
        w-4xl
      "
    >
      {children}
    </div>
  );
}
