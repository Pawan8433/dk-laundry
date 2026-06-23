// Circular DK emblem — an approximation of the real logo (navy ring,
// gold "DK", clothes hanger, "LAUNDRY & DRY CLEANERS" text ring).
// Replace with the real asset by dropping logo.svg/png in /public and
// swapping this for an <img src="/logo.png" />.
export default function Logo({ size = 44, light = false }) {
  const ring = light ? "#ffffff" : "#082A63";
  const gold = "#d9a441";
  const id = "dkring";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="DK Laundry & Dry Cleaners logo"
    >
      <defs>
        <path
          id={id}
          d="M50,50 m-39,0 a39,39 0 1,1 78,0 a39,39 0 1,1 -78,0"
          fill="none"
        />
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke={ring} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={ring} strokeWidth="1" opacity="0.5" />
      <text
        fill={ring}
        fontSize="8.5"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="700"
        letterSpacing="2.2"
      >
        <textPath href={`#${id}`} startOffset="2%">
          LAUNDRY &amp; DRY CLEANERS
        </textPath>
      </text>
      {/* hanger */}
      <g stroke={ring} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 30 q4 0 4 3.4 q0 2.4 -4 3.2" />
        <path d="M28 52 L50 37 L72 52" />
        <path d="M26 52 q24 9 48 0" />
      </g>
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill={gold}
        fontSize="22"
        fontFamily="'Plus Jakarta Sans', serif"
        fontWeight="800"
        letterSpacing="1"
      >
        DK
      </text>
    </svg>
  );
}
