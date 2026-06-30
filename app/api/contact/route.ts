import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { name, email, projectType, budget, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "endbrackets.rhjoy@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name} — ${projectType}`,
    text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
