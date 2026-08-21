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

  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

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

  try {
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
      const resendError = (await resendResponse.json().catch(() => null)) as { message?: string } | null;
      const providerMessage = resendError?.message;

      return NextResponse.json(
        {
          error: providerMessage
            ? `Email service error: ${providerMessage}`
            : "Email service rejected the message. Check your Resend sender and Vercel environment variables.",
        },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Email service could not be reached. Try again in a minute." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
