"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig, contactData } from "@/lib/data";
import SectionHeading from "@/components/ui/section-heading";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.socials.email,
    href: `mailto:${siteConfig.socials.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Ayush Kumar",
    href: siteConfig.socials.linkedin,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: siteConfig.socials.whatsapp,
    href: `https://wa.me/918875231058`,
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        contactData.emailjsServiceId,
        contactData.emailjsTemplateId,
        formRef.current,
        contactData.emailjsPublicKey
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32">
      <div className="glow -bottom-40 left-20" />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="Reach out" title="Contact Me" />

        <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-12 lg:grid-cols-5">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-5 hover:border-accent/30 transition-colors group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-fg">
                    {card.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 lg:col-span-3"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-card-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-fg/60 outline-none focus:border-accent/50 transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-xl border border-card-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-fg/60 outline-none focus:border-accent/50 transition-colors"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border border-card-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-fg/60 outline-none focus:border-accent/50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-colors disabled:opacity-60"
            >
              {sent ? (
                <>
                  <CheckCircle className="h-4 w-4" /> Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send Message"}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
