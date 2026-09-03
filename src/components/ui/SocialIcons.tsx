interface IconProps {
  className?: string;
}

/** Minimal outline glyphs — kept generic/geometric rather than pulling brand-mark packages. */

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 10.5V17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="8" cy="7.2" r="1" fill="currentColor" />
      <path
        d="M12 17v-4.2c0-1.3 1-2.3 2.2-2.3s2.1 1 2.1 2.3V17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10.5 9.7L14.8 12L10.5 14.3V9.7Z" fill="currentColor" />
    </svg>
  );
}
