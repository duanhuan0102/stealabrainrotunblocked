import Link from "next/link";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {href ? (
        <Link className="text-link" href={href}>
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}
