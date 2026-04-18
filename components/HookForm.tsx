"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

  return (
    <motion.div
      className="bg-surface2 rounded-xl border border-[rgba(255,255,255,0.07)] p-6"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="#8b8fff" strokeWidth="1.5" />
            <path d="M12 20L17.5 25.5L28 15" stroke="#8b8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[16px] font-medium text-text-primary">Got it! I&apos;ll reach out within 24 hours.</p>
          <p className="font-mono text-[11px] text-text-secondary">Check your WhatsApp.</p>
        </div>
      ) : (
        <>
          <p className="font-mono text-[11px] tracking-[0.12em] text-accent mb-1">// start here</p>
          <h3 className="text-[18px] font-medium text-text-primary mb-1">Tell me about your business</h3>
          <p className="text-[13px] text-text-secondary mb-5">Takes 2 minutes. I&apos;ll reach out within 24 hours.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-surface border border-[rgba(255,255,255,0.07)] rounded-lg px-4 py-2.5 text-[15px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-[rgba(139,143,255,0.3)]"
            />
            <input
              type="text"
              placeholder="Business name"
              value={form.business}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, business: e.target.value })}
              className="w-full bg-surface border border-[rgba(255,255,255,0.07)] rounded-lg px-4 py-2.5 text-[15px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-[rgba(139,143,255,0.3)]"
            />
            <select
              value={form.need}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, need: e.target.value })}
              required
              className="w-full bg-surface border border-[rgba(255,255,255,0.07)] rounded-lg px-4 py-2.5 text-[15px] text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-[rgba(139,143,255,0.3)]"
            >
              <option value="" disabled>What do you need?</option>
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, whatsapp: e.target.value })}
              required
              className="w-full bg-surface border border-[rgba(255,255,255,0.07)] rounded-lg px-4 py-2.5 text-[15px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-[rgba(139,143,255,0.3)]"
            />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full bg-warm text-bg text-[15px] font-medium rounded-lg py-3 mt-1"
            >
              get in touch →
            </motion.button>
            <p className="font-mono text-[10px] text-text-secondary text-center">
              No spam. No cold calls. Just a conversation.
            </p>
          </form>
        </>
      )}
    </motion.div>
  );
}
