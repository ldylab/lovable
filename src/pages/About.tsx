import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col">

        {/* Hero */}
        <section className="w-full bg-[#f5f5f0] py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-6 block">
              Established 2024 / Version 1.0
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[108px] font-extrabold text-foreground uppercase leading-[0.88] tracking-tight max-w-5xl">
              The Pest Control<br />Industry Is Broken.<br />We Fixed It.
            </h1>
          </div>
        </section>

        {/* Why We Built Section — fullscreen immersive */}
        <section className="w-full min-h-screen bg-foreground flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover grayscale opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 mb-6">
                Why We Built Pest.gg
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase leading-[0.92] tracking-tight text-white">
                Why We<br />Built<br />Pest.gg
              </h2>
            </div>
            <div className="space-y-7">
              <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                The industry is built on recurring revenue, not permanent solutions. Companies profit from your anxiety by selling "maintenance plans" that only treat the symptoms while ignoring the biology.
              </p>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                They sell peppermint oil for rats. They sell ultrasonic plugs for roaches. They sell lies.
              </p>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed">
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

        {/* Core Philosophy */}
        <section className="w-full bg-background border-t border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Our Core Philosophy
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-10 md:p-12" style={{ backgroundColor: "#83AED4" }}>
                <h3 className="font-extrabold text-foreground uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                  Science, Not<br />Guesswork
                </h3>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                  We rely on rodent biology, not marketing claims. If a trap or spray doesn't work in the real world, we expose it.
                </p>
              </div>
              <div className="p-10 md:p-12" style={{ backgroundColor: "#6F9A63" }}>
                <h3 className="font-extrabold text-foreground uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                  Seal, Don't<br />Just Kill
                </h3>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                  Killing a mouse is a temporary fix. Blocking their entry points is a permanent cure. We prioritize physical barriers over endless trapping.
                </p>
              </div>
              <div className="p-10 md:p-12" style={{ backgroundColor: "#D75536" }}>
                <h3 className="font-extrabold text-foreground uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-5">
                  Zero Fluff.<br />Zero Bias.
                </h3>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                  No sponsored traps. No fake reviews. We tell you exactly what works, what fails, and what puts your pets at risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="w-full bg-background border-t border-border py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Who We Are
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1] tracking-tight text-foreground">
                Pest<br />Control<br />Is a Math<br />Problem.
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                We are a group of data-driven homeowners and engineers tired of fake reviews and useless products. We treat infestations as a logical equation:
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Find the entry point.",
                  "Remove the food source.",
                  "Apply the right hardware.",
                ].map((step, i) => (
                  <div key={i} className="flex items-baseline gap-4 border-l-2 border-primary pl-5">
                    <span className="text-foreground text-base md:text-lg font-bold">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                When you control the variables, the result is always zero.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                — The Pest.gg Team
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-foreground py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white uppercase leading-[0.88] tracking-tight">
              Stop Guessing.<br />Start Catching.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                Start The Diagnosis
              </Link>
              <Link
                to="/wiki"
                className="inline-flex items-center justify-center border border-white text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-foreground transition-colors"
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
