import { AlertTriangle } from "lucide-react";

const shameItems = [
  {
    badge: "SCAM",
    title: "Ultrasonic\nPlugins",
    reality: "Physics Fail. Sound waves don't cross walls. Mice adapt in 48 hours.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqi4e8bR7x3Qt9oGoJlNhRSmU9VJnTYjfuv7GFmd-QpK2ql-_oaXen5qvJ1CrE1uTWrmOARyfLJ846uI-pNILNIgHCBd9-Ec1fGV0BMclpfPfIpbLzQEE9S9j8UQ7zlqQp4cl1u05wp2tpj8n6e6nLTneT5UX3v9GmfBpE--TS5CQgapIlp1TUjSSbkq0QqCUfjg0kEVWRDAfP8C-7HiZwB6zMsKvgmfhstvDtRDTuHoB9UaBAYv48nWKJm0cEpVjcGPF9GuCinxM5",
  },
  {
    badge: "FAIL",
    title: "Peppermint\nOil",
    reality: "Evaporates too fast. Rodents often use the cotton for nesting.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYse8GnuIXJPBcCG1hANCXYidldTexrXjvQ10WpBytdWXCJiM6g2qo9dAPUqAweyRYuu34kaace5OoYulPARekTbAwSXD5dVm54sKHwRA00fISXEv6JUvOGDYzkDvpcanJWDouh2RgBoCuiBvjS6MiwpWa1StpCbZynPeQztys7X2FVhSomkfuFixo9QdErQIiDl8-Pa1lOnYZvpQjbcCMg3-J5A5oUB9lIcLkWM3M7Dwex57e4rEOjb5ieAfpf6jnszLhwT6Zvh6B",
  },
  {
    badge: "FAIL",
    title: "Glue\nTraps",
    reality: "Cruel and unreliable. Smart rodents avoid them; others suffer for days.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-NDl3Zz57_TyEhoX_uQ8t4BFHBa30JFf5p7FOMOgRJa_wt1qgMK7MAu0NKZJqty36m6Sl47nfOE1Vm-QFeCX1qsWbBXCNzExw6FwF8lpC_Bpea5sMU7qr9MbNsbMQ2cjMQE2_9mVZ06zGoe6L_DIkO7srYtH7jyzMPk8FwI-ZfpkG39ml3apcT06IW7BVdA-BBosaAjqZAvmZB2udzx0Nu2Se-3Q2_sxRBifDQUACpIzqXPq5vS5jsSvbak6E6tY-BYFFCSgshQi",
  },
  {
    badge: "GIMMICK",
    title: "Repellent\nPouches",
    reality: "Zero deterrent. No biological evidence that scent stops a hungry mouse.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_oQFbNfZY2DSctGI93b2Ioh4RuXa74biik3FlpT9QiToG5en8HkqxNGD7Ni0LbyoR5QYs8BS1sr26SyJlx5pfaN4QVDNIbeOSsVzfYB_xfdpJH5csCk2NiwwNVCvQNACeRD2tdVcWeTjcO4icL_O2CBAu3WA91DHcwyAiB2fbzq3jBMCWWaqbRMaEKG2IliGFFu43nGUg2E5v_e4xR10994MDJh2Du1wCRXfYXoua8pDgQcwJAw36pCHQj1xyND1gwW8H7f2xvCwH",
  },
];

const ShameSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-destructive font-bold uppercase tracking-widest text-xs mb-4 block flex items-center gap-2">
          <AlertTriangle size={14} />
          Warning: Ineffective Methods
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1] tracking-tight text-foreground max-w-2xl">
          Products That<br />Do Not Work
        </h2>
        <p className="text-swiss-light-text text-lg md:text-xl font-medium leading-relaxed mt-6">
          Marketing scams. The Hall of Shame. We tested them so you don't have to—they simply do not work.
        </p>
      </div>
      <div className="w-full max-w-7xl h-auto lg:h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-background mx-auto px-6 md:px-12">
        {shameItems.map((item, i) => (
          <div key={i} className="shame-card group relative w-full h-[400px] lg:h-full overflow-hidden bg-black cursor-pointer">
            <div className="absolute inset-0 z-0">
              <img
                alt={item.title}
                className="shame-img w-full h-full object-cover transition-all duration-500 grayscale contrast-125 brightness-75 sepia hue-rotate-[-50deg] saturate-[3] opacity-60 group-hover:opacity-40"
                src={item.img}
              />
            </div>
            <div className="content-default absolute inset-0 z-10 flex flex-col justify-between p-8 pointer-events-none bg-gradient-to-t from-black/50 to-transparent">
              <span className="text-8xl font-bold text-neutral-900/10 select-none mix-blend-multiply">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <span className="text-destructive text-xs uppercase tracking-widest font-bold mb-2 block drop-shadow-sm">{item.badge}</span>
                <h3 className="text-3xl font-bold uppercase leading-none text-white drop-shadow-md whitespace-pre-line">{item.title}</h3>
              </div>
            </div>
            <div className="shame-overlay absolute inset-0 z-20 bg-black/90 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
              <span className="text-destructive font-bold text-sm uppercase tracking-widest mb-4">The Reality</span>
              <p className="text-neutral-300 text-lg font-medium leading-relaxed">{item.reality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShameSection;
