import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "hardware",
    label: "HARDWARE",
    isShame: false,
    items: [
      { label: "The Bucket Trap", href: "/wiki/bucket-trap" },
      { label: "The Snap Trap", href: "/wiki/snap-trap" },
      { label: "Electronic Zapper", href: "/wiki/electronic-zapper" },
      { label: "Live Catch Cage", href: "/wiki/live-catch-cage" },
    ],
  },
  {
    id: "exclusion",
    label: "EXCLUSION",
    isShame: false,
    items: [
      { label: "Copper Mesh & Steel Wool", href: "/wiki/copper-mesh" },
      { label: "Heavy-Duty Silicone", href: "/wiki/silicone-sealant" },
      { label: "Hardware Cloth", href: "/wiki/hardware-cloth" },
      { label: "Pest-Block Foam", href: "/wiki/pest-block-foam" },
    ],
  },
  {
    id: "shame",
    label: "HALL OF SHAME",
    isShame: true,
    items: [
      { label: "Ultrasonic Repellers", href: "/wiki/ultrasonic-repellers" },
      { label: "Peppermint Oil", href: "/wiki/peppermint-oil" },
      { label: "Glue Traps", href: "/wiki/glue-traps" },
      { label: "Repellent Pouches", href: "/wiki/repellent-pouches" },
    ],
  },
  {
    id: "biology",
    label: "RODENTS",
    isShame: false,
    items: [
      { label: "The Deer Mouse", href: "/wiki/deer-mouse" },
      { label: "House Mouse", href: "/wiki/house-mouse" },
      { label: "Norway Rat", href: "/wiki/norway-rat" },
      { label: "Roof Rat", href: "/wiki/roof-rat" },
    ],
  },
];

const WikiCategoryHub = () => {
  const [activeTab, setActiveTab] = useState("hardware");
  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <div className="mt-12 border border-border">
      <div className="px-5 pt-5 pb-0 border-b border-border bg-muted/30">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground mb-4">
          Explore the Pest.gg Wiki
        </p>
        <div className="flex gap-0 -mb-px overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] border-b-2 transition-colors duration-150 whitespace-nowrap
                  ${isActive
                    ? cat.isShame
                      ? "border-red-500 text-red-600"
                      : "border-primary text-foreground"
                    : cat.isShame
                      ? "border-transparent text-muted-foreground hover:text-red-500"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 py-5">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
          {active.items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className={`text-sm font-semibold leading-snug py-1.5 flex items-center gap-2 group transition-colors duration-150
                  ${active.isShame ? "text-foreground hover:text-red-600" : "text-foreground hover:text-primary"}`}
              >
                <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-150
                  ${active.isShame ? "bg-red-400 group-hover:bg-red-600" : "bg-muted-foreground group-hover:bg-primary"}`}
                />
                <span className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0
                  after:transition-all after:duration-200 group-hover:after:w-full
                  ${active.isShame ? "after:bg-red-500" : "after:bg-primary"}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WikiCategoryHub;
