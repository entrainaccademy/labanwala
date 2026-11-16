import Link from "next/link";
import { navLinks } from "@/lib/data";

// Shared nav link list. `onNavigate` lets the mobile menu close itself.
export default function Nav({ orientation = "row", onNavigate, className = "" }) {
  const row = orientation === "row";
  return (
    <nav aria-label="Main" className={className}>
      <ul className={`flex ${row ? "items-center gap-8" : "flex-col"}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className={`group relative inline-flex min-h-11 items-center font-bold transition-colors duration-200 hover:text-royal ${
                row ? "text-[0.95rem]" : "w-full py-2 font-display text-2xl font-medium"
              }`}
            >
              {link.label}
              {row && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-royal transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
