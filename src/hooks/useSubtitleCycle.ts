"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FEATURES = [
  "BEP-20 Token",
  "USDT Token Purchases",
  "BNB Smart Chain Mainnet",
  "Fixed Supply: 1,400,000 ZARAI",
  "On-Chain Contract Details",
  "Separate Token & Sale Contracts",
];

export function useSubtitleCycle(intervalMs = 3000) {
  const [text, setText] = useState(FEATURES[0]);
  const [isHidden, setIsHidden] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const advance = useCallback(() => {
    setIsHidden(true);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(advance, intervalMs);
    return () => clearInterval(timerRef.current);
  }, [advance, intervalMs]);

  // When the CSS transition ends while hidden, swap text and reveal
  function onTransitionEnd() {
    if (isHidden) {
      indexRef.current = (indexRef.current + 1) % FEATURES.length;
      setText(FEATURES[indexRef.current]);
      setIsHidden(false);
    }
  }

  return { text, isHidden, onTransitionEnd };
}
