"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/content";

const inputClass =
  "w-full bg-transparent border-b border-line py-2.5 text-[16px] text-ink placeholder:text-grey focus:outline-none focus:border-red transition-colors";

/**
 * Light-themed enquiry form for the What I Do page. Lets a visitor send a
 * query about a specific service. Client-side only — submitting swaps in a
 * thank-you state (no backend wired up yet).
 */
export function QueryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line p-8 text-center">
        <p className="display text-[40px] leading-none text-red">Got it!</p>
        <p className="text-[15px] text-grey-dark mt-3">
          Thanks for reaching out — I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line p-6 md:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-grey mb-1">
        [ Send a query ]
      </p>
      <h3 className="text-[24px] font-medium tracking-tight mb-5">
        Tell me what you&apos;re after
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, name: e.target.value })
          }
          required
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Email or WhatsApp number"
          value={form.contact}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, contact: e.target.value })
          }
          required
          className={inputClass}
        />
        <select
          value={form.service}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setForm({ ...form, service: e.target.value })
          }
          required
          className={inputClass}
        >
          <option value="" disabled>
            What are you interested in?
          </option>
          {services.map((s) => (
            <option key={s.num} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
        <textarea
          placeholder="A few words about your project"
          value={form.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, message: e.target.value })
          }
          rows={3}
          className={`${inputClass} resize-none`}
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          data-cursor="send"
          className="w-full bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] py-3.5 hover:bg-red transition-colors"
        >
          Send query →
        </motion.button>
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-grey text-center">
          No spam. No cold calls. Just a conversation.
        </p>
      </form>
    </div>
  );
}
