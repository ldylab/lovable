import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WikiCategoryHub from "@/components/WikiCategoryHub";
import { ChevronRight } from "lucide-react";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "visual-id", label: "Visual ID" },
  { id: "threat", label: "The Threat" },
  { id: "eradication", label: "Eradication Protocol" },
  { id: "hazmat", label: "Hazmat & Cleanup" },
  { id: "exclusion", label: "Exclusion" },
];

const WikiDeerMouse = () => {
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
      <div className="relative w-full aspect-[4/3] bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/10005722/pexels-photo-10005722.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
          alt="Deer Mouse"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-2 right-2 bg-destructive px-3 py-1">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-destructive-foreground">Biohazard</span>
        </div>
        <div className="absolute bottom-2 left-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60 font-mono">Peromyscus maniculatus</span>
        </div>
      </div>

      <div className="divide-y divide-border">
        <div className="px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground block mb-1">Classification</span>
          <div className="flex gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] bg-muted text-muted-foreground px-2 py-0.5">Rodent</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.05em] bg-muted text-muted-foreground px-2 py-0.5">Species Profile</span>
          </div>
        </div>
        {[
          { label: "Target Name", value: "The Deer Mouse" },
          { label: "Danger Level", value: "EXTREME — Biohazard", valueClass: "text-destructive font-black text-xs" },
          { label: "Size", value: "7–10 cm (body)" },
          { label: "Primary Threat", value: "Hantavirus, Wire Damage", valueClass: "text-destructive font-semibold text-xs" },
          { label: "Agility", value: "High — Excellent Climber", valueClass: "font-semibold" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground flex-shrink-0">{stat.label}</span>
            <span className={`text-sm text-right ${stat.valueClass ?? ""}`}>{stat.value}</span>
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
              <Link to="/wiki#biology" className="hover:text-foreground transition-colors">Biology</Link>
              <ChevronRight size={10} />
              <span className="text-foreground">The Deer Mouse</span>
            </div>

            {/* Stat card — inline on small/medium screens */}
            <div className="xl:hidden mb-10">{statCard}</div>

            {/* Title */}
            <div id="overview">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight text-foreground leading-[0.95]">
                The Deer Mouse
              </h1>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-muted-foreground/60 leading-tight mt-1 font-mono">
                Peromyscus maniculatus
              </h2>
              <p className="text-destructive font-bold uppercase tracking-[0.18em] text-xs mt-4">
                Class: Biological Target &nbsp;|&nbsp; Danger Level: Extreme (Biohazard)
              </p>

              <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-3xl">
                The deer mouse is the most abundant mammal in North America. While it prefers rural and wooded areas,
                it is increasingly invading homes. It is not just a nuisance; it is a serious biological threat due to
                its role as the primary carrier of the deadly Hantavirus.
              </p>

              <div className="w-full h-px bg-border my-10" />
            </div>

            {/* Visual ID */}
            <section id="visual-id" className="mb-14">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-5">
                Visual ID: Is This a Deer Mouse?
              </h3>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                Do not confuse it with the standard House Mouse. You can positively identify a deer mouse by three
                distinct physical features:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "The Two-Tone Coat",
                    desc: "It has a tawny brown or grayish back with a sharply defined, pure white underbelly and white feet.",
                  },
                  {
                    label: "The Bicolored Tail",
                    desc: "Its tail is dark on top and white on the bottom, and is covered in fine hairs — unlike the house mouse, which has a nearly naked, solid-colored tail.",
                  },
                  {
                    label: "The Face",
                    desc: "It possesses large, bulging black eyes and large, thin ears.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-border p-5 flex items-start gap-4">
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center bg-primary text-primary-foreground font-black text-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm uppercase tracking-wide">{item.label}</p>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* The Threat */}
            <section id="threat" className="mb-14">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-5">
                The Threat: Hantavirus
              </h3>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                Deer mice are the principal reservoir for the Sin Nombre virus, which causes Hantavirus Pulmonary
                Syndrome (HPS) — a severe respiratory disease with a fatality rate of about 36% in humans.
              </p>
              <div className="border-l-[3px] border-destructive bg-destructive/5 px-5 py-4 space-y-3">
                {[
                  { label: "The Vector", desc: "The virus is shed in their saliva, urine, and droppings." },
                  { label: "The Mechanism", desc: "You can contract the virus simply by breathing in aerosolized dust from disturbed droppings or nests." },
                ].map((item, i) => (
                  <div key={i}>
                    <span className="text-sm font-black text-destructive uppercase tracking-wide">{item.label}: </span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Eradication Protocol */}
            <section id="eradication" className="mb-14">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-5">
                Eradication Protocol
              </h3>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                Deer mice are opportunistic hoarders and excellent climbers that will nest in wall voids, attics,
                and even abandoned vehicles.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Hardware",
                    desc: "Use standard mechanical snap traps. Place them no more than 10 feet apart along walls.",
                  },
                  {
                    label: "Bait Synergy",
                    desc: "Peanut butter, or peanut butter mixed with rolled oats, is highly effective. Avoid loose pellet baits, as deer mice have a habit of hoarding food without eating it.",
                  },
                  {
                    label: "What to Avoid",
                    desc: "NEVER use live-catch traps or glue boards. Deer mice urinate and defecate when stressed in these traps, drastically increasing your risk of Hantavirus exposure.",
                    warning: true,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`border p-5 ${item.warning ? "border-destructive/40 bg-destructive/5" : "border-border"}`}
                  >
                    <p className={`font-bold text-sm uppercase tracking-wide mb-1 ${item.warning ? "text-destructive" : "text-foreground"}`}>
                      {item.label}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hazmat & Cleanup */}
            <section id="hazmat" className="mb-14">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-5">
                Hazmat &amp; Cleanup Protocol
              </h3>
              <div className="bg-destructive text-destructive-foreground px-5 py-3 mb-6">
                <p className="text-xs font-black uppercase tracking-[0.2em]">Critical — Treat as Biohazard Zone</p>
              </div>
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                If you catch a deer mouse or find its droppings, treat the area as a biohazard zone.
              </p>
              <div className="space-y-3">
                {[
                  {
                    step: "01",
                    label: "No Vacuuming",
                    desc: "Never sweep or vacuum droppings or nests; this shoots the deadly virus directly into the air you breathe.",
                    warning: true,
                  },
                  {
                    step: "02",
                    label: "The Bleach Soak",
                    desc: "Mix a 10% bleach solution (1.5 cups of bleach to 1 gallon of water). Thoroughly spray the dead mouse, the trap, and the droppings until completely wet. Let it soak for exactly 10 minutes.",
                  },
                  {
                    step: "03",
                    label: "Disposal",
                    desc: "Wear nonfabric gloves (rubber, latex, or nitrile). Wipe up the neutralized carcass and droppings with a damp paper towel and dispose of them outside. Wash your hands immediately.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`border p-5 flex items-start gap-4 ${item.warning ? "border-destructive/40 bg-destructive/5" : "border-border"}`}>
                    <div className={`flex-shrink-0 font-black font-mono text-sm mt-0.5 ${item.warning ? "text-destructive" : "text-muted-foreground"}`}>
                      {item.step}
                    </div>
                    <div>
                      <p className={`font-bold text-sm uppercase tracking-wide mb-1 ${item.warning ? "text-destructive" : "text-foreground"}`}>
                        {item.label}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Exclusion */}
            <section id="exclusion" className="mb-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-5">
                Exclusion (Permanent Prevention)
              </h3>
              <div className="bg-foreground text-background p-6 mb-6">
                <p className="font-black text-sm uppercase tracking-tight mb-2">The Only Permanent Solution</p>
                <p className="text-background/80 text-base leading-relaxed">
                  Seal all exterior openings larger than 1/4 inch. Use gnaw-proof materials like steel wool,
                  metal screening, or concrete. Do not use plastic, rubber, or standard insulating foam — deer
                  mice will chew right through them.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Steel Wool", verdict: "Approved", ok: true },
                  { label: "Metal Screening", verdict: "Approved", ok: true },
                  { label: "Concrete / Mortar", verdict: "Approved", ok: true },
                  { label: "Plastic / Rubber", verdict: "Ineffective — Chewable", ok: false },
                  { label: "Expanding Foam (standard)", verdict: "Ineffective — Chewable", ok: false },
                ].map((item, i) => (
                  <div key={i} className={`border p-4 flex items-center justify-between ${item.ok ? "border-border" : "border-destructive/30 bg-destructive/5"}`}>
                    <span className="text-sm font-bold text-foreground">{item.label}</span>
                    <span className={`text-[10px] font-black uppercase tracking-[0.1em] px-2 py-0.5 ${item.ok ? "bg-foreground text-background" : "bg-destructive text-destructive-foreground"}`}>
                      {item.verdict}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section className="mt-10 mb-0 border-t border-border pt-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-muted-foreground mb-4">
                References
              </h4>
              <ol className="list-decimal list-inside space-y-2">
                {[
                  "Childs, J.E. et al. (1994). Serologic and Genetic Identification of Peromyscus maniculatus as the Primary Rodent Reservoir for a New Hantavirus in the Southwestern United States. Journal of Infectious Diseases.",
                  "Centers for Disease Control and Prevention. (2012). Hantavirus Pulmonary Syndrome — United States: Updated Recommendations for Risk Reduction.",
                  "Corrigan, R.M. (2001). Rodent Control: A Practical Guide for Pest Management Professionals. PCT Media Group.",
                  "National Pest Management Association. (2020). Best Practices for Rodent Pest Management.",
                ].map((ref, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                    {ref}
                  </li>
                ))}
              </ol>
            </section>

            <WikiCategoryHub />
          </main>

          {/* Right Sidebar — Stat Card (xl screens only) */}
          <aside className="hidden xl:block w-[300px] flex-shrink-0">
            <div className="sticky top-24 py-12 pl-8">
              {statCard}
            </div>
          </aside>
        </div>
      </div>

      {/* Wiki meta footer bar */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-6">
          <p className="text-xs text-muted-foreground mb-1">
            This page was last edited on 08 March 2026, at 09:07.
          </p>
          <p className="text-xs text-muted-foreground mb-3">
            Pages created prior to January 2025 are adapted from community-contributed field notes and independent pest control research.
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Page content is under{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline hover:text-foreground transition-colors">
              Creative Commons Attribution-ShareAlike 4.0 License
            </a>{" "}
            unless otherwise noted.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { label: "Terms of Service", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "About Pest.gg", href: "#" },
              { label: "Send Feedback", href: "#" },
              { label: "Status Page", href: "#" },
              { label: "Manage Cookie Settings", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WikiDeerMouse;
