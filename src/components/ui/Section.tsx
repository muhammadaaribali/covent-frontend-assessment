import type { PropsWithChildren } from "react";
import { Container } from "./Container";
export function Section({ id, children, className = "" }: PropsWithChildren<{ id: string; className?: string }>) {
  return <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className}`}><Container>{children}</Container></section>;
}
