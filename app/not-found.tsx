import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="shell not-found__inner">
        <p className="eyebrow">404 / Game over</p>
        <h1>This page left the arcade.</h1>
        <p>
          The address may be outdated, or the game may no longer be available.
        </p>
        <div className="button-row">
          <Link className="button button--primary" href="/">
            Return home
          </Link>
          <Link className="button button--ghost" href="/games/steal-a-brainrot-unblocked">
            Play the game
          </Link>
        </div>
      </div>
    </main>
  );
}
