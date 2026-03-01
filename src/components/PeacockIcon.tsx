export default function PeacockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='32' cy='32' r='8' fill='#1a7a6e' />
      <ellipse cx='32' cy='18' rx='4' ry='10' fill='#1b4f72' />
      <ellipse cx='44' cy='22' rx='4' ry='10' fill='#1a7a6e' transform='rotate(45 44 22)' />
      <ellipse cx='20' cy='22' rx='4' ry='10' fill='#1a7a6e' transform='rotate(-45 20 22)' />
      <ellipse cx='48' cy='32' rx='4' ry='10' fill='#1b4f72' transform='rotate(90 48 32)' />
      <ellipse cx='16' cy='32' rx='4' ry='10' fill='#1b4f72' transform='rotate(90 16 32)' />
      <ellipse cx='32' cy='46' rx='4' ry='10' fill='#1a7a6e' />
    </svg>
  )
}
