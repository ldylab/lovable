import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap,
  Package,
  Volume2,
  Droplets,
  MousePointerClick,
  FlaskConical,
  Wrench,
} from "lucide-react";

const rodentEntries = [
  {
    title: "The Deer Mouse",
    subtitle: "SPECIES PROFILE — EXTREME BIOHAZARD",
    subtitleClass: "text-destructive",
    href: "/wiki/deer-mouse",
    img: "https://images.pexels.com/photos/10005722/pexels-photo-10005722.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    title: "The House Mouse",
    subtitle: "SPECIES PROFILE — COMMON PEST",
    subtitleClass: "text-muted-foreground",
    href: "/wiki/deer-mouse",
    img: "https://images.pexels.com/photos/51340/rat-pest-control-rodent-51340.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    title: "The Norway Rat",
    subtitle: "SPECIES PROFILE — HIGH DAMAGE",
    subtitleClass: "text-destructive",
    href: "/wiki/deer-mouse",
    img: "https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
  {
    title: "The Roof Rat",
    subtitle: "SPECIES PROFILE — AGILE INVADER",
    subtitleClass: "text-muted-foreground",
    href: "/wiki/deer-mouse",
    img: "https://images.pexels.com/photos/4622887/pexels-photo-4622887.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
  },
];

const hardwareEntries = [
  {
    title: "Bucket Trap",
    desc: "Multi-catch design for heavy infestations. Maximum efficiency.",
    tier: "S-TIER",
    href: "/wiki/bucket-trap",
    Icon: Package,
  },
  {
    title: "Snap Trap",
    desc: "Classic mechanical lethal control. High reliability, low cost.",
    tier: "A-TIER",
    href: "/wiki/bucket-trap",
    Icon: MousePointerClick,
  },
  {
    title: "Electronic Zapper",
    desc: "High-voltage lethal discharge. Clean disposal, battery powered.",
    tier: "A-TIER",
    href: "/wiki/bucket-trap",
    Icon: Zap,
  },
  {
    title: "Bait Station",
    desc: "Secure rodenticide delivery system. Tamper-resistant design.",
    tier: "B-TIER",
    href: "/wiki/bucket-trap",
    Icon: Wrench,
  },
];

const exclusionEntries = [
  {
    title: "Steel Wool",
    desc: "Standard barrier material. Best used with sealant to prevent rust.",
    tier: "A-TIER",
    href: "/wiki/bucket-trap",
    Icon: Package,
  },
  {
    title: "Copper Mesh",
    desc: "Will not rust. Superior for long-term external weep hole sealing.",
    tier: "A-TIER",
    href: "/wiki/bucket-trap",
    Icon: Package,
  },
  {
    title: "Silicone Caulk",
    desc: "Flexible sealing for small gaps. Resistant to weathering and pests.",
    tier: "B-TIER",
    href: "/wiki/bucket-trap",
    Icon: Droplets,
  },
  {
    title: "Spray Foam",
    desc: "Temporary solution only. Rodents easily gnaw through standard foam.",
    tier: "C-TIER",
    href: "/wiki/bucket-trap",
    Icon: FlaskConical,
  },
];

const scamEntries = [
  {
    title: "Ultrasonic Repellers",
    desc: "Scientifically unproven. Rodents habituate within 24–48 hours. Total waste of capital.",
    tier: "F-TIER",
    href: "/wiki/bucket-trap",
    Icon: Volume2,
    warning: true,
  },
  {
    title: "Peppermint Oil",
    desc: "Smells good, does nothing. Anecdotal evidence only. Use real exclusion instead.",
    tier: "F-TIER",
    href: "/wiki/bucket-trap",
    Icon: Droplets,
    warning: false,
  },
  {
    title: "Glue Traps",
    desc: "Inhumane and ineffective for large populations. High failure rate for rats.",
    tier: "D-TIER",
    href: "/wiki/bucket-trap",
    Icon: MousePointerClick,
    warning: false,
  },
  {
    title: "Predator Urine",
    desc: "Biological repellent with zero efficacy in residential settings. Biological hazard risks.",
    tier: "F-TIER",
    href: "/wiki/bucket-trap",
    Icon: FlaskConical,
    warning: true,
  },
];

const tierBadge = (tier: string) => {
  const base = "text-[10px] font-black uppercase tracking-[0.12em] px-2 py-0.5 inline-block";
  if (tier === "S-TIER") return `${base} bg-primary text-primary-foreground`;
  if (tier === "A-TIER") return `${base} bg-foreground text-background`;
  if (tier === "B-TIER") return `${base} bg-muted text-muted-foreground border border-border`;
  if (tier === "C-TIER") return `${base} bg-muted text-muted-foreground border border-border`;
  if (tier === "D-TIER") return `${base} bg-destructive/15 text-destructive border border-destructive/30`;
  if (tier === "F-TIER") return `${base} bg-destructive text-destructive-foreground`;
  return `${base} bg-muted text-muted-foreground`;
};

const SectionHeader = ({
  num,
  title,
  sub,
  scam,
}: {
  num: string;
  title: string;
  sub: string;
  scam?: boolean;
}) => (
  <div className={`flex items-end justify-between border-b pb-3 mb-8 ${scam ? "border-destructive/40" : "border-border"}`}>
    <h2 className={`text-3xl md:text-4xl font-black uppercase tracking-tight ${scam ? "text-destructive" : "text-foreground"}`}>
      {num}. {title}
    </h2>
    <span className={`text-[10px] font-black uppercase tracking-[0.22em] pb-1 ${scam ? "text-destructive" : "text-muted-foreground"}`}>
      {sub}
    </span>
  </div>
);

const Wiki = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Hero */}
        <div className="mb-16 border-l-[5px] border-foreground pl-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-foreground">
            Knowledge Base
          </h1>
          <p className="text-base font-black uppercase tracking-tight text-foreground mt-3">
            The Pest.GG Wiki
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mt-3 max-w-lg">
            Every trap, every pest, every material — documented and rated. No fluff, no
            affiliate filler. Just industrial-grade pest management data.
          </p>
        </div>

        {/* 01. Rodents */}
        <div id="rodents" className="mb-20">
          <SectionHeader num="01" title="Rodents" sub="Species Identification" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rodentEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="group border border-border hover:border-primary transition-colors duration-200"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={entry.img}
                    alt={entry.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-black text-base uppercase tracking-tight text-foreground leading-tight">
                    {entry.title}
                  </p>
                  <p className={`text-[10px] font-bold uppercase tracking-wide mt-2 leading-snug ${entry.subtitleClass}`}>
                    {entry.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 02. Hardware */}
        <div id="hardware" className="mb-20">
          <SectionHeader num="02" title="Hardware" sub="Deployment Tools" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hardwareEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className={`group border hover:border-primary transition-colors duration-200 p-4 flex flex-col ${i === 0 ? "border-foreground" : "border-border"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 flex items-center justify-center border border-border text-foreground group-hover:text-primary group-hover:border-primary transition-colors">
                    <entry.Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className={tierBadge(entry.tier)}>{entry.tier}</span>
                </div>
                <p className="font-black text-sm uppercase tracking-tight text-foreground leading-tight mb-1">
                  {entry.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {entry.desc}
                </p>
                <div className={`mt-4 text-[10px] font-black uppercase tracking-[0.15em] px-3 py-2 text-center transition-colors ${i === 0 ? "bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground" : "border border-border text-foreground group-hover:border-primary group-hover:text-primary"}`}>
                  View Specs
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 03. Exclusion */}
        <div id="exclusion" className="mb-20">
          <SectionHeader num="03" title="Exclusion" sub="Structure Fortification" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {exclusionEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="group border border-border hover:border-primary transition-colors duration-200 p-4 flex flex-col"
              >
                <span className={`${tierBadge(entry.tier)} mb-3 self-start`}>{entry.tier}</span>
                <p className="font-black text-sm uppercase tracking-tight text-foreground leading-tight mb-1">
                  {entry.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {entry.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* 04. Scams */}
        <div id="scams" className="mb-16">
          <SectionHeader num="04" title="Scams" sub="Avoid at All Costs" scam />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scamEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className={`group border transition-colors duration-200 p-4 flex flex-col ${entry.warning ? "border-destructive/60 bg-destructive/5 hover:border-destructive" : "border-border hover:border-destructive/50 hover:bg-destructive/5"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-8 h-8 flex items-center justify-center ${entry.warning ? "text-destructive" : "text-muted-foreground"}`}>
                    <entry.Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className={tierBadge(entry.tier)}>{entry.tier}</span>
                </div>
                <p className={`font-black text-sm uppercase tracking-tight leading-tight mb-1 ${entry.warning ? "text-destructive" : "text-foreground"}`}>
                  {entry.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {entry.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Wiki;
