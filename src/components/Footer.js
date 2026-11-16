import Link from "next/link";
import Logo from "./Logo";
import { contactInfo, navLinks, socials } from "@/lib/data";

const linkClass =
  "inline-flex min-h-11 items-center text-white/75 transition-colors duration-200 hover:text-white";
const headingClass = "text-sm font-extrabold uppercase tracking-[0.18em] text-sky";

export default function Footer() {
  return (
    <footer className="mt-10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-12 pt-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:pt-20">
        <div>
          <Logo size={84} />
          <p className="mt-6 max-w-xs font-display text-2xl font-medium leading-snug">
            Egyptian laban desserts, <span className="font-serif text-[1.1em] font-normal italic text-sky">made to be shared.</span>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Visit</h2>
          <address className="mt-5 space-y-2.5 not-italic text-white/75">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.hours}</p>
            <p>{contactInfo.phone}</p>
          </address>
        </div>

        {socials.instagram && <div>
          <h2 className={headingClass}>Follow</h2>
          <ul className="mt-3">
            <li>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Instagram
              </a>
            </li>
          </ul>
        </div>}
      </div>

      <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-white/50 sm:px-8">
        © {new Date().getFullYear()} The Laban Wala. All rights reserved.
      </p>
    </footer>
  );
}
