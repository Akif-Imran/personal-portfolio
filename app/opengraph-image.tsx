import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#0c0b0a";
const ivory = "#ece7dd";
const muted = "#a8a194";
const subtle = "#857f74";
const gold = "#d2b27c";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: `radial-gradient(circle at 85% 0%, rgba(210,178,124,0.18), ${ink} 55%)`,
          color: ivory,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: gold,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 12, background: gold }} />
          {profile.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 124, lineHeight: 1, letterSpacing: -4 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 36, color: muted }}>
            {profile.focus}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid rgba(236,231,221,0.14)`,
            paddingTop: 28,
            fontSize: 24,
            color: subtle,
          }}
        >
          <span>{profile.location}</span>
          <span>{profile.email}</span>
        </div>
      </div>
    ),
    size,
  );
}
