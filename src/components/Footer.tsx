const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          {/* Brand name — fixed width so it never overlaps */}
          <div className="shrink-0 w-[340px]">
            <a href="/" className="text-[clamp(4rem,6vw,6rem)] font-extrabold tracking-tighter leading-none text-foreground block">
              Pest.gg
            </a>
          </div>

          {/* Right side — 3 equal columns with consistent gap */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Socials */}
            <div>
              <h4 className="text-sm font-semibold text-swiss-light-text mb-4">Socials</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            {/* Sitemap */}
            <div>
              <h4 className="text-sm font-semibold text-swiss-light-text mb-4">Sitemap</h4>
              <ul className="space-y-2">
                <li><a href="/#process-roadmap" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">How it works</a></li>
                <li><a href="/wiki" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Wiki</a></li>
                <li><a href="/academy" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Pest Academy</a></li>
                <li><a href="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Description */}
            <div>
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                Pest.gg is the honest way to get rid of mice—driven by science and empowered by community.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-swiss-light-text">© 2026 Pest.gg. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Cookie Policy</a>
            <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
