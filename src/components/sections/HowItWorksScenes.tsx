import type { CSSProperties, ReactNode } from "react";

const CREAM = "var(--c-bg)";
const AMBER = "var(--c-accent)";
const INK = "var(--c-ink)";
const INK_2 = "var(--c-ink-2)";
const MUTED = "var(--c-muted)";
const BORDER = "var(--c-border)";

function Frame({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <svg
      className={`hiw-scene${active ? " is-active" : ""}`}
      viewBox="0 0 400 320"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function Address({ active }: { active: boolean }) {
  return (
    <Frame active={active}>
      <path
        d="M110 190V130L200 70l90 60v60z"
        fill="none"
        stroke={CREAM}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="180"
        y="145"
        width="40"
        height="45"
        rx="3"
        fill="none"
        stroke={CREAM}
        strokeWidth="3"
      />
      <path
        d="M90 190h220"
        stroke={CREAM}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g className="hiw-pin">
        <path
          d="M200 10c-12 0-20 9-20 20 0 15 20 34 20 34s20-19 20-34c0-11-8-20-20-20z"
          fill={AMBER}
        />
        <circle cx="200" cy="30" r="7" fill={INK} />
      </g>
      <rect x="70" y="228" width="260" height="44" rx="22" fill={CREAM} />
      <text
        className="hiw-typed"
        x="96"
        y="256"
        fontSize="16"
        fill={INK}
        fontFamily="system-ui, sans-serif"
      >
        123 Main St, Springfield
      </text>
    </Frame>
  );
}

function Checklist({ active }: { active: boolean }) {
  return (
    <Frame active={active}>
      <rect
        x="70"
        y="36"
        width="260"
        height="248"
        rx="20"
        fill={INK_2}
        stroke="rgba(var(--c-bg-rgb), 0.22)"
      />
      <rect x="96" y="58" width="70" height="8" rx="4" fill={AMBER} />
      {[100, 160, 220].map((y, i) => (
        <g key={y} transform={`translate(0 ${y})`}>
          <circle
            cx="108"
            cy="0"
            r="14"
            fill="none"
            stroke={CREAM}
            strokeWidth="2.5"
          />
          <path
            className="hiw-check"
            pathLength={1}
            d="M101 0l5 5 9-10"
            fill="none"
            stroke={AMBER}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ "--d": `${0.4 + i * 0.7}s` } as CSSProperties}
          />
          <rect
            x="138"
            y="-6"
            width={i === 1 ? 110 : 140}
            height="12"
            rx="6"
            fill={CREAM}
            opacity="0.85"
          />
        </g>
      ))}
    </Frame>
  );
}

function Offer({ active }: { active: boolean }) {
  const row = (y: number, label: string, value: string, delay: number) => (
    <g className="hiw-rise" style={{ "--d": `${delay}s` } as CSSProperties}>
      <text
        x="84"
        y={y}
        fontSize="15"
        fill={MUTED}
        fontFamily="system-ui, sans-serif"
      >
        {label}
      </text>
      <text
        x="316"
        y={y}
        fontSize="15"
        fill={INK}
        textAnchor="end"
        fontFamily="system-ui, sans-serif"
      >
        {value}
      </text>
    </g>
  );
  return (
    <Frame active={active}>
      <rect x="60" y="30" width="280" height="260" rx="20" fill={CREAM} />
      <text
        x="84"
        y="66"
        fontSize="17"
        fontWeight="600"
        fill={INK}
        fontFamily="system-ui, sans-serif"
      >
        Your offer
      </text>
      <rect x="248" y="48" width="72" height="24" rx="12" fill={AMBER} />
      <text
        x="284"
        y="64"
        fontSize="11"
        fontWeight="600"
        fill="var(--c-accent-ink)"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
      >
        SAMPLE
      </text>
      {row(112, "Offer price", "$300,000", 0.3)}
      {row(150, "Service fee", "−$18,000", 0.7)}
      {row(188, "Repairs", "−$4,500", 1.1)}
      <path d="M84 206h232" stroke={BORDER} />
      <g className="hiw-rise" style={{ "--d": "1.6s" } as CSSProperties}>
        <text
          x="84"
          y="236"
          fontSize="14"
          fill={MUTED}
          fontFamily="system-ui, sans-serif"
        >
          You take home
        </text>
        <text
          x="84"
          y="266"
          fontSize="28"
          fill={INK}
          fontFamily="Georgia, serif"
        >
          $277,500
        </text>
      </g>
    </Frame>
  );
}

function Calendar({ active }: { active: boolean }) {
  const dots = [];
  for (let row = 0; row < 4; row++)
    for (let column = 0; column < 7; column++)
      if (!(row === 2 && column === 4))
        dots.push(
          <circle
            key={`${row}-${column}`}
            cx={96 + column * 38}
            cy={112 + row * 38}
            r="4"
            fill={CREAM}
            opacity="0.5"
          />,
        );
  return (
    <Frame active={active}>
      <rect
        x="60"
        y="40"
        width="280"
        height="230"
        rx="20"
        fill={INK_2}
        stroke="rgba(var(--c-bg-rgb), 0.22)"
      />
      <text
        x="84"
        y="76"
        fontSize="15"
        fill={CREAM}
        fontFamily="system-ui, sans-serif"
      >
        Closing day
      </text>
      {dots}
      <g className="hiw-pop" style={{ "--d": "0.5s" } as CSSProperties}>
        <circle cx="248" cy="188" r="17" fill={AMBER} />
        <text
          x="248"
          y="193"
          fontSize="14"
          fontWeight="600"
          fill="var(--c-accent-ink)"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          18
        </text>
      </g>
      <g className="hiw-pop" style={{ "--d": "1.1s" } as CSSProperties}>
        <rect x="244" y="20" width="92" height="34" rx="17" fill={AMBER} />
        <text
          x="290"
          y="42"
          fontSize="16"
          fontWeight="700"
          fill="var(--c-accent-ink)"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
        >
          Sold
        </text>
      </g>
    </Frame>
  );
}

export function HowScene({
  index,
  active,
}: {
  index: number;
  active: boolean;
}) {
  switch (index) {
    case 0:
      return <Address active={active} />;
    case 1:
      return <Checklist active={active} />;
    case 2:
      return <Offer active={active} />;
    default:
      return <Calendar active={active} />;
  }
}
