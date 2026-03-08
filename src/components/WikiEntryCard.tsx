import { Link } from "react-router-dom";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  tier?: string;
  title: string;
  subtitle: string;
};

const tierConfig = (tier: string) => {
  if (tier === "S-TIER") return { badge: "bg-primary text-primary-foreground", bar: "bg-primary", borderHover: "hover:border-primary" };
  if (tier === "A-TIER") return { badge: "bg-foreground text-background", bar: "bg-foreground", borderHover: "hover:border-foreground" };
  if (tier === "B-TIER") return { badge: "bg-neutral-400 text-white", bar: "bg-neutral-400", borderHover: "hover:border-neutral-400" };
  if (tier === "C-TIER") return { badge: "bg-neutral-300 text-neutral-700", bar: "bg-neutral-300", borderHover: "hover:border-neutral-400" };
  if (tier === "D-TIER") return { badge: "bg-orange-500 text-white", bar: "bg-orange-500", borderHover: "hover:border-orange-500" };
  if (tier === "F-TIER") return { badge: "bg-red-500 text-white", bar: "bg-red-500", borderHover: "hover:border-red-500" };
  return { badge: "bg-neutral-200 text-neutral-600", bar: "bg-neutral-300", borderHover: "hover:border-neutral-400" };
};

const formatMeta = (subtitle: string, tier?: string) => {
  const target = subtitle.replace(" — ", " / ").toUpperCase();
  if (tier === "F-TIER" || tier === "D-TIER") return `CLASS: SCAM  ·  TARGET: ${target}`;
  return `CLASS: HARDWARE  ·  TARGET: ${target}`;
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
  const config = tier ? tierConfig(tier) : { badge: "bg-neutral-200 text-neutral-600", bar: "bg-neutral-300", borderHover: "hover:border-neutral-400" };
  const meta = formatMeta(subtitle, tier);

  return (
    <Link
      to={href}
      className={`group not-prose flex items-stretch border border-[#E5E5E5] bg-white transition-all duration-200 ${config.borderHover} hover:-translate-y-px hover:shadow-sm`}
      style={{ textDecoration: "none" }}
    >
      <div className={`w-[3px] flex-shrink-0 ${config.bar}`} />

      <div className="w-[72px] flex-shrink-0 overflow-hidden bg-[#F5F5F5] border-r border-[#E5E5E5]">
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

      <div className="flex-1 min-w-0 flex items-center gap-4 px-4 py-3">
        <div className="flex-1 min-w-0">
          {tier && (
            <span className={`text-[8px] font-black uppercase tracking-[0.22em] px-1.5 py-px inline-block mb-1.5 ${config.badge}`}>
              {tier}
            </span>
          )}
          <p className="text-[15px] font-bold text-foreground leading-snug">
            {title}
          </p>
          <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-[0.14em] font-mono leading-none">
            {meta}
          </p>
        </div>

        <div className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap pr-1">
          VIEW ENTRY
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 transition-transform">
            <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default WikiEntryCard;
