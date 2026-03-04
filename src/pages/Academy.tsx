import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { label: "All Articles", slug: "all" },
  { label: "Snap Traps", slug: "snap-traps" },
  { label: "Bait Stations", slug: "bait-stations" },
  { label: "Exclusion Tools", slug: "exclusion-tools" },
  { label: "Monitoring Kits", slug: "monitoring-kits" },
  { label: "Scam Alert", slug: "scam-alert", isAlert: true },
];

const protocolSteps = [
  { label: "STEP 01: FIND", slug: "find", desc: "Inspect & Identify" },
  { label: "STEP 02: BAIT", slug: "bait", desc: "Pre-Bait & Trust" },
  { label: "STEP 03: KILL", slug: "kill", desc: "Trap & Eliminate" },
  { label: "STEP 04: SEAL", slug: "seal", desc: "Seal & Fortify" },
];

const contentTypes = [
  { label: "SCAM ALERT", slug: "scam-alert" },
  { label: "HARDWARE", slug: "hardware" },
  { label: "BIOLOGY", slug: "biology" },
  { label: "FIELD REPORT", slug: "field-report" },
];

const contextualTags = [
  { label: "KITCHEN", slug: "kitchen" },
  { label: "ATTIC", slug: "attic" },
  { label: "GARAGE", slug: "garage" },
  { label: "PET SAFE", slug: "pet-safe" },
  { label: "5-MIN READ", slug: "5-min-read" },
  { label: "FOR INTELLIGENT MICE", slug: "intelligent-mice" },
];

const rooms = [
  { label: "All Rooms", slug: "all" },
  { label: "Kitchen", slug: "kitchen" },
  { label: "Garage", slug: "garage" },
  { label: "Attic", slug: "attic" },
];

const articles = [
  {
    id: 1,
    title: "Best Snap Trap Placement Guide",
    description: "Learn exactly where to place snap traps for maximum effectiveness based on rodent behavior patterns.",
    category: "snap-traps",
    protocol: "kill",
    contentType: "hardware",
    room: "kitchen",
    contextTags: ["5-min-read"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK-B5fN_SIdhBtLZC3iAaccsp9Km0kioGYzqgwcyGoIIu6hEJFYQWiFkmCy2symO628X_4mQHmNTprSV053AMOQbOvbGhIrclcZwBiBGaLtkSt2DTEQFzO-nQK48GoV0g0r1xAe9BBatelhnIu-_TXAwpeukJP1r5sWQnWR8lrY_L5FyubACOTel9XByyQH2AuWPQ7yQf82q8hrnMA_3Oj8aFQQflZlo0BMknOPgEDiTtfGYmoWich_WQXBh4F1vod_j-DGO5Z9XFu",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "How to Seal Entry Points Forever",
    description: "A comprehensive guide to identifying and permanently sealing the structural gaps mice exploit.",
    category: "exclusion-tools",
    protocol: "seal",
    contentType: "hardware",
    room: "garage",
    contextTags: [],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_oQFbNfZY2DSctGI93b2Ioh4RuXa74biik3FlpT9QiToG5en8HkqxNGD7Ni0LbyoR5QYs8BS1sr26SyJlx5pfaN4QVDNIbeOSsVzfYB_xfdpJH5csCk2NiwwNVCvQNACeRD2tdVcWeTjcO4icL_O2CBAu3WA91DHcwyAiB2fbzq3jBMCWWaqbRMaEKG2IliGFFu43nGUg2E5v_e4xR10994MDJh2Du1wCRXfYXoua8pDgQcwJAw36pCHQj1xyND1gwW8H7f2xvCwH",
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Pheromone Trail Analysis & Scrubbing",
    description: "Understanding how rodents use scent trails and how to neutralize them to prevent reinfestation.",
    category: "monitoring-kits",
    protocol: "find",
    contentType: "biology",
    room: "kitchen",
    contextTags: ["intelligent-mice"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZj-zsG81vMWfKplvH71ceQJ-hkiYv5RklHGG7XZKuwTrClKygqv6smAdsB8uLhmn_r52AsU39FR0tXNw-YV93g79yjfyTxT3h1HTh-1DCMf0amXVVcKXP9omsZNp-CHyVhZFZVSzhxFBczazl71SUnVEpPS6CYqjaJNs61b31kATDFY0AlKTk5CKcvK1XRoXsZD16xl8_teiPdBPeX_P0UntrMCssYXXAaxGoihc_mr_y-LE-cewb1yP2VR8hpK5_nKVKndUq5Khq",
    readTime: "7 min",
  },
  {
    id: 4,
    title: "The Pre-Baiting Advantage Explained",
    description: "Why building trust with unset traps dramatically increases your catch rate in the first 48 hours.",
    category: "bait-stations",
    protocol: "bait",
    contentType: "biology",
    room: "attic",
    contextTags: ["intelligent-mice"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1H7Kf6oi6ZMhouhndP3qWfnnllhhB7jPKObAJCdCm77t-55Qtc0yEmk_LfQFgirKAvkZ9OHzEJh-6aExlMUG-QSsCtEiUle36VEFg_3eWF8eIPykqiN4T_mGu9c4qlGGyrBz2f2ORcO3OKToe5twKN4qKD-qnnIgPfw3KLPz4MdtfXcLVLu_56C8zPR9tV95rYNDn9jb66py711nsLNQaqNkFFmvIrhm1lHlf4VPhc9rHdLeFIg_KoI0hc3LY9WvP2bH13onGIFzG",
    readTime: "4 min",
  },
  {
    id: 5,
    title: "Choosing the Right Bait Station Size",
    description: "Match your bait station to the target species for optimal results. Mice vs rats require different approaches.",
    category: "bait-stations",
    protocol: "kill",
    contentType: "hardware",
    room: "garage",
    contextTags: ["pet-safe"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYse8GnuIXJPBcCG1hANCXYidldTexrXjvQ10WpBytdWXCJiM6g2qo9dAPUqAweyRYuu34kaace5OoYulPARekTbAwSXD5dVm54sKHwRA00fISXEv6JUvOGDYzkDvpcanJWDouh2RgBoCuiBvjS6MiwpWa1StpCbZynPeQztys7X2FVhSomkfuFixo9QdErQIiDl8-Pa1lOnYZvpQjbcCMg3-J5A5oUB9lIcLkWM3M7Dwex57e4rEOjb5ieAfpf6jnszLhwT6Zvh6B",
    readTime: "6 min",
  },
  {
    id: 6,
    title: "Indoor Inspection Checklist",
    description: "A room-by-room walkthrough to identify signs of rodent activity before they become an infestation.",
    category: "monitoring-kits",
    protocol: "find",
    contentType: "field-report",
    room: "kitchen",
    contextTags: ["5-min-read"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_oQFbNfZY2DSctGI93b2Ioh4RuXa74biik3FlpT9QiToG5en8HkqxNGD7Ni0LbyoR5QYs8BS1sr26SyJlx5pfaN4QVDNIbeOSsVzfYB_xfdpJH5csCk2NiwwNVCvQNACeRD2tdVcWeTjcO4icL_O2CBAu3WA91DHcwyAiB2fbzq3jBMCWWaqbRMaEKG2IliGFFu43nGUg2E5v_e4xR10994MDJh2Du1wCRXfYXoua8pDgQcwJAw36pCHQj1xyND1gwW8H7f2xvCwH",
    readTime: "8 min",
  },
  {
    id: 7,
    title: "Steel Wool vs Spray Foam: Sealing Guide",
    description: "Compare the two most popular exclusion materials and learn when to use each one.",
    category: "exclusion-tools",
    protocol: "seal",
    contentType: "hardware",
    room: "garage",
    contextTags: ["5-min-read"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK-B5fN_SIdhBtLZC3iAaccsp9Km0kioGYzqgwcyGoIIu6hEJFYQWiFkmCy2symO628X_4mQHmNTprSV053AMOQbOvbGhIrclcZwBiBGaLtkSt2DTEQFzO-nQK48GoV0g0r1xAe9BBatelhnIu-_TXAwpeukJP1r5sWQnWR8lrY_L5FyubACOTel9XByyQH2AuWPQ7yQf82q8hrnMA_3Oj8aFQQflZlo0BMknOPgEDiTtfGYmoWich_WQXBh4F1vod_j-DGO5Z9XFu",
    readTime: "5 min",
  },
  {
    id: 8,
    title: "Setting Up a Monitoring Network",
    description: "How to deploy monitoring stations around your property to detect activity early.",
    category: "monitoring-kits",
    protocol: "find",
    contentType: "hardware",
    room: "attic",
    contextTags: [],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZj-zsG81vMWfKplvH71ceQJ-hkiYv5RklHGG7XZKuwTrClKygqv6smAdsB8uLhmn_r52AsU39FR0tXNw-YV93g79yjfyTxT3h1HTh-1DCMf0amXVVcKXP9omsZNp-CHyVhZFZVSzhxFBczazl71SUnVEpPS6CYqjaJNs61b31kATDFY0AlKTk5CKcvK1XRoXsZD16xl8_teiPdBPeX_P0UntrMCssYXXAaxGoihc_mr_y-LE-cewb1yP2VR8hpK5_nKVKndUq5Khq",
    readTime: "6 min",
  },
  {
    id: 9,
    title: "Why Ultrasonic Repellers Are a Scam",
    description: "Scientific evidence debunking ultrasonic mouse repellers and why they waste your money.",
    category: "scam-alert",
    protocol: "find",
    contentType: "scam-alert",
    room: "kitchen",
    contextTags: ["5-min-read"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1H7Kf6oi6ZMhouhndP3qWfnnllhhB7jPKObAJCdCm77t-55Qtc0yEmk_LfQFgirKAvkZ9OHzEJh-6aExlMUG-QSsCtEiUle36VEFg_3eWF8eIPykqiN4T_mGu9c4qlGGyrBz2f2ORcO3OKToe5twKN4qKD-qnnIgPfw3KLPz4MdtfXcLVLu_56C8zPR9tV95rYNDn9jb66py711nsLNQaqNkFFmvIrhm1lHlf4VPhc9rHdLeFIg_KoI0hc3LY9WvP2bH13onGIFzG",
    readTime: "4 min",
  },
];

const sortOptions = [
  { label: "Newest First", slug: "newest" },
  { label: "Oldest First", slug: "oldest" },
  { label: "Read Time: Short", slug: "read-short" },
  { label: "Read Time: Long", slug: "read-long" },
];

const Academy = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeRoom, setActiveRoom] = useState("all");
  const [activeProtocol, setActiveProtocol] = useState<string | null>(null);
  const [activeContentType, setActiveContentType] = useState<string | null>(null);
  const [activeContextTags, setActiveContextTags] = useState<string[]>([]);
  const [activeSort, setActiveSort] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close sort dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleContextTag = (slug: string) => {
    setActiveContextTags((prev) =>
      prev.includes(slug) ? prev.filter((t) => t !== slug) : [...prev, slug]
    );
  };

  const filtered = articles.filter((a) => {
    if (activeCategory !== "all" && a.category !== activeCategory) return false;
    if (activeRoom !== "all" && a.room !== activeRoom) return false;
    if (activeProtocol && a.protocol !== activeProtocol) return false;
    if (activeContentType && a.contentType !== activeContentType) return false;
    if (activeContextTags.length > 0 && !activeContextTags.some((t) => a.contextTags.includes(t))) return false;
    return true;
  });

  const clearAll = () => {
    setActiveCategory("all");
    setActiveRoom("all");
    setActiveProtocol(null);
    setActiveContentType(null);
    setActiveContextTags([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
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

      {/* Main Content */}
      <section className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar */}
            <aside className="w-full lg:w-[240px] flex-shrink-0 space-y-10">

              {/* Trap Categories */}
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">
                  Trap Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`block w-full text-left text-base font-bold transition-colors duration-200 py-1.5 ${
                        cat.isAlert
                          ? activeCategory === cat.slug
                            ? "text-destructive"
                            : "text-destructive/60 hover:text-destructive"
                          : activeCategory === cat.slug
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {activeCategory === cat.slug && (
                        <span className={`inline-block w-3 h-0.5 mr-2 align-middle ${cat.isAlert ? "bg-destructive" : "bg-primary"}`} />
                      )}
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* By Room */}
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">
                  By Room
                </h3>
                <div className="space-y-2">
                  {rooms.map((room) => (
                    <button
                      key={room.slug}
                      onClick={() => setActiveRoom(room.slug)}
                      className={`block w-full text-left text-base font-bold transition-colors duration-200 py-1.5 ${
                        activeRoom === room.slug
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {activeRoom === room.slug && (
                        <span className="inline-block w-3 h-0.5 bg-primary mr-2 align-middle" />
                      )}
                      {room.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Protocol Steps */}
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">
                  Protocol Steps
                </h3>
                <div className="space-y-2">
                  {protocolSteps.map((step) => (
                    <button
                      key={step.slug}
                      onClick={() => setActiveProtocol(activeProtocol === step.slug ? null : step.slug)}
                      className={`block w-full text-left transition-colors duration-200 py-1.5 ${
                        activeProtocol === step.slug
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-sm font-black uppercase tracking-tight">{step.label}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{step.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Type */}
              <div>
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-5">
                  Content Type
                </h3>
                <div className="space-y-2">
                  {contentTypes.map((ct) => (
                    <button
                      key={ct.slug}
                      onClick={() => setActiveContentType(activeContentType === ct.slug ? null : ct.slug)}
                      className={`block w-full text-left text-base font-bold uppercase tracking-tight transition-colors duration-200 py-1.5 ${
                        activeContentType === ct.slug
                          ? ct.slug === "scam-alert" ? "text-destructive" : "text-foreground"
                          : ct.slug === "scam-alert"
                            ? "text-destructive/60 hover:text-destructive"
                            : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {activeContentType === ct.slug && (
                        <span className={`inline-block w-3 h-0.5 mr-2 align-middle ${ct.slug === "scam-alert" ? "bg-destructive" : "bg-primary"}`} />
                      )}
                      {ct.label}
                    </button>
                  ))}
                </div>
              </div>

            </aside>

            {/* Articles Grid */}
            <div className="flex-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {contextualTags.map((tag) => (
                  <button
                    key={tag.slug}
                    onClick={() => toggleContextTag(tag.slug)}
                    className={`text-xs font-black uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-200 rounded-md ${
                      activeContextTags.includes(tag.slug)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground/60 border-border hover:border-foreground/30"
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>

              {/* Article count + sort */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
                    Showing {filtered.length} of {articles.length} articles
                  </p>
                  {(activeCategory !== "all" || activeRoom !== "all" || activeProtocol || activeContentType || activeContextTags.length > 0) && (
                    <button
                      onClick={clearAll}
                      className="text-primary text-xs font-bold uppercase tracking-widest underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Sort dropdown */}
                <div className="relative" ref={sortRef}>
                  <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {sortOptions.find((s) => s.slug === activeSort)?.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-md shadow-lg z-50 min-w-[160px]">
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

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((article) => (
                  <a key={article.id} href="/academy/article1" className="group cursor-pointer">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                         <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                          {contentTypes.find((c) => c.slug === article.contentType)?.label}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                          {article.readTime}
                        </span>
                        {article.contextTags.map((t) => (
                          <span key={t} className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.1em] border border-border px-2 py-0.5 rounded">
                            {contextualTags.find((ct) => ct.slug === t)?.label}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-base mt-2 leading-relaxed line-clamp-2">
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
