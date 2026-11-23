import Link from "next/link";
import Logo from "./Logo";
import Wave from "./Wave";
import { contactInfo, navLinks, socials } from "@/lib/data";

const linkClass = "inline-flex min-h-11 items-center text-ink/75 transition-colors duration-200 hover:text-royal";
const headingClass = "font-display text-2xl font-medium text-royal";

export default function Footer() {
  return (
    <footer className="bg-white text-navy">
      <Wave flip color="var(--color-cream)" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-12 pt-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:pt-20">
        <div>
          <Logo size={84} />
          <p className="mt-6 max-w-xs font-display text-2xl font-medium leading-tight">
            Egyptian laban desserts, <span className="font-script text-[1.15em] font-normal italic text-royal">made to be shared.</span>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-2">
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
          <address className="mt-4 space-y-2.5 not-italic text-ink/75">
            <p>{contactInfo.address}</p>
            <p>{contactInfo.hours}</p>
            <p>{contactInfo.phone}</p>
          </address>
        </div>

        {socials.instagram && (
          <div>
            <h2 className={headingClass}>Follow</h2>
            <ul className="mt-2">
              <li>
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <p className="mx-auto max-w-7xl px-5 pb-8 text-sm text-ink/55 sm:px-8">
        © {new Date().getFullYear()} The Laban Wala. All rights reserved.
      </p>
    </footer>
  );
}
