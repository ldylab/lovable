import { Link } from "react-router-dom";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  tier?: string;
  title: string;
  subtitle: string;
};

const tierConfig = (tier: string) => {
  if (tier === "S-TIER") return { badge: "bg-primary text-primary-foreground", bar: "bg-primary", hover: "hover:border-primary" };
  if (tier === "A-TIER") return { badge: "bg-foreground text-background", bar: "bg-foreground", hover: "hover:border-foreground" };
  if (tier === "B-TIER") return { badge: "bg-neutral-400 text-white", bar: "bg-neutral-400", hover: "hover:border-neutral-400" };
  if (tier === "C-TIER") return { badge: "bg-neutral-300 text-neutral-700", bar: "bg-neutral-300", hover: "hover:border-neutral-400" };
  if (tier === "D-TIER") return { badge: "bg-orange-500 text-white", bar: "bg-orange-500", hover: "hover:border-orange-500" };
  if (tier === "F-TIER") return { badge: "bg-red-500 text-white", bar: "bg-red-500", hover: "hover:border-red-500" };
  return { badge: "bg-neutral-200 text-neutral-600", bar: "bg-neutral-300", hover: "hover:border-neutral-400" };
};

const formatSubtitle = (subtitle: string, tier?: string) => {
  if (tier === "F-TIER" || tier === "D-TIER") {
    return `CLASS: SCAM | TARGET: ${subtitle.toUpperCase()}`;
  }
  if (tier === "S-TIER" || tier === "A-TIER") {
    return `CLASS: HARDWARE | TARGET: ${subtitle.toUpperCase()}`;
  }
  return `TARGET: ${subtitle.toUpperCase()}`;
};

const BucketSVG = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
    <rect width="80" height="80" fill="#0e0e0e" />
    <rect x="24" y="36" width="32" height="30" rx="1" fill="none" stroke="#555" strokeWidth="1.5" />
    <rect x="22" y="31" width="36" height="6" rx="1" fill="none" stroke="#777" strokeWidth="1.2" />
    <line x1="30" y1="35" x2="42" y2="35" stroke="#e4c640" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="42" cy="35" r="2.5" fill="#e4c640" />
    <line x1="42" y1="35" x2="52" y2="44" stroke="#e4c640" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="33" cy="29" r="4" fill="#7a3b10" opacity="0.9" />
    <rect x="25" y="59" width="30" height="6" rx="1" fill="#1a3a6a" opacity="0.7" />
    <line x1="8" y1="70" x2="24" y2="31" stroke="#666" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WikiEntryCard = ({ href, img, tier, title, subtitle }: WikiEntryCardProps) => {
  const config = tier ? tierConfig(tier) : { badge: "bg-neutral-200 text-neutral-600", bar: "bg-neutral-300", hover: "hover:border-neutral-400" };
  const formattedSubtitle = formatSubtitle(subtitle, tier);

  return (
    <Link
      to={href}
      className={`group not-prose flex items-center gap-0 border border-[#E5E5E5] bg-white transition-all duration-200 ${config.hover} hover:-translate-y-0.5 hover:shadow-md`}
      style={{ textDecoration: "none" }}
    >
      <div className={`w-1 self-stretch flex-shrink-0 ${config.bar}`} />

      <div className="w-[80px] h-[80px] flex-shrink-0 m-3 rounded-[4px] border border-[#E5E5E5] bg-[#F9F9F9] overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover rounded-[3px]"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <BucketSVG />
        )}
      </div>

      <div className="flex-1 min-w-0 py-3 pr-2">
        {tier && (
          <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 inline-block mb-1.5 rounded-[2px] ${config.badge}`}>
            {tier}
          </span>
        )}
        <p className="text-[17px] font-bold text-black leading-tight">
          {title}
        </p>
        <p className="text-[10px] text-[#666666] mt-1 uppercase tracking-[0.12em] font-mono">
          {formattedSubtitle}
        </p>
      </div>

      <div className="flex-shrink-0 px-5 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#999999] group-hover:text-black transition-colors whitespace-nowrap">
        VIEW ENTRY
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
};

export default WikiEntryCard;
