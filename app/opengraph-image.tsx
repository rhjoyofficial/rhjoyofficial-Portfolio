import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rakibul Hasan Joy — Full Stack Developer & AI Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orb background */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage:
              "radial-gradient(#6366f1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#6366f1",
              letterSpacing: "-0.02em",
            }}
          >
            rhjoy.
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            color: "#F8FAFC",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Rakibul Hasan Joy
        </div>

        {/* Title with gradient simulation */}
        <div
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#818cf8",
            marginBottom: "24px",
          }}
        >
          Full Stack Developer & AI Automation Engineer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "20px",
            color: "#94A3B8",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          I build web apps and AI systems that make businesses run faster.
        </div>

        {/* Bottom badges */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          {["Laravel", "React", "AI Automation", "Bangladesh 🇧🇩"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(99,102,241,0.4)",
                background: "rgba(99,102,241,0.1)",
                color: "#a5b4fc",
                fontSize: "16px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Available badge */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            borderRadius: "999px",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.4)",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#22c55e", fontSize: "16px", fontWeight: "600" }}>
            Available for Work
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
