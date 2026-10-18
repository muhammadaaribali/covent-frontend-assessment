import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
};

const styles = {
  primary: "bg-forest text-surface hover:bg-ink-hover",
  secondary:
    "border border-forest text-forest hover:bg-forest hover:text-surface",
  ghost: "text-forest hover:bg-forest/10",
};

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-pill px-5 text-sm font-semibold transition-colors active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`;
  return href ? (
    <Link className={classes} href={href}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
