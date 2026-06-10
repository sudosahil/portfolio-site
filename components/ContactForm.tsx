"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const inputClass =
  "w-full bg-transparent border-b border-line py-3 text-[18px] text-ink placeholder:text-grey focus:outline-none focus:border-red transition-colors";

const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-grey mb-1.5 block";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    need: "",
    message: "",
    whatsapp: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line py-20 px-6 text-center">
        <p className="display text-[12vw] md:text-[6vw] leading-[0.9] text-red">
          Got it.
        </p>
        <p className="text-[18px] text-grey-dark mt-4">
          I&apos;ll reach out on WhatsApp within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Name *</label>
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
        </div>
        <div>
          <label className={labelClass}>Business / Company</label>
          <input
            type="text"
            placeholder="Optional"
            value={form.business}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, business: e.target.value })
            }
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>What do you need? *</label>
        <select
          value={form.need}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setForm({ ...form, need: e.target.value })
          }
          required
          className={inputClass}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="new">A new website from scratch</option>
          <option value="redesign">Redesign my existing website</option>
          <option value="landing">A landing page for ads</option>
          <option value="store">An online store</option>
          <option value="maintenance">Monthly maintenance</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Tell me more</label>
        <textarea
          placeholder="Brief description, timeline, anything relevant"
          value={form.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setForm({ ...form, message: e.target.value })
          }
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className={labelClass}>WhatsApp number *</label>
        <input
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={form.whatsapp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, whatsapp: e.target.value })
          }
          required
          className={inputClass}
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        data-cursor="send"
        className="inline-flex items-center px-8 py-4 bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-red transition-colors"
      >
        Send message →
      </motion.button>
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-grey">
        No spam. No cold calls. Just a conversation.
      </p>
    </form>
  );
}
