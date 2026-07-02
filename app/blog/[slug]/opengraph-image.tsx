import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const alt = "Blog post cover image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  const title = result?.meta.title ?? "Rakibul Hasan Joy";
  const category = result?.meta.category ?? "Blog";
  const readTime = result?.meta.readTime ?? "";

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

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
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

        <div
          style={{
            display: "flex",
            padding: "8px 20px",
            borderRadius: "999px",
            border: "1px solid rgba(99,102,241,0.4)",
            background: "rgba(99,102,241,0.1)",
            color: "#a5b4fc",
            fontFamily: "monospace",
            fontSize: "18px",
            alignSelf: "flex-start",
            marginBottom: "28px",
          }}
        >
          {category}
        </div>

        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#F8FAFC",
            lineHeight: 1.2,
            maxWidth: "980px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            fontSize: "20px",
            color: "#94A3B8",
          }}
        >
          Rakibul Hasan Joy{readTime ? ` · ${readTime}` : ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
