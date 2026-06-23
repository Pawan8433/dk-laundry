// Minimal line icons (stroke = currentColor) for services & features.
const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const PATHS = {
  suit: <><path d="M8 3l4 4 4-4" /><path d="M8 3l-3 2v15a1 1 0 001 1h12a1 1 0 001-1V5l-3-2" /><path d="M12 7v9" /></>,
  iron: <><path d="M3 14a8 8 0 018-8h7a3 3 0 013 3v5H3z" /><path d="M3 18h12" /><path d="M14 6V4" /></>,
  fold: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10h16" /><path d="M9 5v5" /></>,
  scale: <><path d="M12 4v16" /><path d="M5 8h14" /><path d="M5 8l-2.5 6a3 3 0 005 0L5 8z" /><path d="M19 8l-2.5 6a3 3 0 005 0L19 8z" /></>,
  shoe: <><path d="M3 16v-3l5-2 3 2h5a4 4 0 014 4v1H3z" /><path d="M8 11l1.5-2" /></>,
  needle: <><path d="M4 20l9-9" /><path d="M13 11l5-5a2.8 2.8 0 00-4-4l-5 5" /><circle cx="6" cy="18" r="1.4" /></>,
  bolt: <><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" /></>,
  team: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0112 0" /><path d="M16 6a3 3 0 010 6" /><path d="M18 14a6 6 0 013 5" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></>,
  leaf: <><path d="M5 19C5 9 12 5 20 5c0 8-4 15-14 15z" /><path d="M5 19c3-5 7-8 12-10" /></>,
  tag: <><path d="M3 12l9-9 9 9-9 9-9-9z" /><circle cx="8.5" cy="8.5" r="1.2" /></>,
  truck: <><rect x="2" y="7" width="12" height="9" rx="1.5" /><path d="M14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
  pin: <><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <><path d="M5 4h4l1.5 5-2 1.5a11 11 0 005 5l1.5-2 5 1.5v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  drop: <><path d="M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z" /><path d="M9 14a3 3 0 003 3" /></>,
  palette: <><path d="M12 3a9 9 0 100 18c1.2 0 2-.9 2-2 0-.6-.3-1-.7-1.4-.4-.4-.6-.8-.6-1.3 0-1 .8-1.8 1.8-1.8H16a5 5 0 005-5c0-3.6-4-6.5-9-6.5z" /><circle cx="7.5" cy="11" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16.5" cy="11" r="1" /></>,
  check: <><path d="M5 12l5 5L20 6" /></>,
  back: <><path d="M15 5l-7 7 7 7" /></>,
};

export default function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...P} aria-hidden="true">
      {PATHS[name] || PATHS.fold}
    </svg>
  );
}
