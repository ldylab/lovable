import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a className="text-2xl font-extrabold text-foreground tracking-tighter" href="/">Pest.gg</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-10">
          <a className="text-[11px] font-bold text-foreground/60 hover:text-foreground uppercase tracking-[0.2em] transition-colors" href="/#process-roadmap">
            How it works
          </a>
          <a className="text-[11px] font-bold text-foreground/60 hover:text-foreground uppercase tracking-[0.2em] transition-colors" href="/wiki">
            Wiki
          </a>
          <div className="nav-item-academy relative group h-20 flex items-center">
            <a className="text-[11px] font-bold text-foreground/60 group-hover:text-foreground uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5 cursor-pointer" href="#">
              Pest Academy
              <ChevronDown size={14} className="opacity-50 transition-transform duration-200 group-hover:rotate-180" />
            </a>
            {/* Full-width mega menu bar */}
            <div className="mega-menu fixed top-20 left-0 w-screen bg-background border-b border-border shadow-sm z-50">
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-3 gap-12">
                {/* Column 1: Trap Categories */}
                <div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Trap Categories</h3>
                  <div className="space-y-4">
                    <a className="block text-base font-bold text-foreground hover:text-primary transition-colors" href="/academy">Snap Traps</a>
                    <a className="block text-base font-bold text-foreground hover:text-primary transition-colors" href="/academy">Bait Stations</a>
                    <a className="block text-base font-bold text-foreground hover:text-primary transition-colors" href="/academy">Exclusion Tools</a>
                    <a className="block text-base font-bold text-foreground hover:text-primary transition-colors" href="/academy">Monitoring Kits</a>
                    <a className="block text-base font-bold text-destructive hover:text-destructive/80 transition-colors mt-5 pt-4 border-t border-border" href="/academy">Scam Alert</a>
                  </div>
                </div>

                {/* Column 2: 4-Step Protocol */}
                <div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Learn</h3>
                  <div className="space-y-5">
                    <a className="group/item block" href="/academy">
                      <h4 className="text-base font-black text-foreground uppercase tracking-tight group-hover/item:text-primary transition-colors">Mice 101</h4>
                      <p className="text-sm text-muted-foreground mt-1">Basic habits & behavior patterns.</p>
                    </a>
                    <a className="group/item block" href="/academy">
                      <h4 className="text-base font-black text-foreground uppercase tracking-tight group-hover/item:text-primary transition-colors">Pro Tips</h4>
                      <p className="text-sm text-muted-foreground mt-1">Optimal trap placement techniques.</p>
                    </a>
                    <a className="group/item block" href="/academy">
                      <h4 className="text-base font-black text-foreground uppercase tracking-tight group-hover/item:text-primary transition-colors">Mistakes</h4>
                      <p className="text-sm text-muted-foreground mt-1">Why most people fail to catch mice.</p>
                    </a>
                  </div>
                </div>

                {/* Column 3: Featured Articles */}
                <div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Featured Articles</h3>
                  <div className="space-y-5">
                    <a className="flex items-start gap-4 group/article" href="/academy/article1">
                      <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                        <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground leading-tight group-hover/article:text-primary transition-colors">Best Snap Trap Placement Guide</h4>
                        <p className="text-muted-foreground text-sm mt-1">5 min read</p>
                      </div>
                    </a>
                    <a className="flex items-start gap-4 group/article" href="/academy/article1">
                      <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 overflow-hidden">
                        <img src="/placeholder.svg" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground leading-tight group-hover/article:text-primary transition-colors">How to Seal Entry Points Forever</h4>
                        <p className="text-muted-foreground text-sm mt-1">3 min read</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="text-[11px] font-bold text-foreground/60 hover:text-foreground uppercase tracking-[0.2em] transition-colors" href="/about">
            About Us
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div
            className={`flex items-center border rounded-full bg-muted transition-all duration-300 ease-out px-3 py-1.5 cursor-text ${
              searchOpen ? "w-[180px] md:w-[240px] lg:w-[300px] border-border" : "w-[100px] md:w-[120px] border-border/50"
            }`}
            onClick={() => { if (!searchOpen) setSearchOpen(true); }}
          >
            <span className="text-foreground/50 flex-shrink-0 p-1">
              <Search size={16} />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className={`bg-transparent text-foreground text-sm py-0 px-2 outline-none placeholder:text-muted-foreground transition-all duration-300 ${
                searchOpen ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
              onBlur={() => setSearchOpen(false)}
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
            />
          </div>
          <a className="hidden md:block bg-primary hover:bg-safety-yellow text-foreground text-[11px] font-black uppercase tracking-[0.15em] px-4 lg:px-6 py-3 rounded-md transition-colors duration-200 whitespace-nowrap flex-shrink-0" href="#">
            Start Diagnosis
          </a>
          {/* Mobile toggle */}
          <button className="md:hidden text-foreground/70 hover:text-foreground transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — absolutely positioned so it overlays content without shifting layout */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border px-6 py-8 space-y-6 shadow-lg z-50">
          <a className="block text-sm font-bold text-foreground/70 hover:text-foreground uppercase tracking-widest" href="/#process-roadmap" onClick={() => setMobileOpen(false)}>How it works</a>
          <a className="block text-sm font-bold text-foreground/70 hover:text-foreground uppercase tracking-widest" href="/wiki" onClick={() => setMobileOpen(false)}>Wiki</a>
          <a className="block text-sm font-bold text-foreground/70 hover:text-foreground uppercase tracking-widest" href="#" onClick={() => setMobileOpen(false)}>Pest Academy</a>
          <a className="block text-sm font-bold text-foreground/70 hover:text-foreground uppercase tracking-widest" href="/about" onClick={() => setMobileOpen(false)}>About Us</a>
          <a className="block bg-primary text-foreground text-sm font-black uppercase tracking-widest px-6 py-4 rounded-md text-center mt-4" href="#" onClick={() => setMobileOpen(false)}>
            Start Diagnosis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
