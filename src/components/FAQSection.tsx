import { useState } from "react";

const faqs = [
  {
    question: "How do I identify a rodent infestation?",
    answer: "Common signs include droppings, gnaw marks on structures, scratching noises in attics, and visible nests made of shredded materials.",
  },
  {
    question: "What steps can I take to prevent rodents?",
    answer: "Seal all entry points larger than a pencil eraser, eliminate food sources, reduce clutter, and maintain cleanliness. Steel wool and copper mesh are excellent for sealing gaps.",
  },
  {
    question: "Are DIY steps effective?",
    answer: "Yes, when done correctly. The key is a systematic approach: diagnose, build trust with pre-baiting, deploy the right traps, and fortify with exclusion methods.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight mb-6">
              Rodent Control FAQs
            </h2>
            <p className="text-swiss-light-text text-base leading-relaxed mb-10 font-normal">
              Everything you need to know about identifying, managing, and preventing rodent issues in your space.
            </p>
            <a
              className="text-xs font-bold uppercase tracking-widest text-foreground border-b border-foreground pb-0.5 hover:opacity-50 transition-opacity"
              href="#"
            >
              Chat with our experts
            </a>
          </div>
          <div className="lg:col-span-7 border-t border-border/40">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/40">
                <button
                  className="w-full py-8 flex justify-between items-start gap-6 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <h3 className="text-lg font-semibold text-foreground leading-snug tracking-tight">
                    {faq.question}
                  </h3>
                  <span className="text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors mt-0.5 flex-shrink-0 leading-none">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-48 pb-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-swiss-light-text text-base leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
