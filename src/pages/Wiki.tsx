import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Settings, Bug } from "lucide-react";

const wikiCategories = [
  {
    label: "Hardware",
    icon: Settings,
    entries: [
      { title: "The Bucket Trap (False Floor Lid)", tier: "S-TIER", target: "Mice", href: "/wiki/bucket-trap" },
      { title: "Snap Trap (Expanded Trigger)", tier: "A-TIER", target: "Mice", href: "/wiki/bucket-trap" },
      { title: "Electronic Zapper", tier: "A-TIER", target: "Mice & Rats", href: "/wiki/bucket-trap" },
      { title: "Steel Wool Exclusion", tier: "B-TIER", target: "All", href: "/wiki/bucket-trap" },
    ],
  },
  {
    label: "Pests",
    icon: Bug,
    entries: [
      { title: "House Mouse", tier: "Entry", target: "Species Profile", href: "/wiki/bucket-trap" },
      { title: "Norway Rat", tier: "Entry", target: "Species Profile", href: "/wiki/bucket-trap" },
      { title: "Roof Rat", tier: "Entry", target: "Species Profile", href: "/wiki/bucket-trap" },
    ],
  },
  {
    label: "Techniques",
    icon: Zap,
    entries: [
      { title: "The Minefield Strategy", tier: "Guide", target: "Mice", href: "/wiki/bucket-trap" },
      { title: "The Long Con (Rat)", tier: "Guide", target: "Rats", href: "/wiki/bucket-trap" },
      { title: "Seal & Prevent", tier: "Guide", target: "All", href: "/wiki/bucket-trap" },
    ],
  },
];

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

        {/* Categories */}
        <div className="space-y-16">
          {wikiCategories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <div key={ci}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <Icon size={18} className="text-primary" />
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">
                    {cat.label}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.entries.map((entry, ei) => (
                    <Link
                      key={ei}
                      to={entry.href}
                      className="group flex items-center justify-between border border-border px-5 py-4 hover:border-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.15em] bg-muted text-muted-foreground px-2 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {entry.tier}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                            {entry.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{entry.target}</p>
                        </div>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wiki;
