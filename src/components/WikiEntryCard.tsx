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
    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
    className="not-prose group flex items-center justify-between border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 my-5"
  >
    <div className="flex items-center gap-3">
      <div style={{ width: 60, height: 60, flexShrink: 0, overflow: "hidden" }} className="bg-muted">
        {img ? (
          <img
            src={img}
            alt={title}
            style={{ width: 60, height: 60, objectFit: "cover", display: "block", margin: 0, borderRadius: 0 }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div style={{ width: 60, height: 60 }} className="bg-muted" />
        )}
      </div>
      <div className="py-1">
        {tier && (
          <span className={`text-[9px] font-black uppercase tracking-[0.12em] px-1.5 py-px inline-block mb-1 ${tierColor(tier)}`}>
            {tier}
          </span>
        )}
        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
    </div>
    <ArrowRight
      size={13}
      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mr-4 flex-shrink-0"
    />
  </Link>
);

export default WikiEntryCard;
