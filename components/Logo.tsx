export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        className="shrink-0 drop-shadow-[0_2px_6px_rgba(242,112,95,0.35)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--accent-from)" />
            <stop offset="1" stopColor="var(--accent-to)" />
          </linearGradient>
          <linearGradient id="logoGloss" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="32" height="32" rx="9" fill="url(#logoGradient)" />
        <rect width="32" height="14" rx="9" fill="url(#logoGloss)" />

        <path
          d="M7 11 L11.5 21 L16 12.5 L20.5 21 L25 11"
          fill="none"
          stroke="var(--accent-foreground)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">Winflow</span>
    </span>
  );
}
