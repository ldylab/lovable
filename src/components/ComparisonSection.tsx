import { Sparkles } from "lucide-react";

const rows = [
  {
    label: "Cost",
    pro: { text: "$500 – $1,000+" },
    pestgg: { text: "Under $100", highlight: true },
  },
  {
    label: "Response",
    pro: { text: "3-7 Days Wait" },
    pestgg: { text: "Instant Action" },
  },
  {
    label: "Strategy",
    pro: { text: "Generic Traps" },
    pestgg: { text: "4-Step Protocol" },
  },
  {
    label: "Privacy",
    pro: { text: "Strangers in House" },
    pestgg: { text: "100% Private" },
  },
  {
    label: "Goal",
    pro: { text: "Monthly Contracts" },
    pestgg: { text: "Zero Mice" },
  },
];

const ComparisonSection = () => {
  return (
    <section className="w-full bg-background py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1] tracking-tight text-foreground">
            Stop Hiring Mice "Experts"
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[1] tracking-tight text-foreground mt-4">
            Don't Get Scammed. Do It Yourself.
          </h3>
          <p className="text-swiss-light-text text-lg md:text-xl font-medium leading-relaxed mt-6 max-w-2xl mx-auto">
            Save your money. Pro results, zero mice, under $100 budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Hiring a Pro */}
          <div className="bg-background border border-border p-8 md:p-10">
            <h3 className="text-2xl font-extrabold text-foreground uppercase tracking-tight mb-8 text-center">
              Hiring a Pro
            </h3>
            <div className="space-y-0">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b border-border last:border-b-0"
                >
                  <span className="text-base md:text-lg text-swiss-light-text">{row.label}</span>
                  <span className="text-base md:text-lg text-foreground font-medium">
                    {row.pro.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The Pest.gg Way */}
          <div className="relative bg-background border-2 border-[#719D62] p-8 md:p-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-[#719D62] text-white text-xs font-black uppercase tracking-[0.15em] px-5 py-2 rounded-md">
                <Sparkles size={14} />
                Best Value
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-foreground uppercase tracking-tight mb-8 text-center">
              Do It Yourself
            </h3>
            <div className="space-y-0">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b border-border last:border-b-0"
                >
                  <span className="text-base md:text-lg font-bold text-foreground">{row.label}</span>
                  <span className="text-base md:text-lg font-bold text-[#719D62]">
                    {row.pestgg.highlight ? (
                      <span className="text-3xl font-extrabold">{row.pestgg.text}</span>
                    ) : (
                      row.pestgg.text
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
