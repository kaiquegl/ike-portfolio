/** Renders `**bold**` markers from i18n strings as `<strong>`. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  const occurrenceByPart = new Map<string, number>();

  return (
    <>
      {parts.map((part) => {
        const occurrence = occurrenceByPart.get(part) ?? 0;
        occurrenceByPart.set(part, occurrence + 1);
        const key = `${part}-${occurrence}`;

        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2);
          return (
            <strong className="font-semibold text-foreground" key={key}>
              {boldText}
            </strong>
          );
        }

        if (!part) {
          return null;
        }

        return <span key={key}>{part}</span>;
      })}
    </>
  );
}
