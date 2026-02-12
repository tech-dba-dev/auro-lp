export default function ImagePlaceholderSection() {
  return (
    <section
      className="relative flex items-center justify-center bg-[#808080]"
      style={{
        height: "clamp(400px, 56.25vw, 1080px)",
        borderRadius: "clamp(24px, 2.865vw, 55px)",
      }}
    >
      {/* Placeholder icon */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#999"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.5 }}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
      </svg>
    </section>
  );
}
