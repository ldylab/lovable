import { Settings, Layers, AlertOctagon, Microscope } from "lucide-react";

const categories = [
  {
    id: "hardware",
    icon: Settings,
    label: "HARDWARE",
    color: "text-foreground",
    items: [
      { label: "The Bucket Trap", href: "/wiki/bucket-trap" },
      { label: "The Snap Trap", href: "/wiki/snap-trap" },
      { label: "Electronic Zapper", href: "/wiki/electronic-zapper" },
      { label: "Live Catch Cage", href: "/wiki/live-catch-cage" },
    ],
  },
  {
    id: "exclusion",
    icon: Layers,
    label: "EXCLUSION",
    color: "text-foreground",
    items: [
      { label: "Copper Mesh & Steel Wool", href: "/wiki/copper-mesh" },
      { label: "Heavy-Duty Silicone", href: "/wiki/silicone-sealant" },
      { label: "Hardware Cloth", href: "/wiki/hardware-cloth" },
      { label: "Pest-Block Foam", href: "/wiki/pest-block-foam" },
    ],
  },
  {
    id: "shame",
    icon: AlertOctagon,
    label: "HALL OF SHAME",
    color: "text-red-600",
    items: [
      { label: "Ultrasonic Repellers", href: "/wiki/ultrasonic-repellers" },
      { label: "Peppermint Oil", href: "/wiki/peppermint-oil" },
      { label: "Glue Traps", href: "/wiki/glue-traps" },
      { label: "Repellent Pouches", href: "/wiki/repellent-pouches" },
    ],
  },
  {
    id: "biology",
    icon: Microscope,
    label: "BIOLOGY",
    color: "text-foreground",
    items: [
      { label: "House Mouse", href: "/wiki/house-mouse" },
      { label: "Norway Rat", href: "/wiki/norway-rat" },
      { label: "Roof Rat", href: "/wiki/roof-rat" },
    ],
  },
];

const WikiCategoryHub = () => {
  return (
    <section className="w-full border-t border-border bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="flex items-center gap-3 mb-10">
          <Layers size={18} className="text-muted-foreground" strokeWidth={1.5} />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Explore the Pest.gg Wiki
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isShame = cat.id === "shame";
            return (
              <div key={cat.id}>
                <div className={`flex items-center gap-2 mb-4 ${isShame ? "text-red-600" : "text-foreground"}`}>
                  <Icon size={14} strokeWidth={2} />
                  <p className={`text-[11px] font-black uppercase tracking-[0.18em] ${cat.color}`}>
                    {cat.label}
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`text-sm font-semibold text-foreground leading-snug relative inline-block
                          after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-primary
                          after:transition-all after:duration-200 hover:after:w-full hover:text-primary transition-colors duration-200
                          ${isShame ? "hover:text-red-600 after:bg-red-600" : ""}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WikiCategoryHub;
