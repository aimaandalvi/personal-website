"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const fieldClassName =
  "rounded-xl border border-zinc-300/70 bg-white/70 px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-50 dark:focus:border-[#1db954]/70";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("sent");
      setStatusMessage("Message sent. Thanks for reaching out.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Unable to send right now.");
    }
  };

  return (
    <form
      onSubmit={sendMessage}
      className="rounded-xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.035] sm:p-7"
    >
      <h2 className="text-center text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Send a message</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className={fieldClassName}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className={fieldClassName}
        />
      </div>
      <input
        name="subject"
        required
        placeholder="Subject"
        className={`mt-4 w-full ${fieldClassName}`}
      />
      <textarea
        name="message"
        required
        placeholder="Your message"
        rows={6}
        className={`mt-4 w-full resize-none ${fieldClassName}`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1db954] px-5 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-[#25d366] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        <Send aria-hidden="true" size={17} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {statusMessage && (
        <p
          className={`mt-4 text-center text-sm ${
            status === "sent" ? "text-[#1db954]" : "text-red-500 dark:text-red-400"
          }`}
          role="status"
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
}
