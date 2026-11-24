"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Wave from "./Wave";
import { contactInfo, navLinks, socials } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1];
const word = "the laban wala";

const socialIcons = {
  instagram: {
    label: "Instagram",
    path: <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.2-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />,
  },
  facebook: {
    label: "Facebook",
    path: <path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4.5 1.8-4.5 4.4V8H7v3.5h2.5V22H14V11.5h2.8L17.5 8H14Z" />,
  },
  whatsapp: {
    label: "WhatsApp",
    path: <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm-3.200 4.500c.2 0 .4 0 .5.4l.7 1.600c.1.200 0 .4-.1.600l-.4.500c-.1.100-.1.300 0 .500.600 1 1.500 1.800 2.600 2.300.2.100.4.100.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.600.8c.2.100.3.200.3.300 0 .500-.3 1.200-1 1.500-.600.300-1.500.4-3.500-.5-2.200-1-3.600-3.200-3.700-3.400-.1-.200-.9-1.200-.9-2.300s.600-1.600.8-1.800c.2-.2.4-.3.600-.3Z" />,
  },
};

const headingClass = "text-lg font-bold text-white";
const linkClass = "inline-flex min-h-9 items-center text-[0.95rem] text-white/85 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline";

const col = (i) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease, delay: i * 0.1 },
});

// Royal-blue footer in four columns: brand, explore, contact, and an enquiry field with social icons.
export default function Footer() {
  const [email, setEmail] = useState("");
  const hasEmail = Boolean(contactInfo.email);
  const activeSocials = Object.keys(socialIcons);

  function onSubmit(e) {
    e.preventDefault();
    if (!hasEmail) return;
    const body = email ? `Hi, I'd like to enquire. You can reach me at ${email}.` : "Hi, I'd like to enquire.";
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Enquiry")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <footer className="bg-royal text-white">
      <div className="bg-white"><Wave color="var(--color-royal)" /></div>
      <div className="mx-auto grid max-w-7xl justify-items-center gap-10 px-5 py-12 text-center sm:grid-cols-2 lg:justify-items-start lg:text-left sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] lg:gap-12 lg:py-16">
        <motion.div {...col(0)}>
          <Logo size={88} />
          <p className="mt-5 hidden max-w-[16rem] leading-snug text-white lg:block">Egyptian laban desserts, made to be shared.</p>
          <p className="mt-2 text-sm text-white/70">© {new Date().getFullYear()} The Laban Wala. All rights reserved.</p>
        </motion.div>

        <motion.nav {...col(1)} aria-label="Footer">
          <h2 className={`${headingClass} hidden lg:block`}>Explore</h2>
          <ul className="lg:mt-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div {...col(2)}>
          <h2 className={headingClass}>Visit us</h2>
          <address className="mt-3 space-y-2 text-[0.95rem] not-italic text-white/85">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.hours}</p>
            <p>{contactInfo.phone}</p>
          </address>
        </motion.div>

        <motion.div {...col(3)}>
          <h2 className={headingClass}>For enquiries</h2>
          <form onSubmit={onSubmit} className="mt-3 flex w-full max-w-sm items-center bg-white lg:max-w-none">
            <label htmlFor="footer-email" className="sr-only">Your email</label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              className="min-h-12 w-full min-w-0 bg-transparent px-4 text-[0.95rem] text-navy placeholder:text-royal/60 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!hasEmail}
              aria-label="Send enquiry"
              title={hasEmail ? "Send enquiry" : "Add an enquiry email in src/lib/data.js"}
              className="flex h-12 w-12 shrink-0 items-center justify-center text-royal transition-transform hover:translate-x-0.5 disabled:opacity-50 disabled:hover:translate-x-0"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>
          </form>

          {activeSocials.length > 0 && (
            <ul className="mt-5 flex justify-center gap-3 lg:justify-start">
              {activeSocials.map((k) => (
                <li key={k}>
                  <motion.a
                    href={socials[k] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialIcons[k].label}
                    whileHover={{ y: -3 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white hover:text-royal"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" fillRule="evenodd" className="h-5 w-5 fill-current">{socialIcons[k].path}</svg>
                  </motion.a>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {/* giant wordmark: each letter rises in turn */}
      <div aria-hidden="true" className="h-[1.05em] select-none overflow-hidden pb-[0.1em] text-[12.5vw] leading-none lg:h-[0.8em] lg:pb-0">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
          className="whitespace-pre text-center font-display font-semibold leading-[0.95] tracking-tight text-white/25 lg:text-white/15"
        >
          {word.split("").map((c, i) => (
            <motion.span key={i} className="inline-block" variants={{ hidden: { y: "105%" }, show: { y: 0, transition: { duration: 0.9, ease } } }}>
              {c}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </footer>
  );
}
