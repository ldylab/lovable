import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const protocolSteps = [
  { label: "All Steps", slug: "all" },
  { label: "Step 1: Find", desc: "Inspect & Identify", slug: "find" },
  { label: "Step 2: Bait", desc: "Pre-Bait & Trust", slug: "bait" },
  { label: "Step 3: Kill", desc: "Trap & Eliminate", slug: "kill" },
  { label: "Step 4: Seal", desc: "Exclusion & Prevent", slug: "seal" },
];

const locations = [
  { label: "All Locations", slug: "all" },
  { label: "Kitchen & Pantry", slug: "kitchen" },
  { label: "Attic & Ceiling", slug: "attic" },
  { label: "Garage & Basement", slug: "garage" },
  { label: "Outdoors", slug: "outdoors" },
];

const articleTypes = [
  { label: "All Types", slug: "all" },
  { label: "Field Reports", slug: "field-report" },
  { label: "Pro Strategies", slug: "pro-strategy" },
  { label: "Pest Biology", slug: "biology" },
  { label: "Debunking Scams", slug: "scam-debunk" },
];

const articles = [
  {
    id: 1,
    title: "Best Snap Trap Placement Guide",
    description: "Learn exactly where to place snap traps for maximum effectiveness based on rodent behavior patterns.",
    protocol: "kill",
    location: "kitchen",
    articleType: "pro-strategy",
    image: "https://images.pexels.com/photos/5691528/pexels-photo-5691528.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "How to Seal Entry Points Forever",
    description: "A comprehensive guide to identifying and permanently sealing the structural gaps mice exploit.",
    protocol: "seal",
    location: "garage",
    articleType: "pro-strategy",
    image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Pheromone Trail Analysis & Scrubbing",
    description: "Understanding how rodents use scent trails and how to neutralize them to prevent reinfestation.",
    protocol: "find",
    location: "kitchen",
    articleType: "biology",
    image: "https://images.pexels.com/photos/4308049/pexels-photo-4308049.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "7 min",
  },
  {
    id: 4,
    title: "The Pre-Baiting Advantage Explained",
    description: "Why building trust with unset traps dramatically increases your catch rate in the first 48 hours.",
    protocol: "bait",
    location: "attic",
    articleType: "pro-strategy",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "4 min",
  },
  {
    id: 5,
    title: "Garage Perimeter: A Field Report",
    description: "Real deployment of a 6-trap perimeter across a 2-car garage. Results after 30 days.",
    protocol: "kill",
    location: "garage",
    articleType: "field-report",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Indoor Inspection Checklist",
    description: "A room-by-room walkthrough to identify signs of rodent activity before they become an infestation.",
    protocol: "find",
    location: "kitchen",
    articleType: "field-report",
    image: "https://images.pexels.com/photos/5961893/pexels-photo-5961893.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min",
  },
  {
    id: 7,
    title: "Why Ultrasonic Repellers Are a Scam",
    description: "Scientific evidence debunking ultrasonic mouse repellers and why they waste your money.",
    protocol: "find",
    location: "kitchen",
    articleType: "scam-debunk",
    image: "https://images.pexels.com/photos/3780104/pexels-photo-3780104.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "4 min",
  },
  {
    id: 8,
    title: "Norway Rat vs House Mouse: Biology Deep Dive",
    description: "Key behavioral and physiological differences that change your entire trapping strategy.",
    protocol: "find",
    location: "outdoors",
    articleType: "biology",
    image: "https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "9 min",
  },
  {
    id: 9,
    title: "Attic Exclusion: 30-Day Field Report",
    description: "Copper mesh, steel wool, and silicone caulk deployed across an attic. What actually held.",
    protocol: "seal",
    location: "attic",
    articleType: "field-report",
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min",
  },
];

const sortOptions = [
  { label: "Newest First", slug: "newest" },
  { label: "Oldest First", slug: "oldest" },
  { label: "Read Time: Short", slug: "read-short" },
  { label: "Read Time: Long", slug: "read-long" },
];

const typeLabel: Record<string, string> = {
  "field-report": "Field Report",
  "pro-strategy": "Pro Strategy",
  "biology": "Pest Biology",
  "scam-debunk": "Debunking Scams",
};

const typeLabelColor: Record<string, string> = {
  "field-report": "text-primary",
  "pro-strategy": "text-foreground",
  "biology": "text-foreground/70",
  "scam-debunk": "text-destructive",
};

type FilterSection = "protocol" | "location" | "type";

const SidebarGroup = ({
  title,
  section,
  openSection,
  onToggle,
  children,
}: {
  title: string;
  section: FilterSection;
  openSection: FilterSection | null;
  onToggle: (s: FilterSection) => void;
  children: React.ReactNode;
}) => {
  const isOpen = openSection === section || openSection === null;
  return (
    <div>
      <button
        className="flex items-center justify-between w-full mb-4 group"
        onClick={() => onToggle(section)}
      >
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{title}</span>
        <ChevronDown
          size={12}
          className={`text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="space-y-1">{children}</div>}
    </div>
  );
};

const FilterButton = ({
  label,
  desc,
  isActive,
  isDestructive,
  onClick,
}: {
  label: string;
  desc?: string;
  isActive: boolean;
  isDestructive?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left flex items-start gap-0 py-2 pl-3 border-l-2 transition-all duration-150 ${
      isActive
        ? isDestructive
          ? "border-destructive"
          : "border-primary"
        : "border-transparent hover:border-border"
    }`}
  >
    <div>
      <span
        className={`text-sm font-bold transition-colors duration-150 ${
          isActive
            ? isDestructive
              ? "text-destructive"
              : "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
      </span>
      {desc && (
        <span className="block text-xs text-muted-foreground mt-0.5">{desc}</span>
      )}
    </div>
  </button>
);

const Academy = () => {
  const [activeProtocol, setActiveProtocol] = useState("all");
  const [activeLocation, setActiveLocation] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [activeSort, setActiveSort] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [openSection, setOpenSection] = useState<FilterSection | null>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleSection = (section: FilterSection) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const filtered = articles.filter((a) => {
    if (activeProtocol !== "all" && a.protocol !== activeProtocol) return false;
    if (activeLocation !== "all" && a.location !== activeLocation) return false;
    if (activeType !== "all" && a.articleType !== activeType) return false;
    return true;
  });

  const hasActiveFilters = activeProtocol !== "all" || activeLocation !== "all" || activeType !== "all";

  const clearAll = () => {
    setActiveProtocol("all");
    setActiveLocation("all");
    setActiveType("all");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="w-full bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span>/</span>
            <span className="text-foreground">Pest Academy</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-none">
            Pest Academy
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg font-medium uppercase tracking-widest max-w-2xl">
            Science-backed guides, protocols, and field-tested strategies to eliminate rodents permanently.
          </p>
        </div>
      </section>

      <section className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar */}
            <aside className="w-full lg:w-[220px] flex-shrink-0 space-y-8">

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="text-xs font-black uppercase tracking-widest text-primary underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Clear all filters
                </button>
              )}

              <SidebarGroup
                title="The Protocol"
                section="protocol"
                openSection={openSection}
                onToggle={toggleSection}
              >
                {protocolSteps.map((s) => (
                  <FilterButton
                    key={s.slug}
                    label={s.label}
                    desc={s.slug !== "all" ? s.desc : undefined}
                    isActive={activeProtocol === s.slug}
                    onClick={() => setActiveProtocol(s.slug)}
                  />
                ))}
              </SidebarGroup>

              <div className="w-full h-px bg-border" />

              <SidebarGroup
                title="By Location"
                section="location"
                openSection={openSection}
                onToggle={toggleSection}
              >
                {locations.map((l) => (
                  <FilterButton
                    key={l.slug}
                    label={l.label}
                    isActive={activeLocation === l.slug}
                    onClick={() => setActiveLocation(l.slug)}
                  />
                ))}
              </SidebarGroup>

              <div className="w-full h-px bg-border" />

              <SidebarGroup
                title="Article Type"
                section="type"
                openSection={openSection}
                onToggle={toggleSection}
              >
                {articleTypes.map((t) => (
                  <FilterButton
                    key={t.slug}
                    label={t.label}
                    isActive={activeType === t.slug}
                    isDestructive={t.slug === "scam-debunk"}
                    onClick={() => setActiveType(t.slug)}
                  />
                ))}
              </SidebarGroup>

            </aside>

            {/* Articles Grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
                  {filtered.length} of {articles.length} articles
                </p>

                <div className="relative" ref={sortRef}>
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {sortOptions.find((s) => s.slug === activeSort)?.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-background border border-border shadow-lg z-50 min-w-[160px]">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.slug}
                          onClick={() => { setActiveSort(opt.slug); setSortOpen(false); }}
                          className={`block w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-tight transition-colors ${
                            activeSort === opt.slug
                              ? "text-foreground bg-muted"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                {filtered.map((article) => (
                  <a key={article.id} href="/academy/article1" className="group cursor-pointer block">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-[10px] font-black uppercase tracking-[0.18em] ${typeLabelColor[article.articleType]}`}>
                          {typeLabel[article.articleType]}
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
                          {article.readTime} read
                        </span>
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
                    No articles match your filters.
                  </p>
                  <button
                    onClick={clearAll}
                    className="mt-4 text-primary text-sm font-bold uppercase tracking-widest underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
