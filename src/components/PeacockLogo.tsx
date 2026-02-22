export default function PeacockLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-label="Namaste Globals Peacock Logo">
      {/* Tail feathers */}
      <ellipse cx="22" cy="62" rx="5" ry="15" fill="#0d6b5e" transform="rotate(-28 22 62)" opacity="0.95" />
      <ellipse cx="30" cy="69" rx="5" ry="15" fill="#1a7a6e" transform="rotate(-14 30 69)" opacity="0.95" />
      <ellipse cx="40" cy="71" rx="5" ry="15" fill="#1b4f72" opacity="0.95" />
      <ellipse cx="50" cy="69" rx="5" ry="15" fill="#1a7a6e" transform="rotate(14 50 69)" opacity="0.95" />
      <ellipse cx="58" cy="62" rx="5" ry="15" fill="#0d6b5e" transform="rotate(28 58 62)" opacity="0.95" />
      {/* Feather eye dots */}
      <circle cx="21" cy="53" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="30" cy="58" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="40" cy="59" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="50" cy="58" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="59" cy="53" r="3.5" fill="#c9a84c" opacity="0.85" />
      {/* Body */}
      <ellipse cx="40" cy="50" rx="10" ry="13" fill="#1a7a6e" />
      {/* Neck */}
      <rect x="37" y="31" width="6" height="12" rx="3" fill="#1b4f72" />
      {/* Head */}
      <circle cx="40" cy="26" r="8" fill="#1b4f72" />
      {/* Eye */}
      <circle cx="43" cy="24" r="2.5" fill="white" />
      <circle cx="43.5" cy="24" r="1.2" fill="#0a0a0f" />
      {/* Beak */}
      <path d="M45 26 L52 25 L45 29Z" fill="#c9a84c" />
      {/* Crown feathers */}
      <line x1="40" y1="18" x2="36" y2="10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="40" y1="18" x2="40" y2="9"  stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="40" y1="18" x2="44" y2="10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="36" cy="9"  r="2.2" fill="#e8c97a" />
      <circle cx="40" cy="8"  r="2.2" fill="#e8c97a" />
      <circle cx="44" cy="9"  r="2.2" fill="#e8c97a" />
    </svg>
  );
}
