"use client";

import { useSyncExternalStore } from "react";

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatterFor(timeZone: string) {
  let formatter = formatters.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    formatters.set(timeZone, formatter);
  }
  return formatter;
}

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 15_000);
  return () => window.clearInterval(id);
}

/**
 * Live clock for a time zone. The server snapshot is null, so the prerendered
 * shell never captures a timestamp; the browser fills it in after hydration.
 */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => formatterFor(timeZone).format(Date.now()),
    () => null,
  );

  return (
    <time className="tabular-nums" aria-live="off">
      {time ?? "--:--"}
    </time>
  );
}
