import type { ContentSection } from "@/src/types/content";

interface ContentSectionsProps {
  sections: ContentSection[];
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="prose">
      {sections.map((section) => {
        const Heading = section.level === 3 ? "h3" : "h2";

        return (
          <section key={section.heading}>
            <Heading>{section.heading}</Heading>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
