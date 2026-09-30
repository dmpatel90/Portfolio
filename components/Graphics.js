import {
  siSap, siPython, siJavascript, siNodedotjs, siExpress, siPostgresql, siMysql, siLinux,
  siGit, siGithub, siBootstrap, siHtml5, siCss, siCisco, siSequelize, siEjs, siUbuntu, siGnubash,
} from "simple-icons";

/* ---------- Tech logo marquee ---------- */
const TECH = [
  siSap, siPython, siJavascript, siNodedotjs, siExpress, siPostgresql, siMysql, siLinux,
  siUbuntu, siGnubash, siGit, siGithub, siBootstrap, siHtml5, siCss, siCisco, siSequelize, siEjs,
];
const EXTRA = ["Microsoft Azure", "SharePoint", "Microsoft 365", "Active Directory", "VyOS"];

export function TechMarquee() {
  const items = [
    ...TECH.map((i) => ({ name: i.title, path: i.path, hex: i.hex })),
    ...EXTRA.map((name) => ({ name })),
  ];
  const Row = ({ hidden }) => (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden}>
      {items.map((t) => (
        <li key={t.name} className="glass flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm text-slate-300">
          {t.path ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d={t.path} fill={brighten(t.hex)} />
            </svg>
          ) : (
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan to-violet" />
          )}
          {t.name}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

// Some brand colours are too dark to read on the near-black background.
function brighten(hex) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum < 90 ? "#e2e8f0" : `#${hex}`;
}

/* ---------- Service icons (line style) ---------- */
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
export function ServiceIcon({ k }) {
  const icons = {
    sap: (<g {...P}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 20h10M12 16v4M7 12l3-3 2 2 5-5" /></g>),
    api: (<g {...P}><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="6" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="M7.5 12h4l5-5M11.5 12l5 5" /></g>),
    web: (<g {...P}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></g>),
    m365: (<g {...P}><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /></g>),
    net: (<g {...P}><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="2" y="16" width="6" height="5" rx="1" /><rect x="16" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M5 16v-4h14v4" /></g>),
    train: (<g {...P}><path d="M4 5h11a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3z" /><path d="M8 9h6M8 13h4M18 8h2v11" /></g>),
    cloud: (<g {...P}><path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5z" /><path d="M12 11v5M9.5 13.5L12 11l2.5 2.5" /></g>),
  };
  return (
    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan">
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">{icons[k]}</svg>
    </span>
  );
}

/* ---------- SAP module orbit (big bento card graphic) ---------- */
export function SapOrbit() {
  const mods = ["SD", "MM", "PM", "PP", "QM"];
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full max-w-full" aria-hidden="true">
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#67e8f9" /><stop offset="100%" stopColor="#6366f1" />
        </radialGradient>
      </defs>
      <ellipse cx="110" cy="80" rx="88" ry="56" fill="none" stroke="rgb(255 255 255 / .08)" />
      <ellipse cx="110" cy="80" rx="58" ry="36" fill="none" stroke="rgb(255 255 255 / .06)" />
      {mods.map((m, i) => {
        const a = (i / mods.length) * Math.PI * 2 - Math.PI / 2;
        const x = 110 + Math.cos(a) * 88, y = 80 + Math.sin(a) * 56;
        return (
          <g key={m}>
            <line x1="110" y1="80" x2={x} y2={y} stroke="rgb(103 232 249 / .35)" className="flow-line" />
            <circle cx={x} cy={y} r="15" fill="#0b0f1a" stroke="rgb(139 92 246 / .7)" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#e2e8f0">{m}</text>
          </g>
        );
      })}
      <circle cx="110" cy="80" r="22" fill="url(#core)" />
      <text x="110" y="84" textAnchor="middle" fontSize="11" fontWeight="700" fill="#05070d" fontFamily="JetBrains Mono, monospace">S/4</text>
    </svg>
  );
}

/* ---------- Cloud topology (big bento card graphic) ---------- */
export function CloudTopology() {
  const boxes = [
    { x: 8, y: 60, t: "Users" },
    { x: 78, y: 60, t: "App GW" },
    { x: 150, y: 22, t: "VM-01" },
    { x: 150, y: 98, t: "VM-02" },
  ];
  return (
    <svg viewBox="0 0 220 150" className="h-full w-full max-w-full" aria-hidden="true">
      <path d="M58 75 H78" stroke="rgb(103 232 249 / .6)" className="flow-line" fill="none" />
      <path d="M128 75 C140 75 140 37 150 37" stroke="rgb(103 232 249 / .6)" className="flow-line" fill="none" />
      <path d="M128 75 C140 75 140 113 150 113" stroke="rgb(103 232 249 / .6)" className="flow-line" fill="none" />
      {boxes.map((b) => (
        <g key={b.t}>
          <rect x={b.x} y={b.y} width="50" height="30" rx="7" fill="#0b0f1a" stroke="rgb(139 92 246 / .6)" />
          <text x={b.x + 25} y={b.y + 19} textAnchor="middle" fontSize="9" fill="#e2e8f0" fontFamily="JetBrains Mono, monospace">{b.t}</text>
        </g>
      ))}
      <g>
        <rect x="150" y="60" width="50" height="30" rx="7" fill="rgb(52 211 153 / .12)" stroke="rgb(52 211 153 / .6)" />
        <text x="175" y="79" textAnchor="middle" fontSize="9" fill="#6ee7b7" fontFamily="JetBrains Mono, monospace">KeyVault</text>
      </g>
    </svg>
  );
}

/* ---------- Radial skill gauge ---------- */
export function Gauge({ name, level }) {
  const R = 34, C = 2 * Math.PI * R, len = (level / 100) * C;
  return (
    <div className="reveal spot glass flex flex-col items-center gap-3 rounded-2xl p-5 text-center">
      <div className="relative h-24 w-24">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden="true">
          <defs>
            <linearGradient id="gg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r={R} fill="none" stroke="rgb(255 255 255 / .07)" strokeWidth="6" />
          <circle cx="40" cy="40" r={R} fill="none" stroke="url(#gg)" strokeWidth="6" strokeLinecap="round" className="gauge-arc" style={{ "--len": len }} />
        </svg>
        <span className="absolute inset-0 grid place-items-center font-mono text-lg font-medium tabular-nums text-white">{level}%</span>
      </div>
      <span className="text-sm font-medium text-slate-300">{name}</span>
    </div>
  );
}

/* ---------- Project visuals ---------- */
export function ProjectVisual({ type }) {
  const frame = "relative h-44 overflow-hidden rounded-xl border border-white/10 bg-panel";
  if (type === "browser")
    return (
      <div className={frame} aria-hidden="true">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-500">petchoice.app/breeds?sort=name</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          <div className="col-span-3 flex gap-2">
            <div className="h-6 flex-1 rounded-md bg-white/5" /><div className="h-6 w-14 rounded-md bg-gradient-to-r from-cyan/60 to-violet/60" />
          </div>
          {["Bengal", "Siamese", "Persian"].map((b, i) => (
            <div key={b} className="rounded-lg border border-white/5 bg-white/[.03] p-1.5">
              <div className={`h-12 rounded-md ${["bg-gradient-to-br from-amber-300/40 to-orange-500/30", "bg-gradient-to-br from-sky-300/30 to-indigo-500/30", "bg-gradient-to-br from-fuchsia-300/30 to-violet-500/30"][i]}`} />
              <p className="mt-1 truncate text-[10px] text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </div>
    );
  if (type === "flow")
    return (
      <div className={`${frame} grid place-items-center`} aria-hidden="true">
        <svg viewBox="0 0 300 120" className="w-full max-w-full">
          <rect x="14" y="38" width="80" height="44" rx="10" fill="#0f1526" stroke="rgb(34 211 238 / .6)" />
          <text x="54" y="58" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="700">SAP</text>
          <text x="54" y="73" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">S/4HANA</text>
          <rect x="206" y="38" width="80" height="44" rx="10" fill="#0f1526" stroke="rgb(168 85 247 / .6)" />
          <text x="246" y="58" textAnchor="middle" fontSize="12" fill="#e2e8f0" fontWeight="700">EFRIS</text>
          <text x="246" y="73" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="JetBrains Mono, monospace">URA</text>
          <path d="M94 52 H206" stroke="#67e8f9" className="flow-line" fill="none" strokeWidth="1.5" />
          <path d="M206 68 H94" stroke="#c084fc" className="flow-line" fill="none" strokeWidth="1.5" />
          <text x="150" y="44" textAnchor="middle" fontSize="9" fill="#67e8f9" fontFamily="JetBrains Mono, monospace">POST /invoice</text>
          <text x="150" y="86" textAnchor="middle" fontSize="9" fill="#c084fc" fontFamily="JetBrains Mono, monospace">200 OK · FDN</text>
        </svg>
      </div>
    );
  if (type === "apps")
    return (
      <div className={`${frame} grid grid-cols-3 gap-3 p-4`} aria-hidden="true">
        {[["Assets", "from-cyan/40 to-sky-500/20"], ["Leave", "from-violet/40 to-fuchsia-500/20"], ["Employees", "from-emerald-400/40 to-teal-500/20"]].map(([t, g]) => (
          <div key={t} className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[.03] p-2.5">
            <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${g}`} />
            <div className="grid gap-1">
              <div className="h-1.5 w-full rounded bg-white/10" /><div className="h-1.5 w-2/3 rounded bg-white/10" />
            </div>
            <p className="text-[11px] font-medium text-slate-300">{t}</p>
          </div>
        ))}
      </div>
    );
  if (type === "terminal")
    return (
      <div className={`${frame} p-4 font-mono text-[11px] leading-relaxed`} aria-hidden="true">
        <p><span className="text-emerald-400">vyos@edge</span><span className="text-slate-500">:~$</span> <span className="text-slate-200">show interfaces</span></p>
        <p className="text-slate-500">eth0  10.10.0.1/24    u/u  LAN</p>
        <p className="text-slate-500">eth1  192.168.56.2/24 u/u  WAN</p>
        <p className="mt-1"><span className="text-emerald-400">vyos@edge</span><span className="text-slate-500">:~$</span> <span className="text-slate-200">sudo nft list ruleset</span></p>
        <p className="text-cyan">chain input {"{"} policy drop;</p>
        <p className="pl-3 text-slate-400">ct state established accept</p>
        <p className="pl-3 text-slate-400">tcp dport 22 accept <span className="caret" /></p>
      </div>
    );
  return (
    <div className={`${frame} grid place-items-center p-3`} aria-hidden="true">
      <CloudTopology />
    </div>
  );
}

/* ---------- IT support icons ---------- */
export function SupportIcon({ k }) {
  const icons = {
    desk: (<g {...P}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M19 20a3 3 0 0 1-3 2h-2" /></g>),
    hw: (<g {...P}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20M9 16v4M15 16v4" /></g>),
    sw: (<g {...P}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 8h18M7 12l2 2-2 2M12 16h4" /></g>),
    net: (<g {...P}><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" /><circle cx="12" cy="19" r="1" /><path d="M2 9a14 14 0 0 1 20 0" /></g>),
    user: (<g {...P}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><rect x="15" y="11" width="6" height="5" rx="1" /><path d="M16.5 11V9.5a1.5 1.5 0 0 1 3 0V11" /></g>),
    sap: (<g {...P}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 20h10M12 16v4M7 12l3-3 2 2 5-5" /></g>),
    pos: (<g {...P}><rect x="4" y="3" width="16" height="11" rx="2" /><path d="M8 7h8M8 10h5M6 14l-1 7h14l-1-7" /></g>),
    doc: (<g {...P}><path d="M4 5h11a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3z" /><path d="M8 9h6M8 13h4M18 8h2v11" /></g>),
  };
  return (
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{icons[k]}</svg>
    </span>
  );
}

/* ---------- Service desk ticket queue (illustrative) ---------- */
const TICKETS = [
  ["INC-1042", "Outlook not syncing on a laptop", "Software", "Resolved"],
  ["INC-1043", "Printer offline on the 2nd floor", "Hardware", "Resolved"],
  ["REQ-1044", "New starter: AD + M365 account", "Access", "Resolved"],
  ["INC-1045", "SAP authorization error in MM", "SAP", "In progress"],
  ["INC-1046", "Branch PC can't reach the network", "Network", "In progress"],
  ["INC-1047", "POS stock report mismatch", "POS", "Open"],
];
const STATUS = {
  Resolved: "border-mint/40 bg-mint/10 text-mint",
  "In progress": "border-amber-300/40 bg-amber-300/10 text-amber-200",
  Open: "border-cyan/40 bg-cyan/10 text-cyan",
};

export function TicketQueue() {
  return (
    <div className="glass overflow-hidden rounded-3xl" aria-label="Examples of the kinds of tickets I handle">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
          </span>
          <p className="font-semibold text-white">Service desk queue</p>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Sample tickets</span>
      </div>
      <ul className="divide-y divide-white/5">
        {TICKETS.map(([id, title, cat, st]) => (
          <li key={id} className="flex items-center gap-3 px-5 py-3.5">
            <span className="hidden w-[4.75rem] shrink-0 font-mono text-[11px] text-slate-500 sm:block">{id}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-200">{title}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{cat}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${STATUS[st]}`}>{st}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 border-t border-white/10 px-5 py-3.5">
        <span className="font-mono text-[11px] text-slate-500">Resolved</span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-mint to-cyan" />
        </div>
        <span className="font-mono text-[11px] tabular-nums text-slate-300">3 / 6</span>
      </div>
    </div>
  );
}
