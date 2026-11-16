// Soft panels that stand in for photography until real photos are supplied.
const tints = {
  sky: { bg: "linear-gradient(140deg, #E3F1FB 0%, #CBE5F6 100%)", ink: "#2E55A4" },
  ice: { bg: "linear-gradient(140deg, #F5F9FD 0%, #E6F0F9 100%)", ink: "#2E55A4" },
  white: { bg: "linear-gradient(140deg, #F5F9FD 0%, #E6F0F9 100%)", ink: "#2E55A4" },
  azure: { bg: "linear-gradient(140deg, #D5EBF9 0%, #B4DAF3 100%)", ink: "#1B3470" },
  royal: { bg: "linear-gradient(140deg, #3D67B8 0%, #2E55A4 100%)", ink: "#FFFFFF" },
};

// Swap for <Image fill className="object-cover" /> once real photos arrive.
// The inner mark scales gently when a parent `.group` is hovered, as a photo would.
export default function DessertPlaceholder({ tint = "sky", label, className = "" }) {
  const t = tints[tint] ?? tints.sky;
  return (
    <div
      role="img"
      aria-label={label ? `${label} (photo coming soon)` : "Photo coming soon"}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: t.bg }}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke={t.ink}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-14 w-14 opacity-45 transition-transform duration-700 ease-out group-hover:scale-110"
      >
        <path d="M13 23h22l-2.6 12.2a3 3 0 0 1-2.9 2.4H18.5a3 3 0 0 1-2.9-2.4L13 23Z" />
        <path d="M15.5 23a8.5 8.5 0 0 1 17 0" />
        <path d="M24 14.5v-3M24 11.5c1.5-2.5 3.5-3 5-3" />
        <path d="M15 29c3 1.6 6-1.6 9 0s6-1.6 9 0" />
      </svg>
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-5 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] opacity-50"
        style={{ color: t.ink }}
      >
        Photo coming soon
      </span>
    </div>
  );
}
