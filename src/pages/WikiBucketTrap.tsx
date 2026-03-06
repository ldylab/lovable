import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Settings, List, TriangleAlert as AlertTriangle, Zap, Target, CircleCheck as CheckCircle, X, ChevronRight, Info } from "lucide-react";

const tocSections = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "mechanism", label: "Mechanism", icon: Settings },
  { id: "variants", label: "Variants", icon: List },
  { id: "flaws", label: "Flaws", icon: AlertTriangle },
  { id: "synergies", label: "Synergies", icon: Zap },
  { id: "deployment", label: "Deployment", icon: Target },
];

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
      <div className="relative w-full aspect-[4/3] bg-muted flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4308049/pexels-photo-4308049.jpeg?auto=compress&cs=tinysrgb&w=600)",
            filter: "grayscale(20%)",
          }}
        />
        <div className="absolute top-2 right-2 bg-primary px-3 py-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground">
            Hardware
          </span>
        </div>
      </div>

      <div className="divide-y divide-border">
        {[
          { label: "Classification", value: "Trap, Mechanical", valueClass: "" },
          { label: "Primary Target", value: "Mice", valueClass: "font-bold" },
          { label: "Efficacy Rating", value: "S-TIER", valueClass: "bg-primary text-primary-foreground px-2 py-0.5 text-xs font-black" },
          { label: "Pet Safe", value: "⚠ Conditional", valueClass: "text-[hsl(var(--safety-yellow))] font-semibold" },
          { label: "Cost Profile", value: "$$", valueClass: "" },
          { label: "Reusability", value: "Multi-Catch", valueClass: "text-green-600 font-bold" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              {stat.label}
            </span>
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
          <aside className="hidden lg:block w-[220px] flex-shrink-0">
            <div className="sticky top-24 py-10 pr-6">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.25em] mb-5">
                Table of Contents
              </p>
              <nav className="space-y-0.5">
                {tocSections.map((s) => {
                  const Icon = s.icon;
                  const isActive = activeSection === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      className={`flex items-center gap-3 w-full text-left text-sm leading-snug py-2.5 px-3 transition-colors duration-200 border-l-2 ${
                        isActive
                          ? "border-primary text-foreground font-bold bg-primary/5"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      <Icon size={13} className={isActive ? "text-primary" : "text-muted-foreground"} />
                      {s.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Center Article Content */}
          <main className="flex-1 min-w-0 border-x border-border px-6 md:px-14 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-8">
              <Link to="/wiki" className="hover:text-foreground transition-colors">Wiki</Link>
              <ChevronRight size={10} />
              <Link to="/wiki#hardware" className="hover:text-foreground transition-colors">Hardware</Link>
              <ChevronRight size={10} />
              <span className="text-foreground">The Bucket Trap</span>
            </div>

            {/* Stat card — shown inline on small/medium screens, hidden on xl (shown in sidebar) */}
            <div className="xl:hidden mb-10">
              {statCard}
            </div>

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

              <p className="mt-6 text-foreground text-base md:text-lg leading-relaxed max-w-2xl">
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
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground">
                  Mechanism
                </h3>
              </div>
              <p className="text-foreground text-base leading-relaxed mb-4">
                The device consists of a custom lid fitted over a standard 5-gallon bucket. The lid contains
                a balanced "false floor" or trapdoor. Bait is placed at the far end of this floor or suspended
                above it. When a mouse walks out to retrieve the bait, its weight tips the floor downward,
                causing the mouse to fall into the bucket below.
              </p>
              <p className="text-foreground text-base leading-relaxed">
                The floor is counterweighted (often magnetically or with a simple pivot) to immediately reset
                itself for the next target.
              </p>
            </section>

            {/* Variants */}
            <section id="variants" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <List size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground">
                  Variants
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "Rolling Log",
                    desc: "Uses a free-spinning cylinder coated in bait spanning across the top of the bucket. Mice attempt to walk on the cylinder, which spins and drops them.",
                  },
                  {
                    title: "Plank Walk",
                    desc: "A simple see-saw plank extending over the edge of the bucket. Less reliable reset mechanism than the false floor lid.",
                  },
                ].map((v, i) => (
                  <div key={i} className="border border-border p-5 flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{v.title}</p>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Flaws */}
            <section id="flaws" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle size={20} className="text-destructive flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground">
                  Flaws
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Ineffective against larger rats.",
                  "Requires regular maintenance/emptying.",
                  "Takes up significant floor space.",
                ].map((flaw, i) => (
                  <div key={i} className="border border-destructive/20 bg-destructive/5 px-4 py-3 flex items-center gap-3">
                    <X size={15} className="text-destructive flex-shrink-0" />
                    <span className="text-sm text-foreground">{flaw}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Synergies */}
            <section id="synergies" className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <Zap size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground">
                  Synergies
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Peanut Butter Bait", desc: "Maximizes attraction radius and trigger rate." },
                  { label: "Ramp Access", desc: "A wooden board leaned against the bucket guides mice to the lid." },
                  { label: "Multiple Units", desc: "Deploying 2–3 buckets across infestation zones increases throughput." },
                  { label: "Scent Concealment", desc: "Gloves during setup reduce human scent deterrence." },
                ].map((s, i) => (
                  <div key={i} className="bg-muted border border-border p-4">
                    <p className="font-bold text-foreground text-sm">{s.label}</p>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Deployment */}
            <section id="deployment" className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <Target size={20} className="text-primary flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-foreground">
                  Deployment Strategy
                </h3>
              </div>
              <div className="bg-foreground text-background p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-black text-sm uppercase tracking-tight">Optimal Placement</p>
                </div>
                <p className="text-background/80 text-sm leading-relaxed">
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
          <aside className="hidden xl:block w-[280px] flex-shrink-0">
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
