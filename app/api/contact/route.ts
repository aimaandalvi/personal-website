import { NextResponse } from "next/server";

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "a4dalvi@uwaterloo.ca";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Contact form is not configured yet. Add RESEND_API_KEY in Vercel environment variables." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ContactRequest;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Please fill out every field." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio: ${subject}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: "Unable to send message right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
