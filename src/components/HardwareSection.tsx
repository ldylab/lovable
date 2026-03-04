import { CheckCircle, ArrowRight } from "lucide-react";

const hardwareItems = [
  {
    num: "01",
    label: "Bucket Trap",
    title: "The Volume\nKiller",
    subtitle: "High Capacity",
    pros: ["Mass capture capability", "Set & forget for weeks"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqi4e8bR7x3Qt9oGoJlNhRSmU9VJnTYjfuv7GFmd-QpK2ql-_oaXen5qvJ1CrE1uTWrmOARyfLJ846uI-pNILNIgHCBd9-Ec1fGV0BMclpfPfIpbLzQEE9S9j8UQ7zlqQp4cl1u05wp2tpj8n6e6nLTneT5UX3v9GmfBpE--TS5CQgapIlp1TUjSSbkq0QqCUfjg0kEVWRDAfP8C-7HiZwB6zMsKvgmfhstvDtRDTuHoB9UaBAYv48nWKJm0cEpVjcGPF9GuCinxM5",
  },
  {
    num: "02",
    label: "Snap Trap",
    title: "The Precision\nSniper",
    subtitle: "Instant Action",
    pros: ["Instant termination"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYse8GnuIXJPBcCG1hANCXYidldTexrXjvQ10WpBytdWXCJiM6g2qo9dAPUqAweyRYuu34kaace5OoYulPARekTbAwSXD5dVm54sKHwRA00fISXEv6JUvOGDYzkDvpcanJWDouh2RgBoCuiBvjS6MiwpWa1StpCbZynPeQztys7X2FVhSomkfuFixo9QdErQIiDl8-Pa1lOnYZvpQjbcCMg3-J5A5oUB9lIcLkWM3M7Dwex57e4rEOjb5ieAfpf6jnszLhwT6Zvh6B",
  },
  {
    num: "03",
    label: "Electronic Trap",
    title: "The Clean\nZapper",
    subtitle: "High Tech",
    pros: ["Mess-free disposal"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-NDl3Zz57_TyEhoX_uQ8t4BFHBa30JFf5p7FOMOgRJa_wt1qgMK7MAu0NKZJqty36m6Sl47nfOE1Vm-QFeCX1qsWbBXCNzExw6FwF8lpC_Bpea5sMU7qr9MbNsbMQ2cjMQE2_9mVZ06zGoe6L_DIkO7srYtH7jyzMPk8FwI-ZfpkG39ml3apcT06IW7BVdA-BBosaAjqZAvmZB2udzx0Nu2Se-3Q2_sxRBifDQUACpIzqXPq5vS5jsSvbak6E6tY-BYFFCSgshQi",
  },
  {
    num: "04",
    label: "Steel Wool",
    title: "The Fortress\nBuilder",
    subtitle: "Exclusion",
    pros: ["Preventative"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_oQFbNfZY2DSctGI93b2Ioh4RuXa74biik3FlpT9QiToG5en8HkqxNGD7Ni0LbyoR5QYs8BS1sr26SyJlx5pfaN4QVDNIbeOSsVzfYB_xfdpJH5csCk2NiwwNVCvQNACeRD2tdVcWeTjcO4icL_O2CBAu3WA91DHcwyAiB2fbzq3jBMCWWaqbRMaEKG2IliGFFu43nGUg2E5v_e4xR10994MDJh2Du1wCRXfYXoua8pDgQcwJAw36pCHQj1xyND1gwW8H7f2xvCwH",
  },
];

const HardwareSection = () => {
  return (
    <section className="w-full bg-background py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">The Honest Way</span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1] tracking-tight text-foreground max-w-2xl">
          The Only Tools<br />You Need
        </h2>
        <p className="text-swiss-light-text text-lg md:text-xl font-medium leading-relaxed mt-6">
          We tested everything so you don't have to. Here is the hardware that works.
        </p>
      </div>
      <div className="w-full max-w-7xl h-auto lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-background mx-auto px-6 md:px-12">
        {hardwareItems.map((item, i) => (
          <div key={i} className="hardware-card group relative w-full h-[400px] lg:h-full overflow-hidden bg-background cursor-pointer">
            <div className="absolute inset-0 z-0">
              <img
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-60 contrast-110 brightness-110 group-hover:grayscale-0 group-hover:opacity-100"
                src={item.img}
              />
            </div>
            <div className="content-default absolute inset-0 z-10 flex flex-col justify-between p-8 pointer-events-none bg-gradient-to-t from-black/50 to-transparent">
              <span className="text-8xl font-bold text-neutral-900/10 select-none mix-blend-multiply">{item.num}</span>
              <div>
                <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block drop-shadow-sm">{item.label}</span>
                <h3 className="text-3xl font-bold uppercase leading-none text-white group-hover:text-primary transition-colors drop-shadow-md whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="overlay-hover absolute inset-0 z-20 bg-neutral-900/95 opacity-0 transition-opacity duration-300 flex flex-col justify-between p-8">
              <div className="border-l-2 border-primary pl-4 pt-1">
                <span className="text-4xl font-bold text-white block">{item.num}</span>
                <span className="text-sm text-neutral-400 uppercase tracking-widest">{item.subtitle}</span>
              </div>
              <div className="content-hover space-y-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase text-neutral-500 font-bold mb-2 tracking-widest">The Good</h4>
                    <ul className="space-y-2">
                      {item.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-neutral-300">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-white text-foreground font-bold py-4 px-6 uppercase tracking-wider text-sm rounded-b-md transition-colors duration-200 flex items-center justify-between group/btn">
                  <span>Read Guide</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HardwareSection;
