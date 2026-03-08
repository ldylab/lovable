import { Link } from "react-router-dom";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  tier?: string;
  title: string;
  subtitle: string;
  class?: string;
  target?: string;
};

const tierBadge = (tier: string) => {
  if (tier === "S-TIER") return "bg-yellow-400 text-black";
  if (tier === "A-TIER") return "bg-black text-white";
  if (tier === "B-TIER") return "bg-neutral-500 text-white";
  if (tier === "C-TIER") return "bg-neutral-300 text-neutral-700";
  if (tier === "D-TIER") return "bg-orange-500 text-white";
  if (tier === "F-TIER") return "bg-red-500 text-white";
  return "bg-neutral-200 text-neutral-600";
};

const BucketSVG = () => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <rect width="120" height="120" fill="#111" />
    <rect x="36" y="54" width="48" height="44" fill="none" stroke="#444" strokeWidth="2" />
    <rect x="33" y="46" width="54" height="10" fill="none" stroke="#666" strokeWidth="1.8" />
    <line x1="45" y1="52" x2="63" y2="52" stroke="#e4c640" strokeWidth="3" strokeLinecap="round" />
    <circle cx="63" cy="52" r="3.5" fill="#e4c640" />
    <line x1="12" y1="104" x2="36" y2="46" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const WikiEntryCard = ({ href, img, tier, title, subtitle, class: cls, target }: WikiEntryCardProps) => {
  const badge = tier ? tierBadge(tier) : "bg-neutral-200 text-neutral-600";

  const metaClass = cls || "HARDWARE";
  const metaTarget = target || subtitle.replace(" — ", " / ").replace("All", "ALL RODENTS").toUpperCase();

  return (
    <Link
      to={href}
      className="group not-prose flex items-stretch border border-[#E5E5E5] bg-white transition-all duration-150 hover:border-neutral-400 hover:shadow-sm"
      style={{ textDecoration: "none" }}
    >
      <div className="w-[130px] flex-shrink-0 overflow-hidden bg-[#F0F0F0]">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <BucketSVG />
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center px-6 py-4 gap-1.5">
        {tier && (
          <span className={`text-[11px] font-black uppercase tracking-[0.18em] px-2.5 py-1 inline-block self-start ${badge}`}>
            {tier}
          </span>
        )}
        <p className="text-[20px] font-black text-foreground leading-tight">
          {title}
        </p>
        <p className="text-[15px] text-muted-foreground leading-snug">
          {subtitle}
        </p>
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-mono mt-0.5">
          CLASS: {metaClass} &nbsp;|&nbsp; TARGET: {metaTarget}
        </p>
      </div>
    </Link>
  );
};

export default WikiEntryCard;
