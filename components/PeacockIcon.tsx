export default function PeacockIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tail feathers */}
      <ellipse cx="22" cy="62" rx="5.5" ry="15" fill="#0d6b5e" transform="rotate(-30 22 62)" opacity="0.9" />
      <ellipse cx="30" cy="70" rx="5.5" ry="15" fill="#1a7a6e" transform="rotate(-15 30 70)" opacity="0.9" />
      <ellipse cx="40" cy="72" rx="5.5" ry="15" fill="#1b4f72" opacity="0.9" />
      <ellipse cx="50" cy="70" rx="5.5" ry="15" fill="#1a7a6e" transform="rotate(15 50 70)" opacity="0.9" />
      <ellipse cx="58" cy="62" rx="5.5" ry="15" fill="#0d6b5e" transform="rotate(30 58 62)" opacity="0.9" />
      {/* Feather eyes */}
      <circle cx="21" cy="53" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="29" cy="59" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="40" cy="61" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="51" cy="59" r="3.5" fill="#c9a84c" opacity="0.85" />
      <circle cx="59" cy="53" r="3.5" fill="#c9a84c" opacity="0.85" />
      {/* Eye pupils */}
      <circle cx="21" cy="53" r="1.5" fill="#0a0a0f" opacity="0.6" />
      <circle cx="29" cy="59" r="1.5" fill="#0a0a0f" opacity="0.6" />
      <circle cx="40" cy="61" r="1.5" fill="#0a0a0f" opacity="0.6" />
      <circle cx="51" cy="59" r="1.5" fill="#0a0a0f" opacity="0.6" />
      <circle cx="59" cy="53" r="1.5" fill="#0a0a0f" opacity="0.6" />
      {/* Body */}
      <ellipse cx="40" cy="50" rx="10" ry="14" fill="#1a7a6e" />
      {/* Neck */}
      <rect x="36" y="34" width="8" height="14" rx="4" fill="#1b4f72" />
      {/* Head */}
      <circle cx="40" cy="29" r="9" fill="#1b4f72" />
      {/* Beak */}
      <path d="M46 29.5 L54 28 L46 32Z" fill="#c9a84c" />
      {/* Eye white */}
      <circle cx="43.5" cy="27" r="2.5" fill="white" />
      <circle cx="44" cy="27" r="1.2" fill="#0a0a0f" />
      <circle cx="44.4" cy="26.5" r="0.4" fill="white" />
      {/* Crown feathers */}
      <line x1="37" y1="21" x2="34" y2="12" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="20" x2="40" y2="11" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="43" y1="21" x2="46" y2="12" stroke="#c9a84c" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="34" cy="11" r="2.2" fill="#e8c97a" />
      <circle cx="40" cy="10" r="2.2" fill="#e8c97a" />
      <circle cx="46" cy="11" r="2.2" fill="#e8c97a" />
    </svg>
  );
}
