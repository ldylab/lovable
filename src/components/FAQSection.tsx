import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight mb-6">Rodent Control FAQs</h2>
            <p className="text-swiss-light-text text-lg leading-relaxed mb-8">
              Everything you need to know about identifying, managing, and preventing rodent issues in your space.
            </p>
            <a className="text-primary font-bold underline underline-offset-4 hover:text-primary/80 transition-colors" href="#">
              Chat with our experts
            </a>
          </div>
          <div className="lg:col-span-7 border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-8 border-b border-border">
                <div
                  className="flex justify-between items-start gap-4 cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground leading-tight">{faq.question}</h3>
                    {openIndex === i && (
                      <p className="text-swiss-light-text text-lg leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                  {openIndex === i ? <Minus className="text-muted-foreground group-hover:text-foreground transition-colors mt-1 flex-shrink-0" size={20} /> : <Plus className="text-muted-foreground group-hover:text-foreground transition-colors mt-1 flex-shrink-0" size={20} />}
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
