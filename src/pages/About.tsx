import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col">

        {/* Hero */}
        <section className="w-full min-h-screen bg-[#f5f5f0] flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover opacity-5 grayscale"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-8 block">
              Established 2024 / Version 1.0
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[108px] font-extrabold text-foreground uppercase leading-[0.88] tracking-tight max-w-5xl">
              The Pest Control<br />Industry Is Broken.<br />We Fixed It.
            </h1>
          </div>
        </section>

        {/* Why We Built Section — fullscreen immersive */}
        <section className="w-full min-h-screen bg-[#111] flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover grayscale opacity-8"
              style={{ opacity: 0.08 }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">
                Why We Built Pest.gg
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-[0.92] tracking-tight text-white">
                Why We<br />Built<br />Pest.gg
              </h2>
            </div>
            <div className="space-y-7">
              <p className="text-white/55 text-lg md:text-xl leading-relaxed">
                The industry is built on recurring revenue, not permanent solutions. Companies profit from your anxiety by selling "maintenance plans" that only treat the symptoms while ignoring the biology.
              </p>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                They sell peppermint oil for rats. They sell ultrasonic plugs for roaches. They sell lies.
              </p>
              <p className="text-white/55 text-lg md:text-xl leading-relaxed">
                We saw homeowners losing thousands of dollars to high-gloss marketing and low-science methodology. We decided to publish the truth.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="relative overflow-hidden flex-1">
                  <img
                    src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Ultrasonic device scam"
                    className="w-full h-40 object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-3xl font-extrabold text-red-500 uppercase tracking-tight select-none"
                      style={{ transform: "rotate(-15deg)", border: "3px solid #ef4444", padding: "2px 10px" }}
                    >
                      SCAM
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Case 0043 — Ultrasonic Devices
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden flex-1">
                  <img
                    src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Essential oil repellents scam"
                    className="w-full h-40 object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-3xl font-extrabold text-red-500 uppercase tracking-tight select-none"
                      style={{ transform: "rotate(-15deg)", border: "3px solid #ef4444", padding: "2px 10px" }}
                    >
                      SCAM
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                      Case 0211 — Essential Oils
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy — fullscreen immersive */}
        <section className="w-full min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: "#0e1a0e" }}>
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover grayscale"
              style={{ opacity: 0.06 }}
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">
              Our Core Philosophy
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-[0.92] tracking-tight text-white mb-16">
              Three Rules.<br />Zero Exceptions.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              <div className="p-10 md:p-14 border border-white/10" style={{ backgroundColor: "#83AED420" }}>
                <div className="w-8 h-px bg-[#83AED4] mb-8" />
                <h3 className="font-extrabold text-white uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                  Science, Not<br />Guesswork
                </h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
                  We rely on rodent biology, not marketing claims. If a trap or spray doesn't work in the real world, we expose it.
                </p>
              </div>
              <div className="p-10 md:p-14 border border-white/10 border-l-0" style={{ backgroundColor: "#6F9A6320" }}>
                <div className="w-8 h-px bg-[#6F9A63] mb-8" />
                <h3 className="font-extrabold text-white uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                  Seal, Don't<br />Just Kill
                </h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
                  Killing a mouse is a temporary fix. Blocking their entry points is a permanent cure. We prioritize physical barriers over endless trapping.
                </p>
              </div>
              <div className="p-10 md:p-14 border border-white/10 border-l-0" style={{ backgroundColor: "#D7553620" }}>
                <div className="w-8 h-px bg-[#D75536] mb-8" />
                <h3 className="font-extrabold text-white uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                  Zero Fluff.<br />Zero Bias.
                </h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed">
                  No sponsored traps. No fake reviews. We tell you exactly what works, what fails, and what puts your pets at risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are — fullscreen immersive */}
        <section className="w-full min-h-screen flex items-center relative overflow-hidden bg-[#f5f5f0]">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover grayscale"
              style={{ opacity: 0.07 }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40 mb-6">
                Who We Are
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-[0.92] tracking-tight text-foreground">
                Pest<br />Control<br />Is a Math<br />Problem.
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
                We are a group of data-driven homeowners and engineers tired of fake reviews and useless products. We treat infestations as a logical equation:
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { n: "01", text: "Find the entry point." },
                  { n: "02", text: "Remove the food source." },
                  { n: "03", text: "Apply the right hardware." },
                ].map((step) => (
                  <div key={step.n} className="flex items-center gap-6 py-5 border-b border-foreground/10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 w-8 shrink-0">{step.n}</span>
                    <span className="text-foreground text-lg md:text-xl font-bold">{step.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/60 text-lg md:text-xl leading-relaxed">
                When you control the variables, the result is always zero.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">
                — The Pest.gg Team
              </p>
            </div>
          </div>
        </section>

        {/* CTA — fullscreen immersive */}
        <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-foreground">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover grayscale"
              style={{ opacity: 0.06 }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-8">
              Ready?
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[108px] font-extrabold text-white uppercase leading-[0.88] tracking-tight">
              Stop Guessing.<br />Start Catching.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-primary/90 transition-colors"
              >
                Start The Diagnosis
              </Link>
              <Link
                to="/wiki"
                className="inline-flex items-center justify-center border border-white/30 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-white hover:text-foreground transition-colors"
              >
                Explore The Wiki
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
