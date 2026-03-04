import { Star, ArrowRight } from "lucide-react";

const reviews = [
  {
    quote: "Easy to apply. Safe for animals, people, and wildlife. Keeps my home pest-free year round without all the chemical junk.",
    author: "Steven, Minnesota",
    color: "#FFB300",
  },
  {
    quote: "It worked great. I have had mosquitoes since living in my home for 15 years, since using this product, we can actually use our backyard.",
    author: "Lori, California",
    color: "#83AED4",
  },
  {
    quote: "Everything about pest.gg is great...the price...the customer service...the RESULTS!",
    author: "Troy, Texas",
    color: "#6F9A63",
  },
  {
    quote: "Safe, easy, and effective—everyone is a pest pro with pest.gg.",
    author: "Erik, Tennessee",
    color: "#D75536",
  },
];

const pressQuotes = [
  { quote: "Definitely worth the investment.", source: "HomeAdvisor" },
  { quote: "A smarter approach to home pest control.", source: "Consumer Reports" },
];

const ReviewSection = () => {
  return (
    <section className="w-full bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header row: left text + right rating */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground uppercase tracking-tight leading-[1] mb-4">
              5,000+ reviewers are raving
            </h2>
            <p className="text-swiss-light-text text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Don't just take our word for it. Take the word of <span className="font-bold text-foreground">people like you</span> who were done with the guesswork, toxicity, and waste of traditional pest control.
            </p>
          </div>
          <div className="flex-shrink-0 lg:text-right">
            <div className="flex items-center gap-1 lg:justify-end mb-1">
              {[1, 2, 3, 4].map((n) => (
                <Star key={n} size={24} className="text-primary fill-primary" />
              ))}
              <Star size={24} className="text-primary fill-primary/40" />
            </div>
            <p className="text-foreground">
              <span className="text-3xl font-extrabold">4.5</span>{" "}
              <span className="text-swiss-light-text text-sm">/ 5.0</span>
            </p>
            <a href="#" className="text-primary font-bold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1 mt-1">
              See all reviews <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{ backgroundColor: review.color }}
              className="text-foreground p-8 relative flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <span className="text-5xl font-black leading-none block mb-6 text-foreground/80">
                  "
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">
                  "{review.quote}"
                </p>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/60 mt-6">
                —{review.author}
              </p>
            </div>
          ))}
        </div>

        {/* Press quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pressQuotes.map((pq, i) => (
            <div key={i} className="border border-border p-8 flex items-center justify-between">
              <div>
                <p className="text-foreground text-lg italic mb-1">"{pq.quote}"</p>
                <p className="text-xs font-bold uppercase tracking-widest text-swiss-light-text">— {pq.source}</p>
              </div>
              <ArrowRight size={18} className="text-swiss-light-text flex-shrink-0 ml-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
