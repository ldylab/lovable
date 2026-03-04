const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 mb-16">
          {/* Left: Large brand name */}
          <div>
            <a href="/" className="text-[clamp(4rem,10vw,8rem)] font-extrabold tracking-tighter leading-none text-foreground block">
              Pest.gg
            </a>
          </div>

          {/* Right: columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Socials */}
            <div>
              <h4 className="text-sm text-swiss-light-text mb-4">Socials</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            {/* Sitemap */}
            <div>
              <h4 className="text-sm text-swiss-light-text mb-4">Sitemap</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Pest Academy</a></li>
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Shop</a></li>
                <li><a href="#" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Description */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-sm text-foreground leading-relaxed mb-6">
                Pest.gg is the honest way to get rid of mice—driven by science and empowered by community.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary hover:bg-safety-yellow text-foreground text-xs font-black uppercase tracking-[0.15em] px-6 py-3 rounded-md transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Bottom legal links */}
        <div className="flex flex-wrap items-center gap-8">
          <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Cookie Policy</a>
          <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Impressum</a>
          <a href="#" className="text-sm text-swiss-light-text hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
