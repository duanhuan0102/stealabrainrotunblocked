export const FAQ_ITEMS = [
  {
    question: "Can I play Steal a Brainrot Unblocked for free?",
    answer:
      "Yes. This page lets you play Steal a Brainrot Unblocked online for free in your browser with no download required.",
  },
  {
    question: "Does the game work on mobile?",
    answer:
      "The embedded Unity WebGL game is responsive, but performance depends on your device, browser, and network connection.",
  },
  {
    question: "Why is the game not loading?",
    answer:
      "If the game does not load, refresh the page, check your connection, or try again later. Some school, work, or public networks may block external game embeds.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation is needed. The game runs inside the browser through an iframe embed.",
  },
  {
    question: "Can more games be added to this site?",
    answer:
      "Yes. The homepage already includes a Related Games section so new browser games can be added later.",
  },
];

export function FAQ() {
  return (
    <section className="portal-content-panel" aria-labelledby="faq-title">
      <div className="portal-section-heading">
        <p className="eyebrow">Help</p>
        <h2 id="faq-title">Steal A Brainrot Unblocked FAQ</h2>
        <p>Quick answers for free play, loading, devices, and browser access.</p>
      </div>

      <div className="faq-list">
        {FAQ_ITEMS.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
