import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  tier?: string;
  title: string;
  subtitle: string;
  class?: string;
  target?: string;
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

const WikiEntryCard = ({ href, img, tier, title, subtitle }: WikiEntryCardProps) => (
  <Link
    to={href}
    className="not-prose group flex items-center justify-between border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
  >
    <div className="flex items-center gap-4">
      <div className="w-[72px] h-[72px] flex-shrink-0 overflow-hidden bg-muted">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>
      <div>
        {tier && (
          <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-0.5 inline-block mb-1 ${tierColor(tier)}`}>
            {tier}
          </span>
        )}
        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
    </div>
    <ArrowRight
      size={14}
      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mr-5 flex-shrink-0"
    />
  </Link>
);

export default WikiEntryCard;
