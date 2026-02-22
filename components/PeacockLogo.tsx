// components/PeacockLogo.tsx
export default function PeacockLogo({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-label="Namaste Globals Peacock Logo">
      {/* Tail feathers */}
      <ellipse cx="22" cy="62" rx="5" ry="15" fill="#0d6b5e" transform="rotate(-30 22 62)" opacity="0.9" />
      <ellipse cx="30" cy="70" rx="5" ry="15" fill="#1a7a6e" transform="rotate(-15 30 70)" opacity="0.9" />
      <ellipse cx="40" cy="72" rx="5.5" ry="15" fill="#1b4f72" opacity="0.9" />
      <ellipse cx="50" cy="70" rx="5" ry="15" fill="#1a7a6e" transform="rotate(15 50 70)" opacity="0.9" />
      <ellipse cx="58" cy="62" rx="5" ry="15" fill="#0d6b5e" transform="rotate(30 58 62)" opacity="0.9" />
      {/* Feather eye spots */}
      <circle cx="22" cy="52" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="30" cy="58" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="40" cy="60" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="50" cy="58" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="58" cy="52" r="3.5" fill="#c9a84c" opacity="0.85" />
      {/* Body */}
      <ellipse cx="40" cy="52" rx="10" ry="14" fill="#1a7a6e" />
      {/* Head */}
      <circle cx="40" cy="30" r="9" fill="#1b4f72" />
      {/* Beak */}
      <path d="M45 30.5 L53 29 L45 33Z" fill="#c9a84c" />
      {/* Eye */}
      <circle cx="44" cy="28" r="2.5" fill="white" />
      <circle cx="44.5" cy="28" r="1.2" fill="#0a0a0f" />
      <circle cx="44.8" cy="27.5" r="0.4" fill="white" />
      {/* Crown feathers */}
      <line x1="40" y1="21" x2="37" y2="13" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="21" x2="40" y2="12" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="21" x2="43" y2="13" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="37" cy="12.5" r="2.2" fill="#e8c97a" />
      <circle cx="40" cy="11.5" r="2.2" fill="#e8c97a" />
      <circle cx="43" cy="12.5" r="2.2" fill="#e8c97a" />
    </svg>
  );
}
