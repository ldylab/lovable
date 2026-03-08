import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  title: string;
  subtitle: string;
  class?: string;
  target?: string;
};

const WikiEntryCard = ({ href, img, title, subtitle, class: className, target }: WikiEntryCardProps) => (
  <Link
    to={href}
    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
    className="not-prose group flex items-center justify-between border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 my-5"
  >
    <div className="flex items-center gap-3">
      <div style={{ width: 72, height: 72, flexShrink: 0, overflow: "hidden" }} className="bg-muted">
        {img ? (
          <img
            src={img}
            alt={title}
            style={{ width: 72, height: 72, objectFit: "cover", display: "block", margin: 0, borderRadius: 0 }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div style={{ width: 72, height: 72 }} className="bg-muted" />
        )}
      </div>
      <div className="py-1">
        {(className || target) && (
          <div className="flex items-center gap-1 mb-1">
            {className && (
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-1.5 py-px inline-block bg-foreground text-background">
                {className}
              </span>
            )}
            {target && (
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-1.5 py-px inline-block bg-muted text-muted-foreground">
                {target}
              </span>
            )}
          </div>
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
