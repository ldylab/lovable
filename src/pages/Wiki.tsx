import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Settings, Bug, ShieldOff, Package } from "lucide-react";

const hardwareEntries = [
  {
    title: "The Bucket Trap (False Floor Lid)",
    tier: "S-TIER",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/4308049/pexels-photo-4308049.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Snap Trap (Expanded Trigger)",
    tier: "A-TIER",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/5961893/pexels-photo-5961893.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Electronic Zapper",
    tier: "A-TIER",
    target: "Mice & Rats",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Bait Station (Tamper-Resistant)",
    tier: "B-TIER",
    target: "Rats",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
];

const exclusionEntries = [
  {
    title: "Steel Wool Exclusion",
    tier: "A-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Copper Mesh",
    tier: "A-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Silicone Caulk Seal",
    tier: "B-TIER",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/5691528/pexels-photo-5691528.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Expanding Spray Foam",
    tier: "C-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
];

const scamEntries = [
  {
    title: "Ultrasonic Repellers",
    tier: "F-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/3780104/pexels-photo-3780104.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Peppermint Oil",
    tier: "F-TIER",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Glue Traps",
    tier: "D-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Natural Predator Urine",
    tier: "F-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
];

const pestEntries = [
  {
    title: "House Mouse",
    target: "Species Profile",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/10005722/pexels-photo-10005722.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Norway Rat",
    target: "Species Profile",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    title: "Roof Rat",
    target: "Species Profile",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/4622887/pexels-photo-4622887.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
];

const tierColor = (tier: string) => {
  if (tier === "S-TIER") return "bg-primary text-primary-foreground";
  if (tier === "A-TIER") return "bg-foreground text-background";
  if (tier === "B-TIER") return "bg-muted text-muted-foreground";
  if (tier === "C-TIER") return "bg-muted text-muted-foreground";
  if (tier === "D-TIER") return "bg-destructive/20 text-destructive";
  if (tier === "F-TIER") return "bg-destructive text-destructive-foreground";
  return "bg-muted text-muted-foreground";
};

type WikiEntry = {
  title: string;
  tier: string;
  target: string;
  href: string;
  img: string;
};

type PestEntry = {
  title: string;
  target: string;
  href: string;
  img: string;
};

const HardwareRow = ({ entry }: { entry: WikiEntry }) => (
  <Link
    to={entry.href}
    className="group flex items-center justify-between border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
  >
    <div className="flex items-center gap-4">
      <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-muted">
        <img
          src={entry.img}
          alt={entry.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-0.5 inline-block mb-1 ${tierColor(entry.tier)}`}>
          {entry.tier}
        </span>
        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
          {entry.title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
      </div>
    </div>
    <ArrowRight
      size={14}
      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mr-5 flex-shrink-0"
    />
  </Link>
);

const PestRow = ({ entry }: { entry: PestEntry }) => (
  <Link
    to={entry.href}
    className="group flex items-center justify-between border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
  >
    <div className="flex items-center gap-4">
      <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-muted">
        <img
          src={entry.img}
          alt={entry.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
          {entry.title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
      </div>
    </div>
    <ArrowRight
      size={14}
      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mr-5 flex-shrink-0"
    />
  </Link>
);

const Wiki = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
            Knowledge Base
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1] tracking-tight text-foreground">
            The Pest.gg<br />Wiki
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Every trap, every pest, every material — documented and rated. No fluff, no affiliate filler.
          </p>
        </div>

        {/* Hardware */}
        <div id="hardware" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <Settings size={18} className="text-primary" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Hardware</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hardwareEntries.map((entry, i) => (
              <HardwareRow key={i} entry={entry} />
            ))}
          </div>
        </div>

        {/* Exclusion Materials */}
        <div id="exclusion" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <Package size={18} className="text-primary" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Exclusion Materials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exclusionEntries.map((entry, i) => (
              <HardwareRow key={i} entry={entry} />
            ))}
          </div>
        </div>

        {/* Scams */}
        <div id="scams" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-destructive/30">
            <ShieldOff size={18} className="text-destructive" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Scams</h2>
            <span className="text-[10px] font-black uppercase tracking-[0.1em] bg-destructive/10 text-destructive px-2 py-0.5 ml-1">
              Avoid These
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {scamEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                className="group flex items-center justify-between border border-destructive/20 hover:border-destructive hover:bg-destructive/5 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-muted">
                    <img
                      src={entry.img}
                      alt={entry.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-0.5 inline-block mb-1 ${tierColor(entry.tier)}`}>
                      {entry.tier}
                    </span>
                    <p className="text-sm font-bold text-foreground group-hover:text-destructive transition-colors">
                      {entry.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground group-hover:text-destructive group-hover:translate-x-1 transition-all mr-5 flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Biology / Pests */}
        <div id="biology" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <Bug size={18} className="text-primary" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Biology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pestEntries.map((entry, i) => (
              <PestRow key={i} entry={entry} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wiki;
