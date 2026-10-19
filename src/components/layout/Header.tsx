"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#costs", label: "Costs" },
  { href: "#is-it-right", label: "Is it right for me?" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    menuRef.current?.querySelector("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const goToForm = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("hero-address");
    if (!target) return;

    event.preventDefault();
    setOpen(false);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    target.querySelector("input")?.focus({ preventScroll: true });
  };

  return (
    <header ref={headerRef} className="hdr">
      <div className="hdr-pill">
        <a href="#top" className="hdr-logo" aria-label="Covent home">
          <Image src="/covent-logo.svg" alt="Covent" width={86} height={32} priority unoptimized />
        </a>

        <nav aria-label="Main" className="hdr-nav">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hdr-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hdr-actions">
          <a href="#hero-address" className="hdr-cta" onClick={goToForm}>Get my offer</a>
          <button
            ref={buttonRef}
            type="button"
            className="hdr-burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="hdr-bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" ref={menuRef} aria-label="Mobile" className="hdr-menu">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
