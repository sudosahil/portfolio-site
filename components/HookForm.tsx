"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const inputClass =
  "w-full bg-transparent border-b border-line-light py-2.5 text-[16px] text-paper placeholder:text-paper/40 focus:outline-none focus:border-red transition-colors";

export function HookForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    need: "",
    whatsapp: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line-light p-8 text-center">
        <p className="display text-[40px] leading-none text-red">Got it!</p>
        <p className="text-[15px] text-paper/60 mt-3">
          I&apos;ll reach out on WhatsApp within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line-light p-6 md:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/40 mb-1">
        [ Start here ]
      </p>
      <h3 className="text-[24px] font-medium tracking-tight mb-5">
        Tell me about your business
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
          placeholder="Business name"
          value={form.business}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, business: e.target.value })
          }
          className={inputClass}
        />
        <select
          value={form.need}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setForm({ ...form, need: e.target.value })
          }
          required
          className={`${inputClass} [&>option]:text-ink`}
        >
          <option value="" disabled>
            What do you need?
          </option>
          <option value="new">A new website from scratch</option>
          <option value="redesign">Redesign my existing website</option>
          <option value="landing">A landing page for my ads</option>
          <option value="store">An online store</option>
          <option value="exploring">Just exploring for now</option>
        </select>
        <input
          type="tel"
          placeholder="WhatsApp number"
          value={form.whatsapp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, whatsapp: e.target.value })
          }
          required
          className={inputClass}
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          data-cursor="send"
          className="w-full bg-paper text-ink font-mono text-[12px] uppercase tracking-[0.14em] py-3.5 hover:bg-red hover:text-paper transition-colors"
        >
          Get in touch →
        </motion.button>
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/40 text-center">
          No spam. No cold calls. Just a conversation.
        </p>
      </form>
    </div>
  );
}
