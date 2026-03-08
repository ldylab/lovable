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

const WikiEntryCard = ({ href, img, tier, title, subtitle, class: cls, target }: WikiEntryCardProps) => {
  const badge = tier ? tierBadge(tier) : "bg-neutral-200 text-neutral-600";
  const metaClass = cls || "HARDWARE";
  const metaTarget = target || subtitle.toUpperCase();

  return (
    <Link
      to={href}
      className="group not-prose flex items-stretch border border-[#E5E5E5] bg-white transition-all duration-150 hover:border-neutral-400 hover:shadow-sm"
      style={{ textDecoration: "none" }}
    >
      <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-[#F0F0F0]">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-neutral-200" />
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center px-4 py-2.5 gap-0.5">
        <p className="text-[13px] font-bold text-foreground leading-snug">
          {title}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[11px] text-muted-foreground">
            {subtitle}
          </p>
          {tier && (
            <span className={`text-[8px] font-black uppercase tracking-[0.15em] px-1.5 py-0.5 leading-none ${badge}`}>
              {tier}
            </span>
          )}
        </div>
        <p className="text-[9px] text-muted-foreground uppercase tracking-[0.14em] font-mono mt-0.5">
          CLASS: {metaClass} · TARGET: {metaTarget}
        </p>
      </div>
    </Link>
  );
};

export default WikiEntryCard;
