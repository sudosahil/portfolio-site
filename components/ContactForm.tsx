"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    need: "",
    budget: "",
    message: "",
    whatsapp: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-surface2 border border-[rgba(255,255,255,0.07)] rounded-lg px-4 py-2.5 text-[15px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-[rgba(139,143,255,0.3)] transition-colors";

  return (
    <div className="bg-surface rounded-xl border border-[rgba(255,255,255,0.07)] p-8">
      <p className="font-mono text-[11px] tracking-[0.12em] text-accent mb-2">// or fill this out</p>
      <h3 className="text-[20px] font-medium text-text-primary mb-6">Tell me about what you need.</h3>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="#8b8fff" strokeWidth="1.5" />
            <path d="M14 24L20.5 30.5L34 17" stroke="#8b8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[18px] font-medium text-text-primary">Message received.</p>
          <p className="text-[14px] text-text-secondary">I&apos;ll reach out on WhatsApp within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1.5 block">
                Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1.5 block">
                Business / Company
              </label>
              <input
                type="text"
                placeholder="Optional"
                value={form.business}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, business: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1.5 block">
              What are you looking for? *
            </label>
            <select
              value={form.need}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, need: e.target.value })}
              required
              className={inputClass}
            >
              <option value="" disabled>Select an option</option>
              <option value="new">A new website from scratch</option>
              <option value="redesign">Redesign my existing website</option>
              <option value="landing">A landing page for ads</option>
              <option value="store">An online store</option>
              <option value="maintenance">Monthly maintenance</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1.5 block">
              Budget range *
            </label>
            <select
              value={form.budget}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, budget: e.target.value })}
              required
              className={inputClass}
            >
              <option value="" disabled>Select a range</option>
              <option value="under10k">Under ₹10,000</option>
              <option value="10-30k">₹10,000 – ₹30,000</option>
              <option value="30-80k">₹30,000 – ₹80,000</option>
              <option value="80k+">₹80,000+</option>
              <option value="notsure">Not sure yet</option>
            </select>
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1.5 block">
              Tell me more
            </label>
            <textarea
              placeholder="Brief description, timeline, anything relevant"
              value={form.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1.5 block">
              WhatsApp number *
            </label>
            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.whatsapp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, whatsapp: e.target.value })}
              required
              className={inputClass}
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="w-full bg-warm text-bg text-[15px] font-medium rounded-lg py-3"
          >
            send message →
          </motion.button>
          <p className="font-mono text-[10px] text-text-secondary text-center">
            No spam. No cold calls. Just a conversation.
          </p>
        </form>
      )}
    </div>
  );
}
