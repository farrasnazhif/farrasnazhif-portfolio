export default function NextIcon({ size = 28, color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill={color}
    >
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c14.3 0 27.4-4.8 38-12.9L49.4 37.6v53.9h8.3V49.5l44.5 61.1c15.8-11.7 26.1-30.5 26.1-51.6C128 28.7 99.3 0 64 0z" />
    </svg>
  );
}
