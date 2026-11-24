import Link from "next/link";
import { navLinks } from "@/lib/data";

// Shared nav list. Desktop: small blue pills. Mobile: big poster-style links.
export default function Nav({ orientation = "row", onNavigate, className = "" }) {
  const row = orientation === "row";
  return (
    <nav aria-label="Main" className={className}>
      <ul className={`flex ${row ? "items-center gap-4" : "flex-col"}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={
                row
                  ? "relative inline-flex min-h-11 items-center px-2 text-base font-bold text-navy transition-colors duration-200 hover:text-royal after:absolute after:inset-x-2 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-azure after:transition-transform after:duration-300 hover:after:scale-x-100"
                  : "flex w-full min-h-11 items-center border-b-2 border-royal/15 py-3 font-display text-3xl font-medium text-royal transition-colors hover:text-azure"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
