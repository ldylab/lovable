import { useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "DIAGNOSE", active: true },
  { num: "02", title: "TRUST", active: false },
  { num: "03", title: "ELIMINATE", active: false },
  { num: "04", title: "FORTIFY", active: false },
];

const stepDetails: Record<string, { heading: string; text: string; link: string }> = {
  "01": {
    heading: "Step 01: Comprehensive analysis of nesting sites.",
    text: "We don't guess. We map the entire structure to understand behavior patterns before setting a single trap. Precision beats volume every time.",
    link: "Learn more about Diagnosis →",
  },
  "02": {
    heading: "Step 02: Build trust with pre-baiting techniques.",
    text: "Mice are neophobic — they fear new things. Pre-baiting unset traps with food builds familiarity, dramatically increasing capture rates.",
    link: "Learn more about Trust →",
  },
  "03": {
    heading: "Step 03: Strategic trap deployment and monitoring.",
    text: "Place traps along confirmed runways, perpendicular to walls. Monitor daily and adjust placement based on activity patterns.",
    link: "Learn more about Elimination →",
  },
  "04": {
    heading: "Step 04: Seal entry points and prevent re-entry.",
    text: "Exclusion is the endgame. Steel wool, copper mesh, and concrete patches close the gaps that let rodents return.",
    link: "Learn more about Fortification →",
  },
};

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState("01");
  const detail = stepDetails[activeStep];

  return (
    <section id="process-roadmap" className="w-full bg-background pt-24 pb-12 text-swiss-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="mb-12">
              <span className="text-swiss-light-text font-bold uppercase tracking-widest text-xs mb-4 block">Process Roadmap</span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.9] tracking-tight text-foreground max-w-xl">
                How To<br />Solve It
              </h2>
              <p className="mt-6 text-swiss-light-text text-lg md:text-xl font-medium leading-relaxed max-w-sm">
                A strategic approach is the difference between temporary relief and permanent exclusion.
              </p>
            </div>
            <div className="flex flex-col border-t border-border">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`process-item group relative cursor-pointer border-b border-border py-8 px-6 transition-all duration-300 ${activeStep === step.num ? "active" : ""}`}
                  onClick={() => setActiveStep(step.num)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                      <span className="text-swiss-light-text font-medium text-lg w-8">{step.num}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight">{step.title}</h3>
                    </div>
                    <ArrowRight
                      size={24}
                      className={`text-foreground arrow-icon transition-all duration-300 ${activeStep !== step.num ? "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" : ""}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[55%] relative flex flex-col h-full pt-4 lg:pt-32">
            <div className="w-full relative aspect-[16/10] bg-muted mb-8 overflow-hidden shadow-sm">
              <img
                alt="Pest control professional inspecting"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZj-zsG81vMWfKplvH71ceQJ-hkiYv5RklHGG7XZKuwTrClKygqv6smAdsB8uLhmn_r52AsU39FR0tXNw-YV93g79yjfyTxT3h1HTh-1DCMf0amXVVcKXP9omsZNp-CHyVhZFZVSzhxFBczazl71SUnVEpPS6CYqjaJNs61b31kATDFY0AlKTk5CKcvK1XRoXsZD16xl8_teiPdBPeX_P0UntrMCssYXXAaxGoihc_mr_y-LE-cewb1yP2VR8hpK5_nKVKndUq5Khq"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-foreground font-bold text-xl uppercase tracking-tight">{detail.heading}</h4>
              <p className="text-swiss-light-text text-base leading-relaxed max-w-lg">{detail.text}</p>
              <a className="inline-block text-primary font-bold text-sm uppercase tracking-widest hover:translate-x-1 transition-transform" href="#">
                {detail.link}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
