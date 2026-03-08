import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  tier?: string;
  title: string;
  subtitle: string;
};

const tierColor = (tier: string) => {
  if (tier === "S-TIER") return "bg-primary text-primary-foreground";
  if (tier === "A-TIER") return "bg-foreground text-background";
  if (tier === "B-TIER") return "bg-muted-foreground/60 text-background";
  if (tier === "C-TIER") return "bg-muted text-muted-foreground";
  if (tier === "D-TIER") return "bg-destructive/20 text-destructive";
  if (tier === "F-TIER") return "bg-destructive text-destructive-foreground";
  return "bg-muted text-muted-foreground";
};

const BucketSVG = () => (
  <svg viewBox="0 0 72 72" className="w-full h-full" fill="none">
    <rect width="72" height="72" fill="#0e0e0e" />
    <rect x="22" y="34" width="28" height="26" rx="1" fill="none" stroke="#555" strokeWidth="1.5" />
    <rect x="20" y="30" width="32" height="5" rx="1" fill="none" stroke="#777" strokeWidth="1.2" />
    <line x1="28" y1="33" x2="38" y2="33" stroke="#e4c640" strokeWidth="2" strokeLinecap="round" />
    <circle cx="38" cy="33" r="2" fill="#e4c640" />
    <line x1="38" y1="33" x2="46" y2="40" stroke="#e4c640" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="30" cy="29" r="3" fill="#7a3b10" opacity="0.9" />
    <rect x="23" y="54" width="26" height="5" rx="1" fill="#1a3a6a" opacity="0.7" />
    <line x1="8" y1="62" x2="22" y2="30" stroke="#666" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WikiEntryCard = ({ href, img, tier, title, subtitle }: WikiEntryCardProps) => {
  const isScam = tier === "F-TIER" || tier === "D-TIER";

  return (
    <Link
      to={href}
      className={`group flex items-center justify-between gap-3 border transition-all duration-200 not-prose ${
        isScam
          ? "border-destructive/20 hover:border-destructive hover:bg-destructive/5"
          : "border-border hover:border-primary hover:bg-primary/5"
      }`}
    >
      <div className="flex items-center gap-0 flex-1 min-w-0">
        <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-muted">
          {img ? (
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          ) : (
            <BucketSVG />
          )}
        </div>
        <div className="px-4 py-3 flex-1 min-w-0">
          {tier && (
            <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-2 py-0.5 inline-block mb-1.5 ${tierColor(tier)}`}>
              {tier}
            </span>
          )}
          <p className={`text-sm font-bold leading-tight transition-colors ${isScam ? "text-foreground group-hover:text-destructive" : "text-foreground group-hover:text-primary"}`}>
            {title}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
      </div>
      <ArrowRight
        size={14}
        className={`flex-shrink-0 mr-4 transition-all group-hover:translate-x-1 ${isScam ? "text-muted-foreground group-hover:text-destructive" : "text-muted-foreground group-hover:text-primary"}`}
      />
    </Link>
  );
};

export default WikiEntryCard;
