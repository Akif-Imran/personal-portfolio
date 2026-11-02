import type { ReactNode } from "react";
import type { ArtKind } from "@/lib/content";

/**
 * Editorial line-art "figures" for each featured project. Pure SVG, themed
 * through CSS tokens, animated only when the visitor allows motion.
 */

const W = 480;
const H = 330;

function Caption({ n, title }: { n: string; title: string }) {
  return (
    <text
      x="22"
      y="30"
      fontSize="9"
      letterSpacing="1.6"
      className="fill-subtle font-mono"
    >
      FIG. {n} · {title}
    </text>
  );
}

/* ---------- 01 · Trade flows ---------- */

const LAND: Array<[cx: number, cy: number, rx: number, ry: number]> = [
  [110, 118, 78, 52],
  [158, 218, 34, 52],
  [250, 104, 52, 42],
  [256, 205, 38, 54],
  [362, 122, 86, 56],
  [408, 242, 40, 24],
];

const isLand = (x: number, y: number) =>
  LAND.some(([cx, cy, rx, ry]) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1);

const DOTS = Array.from({ length: 17 * 30 }, (_, i) => {
  const x = 22 + (i % 30) * 15;
  const y = 48 + Math.floor(i / 30) * 15;
  return { x, y, land: isLand(x, y) };
});

// Every lane radiates from the Singapore hub.
const ROUTES = [
  "M350 178 Q300 20 244 92",
  "M350 178 Q235 -40 120 108",
  "M350 178 Q395 180 404 240",
  "M350 178 Q260 250 170 236",
];

const HUBS: Array<[number, number, boolean]> = [
  [350, 178, true],
  [244, 92, false],
  [120, 108, false],
  [404, 240, false],
  [170, 236, false],
];

function TradeArt() {
  return (
    <>
      <Caption n="01" title="GLOBAL TRADE FLOWS" />
      <g>
        {DOTS.map(({ x, y, land }) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={land ? 1.6 : 0.9}
            className={land ? "fill-fg/45" : "fill-fg/12"}
          />
        ))}
      </g>
      <g fill="none" strokeLinecap="round">
        {ROUTES.map((d) => (
          <g key={d}>
            <path d={d} strokeWidth="1" className="stroke-fg/15" />
            <path d={d} strokeWidth="1.4" className="flow stroke-accent" />
          </g>
        ))}
      </g>
      {HUBS.map(([cx, cy, live]) => (
        <g key={`${cx}-${cy}`}>
          {live ? (
            <circle cx={cx} cy={cy} r="4" strokeWidth="1" className="ping fill-none stroke-accent" />
          ) : null}
          <circle cx={cx} cy={cy} r={live ? 4 : 2.8} className="fill-accent" />
        </g>
      ))}
      <text x="22" y="314" fontSize="9" letterSpacing="1.4" className="fill-subtle font-mono">
        INGEST → ENRICH → STRUCTURE
      </text>
      <text
        x="458"
        y="314"
        fontSize="9"
        letterSpacing="1.4"
        textAnchor="end"
        className="fill-accent font-mono"
      >
        10⁹+ RECORDS
      </text>
    </>
  );
}

/* ---------- 02 · Real-time fleet ---------- */

const STREETS_H = [64, 112, 206, 256, 296];
const STREETS_V = [46, 118, 176, 312, 386, 444];
const BLOCKS: Array<[number, number, number, number]> = [
  [120, 66, 54, 44],
  [252, 208, 58, 46],
  [388, 114, 54, 34],
  [48, 152, 68, 52],
  [178, 258, 70, 36],
];
const ROUTE = "M46 256 H176 V150 H312 V88 H444";

function FleetArt() {
  return (
    <>
      <Caption n="02" title="REAL-TIME FLEET" />
      <g strokeWidth="1" className="stroke-fg/10">
        {STREETS_H.map((y) => (
          <line key={`h${y}`} x1="16" x2="464" y1={y} y2={y} />
        ))}
        {STREETS_V.map((x) => (
          <line key={`v${x}`} x1={x} x2={x} y1="44" y2="314" />
        ))}
      </g>
      <g strokeWidth="3" className="stroke-fg/15">
        <line x1="16" x2="464" y1="150" y2="150" />
        <line x1="250" x2="250" y1="44" y2="314" />
      </g>
      {BLOCKS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="3" className="fill-fg/5" />
      ))}

      <rect
        x="300"
        y="48"
        width="156"
        height="118"
        rx="10"
        strokeDasharray="3 4"
        className="fill-accent/5 stroke-accent/50"
      />
      <text x="310" y="64" fontSize="8" letterSpacing="1.4" className="fill-accent font-mono">
        GEOFENCE · BAY B
      </text>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={ROUTE} strokeWidth="2" className="stroke-accent/25" />
        <path d={ROUTE} strokeWidth="2" className="flow stroke-accent" />
      </g>

      <circle cx="46" cy="256" r="4.5" strokeWidth="1.5" className="fill-bg stroke-fg/50" />
      <circle cx="444" cy="88" r="5" className="fill-accent" />
      <circle cx="118" cy="256" r="3.5" className="fill-fg" />
      <circle cx="250" cy="150" r="3.5" className="fill-fg" />
      <circle cx="312" cy="120" r="4" strokeWidth="1" className="ping fill-none stroke-accent" />
      <circle cx="312" cy="120" r="4" className="fill-accent" />

      <g>
        <rect x="22" y="282" width="124" height="28" rx="14" strokeWidth="1" className="fill-surface stroke-line-strong" />
        <circle cx="38" cy="296" r="3" className="breathe fill-accent" />
        <text x="49" y="299.5" fontSize="9" letterSpacing="1.4" className="fill-fg font-mono">
          LIVE · 3 UNITS
        </text>
      </g>
    </>
  );
}

/* ---------- 03 · Booking flow ---------- */

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const BOOKED = new Set([3, 6, 9, 12, 16, 19, 23, 26]);
const SELECTED_DAY = 18;
const SLOTS = [
  { y: 96, label: "09:00" },
  { y: 134, label: "10:30", selected: true },
  { y: 172, label: "13:00" },
  { y: 210, label: "15:30", muted: true },
];

function BookingArt() {
  return (
    <>
      <Caption n="03" title="BOOKING FLOW" />

      <rect x="22" y="46" width="276" height="262" rx="14" strokeWidth="1" className="fill-fg/[0.025] stroke-fg/15" />
      <text x="44" y="74" fontSize="9" letterSpacing="1.6" className="fill-subtle font-mono">
        SCHEDULE
      </text>
      {WEEKDAYS.map((d, c) => (
        <text
          key={`${d}-${c}`}
          x={44 + c * 35 + 14}
          y="98"
          fontSize="8"
          textAnchor="middle"
          className="fill-subtle font-mono"
        >
          {d}
        </text>
      ))}
      {Array.from({ length: 35 }, (_, i) => {
        const day = i + 1;
        const x = 44 + (i % 7) * 35;
        const y = 110 + Math.floor(i / 7) * 38;
        const inMonth = day <= 30;
        const selected = day === SELECTED_DAY;
        return (
          <g key={day}>
            <rect
              x={x}
              y={y}
              width="28"
              height="32"
              rx="6"
              strokeWidth="1"
              className={
                selected
                  ? "fill-accent stroke-accent"
                  : inMonth
                    ? "fill-none stroke-fg/12"
                    : "fill-none stroke-fg/5"
              }
            />
            {inMonth ? (
              <text
                x={x + 5}
                y={y + 11}
                fontSize="7.5"
                className={selected ? "fill-bg font-mono" : "fill-subtle font-mono"}
              >
                {day}
              </text>
            ) : null}
            {BOOKED.has(day) ? (
              <circle cx={x + 14} cy={y + 24} r="2" className="fill-accent/70" />
            ) : null}
          </g>
        );
      })}

      <path
        d="M298 202 C318 202 316 149 336 149"
        fill="none"
        strokeWidth="1.2"
        className="flow stroke-accent"
      />

      <rect x="322" y="30" width="136" height="282" rx="24" strokeWidth="1" className="fill-surface stroke-fg/25" />
      <rect x="370" y="40" width="40" height="8" rx="4" className="fill-fg/15" />
      <text x="336" y="78" fontSize="8" letterSpacing="1.4" className="fill-subtle font-mono">
        AVAILABLE
      </text>
      {SLOTS.map((slot) => (
        <g key={slot.label}>
          <rect
            x="336"
            y={slot.y}
            width="108"
            height="30"
            rx="9"
            strokeWidth="1"
            className={
              slot.selected
                ? "fill-accent/15 stroke-accent"
                : slot.muted
                  ? "fill-none stroke-fg/8"
                  : "fill-none stroke-fg/15"
            }
          />
          <text
            x="350"
            y={slot.y + 19}
            fontSize="10"
            className={
              slot.selected
                ? "fill-accent font-mono"
                : slot.muted
                  ? "fill-fg/30 font-mono"
                  : "fill-fg font-mono"
            }
          >
            {slot.label}
          </text>
          {slot.selected ? (
            <path
              d={`M422 ${slot.y + 15} l3.5 3.5 l6.5 -7`}
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-accent"
            />
          ) : null}
        </g>
      ))}
      <rect x="336" y="262" width="108" height="32" rx="16" className="fill-fg" />
      <text x="390" y="281.5" fontSize="9" textAnchor="middle" className="fill-bg font-sans">
        Confirm booking
      </text>
    </>
  );
}

/* ---------- 04 · Cross-border workflow ---------- */

const ZONES = [
  { cx: 93, zone: "STATE OF EXPORT", step: "Notify" },
  { cx: 240, zone: "TRANSIT", step: "Consent" },
  { cx: 391, zone: "STATE OF IMPORT", step: "Confirm" },
];
const GATES = [170, 310];
const FLOWS = ["M123 170 H159", "M181 170 H210", "M270 170 H299", "M321 170 H361"];

function Document({ cx, final }: { cx: number; final?: boolean }) {
  const x = cx - 30;
  const y = 130;
  const w = 60;
  const h = 80;
  return (
    <g>
      <path
        d={`M${x} ${y} H${x + w - 14} L${x + w} ${y + 14} V${y + h} H${x} Z`}
        strokeWidth="1"
        className="fill-surface stroke-fg/30"
      />
      <path
        d={`M${x + w - 14} ${y} V${y + 14} H${x + w}`}
        fill="none"
        strokeWidth="1"
        className="stroke-fg/30"
      />
      <line x1={x + 10} x2={x + 28} y1={y + 18} y2={y + 18} strokeWidth="2" className="stroke-accent" />
      {[30, 40, 50, 60].map((dy, i) => (
        <line
          key={dy}
          x1={x + 10}
          x2={x + w - 10 - (i % 2) * 12}
          y1={y + dy}
          y2={y + dy}
          strokeWidth="1"
          className="stroke-fg/20"
        />
      ))}
      {final ? (
        <g>
          <circle cx={x + w} cy={y} r="9" className="fill-accent" />
          <path
            d={`M${x + w - 4} ${y} l3 3 l5.5 -6`}
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-bg"
          />
        </g>
      ) : null}
    </g>
  );
}

function ComplianceArt() {
  return (
    <>
      <Caption n="04" title="CROSS-BORDER WORKFLOW" />
      {GATES.map((x) => (
        <line
          key={x}
          x1={x}
          x2={x}
          y1="50"
          y2="274"
          strokeWidth="1"
          strokeDasharray="2 5"
          className="stroke-fg/25"
        />
      ))}
      {ZONES.map(({ cx, zone, step }, i) => (
        <g key={zone}>
          <text
            x={cx}
            y="72"
            fontSize="8"
            letterSpacing="1.4"
            textAnchor="middle"
            className="fill-subtle font-mono"
          >
            {zone}
          </text>
          <Document cx={cx} final={i === ZONES.length - 1} />
          <text
            x={cx}
            y="236"
            fontSize="10"
            textAnchor="middle"
            className="fill-muted font-mono"
          >
            {step}
          </text>
        </g>
      ))}
      <g fill="none" strokeLinecap="round">
        {FLOWS.map((d) => (
          <g key={d}>
            <path d={d} strokeWidth="1.4" className="stroke-accent/30" />
            <path d={d} strokeWidth="1.4" className="flow stroke-accent" />
          </g>
        ))}
        <path d="M204 165 l6 5 l-6 5" strokeWidth="1.4" className="stroke-accent" />
        <path d="M355 165 l6 5 l-6 5" strokeWidth="1.4" className="stroke-accent" />
      </g>
      {GATES.map((x) => (
        <g key={`gate-${x}`}>
          <circle cx={x} cy="170" r="11" strokeWidth="1.2" className="fill-bg stroke-accent" />
          <path
            d={`M${x - 4.5} 170 l3 3 l6 -6.5`}
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-accent"
          />
        </g>
      ))}
      <text
        x="240"
        y="306"
        fontSize="9"
        letterSpacing="1.6"
        textAnchor="middle"
        className="fill-subtle font-mono"
      >
        UN/CEFACT · e-BASEL DATA STANDARD
      </text>
    </>
  );
}

const ART: Record<ArtKind, { render: () => ReactNode; label: string }> = {
  trade: {
    render: TradeArt,
    label: "Illustration of global trade routes converging on a Singapore hub",
  },
  fleet: {
    render: FleetArt,
    label: "Illustration of a live vehicle route across a city grid and geofence",
  },
  booking: {
    render: BookingArt,
    label: "Illustration of a booking calendar syncing to a mobile time-slot picker",
  },
  compliance: {
    render: ComplianceArt,
    label: "Illustration of a document passing export, transit and import checkpoints",
  },
};

export function ProjectArt({ kind }: { kind: ArtKind }) {
  const { render, label } = ART[kind];
  return (
    <figure className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_0_0_var(--line)_inset]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={label}
        className="absolute inset-0 size-full"
      >
        {render()}
      </svg>
    </figure>
  );
}
