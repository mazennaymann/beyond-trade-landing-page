export function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="var(--gold)" strokeWidth="2" />
        <path d="M17 11v26" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="27" cy="28" r="8" fill="none" stroke="var(--gold)" strokeWidth="3" />
        <path d="M23 18h9M27.5 18v6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      {!compact && (
        <span className="font-[family-name:var(--font-display)] text-lg leading-none tracking-[0.16em] uppercase">
          <span className="text-gold">beyond</span>{" "}
          <span className="text-foreground/85">trade</span>
        </span>
      )}
    </span>
  );
}
