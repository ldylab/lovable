import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WikiEntryCard from "@/components/WikiEntryCard";
import { ThumbsUp, MessageCircle, Share2, Bookmark, Pin, Ban, CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, Target, Shield, Crosshair, Bug, MoveHorizontal as MoreHorizontal, Smile } from "lucide-react";

const tocSections = [
  { id: "step-1", label: 'Step 1: Identification (Who is the Intruder?)' },
  { id: "step-2", label: 'Step 2: The "Repeller" Myth' },
  { id: "scenario-a", label: 'Scenario A: How to Catch a Mouse (The "Minefield")', children: [
    { id: "a-weapon", label: "1. The Weapon" },
    { id: "a-bait", label: "2. The Bait" },
    { id: "a-strategy", label: '3. The Strategy: "Overwhelming Force"' },
  ]},
  { id: "scenario-b", label: 'Scenario B: How to Catch a Rat (The "Long Con")', children: [
    { id: "b-weapon", label: "1. The Weapon" },
    { id: "b-bait", label: "2. The Bait" },
    { id: "b-strategy", label: '3. The Strategy: "The Trust Game"' },
  ]},
  { id: "scenario-c", label: "Scenario C: The Humane & High-Volume Strategy", children: [
    { id: "bucket-method", label: "The Bucket Method" },
    { id: "false-floor", label: 'The "False Floor" Upgrade' },
  ]},
  { id: "step-4", label: "Step 4: What to Avoid (Glue Boards)" },
  { id: "troubleshooting", label: "Troubleshooting: Why Tools Fail", children: [
    { id: "wrong-placement", label: "1. Wrong Placement" },
    { id: "too-much-bait", label: "2. Too Much Bait" },
    { id: "human-scent", label: "3. Human Scent" },
  ]},
  { id: "step-5", label: "Step 5: Cleanup & Prevention" },
  { id: "references", label: "References" },
];

const pinnedStories = [
  { title: "(C) Learn the best mouse trap strategy: The False...", readTime: "9 min read", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAogYFHYwNB_E-egUO-zZc55oFcMIOtkLPZ8aBCYBa96SDkADd1J_Htl1VlrtqnFpyWBfoY9vA6E3Kld69tSYHvxke2MhmMUGk_J1eeeq6H_9gaah6XCJvaHwLxd3rbYe7tY6wtkqyJ6npoNV8uHdZlbRviPMrWlsUllBzljnJWErNPbnmSIk7UWSG_3sjAmB_jQT-jMr6egIqUNrPKvaGq0nck40J_Bwb6hXJKSmJBZePj7HBL66ESB8Bp0D5tqdWUR_JvfPDZjkUI" },
  { title: 'New Way to Catch Mice: The "False Floor" Trap', readTime: "6 min read", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe2kE3Ng9PziF3yNc5Qh3v7_28CHhwPDT496_Qedrql8Gb3bwZbaSVyZmHgYwIK9-jfHe6GunOOuC7k14lx-dE7YNYC3R-EvUAFx_GH4VHoDsV9-uccv1dx-e-RrGj3kyr7X2Ca6HehzOW0l8bQXBYCcppj3hUmeeYx5RJFjJushmLm_NFMrX1WpqEau-yTpKi2aUg702oe987N6viydUID_kei2icWhuPnrkbi_wcgBe76_9Q7rRhQn6Rzl1eHj9tFSQXJ401bf-y" },
  { title: "What is the Best Mouse Trap? (The Honest Truth)", readTime: "12 min read", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZj-zsG81vMWfKplvH71ceQJ-hkiYv5RklHGG7XZKuwTrClKygqv6smAdsB8uLhmn_r52AsU39FR0tXNw-YV93g79yjfyTxT3h1HTh-1DCMf0amXVVcKXP9omsZNp-CHyVhZFZVSzhxFBczazl71SUnVEpPS6CYqjaJNs61b31kATDFY0AlKTk5CKcvK1XRoXsZD16xl8_teiPdBPeX_P0UntrMCssYXXAaxGoihc_mr_y-LE-cewb1yP2VR8hpK5_nKVKndUq5Khq" },
];

const mockComments = [
  {
    id: 1, name: "Floyd Miles", date: "6 hour", text: "Actually, now that I try out the links on my message, above, none of them take me to the secure site. Only my shortcut on my desktop, which I created years ago.",
    avatar: null, online: false,
    reactions: [{ emoji: "👍", count: 4 }, { emoji: "🤡", count: 1 }],
    replies: [],
  },
  {
    id: 2, name: "Albert Flores", date: "2 min", text: "Before installing this plugin please put back again your wordpress and site url back to http.",
    avatar: null, online: true,
    reactions: [],
    replies: [
      {
        id: 3, name: "Bessie Cooper", date: "18 sec", text: "Hi @Albert Flores . Thanks for your reply.",
        avatar: null, online: true,
        reactions: [{ emoji: "😍", count: 2 }],
      },
    ],
  },
];

const Article1 = () => {
  const [activeSection, setActiveSection] = useState(tocSections[0].id);
  const [comments, setComments] = useState(mockComments);
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll spy
  useEffect(() => {
    const allIds: string[] = [];
    tocSections.forEach(s => {
      allIds.push(s.id);
      s.children?.forEach(c => allIds.push(c.id));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePostComment = () => {
    if (!commentName.trim() || !commentText.trim()) return;
    setComments([
      { id: Date.now(), name: commentName, date: "just now", text: commentText, avatar: null, online: true, reactions: [], replies: [] },
      ...comments,
    ]);
    setCommentName("");
    setCommentEmail("");
    setCommentText("");
  };

  const isActive = (id: string) => activeSection === id;
  const isParentActive = (s: typeof tocSections[0]) =>
    activeSection === s.id || (s.children?.some(c => c.id === activeSection) ?? false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex gap-0 relative">

          {/* Left TOC Sidebar */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-24 py-10 pr-8">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">On this page</p>
              <nav className="space-y-1">
                {tocSections.map(s => (
                  <div key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className={`block w-full text-left text-base leading-snug py-2 transition-colors duration-200 border-l-2 pl-4 ${
                        isParentActive(s)
                          ? "border-primary text-foreground font-bold"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </button>
                    {s.children && (
                    <div className="ml-4">
                        {s.children.map(c => (
                          <button
                            key={c.id}
                            onClick={() => scrollTo(c.id)}
                            className={`block w-full text-left text-sm leading-snug py-1.5 pl-4 border-l-2 transition-colors duration-200 ${
                              isActive(c.id)
                                ? "border-primary text-foreground font-semibold"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Center Article Content */}
          <main ref={contentRef} className="flex-1 min-w-0 border-x border-border px-8 md:px-14 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span>/</span>
              <a href="/academy" className="hover:text-foreground transition-colors">Academy</a>
              <span>/</span>
              <span className="text-foreground">Article</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-[0.95]">
              How to Catch a Mouse:<br />Best Strategies & Tools
            </h1>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Learn how to catch a mouse fast with proven traps, bait tips, and placement strategies—plus humane bucket methods, rat vs. mouse identification, and what to avoid for effective home pest control.
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-8 mb-10 pb-8 border-b border-border">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-black text-primary-foreground">P</div>
              <div>
                <p className="text-sm font-bold text-foreground">PestGGTeam</p>
                <p className="text-xs text-muted-foreground">Feb 4 · 14 min read</p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <button className="text-muted-foreground hover:text-foreground transition-colors"><Bookmark size={18} /></button>
                <button className="text-muted-foreground hover:text-foreground transition-colors"><Share2 size={18} /></button>
              </div>
            </div>

            {/* Article Body */}
            <article className="prose-article space-y-6 text-foreground leading-relaxed text-base md:text-lg">
              <p>You discover a dropping in the pantry. You hear a scratch in the wall.</p>
              <p>Your first instinct is to buy a device and throw it down immediately.</p>
              <p><strong>Stop.</strong></p>
              <p>Learning how to catch mice is not about luck. It is about strategy.</p>
              <p>Many homeowners face mouse problems. They buy equipment. They set traps. But often, the setup fails. The mouse steals the bait. The pest escapes.</p>
              <p>The most important rule of pest warfare is simple: <strong>Know Your Enemy.</strong></p>
              <p>A strategy that works for a mouse will fail against a rat. A tool designed for a rat might miss a mouse entirely.</p>
              <p>This guide helps you identify the intruder. It helps you avoid common scams. Follow these steps to choose the best mouse trap strategy for your home.</p>

              <h2 id="step-1" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Step 1: Identification (Who is the Intruder?)</h2>
              <p>Before you buy anything, look at the evidence. To manage mice in your home, you must confirm the species.</p>
              <p>Use this table to determine if you have a House Mouse or a Rat.</p>

              {/* Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-3 font-bold text-foreground text-xs uppercase tracking-widest">Feature</th>
                      <th className="text-left p-3 font-bold text-foreground text-xs uppercase tracking-widest">House Mouse</th>
                      <th className="text-left p-3 font-bold text-foreground text-xs uppercase tracking-widest">Rat</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border"><td className="p-3 font-semibold text-foreground">Size</td><td className="p-3">Small (2-4 in). Tiny feet.</td><td className="p-3">Large (7-10 in). Heavy/thick.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold text-foreground">Droppings</td><td className="p-3">Grain of rice. Pointed ends.</td><td className="p-3">Capsule/olive pit. Blunt ends.</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold text-foreground">Behavior</td><td className="p-3">Curious. Investigates new things.</td><td className="p-3">Suspicious. Fears new things (Neophobia).</td></tr>
                    <tr className="border-t border-border"><td className="p-3 font-semibold text-foreground">Range</td><td className="p-3">Close to nest (10-30 ft).</td><td className="p-3">Travels far (100-300 ft).</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                <p className="font-bold text-foreground">The Golden Rule:</p>
                <p className="text-muted-foreground text-sm mt-1">If you see small droppings, use a standard set mouse trap. If you see large droppings, use a heavy-duty rat trap.</p>
              </div>

              <h2 id="step-2" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Step 2: The "Repeller" Myth</h2>
              <p>Before you start, avoid one specific product: <strong>Ultrasonic Repellers.</strong></p>
              <p>You see ads for them. They claim plug-in devices emit sounds that drive rodents away. They are ineffective.</p>

              {/* Myth Callout Box */}
              <div className="bg-muted border border-border p-6 my-8 flex gap-4 items-start">
                <div className="w-10 h-10 bg-destructive/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Ban size={20} className="text-destructive" />
                </div>
                <div>
                  <p className="font-black text-foreground uppercase tracking-tight">The "Repeller" Myth</p>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">Ultrasonic sound devices and peppermint oil sprays are multibillion-dollar industries built on hope, not science. Rodents quickly habituate to static noise or odors if the food source remains.</p>
                </div>
              </div>
              <p><strong>Verdict:</strong> Do not try to annoy them out. You must catch them.</p>

              <WikiEntryCard
                href="/wiki/bucket-trap"
                img="https://images.pexels.com/photos/3780104/pexels-photo-3780104.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
                tier="F-TIER"
                title="Ultrasonic Repellers"
                subtitle="All — Proven Ineffective"
              />

              <h2 id="scenario-a" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Scenario A: The "Minefield" Strategy</h2>
              <p>Mice are curious explorers. They don't have good eyesight, so they travel along walls using their whiskers (vibrissae) to guide them.</p>

              {/* Strategy Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                <div id="a-weapon" className="border border-border p-6">
                  <span className="text-3xl font-black text-primary">01</span>
                  <h4 className="font-black uppercase tracking-tight text-foreground mt-2 mb-3">The Weapon</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Expanded trigger snap traps. They offer a larger kill zone than traditional wood pedals.</p>
                </div>
                <div id="a-bait" className="border border-border p-6">
                  <span className="text-3xl font-black text-primary">02</span>
                  <h4 className="font-black uppercase tracking-tight text-foreground mt-2 mb-3">The Bait</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Protein over sugar. Peanut butter or a tiny piece of bacon tied with dental floss.</p>
                </div>
                <div id="a-strategy" className="border border-border p-6">
                  <span className="text-3xl font-black text-primary">03</span>
                  <h4 className="font-black uppercase tracking-tight text-foreground mt-2 mb-3">The Strategy</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Massive deployment. Use 10+ traps even for a single mouse. Overwhelm the population.</p>
                </div>
              </div>

              <WikiEntryCard
                href="/wiki/bucket-trap"
                img="https://images.pexels.com/photos/5961893/pexels-photo-5961893.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
                tier="A-TIER"
                title="Snap Trap (Expanded Trigger)"
                subtitle="Mice"
              />

              {/* Golden Rule Callout */}
              <div className="bg-primary/10 border-l-4 border-primary px-6 py-5 my-8">
                <p className="font-black text-foreground uppercase tracking-tight text-sm">The Golden Rule</p>
                <p className="text-muted-foreground text-sm mt-2 italic leading-relaxed">"If you think you have two mice, set twenty traps. If you think you have twenty, set a hundred."</p>
              </div>

              <h2 id="scenario-b" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Scenario B: How to Catch a Rat (The "Long Con")</h2>
              <p>Rats are different. They are intelligent. They are cautious. They distrust new objects.</p>

              <div id="b-weapon" className="my-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">1. The Weapon</h3>
                <p className="mt-2">You need a specialized Rat Snap Trap. These are much larger and stronger than mouse versions.</p>
                <div className="flex items-center gap-3 bg-destructive/10 border border-destructive/20 p-4 mt-4 rounded-md">
                  <AlertTriangle size={20} className="text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive font-semibold">Warning: These are dangerous to fingers and pets. Handle with extreme care.</p>
                </div>
              </div>

              <div id="b-bait" className="my-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">2. The Bait</h3>
                <p className="mt-2">Rats are suspicious. Stick to what they are already eating in your house. Use high protein sources: beef jerky, bacon grease, or dried pet food.</p>
              </div>

              <div id="b-strategy" className="my-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">3. The Strategy: "The Trust Game"</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted p-5 border border-border">
                    <p className="font-black text-foreground uppercase tracking-tight text-sm mb-2">Phase 1 — The Free Meal</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">Place the device along their path. DO NOT SET IT. Put bait on the pedal. Let them eat it for 3 days. You must overcome their fear of new things.</p>
                  </div>
                  <div className="bg-foreground p-5 text-background">
                    <p className="font-black uppercase tracking-tight text-sm mb-2">Phase 2 — The Strike</p>
                    <p className="text-sm opacity-80 leading-relaxed">They are confidently eating every night. Now, re-bait it. SET the trigger. They will approach without fear. You get a clean catch.</p>
                  </div>
                </div>
              </div>

              <h2 id="scenario-c" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Humane Alternative: The Bucket</h2>
              <p className="text-lg italic text-muted-foreground">For those who prefer no-kill methods, the "multi-catch" bucket trap is the only effective high-volume solution.</p>

              <div id="bucket-method" className="my-8 space-y-5">
                {[
                  "Use a 5-gallon bucket with a counter-weighted lid (Flip N Slide style).",
                  "Apply bait to the center of the lid and the top of the ramp.",
                  "Check every 12 hours and release at least 1 mile away from home.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={18} className="text-primary-foreground" />
                    </div>
                    <p className="text-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <div id="false-floor" className="my-6">
                <h3 className="text-xl font-bold uppercase tracking-tight">The "False Floor" Upgrade</h3>
                <p className="mt-2">Basic rollers can fail. Smart mice might balance on them. For better results, use a false floor trap — a floating layer (like a plastic bag) on top of water or oil that looks like solid ground. When the mouse steps on it, the floor collapses.</p>
                <p className="mt-2">This is arguably the best trap for garages, barns, or basements where infestation levels are high. It is also the best method for catch and release.</p>
                <WikiEntryCard
                  href="/wiki/bucket-trap"
                  img="https://images.pexels.com/photos/4308049/pexels-photo-4308049.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
                  tier="S-TIER"
                  title="The Bucket Trap (False Floor Lid)"
                  subtitle="Mice"
                />
              </div>

              <h2 id="step-4" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Step 4: What to Avoid (Glue Boards)</h2>
              <p>We strongly advise against using glue traps.</p>
              <div className="bg-destructive/5 border border-destructive/20 p-6 my-6 space-y-3">
                {[
                  { label: "Cruelty", text: "Mice do not die instantly. They suffocate or starve over days." },
                  { label: "Failure", text: "Adult mice often pull their legs free." },
                  { label: "Mess", text: "They can drag the sticky tray across your carpet." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-destructive flex-shrink-0 mt-1" />
                    <p className="text-sm"><strong className="text-foreground">{item.label}:</strong> <span className="text-muted-foreground">{item.text}</span></p>
                  </div>
                ))}
              </div>
              <p>For ethical and effective pest management, stick to snap mechanisms or bucket systems.</p>

              <WikiEntryCard
                href="/wiki/bucket-trap"
                img="https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
                tier="D-TIER"
                title="Glue Traps"
                subtitle="All — Avoid"
              />

              <h2 id="troubleshooting" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Troubleshooting: Why Tools Fail</h2>
              <p>Even with the right tool, things go wrong. Here are common reasons why traps don't catch anything.</p>

              <h3 id="wrong-placement" className="text-xl font-bold uppercase tracking-tight pt-6">1. Wrong Placement</h3>
              <p>You placed the device in the middle of the room.</p>
              <p><strong>Correction:</strong> Move it to the wall. Mice gather along baseboards.</p>

              <h3 id="too-much-bait" className="text-xl font-bold uppercase tracking-tight pt-6">2. Too Much Bait</h3>
              <p>You put a giant scoop of peanut butter on the trigger.</p>
              <p><strong>Correction:</strong> The mouse licked it off without snapping the bar. Use a tiny amount (pea-sized). Force them to work for it.</p>

              <h3 id="human-scent" className="text-xl font-bold uppercase tracking-tight pt-6">3. Human Scent</h3>
              <p>You handled the equipment with bare hands.</p>
              <p><strong>Correction:</strong> Mice smell your skin oil. It warns them away. Always wear gloves when you set traps.</p>

              <h2 id="step-5" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">Step 5: Cleanup & Prevention</h2>
              <p>Once you make the catch, follow these rules.</p>
              <div className="my-6 space-y-4">
                {[
                  { icon: Shield, label: "Wear Gloves", text: "Never touch a rodent with bare hands. Dead mice carry diseases." },
                  { icon: Target, label: "Disinfect", text: "Spray the area with a 10% bleach solution." },
                  { icon: Crosshair, label: "Seal the Breach", text: "This is the only way to stop them forever." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-muted p-4 border border-border">
                    <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>Mice fit through a hole the size of a dime. Rats fit through a hole the size of a quarter. Stuff holes with Steel Wool. Rodents cannot chew it. Seal the wool in place with caulk or foam.</p>

              <WikiEntryCard
                href="/wiki/bucket-trap"
                img="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop"
                tier="A-TIER"
                title="Steel Wool Exclusion"
                subtitle="All Rodents"
              />

              <div className="bg-primary/10 border-l-4 border-primary p-4 my-6">
                <p className="font-bold text-foreground">Conclusion</p>
                <p className="text-muted-foreground text-sm mt-1">Do not rely on luck. Identify the species first. Choose the right tool. Use the right bait. Whether you use a classic Tomcat press n set or a DIY bucket solution, patience is your best weapon. Start your strategy tonight. Reclaim your home.</p>
              </div>

              <h2 id="references" className="text-2xl md:text-3xl font-black uppercase tracking-tight pt-10">References</h2>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-sm">
                <li>University of Florida IFAS: Rat and Mouse Control</li>
                <li>Illinois Department of Public Health: Rodents (Mouse vs Rat)</li>
                <li>FTC: Warning on Ultrasonic Pest Control Devices</li>
                <li>University of Florida IFAS (Blog): Rat Control on Farms</li>
                <li>CDC: Trap Up to Remove Rodents</li>
                <li>RSPCA Knowledgebase: Glue Boards</li>
                <li>CDC: Clean Up After Rodents</li>
                <li>MSPCA-Angell: About Rats and Mice</li>
                <li>CDC: Seal Up to Prevent Rodents</li>
              </ol>
            </article>

            {/* Engagement Bar */}
            <div className="flex items-center justify-between py-6 mt-10 border-t border-b border-border">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <ThumbsUp size={16} /> 1.3K
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MessageCircle size={16} /> {comments.length}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-muted-foreground hover:text-foreground transition-colors"><Share2 size={18} /></button>
                <button className="text-muted-foreground hover:text-foreground transition-colors"><Bookmark size={18} /></button>
              </div>
            </div>

            {/* Comments Section */}
            <section className="py-10">
              <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-8">
                Responses ({comments.length})
              </h3>

              {/* Comment Form */}
              <div className="border border-border rounded-md p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-black text-primary-foreground flex-shrink-0">?</div>
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                        className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={commentEmail}
                        onChange={(e) => setCommentEmail(e.target.value)}
                        className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <textarea
                      placeholder="Write your comment here..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      rows={3}
                      className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-y"
                    />
                    <div className="flex justify-end">
                      <button
                        onClick={handlePostComment}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-black uppercase tracking-[0.15em] px-6 py-2.5 rounded-md transition-colors"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-0">
                {comments.map((c) => (
                  <div key={c.id}>
                    {/* Main Comment */}
                    <div className="py-6 border-b border-border">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-sm font-black text-primary-foreground">{c.name.split(" ").map(w => w[0]).join("")}</div>
                            {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />}
                          </div>
                          <p className="text-sm font-bold text-foreground">{c.name}</p>
                        </div>
                        <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal size={16} /></button>
                      </div>
                      <p className="text-foreground text-sm leading-relaxed mt-3">{c.text}</p>
                      <div className="flex items-center gap-3 mt-3 text-muted-foreground text-xs">
                        <button className="hover:text-foreground transition-colors"><Smile size={14} /></button>
                        {c.reactions.map((r, ri) => (
                          <span key={ri} className="inline-flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full text-xs">{r.emoji} {r.count}</span>
                        ))}
                        <span className="text-muted-foreground">|</span>
                        <button className="hover:text-foreground transition-colors">Reply</button>
                        <span className="text-muted-foreground">{c.date}</span>
                      </div>

                      {/* Replies */}
                      {c.replies.length > 0 && (
                        <div className="ml-12 mt-4 space-y-4">
                          {c.replies.map((r) => (
                            <div key={r.id} className="py-3">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="relative">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-[10px] font-black text-accent-foreground">{r.name.split(" ").map(w => w[0]).join("")}</div>
                                    {r.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-background rounded-full" />}
                                  </div>
                                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                                </div>
                                <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal size={14} /></button>
                              </div>
                              <p className="text-foreground text-sm leading-relaxed">{r.text}</p>
                              <div className="flex items-center gap-3 mt-2 text-muted-foreground text-xs">
                                <button className="hover:text-foreground transition-colors"><Smile size={12} /></button>
                                {r.reactions.map((rr, rri) => (
                                  <span key={rri} className="inline-flex items-center gap-1 bg-muted px-2 py-0.5 rounded-full text-xs">{rr.emoji} {rr.count}</span>
                                ))}
                                <span className="text-muted-foreground">|</span>
                                <button className="hover:text-foreground transition-colors">Reply</button>
                                <span className="text-muted-foreground">{r.date}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-[300px] flex-shrink-0">
            <div className="sticky top-24 py-12 pl-8">
              {/* Author Card */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-lg font-black text-primary-foreground">P</div>
                  <div>
                    <p className="text-base font-bold text-foreground">PestGGTeam</p>
                    <p className="text-sm text-muted-foreground">Pest Control Team</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  We build practical, science-first rodent control guides and field notes, focused on clear steps and real-world outcomes.
                </p>
                <a href="#" className="block w-full bg-foreground text-background text-xs font-black uppercase tracking-[0.15em] px-4 py-3 rounded-md text-center hover:bg-foreground/90 transition-colors">
                  Contact Me
                </a>
              </div>

              {/* Pinned Stories */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-4">Pinned Stories</h3>
                <div className="space-y-4">
                  {pinnedStories.map((story, i) => (
                    <a key={i} href="#" className="group/pin flex gap-3 items-start">
                      <div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-muted">
                        <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs uppercase tracking-widest mb-1">
                          <Pin size={11} /> Pinned · {story.readTime}
                        </div>
                        <p className="text-base font-bold text-foreground leading-tight group-hover/pin:text-primary transition-colors">
                          {story.title}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* More Posts Section */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-10">More Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "(C) Learn the best mouse trap strategy: The False Floor.",
              desc: "A humane, new way to catch mice. This innovative bucket mouse trap outsmarts...",
              author: "PestGGTeam",
              readTime: "9 min read",
            },
            {
              title: 'New Way to Catch Mice: The "False Floor" Trap',
              desc: "Learn the best mouse trap strategy: The False Floor. A humane, new way to cat...",
              author: "PestGGTeam",
              readTime: "6 min read",
            },
            {
              title: "What is the Best Mouse Trap? (The Honest Truth)",
              desc: 'Search online for "the best mouse trap." You will find dozens of lists...',
              author: "PestGGTeam",
              readTime: "12 min read",
            },
          ].map((post, i) => (
            <a key={i} href="/academy/article1" className="group block">
              <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden">
                <div className="w-full h-full bg-muted-foreground/10 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-[10px] font-black text-primary-foreground">P</div>
                <span className="text-sm text-muted-foreground">{post.author}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article1;
