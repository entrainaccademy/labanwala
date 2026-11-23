// Soft wavy edge, like the wave on the Laban Wala cup. `color` is the section it flows into; `flip` puts the fill on top.
export default function Wave({ color = "var(--color-cream)", flip = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path fill={color} d="M0 40C120 80 240 80 360 40S600 0 720 40 960 80 1080 40 1320 0 1440 40V80H0Z" />
    </svg>
  );
}
