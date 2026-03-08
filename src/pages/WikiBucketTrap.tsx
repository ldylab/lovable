import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Settings,
  List,
  TriangleAlert as AlertTriangle,
  Zap,
  Target,
  ChevronRight,
  Info,
} from "lucide-react";

const tocSections = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "mechanism", label: "Mechanism", icon: Settings },
  { id: "variants", label: "Variants", icon: List },
  { id: "flaws", label: "Flaws", icon: AlertTriangle },
  { id: "synergies", label: "Synergies", icon: Zap },
  { id: "deployment", label: "Deployment", icon: Target },
];

const BucketTrapDiagram = () => (
  <div className="w-full bg-[#111] border border-border my-6 p-6 select-none">
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-5">
      Fig. 1 — Cross-section: Trigger Mechanics
    </p>
    <svg viewBox="0 0 560 260" className="w-full" style={{ maxHeight: 260 }}>
      {/* Bucket body */}
      <rect x="160" y="100" width="240" height="140" rx="4" fill="none" stroke="#555" strokeWidth="2" />
      {/* Bucket top rim */}
      <rect x="155" y="94" width="250" height="12" rx="2" fill="none" stroke="#888" strokeWidth="1.5" />

      {/* False floor / trapdoor — resting position */}
      <line x1="255" y1="105" x2="305" y2="105" stroke="#e4c640" strokeWidth="3" strokeLinecap="round" />
      <line x1="305" y1="105" x2="345" y2="126" stroke="#e4c640" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
      {/* pivot dot */}
      <circle cx="305" cy="105" r="3.5" fill="#e4c640" />

      {/* Bait blob */}
      <ellipse cx="272" cy="99" rx="10" ry="7" fill="#a0522d" opacity="0.9" />
      <text x="272" y="90" fill="#a0522d" fontSize="8" textAnchor="middle" fontFamily="monospace">BAIT</text>

      {/* Mouse silhouette — walking toward bait */}
      <g transform="translate(310, 85)">
        <ellipse cx="0" cy="8" rx="14" ry="7" fill="#ccc" />
        <circle cx="13" cy="4" r="5" fill="#ccc" />
        <line x1="18" y1="3" x2="26" y2="0" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-8" y1="14" x2="-10" y2="20" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-2" y1="15" x2="-2" y2="21" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="5" y1="15" x2="7" y2="21" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Gravity arrow */}
      <line x1="340" y1="108" x2="340" y2="140" stroke="#e4c640" strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points="340,148 336,138 344,138" fill="#e4c640" />
      <text x="348" y="132" fill="#888" fontSize="8" fontFamily="monospace">gravity</text>

      {/* Fall trajectory */}
      <path d="M 340 150 Q 340 185 310 210" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
      <polygon points="307,213 312,203 318,210" fill="#fff" opacity="0.4" />

      {/* Water fill indicator */}
      <rect x="162" y="218" width="236" height="20" rx="2" fill="#1e3a5f" opacity="0.6" />
      <text x="280" y="232" fill="#5fa8e8" fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.9">
        ≈ 3in WATER / ANTIFREEZE (lethal config)
      </text>

      {/* Ramp on the left */}
      <line x1="90" y1="240" x2="160" y2="100" stroke="#888" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="78" y="238" width="22" height="6" rx="1" fill="#555" />
      <text x="100" y="264" fill="#666" fontSize="8" textAnchor="middle" fontFamily="monospace">RAMP</text>

      {/* Mouse on ramp */}
      <g transform="translate(110, 178) rotate(-50)">
        <ellipse cx="0" cy="4" rx="9" ry="4.5" fill="#aaa" opacity="0.7" />
        <circle cx="8" cy="1" r="3.5" fill="#aaa" opacity="0.7" />
      </g>

      {/* Arrow: mouse path */}
      <path d="M 118 172 Q 140 130 168 106" fill="none" stroke="#666" strokeWidth="1" strokeDasharray="3 2" />
      <polygon points="170,103 163,110 173,112" fill="#666" />

      {/* Labels */}
      <text x="265" y="75" fill="#e4c640" fontSize="8" textAnchor="middle" fontFamily="monospace">FALSE FLOOR (pivot)</text>
      <text x="375" y="92" fill="#ccc" fontSize="8" fontFamily="monospace">TARGET</text>
      <text x="78" y="86" fill="#888" fontSize="8" textAnchor="middle" fontFamily="monospace">ENTRY</text>
    </svg>
  </div>
);

const RollingLogIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="14" cy="14" rx="6" ry="12" />
    <ellipse cx="14" cy="14" rx="6" ry="4" />
    <line x1="14" y1="2" x2="14" y2="26" strokeDasharray="2 2" opacity="0.4" />
  </svg>
);

const PlankIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="10" x2="24" y2="18" />
    <circle cx="14" cy="14" r="2.5" fill="currentColor" opacity="0.5" />
    <line x1="14" y1="14" x2="14" y2="22" />
    <rect x="10" y="22" width="8" height="3" rx="1" />
  </svg>
);

const PeanutButterIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="16" height="14" rx="3" />
    <path d="M10 12 Q14 10 18 12" />
    <path d="M10 16 Q14 14 18 16" />
    <line x1="14" y1="4" x2="14" y2="8" />
    <line x1="11" y1="5" x2="14" y2="8" />
    <line x1="17" y1="5" x2="14" y2="8" />
  </svg>
);

const RampIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="4,24 24,24 24,8" />
    <line x1="4" y1="24" x2="24" y2="8" />
    <line x1="4" y1="24" x2="4" y2="26" />
    <line x1="24" y1="24" x2="24" y2="26" />
  </svg>
);

const MultiUnitIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="10" height="13" rx="2" />
    <rect x="15" y="13" width="10" height="10" rx="2" />
    <line x1="8" y1="7" x2="8" y2="10" />
    <line x1="20" y1="10" x2="20" y2="13" />
  </svg>
);

const ScentIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 22 Q8 16 12 12 Q16 8 14 4" strokeDasharray="2 2" />
    <path d="M16 22 Q14 17 17 13 Q20 9 18 5" strokeDasharray="2 2" />
    <line x1="6" y1="24" x2="22" y2="24" />
  </svg>
);

const WikiBucketTrap = () => {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const ids = tocSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const statCard = (
    <div className="border border-border overflow-hidden">
      {/* Product hero shot — dark bg with technical illustration feel */}
      <div className="relative w-full aspect-[4/3] bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 260 200" className="w-[85%] h-[85%]" fill="none">
          {/* Bucket body */}
          <rect x="65" y="88" width="130" height="100" rx="4" fill="none" stroke="#555" strokeWidth="2" />
          <rect x="60" y="82" width="140" height="12" rx="2" fill="none" stroke="#777" strokeWidth="1.5" />
          {/* Trapezoid illusion — bucket wider at top */}
          <line x1="65" y1="188" x2="55" y2="190" stroke="#555" strokeWidth="1.5" />
          <line x1="195" y1="188" x2="205" y2="190" stroke="#555" strokeWidth="1.5" />
          {/* False floor */}
          <line x1="100" y1="94" x2="145" y2="94" stroke="#e4c640" strokeWidth="3" strokeLinecap="round" />
          <circle cx="145" cy="94" r="3" fill="#e4c640" />
          <line x1="145" y1="94" x2="175" y2="112" stroke="#e4c640" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
          {/* bait */}
          <circle cx="115" cy="87" r="7" fill="#7a3b10" opacity="0.9" />
          <text x="115" y="91" fill="#f0c080" fontSize="7" textAnchor="middle" fontFamily="monospace" fontWeight="bold">PB</text>
          {/* water */}
          <rect x="67" y="166" width="126" height="20" rx="2" fill="#1a3a6a" opacity="0.7" />
          {/* Ramp */}
          <line x1="20" y1="192" x2="66" y2="88" stroke="#666" strokeWidth="2.5" strokeLinecap="round" />
          {/* grid lines */}
          {[0,1,2,3].map((i) => (
            <line key={i} x1="60" y1={110 + i * 26} x2="200" y2={110 + i * 26} stroke="#1f1f1f" strokeWidth="1" />
          ))}
          {[0,1,2,3,4].map((i) => (
            <line key={i} x1={65 + i * 32} y1="88" x2={65 + i * 32} y2="188" stroke="#1f1f1f" strokeWidth="1" />
          ))}
          {/* label */}
          <text x="130" y="178" fill="#3d6ea0" fontSize="7" textAnchor="middle" fontFamily="monospace">H₂O / ANTIFREEZE</text>
          <text x="42" y="82" fill="#e4c640" fontSize="7" textAnchor="middle" fontFamily="monospace" transform="rotate(-55 42 82)">RAMP</text>
        </svg>
        <div className="absolute top-2 right-2 bg-primary px-3 py-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">Hardware</span>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 font-mono">Technical Illustration</span>
        </div>
      </div>

      <div className="divide-y divide-border">
        <div className="px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block mb-1">Classification</span>
          <div className="flex gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] bg-muted text-muted-foreground px-2 py-0.5">Trap</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] bg-muted text-muted-foreground px-2 py-0.5">Mechanical</span>
          </div>
        </div>
        {[
          { label: "Primary Target", value: "Mice", valueClass: "font-bold" },
          { label: "Efficacy Rating", value: "S-TIER", valueClass: "bg-primary text-primary-foreground px-2 py-0.5 text-xs font-black" },
          { label: "Pet Safe", value: "⚠ Conditional", valueClass: "text-[hsl(var(--safety-yellow))] font-semibold" },
          { label: "Cost Profile", value: "$$", valueClass: "" },
          { label: "Reusability", value: "Multi-Catch", valueClass: "text-green-600 font-bold" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</span>
            <span className={`text-sm ${stat.valueClass}`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex gap-0 relative">

          {/* Left TOC Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-24 py-10 pr-8">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">
                Table of Contents
              </p>
              <nav className="space-y-1">
                {tocSections.map((s) => {
                  const isActive = activeSection === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`block w-full text-left text-base leading-snug py-2 transition-colors duration-200 border-l-2 pl-4 ${
                        isActive
                          ? "border-primary text-foreground font-bold"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Center Article Content */}
          <main className="flex-1 min-w-0 border-x border-border px-8 md:px-14 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <Link to="/wiki" className="hover:text-foreground transition-colors">Wiki</Link>
              <ChevronRight size={10} />
              <Link to="/wiki#hardware" className="hover:text-foreground transition-colors">Hardware</Link>
              <ChevronRight size={10} />
              <span className="text-foreground">The Bucket Trap</span>
            </div>

            {/* Stat card — inline on small/medium screens */}
            <div className="xl:hidden mb-10">{statCard}</div>

            {/* Title */}
            <div id="overview">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight text-foreground leading-[0.95]">
                The Bucket Trap
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-muted-foreground/60 leading-tight mt-1">
                (False Floor Lid)
              </h2>
              <p className="text-primary font-bold uppercase tracking-[0.18em] text-xs mt-4">
                A Highly Effective Multi-Catch Trap for Mice.
              </p>

              <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-3xl">
                The Bucket Trap, featuring a false floor lid, is a high-capacity, multi-catch trap designed
                primarily for mice. It leverages a simple yet highly effective mechanism to drop rodents into
                a bucket, ensuring continuous operation without manual resetting.
              </p>

              <div className="w-full h-px bg-border my-10" />
            </div>

            {/* Mechanism */}
            <section id="mechanism" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <Settings size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                  Mechanism
                </h3>
              </div>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
                The device consists of a custom lid fitted over a standard 5-gallon bucket. The lid contains
                a balanced "false floor" or trapdoor. Bait is placed at the far end of this floor or suspended
                above it. When a mouse walks out to retrieve the bait, its weight tips the floor downward,
                causing the mouse to fall into the bucket below.
              </p>

              <BucketTrapDiagram />

              <p className="text-foreground text-base md:text-lg leading-relaxed">
                The floor is counterweighted (often magnetically or with a simple pivot) to immediately reset
                itself for the next target.
              </p>
            </section>

            {/* Variants */}
            <section id="variants" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <List size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                  Variants
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "Rolling Log",
                    desc: "Uses a free-spinning cylinder coated in bait spanning across the top of the bucket. Mice attempt to walk on the cylinder, which spins and drops them.",
                    Icon: RollingLogIcon,
                  },
                  {
                    title: "Plank Walk",
                    desc: "A simple see-saw plank extending over the edge of the bucket. Less reliable reset mechanism than the false floor lid.",
                    Icon: PlankIcon,
                  },
                ].map((v, i) => (
                  <div key={i} className="border border-border p-5 flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                      <v.Icon />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm uppercase tracking-wide">{v.title}</p>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Flaws — industrial warning style */}
            <section id="flaws" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle size={20} className="text-yellow-400 flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                  Flaws
                </h3>
              </div>
              <div className="border-l-[3px] border-red-500 bg-red-50/60 dark:bg-red-950/20 px-5 py-4">
                <ul className="space-y-3">
                  {[
                    "Ineffective against larger rats.",
                    "Requires regular maintenance/emptying.",
                    "Takes up significant floor space.",
                  ].map((flaw, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg viewBox="0 0 14 14" width="14" height="14" className="flex-shrink-0 mt-[3px]" fill="none">
                        <line x1="2" y1="2" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="2" x2="2" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span className="text-sm text-[#333] dark:text-foreground/90 leading-[1.6]">{flaw}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Synergies */}
            <section id="synergies" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <Zap size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                  Synergies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Peanut Butter Bait", desc: "Maximizes attraction radius and trigger rate.", Icon: PeanutButterIcon },
                  { label: "Ramp Access", desc: "A wooden board leaned against the bucket guides mice to the lid.", Icon: RampIcon },
                  { label: "Multiple Units", desc: "Deploying 2–3 buckets across infestation zones increases throughput.", Icon: MultiUnitIcon },
                  { label: "Scent Concealment", desc: "Gloves during setup reduce human scent deterrence.", Icon: ScentIcon },
                ].map((s, i) => (
                  <div key={i} className="bg-muted border border-border p-4 flex items-start gap-3">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-primary border border-border">
                      <s.Icon />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{s.label}</p>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deployment */}
            <section id="deployment" className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <Target size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground">
                  Deployment Strategy
                </h3>
              </div>
              <div className="bg-foreground text-background p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-black text-sm uppercase tracking-tight">Optimal Placement</p>
                </div>
                <p className="text-background/80 text-base leading-relaxed">
                  Deploy along walls where high mouse traffic is suspected. The ramp must be flush against the
                  wall to guide the target upwards. Use peanut butter spread on the underside of the lid cover
                  (above the trap door) rather than on the door itself to force the target further out before
                  triggering. For lethal setups in cold climates, fill the bucket with 3 inches of water and
                  antifreeze.
                </p>
              </div>
            </section>
          </main>

          {/* Right Sidebar — Stat Card (xl screens only) */}
          <aside className="hidden xl:block w-[300px] flex-shrink-0">
            <div className="sticky top-24 py-12 pl-8">
              {statCard}
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WikiBucketTrap;
