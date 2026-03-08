import { Link } from "react-router-dom";

type WikiEntryCardProps = {
  href: string;
  img?: string;
  title: string;
  subtitle?: string;
  class?: string;
  mechanism?: string;
  verdict?: string;
  target?: string;
};

const WikiEntryCard = ({
  href,
  img,
  title,
  class: className,
  mechanism,
  verdict,
  target,
}: WikiEntryCardProps) => {
  const metaParts = [
    className && `CLASS: ${className}`,
    mechanism && `MECHANISM: ${mechanism}`,
    verdict && `VERDICT: ${verdict}`,
    target && `TARGET: ${target}`,
  ].filter(Boolean);

  return (
    <Link
      to={href}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      className="not-prose group flex flex-col border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 my-5"
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
        <div className="py-1 flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
            {title}
          </p>
          {metaParts.length > 0 && (
            <p className="text-[10px] font-semibold tracking-wide text-muted-foreground mt-0.5 uppercase">
              {metaParts.join(" | ")}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center px-4 pb-2 pt-1 border-t border-border/50">
        <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:underline">
          VIEW SCIENTIFIC PROOF ➔
        </span>
      </div>
    </Link>
  );
};

export default WikiEntryCard;
