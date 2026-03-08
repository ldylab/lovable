import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I know if I have a mouse or a rat?",
    answer: "Look at the droppings. Mouse feces are the size of rice grains; rat feces are the size of raisins. Never guess based on scratching noises. You need visual proof to buy the right hardware.",
  },
  {
    question: "Should I hire a professional or do it myself?",
    answer: "Do it yourself. Most exterminators charge $300 just to set the exact same $2 snap traps you can buy at a hardware store. Follow our protocols and fix it permanently for a fraction of the cost.",
  },
  {
    question: "Do ultrasonic plug-ins or peppermint oils work?",
    answer: "No. They are scams. Sound waves cannot penetrate the drywall where mice nest, and rodents adapt to peppermint smells within 48 hours. Stop trying to annoy them out. You must catch them.",
  },
  {
    question: "I keep catching mice, but they keep coming back. Why?",
    answer: "You are treating the symptom, not the root cause. Unless you find and seal their exterior entry points (any gap larger than 1/4 inch) with copper mesh and silicone, you will be trapping mice forever.",
  },
  {
    question: "Why shouldn't I use poison indoors?",
    answer: "Poisoned rodents rarely die in the open. They die inside your walls or HVAC systems. The rotting carcass creates an unbearable odor for weeks and attracts insects. Always use mechanical traps indoors.",
  },
  {
    question: "Are snap traps safe around pets?",
    answer: "No. Exposed traps will snap curious paws and noses. If you have pets, you must use enclosed trap stations or place traps strictly in \"Zero-Access Zones\" (locked attics, drop ceilings, or behind heavy appliances).",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-background min-h-screen flex items-center py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tight mb-6">Rodent Control FAQs</h2>
            <p className="text-swiss-light-text text-lg leading-relaxed mb-8">
              The unfiltered truth. No marketing fluff, just science-backed protocols.
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
