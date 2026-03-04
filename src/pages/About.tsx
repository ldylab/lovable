import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Fuel, Users, Database, FlaskConical, BarChart3, MapPin, ArrowRight, Shield, Brain, Eye, Monitor, Microscope } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col">

        {/* Hero / Manifesto */}
        <section className="w-full bg-foreground py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-6 block">About Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase leading-[0.9] tracking-tight max-w-4xl">
              The Manifesto
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed mt-8 max-w-2xl">
              We didn't just build a better mousetrap. We decoded the industry.
            </p>
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
              Traditional pest control sells you fear and monthly contracts. We sell science and solutions. No trucks, no upsells, just results.
            </p>

            {/* Old Way vs Pest.gg Way */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-xl">
              <div className="border border-neutral-700 p-6">
                <h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">The Old Way</h3>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Truck size={18} className="text-destructive flex-shrink-0" />
                  <span className="text-sm font-bold">Trucks, Gas, Salespeople</span>
                </div>
              </div>
              <div className="border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">The Pest.gg Way</h3>
                <div className="flex items-center gap-3 text-white">
                  <Database size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-bold">Data, Science, Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="w-full bg-background py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">The Problem</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1] tracking-tight text-foreground max-w-2xl">
              Why Pay For<br />The Truck?
            </h2>
            <div className="max-w-2xl mt-8 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We realized that 80% of your pest control bill isn't for the chemicals—it's for the "Delivery Fee". It's for the truck, the gas, and the salesperson in your living room.
              </p>
              <p className="text-foreground text-lg font-bold">
                We stripped all that away.
              </p>

              {/* Breakdown icons */}
              <div className="flex gap-6 py-4">
                {[
                  { icon: Truck, label: "Truck" },
                  { icon: Fuel, label: "Gas" },
                  { icon: Users, label: "Salesperson" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 opacity-40">
                    <div className="w-14 h-14 border border-border flex items-center justify-center">
                      <item.icon size={22} className="text-destructive" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground line-through">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-2xl">
              <a href="#" className="group border border-border p-6 hover:border-primary transition-colors">
                <p className="text-muted-foreground text-sm mb-3">Think you're overpaying? We built a tool to prove it.</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <BarChart3 size={16} />
                  <span>Check Local Price Data</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 block">Quote Detective</span>
              </a>
              <a href="#" className="group border border-border p-6 hover:border-primary transition-colors">
                <p className="text-muted-foreground text-sm mb-3">See what's happening in your neighborhood right now.</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>View Your Local Pest Map</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="w-full bg-muted py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1] tracking-tight text-foreground max-w-3xl">
              Precision Strikes,<br />Not Carpet Bombing.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
              Old school pros spray gallons of poison hoping to hit something. We use local climate data and biological behavioral models to predict exactly where pests will be.
            </p>
            <div className="border-l-4 border-primary pl-6 mt-8">
              <p className="text-foreground text-xl font-black uppercase tracking-tight">
                Data beats poison. Every time.
              </p>
            </div>
          </div>
        </section>

        {/* Hardware Philosophy */}
        <section className="w-full bg-background py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Hardware Philosophy</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1] tracking-tight text-foreground max-w-3xl">
              Designed For Homes,<br />Not Warehouses.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl">
              Most traps look like torture devices. Ours are designed to be safe for pets, humane for pests, and invisible in your modern home. It's hardware that learns.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              {[
                {
                  icon: Shield,
                  title: "Pet-Safe by Default",
                  desc: "Designed with curious pets in mind. No exposed chemicals or snap hazards.",
                },
                {
                  icon: Brain,
                  title: "Hardware That Learns",
                  desc: "Smart sensors adapt to activity patterns and optimize placement over time.",
                },
                {
                  icon: Eye,
                  title: "Modern Design",
                  desc: "Sleek, minimal footprint. Fits under furniture, not in plain sight.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-border p-8">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-black text-foreground uppercase tracking-tight text-sm mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="w-full bg-foreground py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">The Team</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[1] tracking-tight text-white max-w-3xl">
              Engineers &<br />Entomologists.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mt-6 max-w-2xl">
              We are a team of data scientists and licensed pest experts who got tired of the "spray and pray" method. We brought the lab to your doorstep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-2xl">
              <div className="border border-neutral-700 p-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                  <Monitor size={22} className="text-primary" />
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-sm mb-1">Silicon Valley Engineers</h3>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-4">Data Science & ML</span>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Former engineers from top tech companies, now applying predictive models to pest behavior.
                </p>
              </div>
              <div className="border border-neutral-700 p-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5">
                  <Microscope size={22} className="text-primary" />
                </div>
                <h3 className="font-black text-white uppercase tracking-tight text-sm mb-1">Licensed Entomologists</h3>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-4">Pest Biology & Behavior</span>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  PhD-level researchers who understand pest psychology and physiology at a molecular level.
                </p>
              </div>
            </div>

            <p className="text-neutral-600 text-sm font-bold uppercase tracking-widest mt-12">
              Based in San Francisco, CA
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
