import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Settings, Bug } from "lucide-react";

const hardwareEntries = [
  {
    title: "The Bucket Trap (False Floor Lid)",
    tier: "S-TIER",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/4308049/pexels-photo-4308049.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "Snap Trap (Expanded Trigger)",
    tier: "A-TIER",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/5961893/pexels-photo-5961893.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "Electronic Zapper",
    tier: "A-TIER",
    target: "Mice & Rats",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "Steel Wool Exclusion",
    tier: "B-TIER",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

const pestEntries = [
  {
    title: "House Mouse",
    target: "Species Profile",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/10005722/pexels-photo-10005722.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "Norway Rat",
    target: "Species Profile",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "Roof Rat",
    target: "Species Profile",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/4622887/pexels-photo-4622887.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

const techniqueEntries = [
  {
    title: "The Minefield Strategy",
    target: "Mice",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/6580024/pexels-photo-6580024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "The Long Con (Rat)",
    target: "Rats",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    title: "Seal & Prevent",
    target: "All",
    href: "/wiki/bucket-trap",
    img: "https://images.pexels.com/photos/1246954/pexels-photo-1246954.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
];

const tierColor: Record<string, string> = {
  "S-TIER": "bg-foreground text-background",
  "A-TIER": "bg-primary text-primary-foreground",
  "B-TIER": "bg-muted text-muted-foreground",
};

const Wiki = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
            Knowledge Base
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1] tracking-tight text-foreground">
            The Pest.gg<br />Wiki
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            Every trap, every pest, every technique — documented and rated. No fluff, no affiliate filler.
          </p>
        </div>

        {/* Hardware */}
        <div id="hardware" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <Settings size={18} className="text-primary" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Hardware</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hardwareEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                className="group border border-border hover:border-primary transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={entry.img}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-1 ${tierColor[entry.tier] ?? "bg-muted text-muted-foreground"}`}>
                      {entry.tier}
                    </span>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between flex-1">
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {entry.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pests */}
        <div id="pests" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <Bug size={18} className="text-primary" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Pests</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pestEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                className="group border border-border hover:border-primary transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={entry.img}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {entry.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Techniques */}
        <div id="techniques" className="mb-16">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
            <Zap size={18} className="text-primary" />
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Techniques</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {techniqueEntries.map((entry, i) => (
              <Link
                key={i}
                to={entry.href}
                className="group border border-border hover:border-primary transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={entry.img}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {entry.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-3" />
                </div>
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
