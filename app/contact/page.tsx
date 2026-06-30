import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire Rakibul Hasan Joy for web application development, AI automation, or SaaS projects. Get a free quote within 24 hours.",
};

export default function ContactPage() {
  return <Contact />;
}
