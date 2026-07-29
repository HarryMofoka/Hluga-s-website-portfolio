export function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 13L13 5M13 5H6M13 5V12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CtaButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span className={`cta-btn ${className}`}>
      <span className="cta-btn-bg" />
      <span className="cta-btn-text">{label}</span>
      <span className="cta-btn-circle">
        <ArrowIcon />
      </span>
    </span>
  );
}
