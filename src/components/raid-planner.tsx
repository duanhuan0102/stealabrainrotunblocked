"use client";

import { useState } from "react";

const targetOptions = {
  safe: { label: "Safer target", risk: 1, reward: 2 },
  balanced: { label: "Balanced target", risk: 2, reward: 3 },
  rare: { label: "Rare target", risk: 3, reward: 4 },
};

const routeOptions = {
  clear: { label: "Clear return lane", risk: 0 },
  watched: { label: "Watched entrance", risk: 1 },
  crowded: { label: "Crowded route", risk: 2 },
};

export function RaidPlanner() {
  const [target, setTarget] = useState<keyof typeof targetOptions>("balanced");
  const [route, setRoute] = useState<keyof typeof routeOptions>("clear");
  const [defending, setDefending] = useState(true);
  const [checkCount, setCheckCount] = useState(0);
  const [result, setResult] = useState(
    "Choose a target and route, then check whether this raid is worth taking.",
  );

  function getRecommendation() {
    const targetChoice = targetOptions[target];
    const routeChoice = routeOptions[route];
    const riskScore = targetChoice.risk + routeChoice.risk - (defending ? 1 : 0);

    if (riskScore <= 1) {
      return "Good opening: enter quickly, take the target, and return before rivals rotate back.";
    }

    if (riskScore <= 3) {
      return "Playable route: scout first, avoid stopping near entrances, and leave if the lane tightens.";
    }

    return "High risk: protect your base or wait for a cleaner lane before carrying anything valuable.";
  }

  function checkRoute() {
    const nextCount = checkCount + 1;

    setCheckCount(nextCount);
    setResult(`Check ${nextCount}: ${getRecommendation()}`);
  }

  return (
    <section className="portal-content-panel raid-planner" aria-labelledby="raid-planner-title">
      <div className="portal-section-heading">
        <p className="eyebrow">Route check</p>
        <h2 id="raid-planner-title">Plan a safer raid</h2>
        <p>
          Use this quick check before pressing play. It helps you decide whether
          to attack now, wait for space, or defend your base first.
        </p>
      </div>

      <form
        className="raid-planner__form"
        onSubmit={(event) => {
          event.preventDefault();
          checkRoute();
        }}
      >
        <label>
          Target
          <select value={target} onChange={(event) => setTarget(event.target.value as keyof typeof targetOptions)}>
            {Object.entries(targetOptions).map(([value, option]) => (
              <option key={value} value={value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Route
          <select value={route} onChange={(event) => setRoute(event.target.value as keyof typeof routeOptions)}>
            {Object.entries(routeOptions).map(([value, option]) => (
              <option key={value} value={value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="raid-planner__toggle">
          <input
            type="checkbox"
            checked={defending}
            onChange={(event) => setDefending(event.target.checked)}
          />
          Base is covered
        </label>

        <button type="submit">Check route</button>
      </form>

      <p className="raid-planner__result" aria-live="polite">
        {result}
      </p>
    </section>
  );
}
