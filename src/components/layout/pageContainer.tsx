import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageContainer({ children }: Props) {
  return <div className="p-6">{children}</div>;
}
