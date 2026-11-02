"use client";

import type { ComponentProps, PointerEvent } from "react";
import { cx } from "./ui";

/** A card whose accent glow follows the pointer. Writes CSS vars only — no re-renders. */
export function Spotlight({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      onPointerMove={onPointerMove}
      className={cx("spotlight", className)}
      {...props}
    >
      {children}
    </div>
  );
}
