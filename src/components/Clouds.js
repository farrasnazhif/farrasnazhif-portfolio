export default function Clouds({ className = "" }) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full z-10 pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1600 400"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Drop shadow filter */}
          <filter id="cloudShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feOffset in="blur" dx="0" dy="6" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.35"
            />
          </filter>

          {/* Fade gradient for top of clouds */}
          <linearGradient id="fadeTop" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.85" />
            <stop offset="18%" stopColor="#000" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#000" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Background fill */}
        <rect x="0" y="0" width="1600" height="400" fill="#000" />

        {/* Back layer (lighter) */}
        <g transform="translate(0,30)" opacity="0.9">
          <path
            d="
              M -20,260
              C 80,190 180,190 260,240
              C 340,280 420,280 540,230
              C 660,180 740,180 860,240
              C 980,300 1060,300 1160,240
              C 1260,180 1340,180 1520,240
              L 1620,400 L -20,400 Z
            "
            fill="#30330b"
          />
        </g>

        {/* Front layer (darker, with shadow) */}
        <g filter="url(#cloudShadow)">
          <path
            d="
              M -20,300
              C 70,220 160,220 240,280
              C 320,340 420,340 540,280
              C 660,220 760,220 860,290
              C 960,360 1060,360 1180,300
              C 1300,240 1400,240 1620,300
              L 1620,400 L -20,400 Z
            "
            fill="#2b2f0a"
          />
        </g>

        {/* Top fade overlay */}
        <rect
          x="0"
          y="0"
          width="1600"
          height="120"
          fill="url(#fadeTop)"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}
