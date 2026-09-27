"use client";

import { useEffect, useState } from "react";

function istNow() {
  return new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false });
}

export function LandingClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    setTime(istNow());
    const id = setInterval(() => setTime(istNow()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ?? "--:--:--"} IST</span>;
}
