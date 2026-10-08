import { useState, type FormEvent } from "react";
import { CONTACT_FORM } from "../config";
import { profile } from "../content/profile";
import Section, { type SectionProps } from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact(props: SectionProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    // Bots fill every field; real visitors never see the honeypot. Pretend success so bots don't retry.
    if (data.get(CONTACT_FORM.honeypotField)) {
      form.reset();
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM.endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 placeholder:text-muted/70 focus:border-accent focus:outline-none";

  return (
    <Section {...props}>
      <p className="max-w-xl text-lg leading-relaxed">
        I'm always happy to talk about agents, product engineering, or anything you're building. Email me at{" "}
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>{" "}
        or drop a note below.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          Name
          <input className={field} type="text" name="name" required maxLength={100} autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-sm">
          Email
          <input className={field} type="email" name="email" required maxLength={254} autoComplete="email" />
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          Message
          <textarea className={`${field} resize-y`} name="message" required maxLength={5000} rows={5} />
        </label>
        <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
          <label>
            Leave this field empty
            <input type="text" name={CONTACT_FORM.honeypotField} tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" className="text-sm text-muted">
            {status === "sent" && "Thanks — I'll get back to you soon."}
            {status === "error" && `Something went wrong. Please email me directly instead.`}
          </p>
        </div>
      </form>
    </Section>
  );
}
