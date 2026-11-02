"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

export function SaleAccessGate({
  children,
  className = "",
  onAccept,
  onLeave,
}: {
  children: ReactNode;
  className?: string;
  onAccept?: () => void;
  onLeave?: () => void;
}) {
  const [checked, setChecked] = useState(false);
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return children;
  }

  return (
    <section
      className={`sale-access ${className}`.trim()}
      aria-labelledby="sale-access-title"
    >
      <p className="sale-access__brand">Zar Air · Token Sale Access</p>
      <h1 id="sale-access-title">Important Legal Notice — Please Read Carefully</h1>
      <p>
        Zar Air is an early-stage project in its pre-incorporation phase. No
        legal entity has yet been established, and the jurisdiction and
        governing legal regime have not yet been determined. The information
        presented here is a preliminary private fundraising plan — not a
        registered, licensed, or publicly offered offering of any kind in any
        jurisdiction.
      </p>
      <p>
        This page does not constitute an offer to sell, or a solicitation of an
        offer to buy, any token in any jurisdiction where such offer,
        solicitation, or sale would be unlawful. In particular, this page is
        not directed at, and the offer described here is not available to,
        citizens or residents of the United States, or residents of the
        European Union or European Economic Area.
      </p>
      <p className="sale-access__prompt">
        By ticking the box below and selecting “I Agree — Enter”, you represent
        and warrant that:
      </p>
      <ol>
        <li>
          You are not a citizen or resident of the United States, and you are
          not accessing this page from within the United States;
        </li>
        <li>
          You are not a resident of the European Union or the European Economic
          Area, and you are not accessing this page from those territories;
        </li>
        <li>
          You are legally permitted, under the laws and regulations of your
          jurisdiction, to view this page and participate in a private token
          purchase;
        </li>
        <li>
          You accept sole responsibility for determining the legality of your
          access and any purchase, and will seek independent legal and tax
          advice where appropriate.
        </li>
      </ol>
      <p className="sale-access__must">
        If any statement above is not true, leave this page immediately.
      </p>
      <label className="sale-access__check">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <span>
          I have read and understood the notice above, and confirm that all of
          the statements above are true.
        </span>
      </label>
      <p className="sale-access__limitation" role="note">
        Interim self-attestation: this gate is shown to all visitors. The site
        does not currently detect or block visitors by location, or store this
        acceptance in durable server-side records.
      </p>
      <div className="sale-access__actions">
        <button
          className="sale-access__enter"
          type="button"
          disabled={!checked}
          onClick={() => {
            if (!checked) return;
            setAccepted(true);
            onAccept?.();
          }}
        >
          I Agree — Enter
        </button>
        {onLeave ? (
          <button
            className="sale-access__leave"
            type="button"
            onClick={onLeave}
          >
            Leave
          </button>
        ) : (
          <Link className="sale-access__leave" href="/">
            Leave
          </Link>
        )}
      </div>
    </section>
  );
}
