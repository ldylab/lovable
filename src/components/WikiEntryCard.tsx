import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type WikiEntryCardProps = {
  href: string;
  img: string;
  tier?: string;
  title: string;
  subtitle: string;
};

const tierColor = (tier: string) => {
  if (tier === "S-TIER") return "bg-primary text-primary-foreground";
  if (tier === "A-TIER") return "bg-foreground text-background";
  if (tier === "B-TIER") return "bg-muted text-muted-foreground";
  if (tier === "C-TIER") return "bg-muted text-muted-foreground";
  if (tier === "D-TIER") return "bg-destructive/20 text-destructive";
  if (tier === "F-TIER") return "bg-destructive text-destructive-foreground";
  return "bg-muted text-muted-foreground";
};

const WikiEntryCard = ({ href, img, tier, title, subtitle }: WikiEntryCardProps) => {
  const isScam = tier === "F-TIER" || tier === "D-TIER";

  return (
    <Link
      to={href}
      className={`group flex items-center justify-between border transition-all duration-200 my-5 ${
        isScam
          ? "border-destructive/20 hover:border-destructive hover:bg-destructive/5"
          : "border-border hover:border-primary hover:bg-primary/5"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-muted">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          {tier && (
            <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-0.5 inline-block mb-1 ${tierColor(tier)}`}>
              {tier}
            </span>
          )}
          <p className={`text-sm font-bold transition-colors ${isScam ? "text-foreground group-hover:text-destructive" : "text-foreground group-hover:text-primary"}`}>
            {title}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
      </div>
      <ArrowRight
        size={14}
        className={`flex-shrink-0 mr-5 transition-all group-hover:translate-x-1 ${isScam ? "text-muted-foreground group-hover:text-destructive" : "text-muted-foreground group-hover:text-primary"}`}
      />
    </Link>
  );
};

export default WikiEntryCard;
