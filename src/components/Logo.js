import Image from "next/image";
import Link from "next/link";

// Shared logo, links home. Uses a tightly cropped copy of the brand badge.
export default function Logo({ size = 64, priority = false, className = "" }) {
  return (
    <Link href="/" aria-label="The Laban Wala — home" className={`inline-flex min-h-11 min-w-11 items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="The Laban Wala logo"
        width={size}
        height={Math.round(size * 1.009)}
        priority={priority}
        className="h-auto"
        style={{ width: size }}
      />
    </Link>
  );
}
