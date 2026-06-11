export function TableauIcon({ size = 30, color = "#E97627" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 2h1.5v4.5h-1.5V2zm0 15.5h1.5V22h-1.5v-4.5zM2 11.25h4.5v1.5H2v-1.5zm15.5 0H22v1.5h-4.5v-1.5zM4.22 4.22l1.06 1.06L7.1 7.1 6.04 8.16 4.22 6.34 2.4 4.52 3.46 3.46l.76.76zm13.5 13.5 1.06 1.06-1.06 1.06-1.82-1.82 1.06-1.06.76.76zm-13.5 1.06L5.28 17.72l1.06-1.06 1.82 1.82-1.06 1.06-.76-.76-.84-.84zM18.72 4.22l1.06 1.06-1.82 1.82L16.9 6.04l1.82-1.82zM9.5 6.5h5v11h-5V6.5zm1.5 1.5v8h2v-8h-2z" />
    </svg>
  );
}

export function PowerBIIcon({ size = 30, color = "#F2C811" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="1"   y="13" width="4" height="9"  rx="1" fill={color} opacity="0.5"/>
      <rect x="6.5" y="8"  width="4" height="14" rx="1" fill={color} opacity="0.75"/>
      <rect x="12"  y="3"  width="4" height="19" rx="1" fill={color}/>
      <rect x="17.5" y="7" width="4" height="15" rx="1" fill={color} opacity="0.75"/>
    </svg>
  );
}

export function MatlabIcon({ size = 30 }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 17.5 8 9l3.5 4 3-3.5L21 17.5" fill="none" stroke="#0076A8" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M8 9l3.5 4 3-3.5 6.5 8H1z" fill="#0076A8" opacity="0.15"/>
      <path d="M13 6.5c1-2 3-3.5 4.5-3 1 .3 1.5 1.2 1 2.5L14.5 13l-1.5-2 2-4.5z" fill="#E87722"/>
      <path d="M14.5 13 11.5 9.5 8 9l5.5 7.5z" fill="#80C342"/>
      <path d="M8 9 1 17.5h6l5.5-8z" fill="#0076A8" opacity="0.5"/>
    </svg>
  );
}
