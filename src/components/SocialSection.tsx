import { Users, Stethoscope, PiggyBank, MessageCircle, ArrowRight } from "lucide-react";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const stats = [
  { icon: Stethoscope, value: "Free", label: "Expert Diagnosis" },
  { icon: Users, value: "10,000+", label: "Homeowners Helped" },
  { icon: PiggyBank, value: "80%", label: "Average Savings" },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

const SocialSection = () => {
  return (
    <section className="w-full bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top: Header + CTA in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-2">
              <Users size={14} />
              Join the Community
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground uppercase tracking-tight leading-[1] mb-6">
              Don't fight pests alone.
            </h2>
            <p className="text-swiss-light-text text-lg md:text-xl font-medium leading-relaxed mb-8">
              Join thousands of homeowners getting free expert advice, sharing DIY wins, and saving money together. Real people. Real solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary hover:bg-safety-yellow text-foreground text-xs font-black uppercase tracking-[0.15em] px-8 py-4 rounded-md transition-colors duration-200"
              >
                <MessageCircle size={16} />
                Join Our Discord
              </a>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-11 h-11 border border-border bg-background rounded-lg flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-swiss-light-text text-sm mt-6">Over 500 pest problems solved this week</p>
          </div>

          {/* Right: Stats cards */}
          <div className="flex flex-col gap-4 justify-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 p-6 bg-background border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-sm text-swiss-light-text">{stat.label}</p>
                </div>
                <ArrowRight size={18} className="text-swiss-light-text opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
