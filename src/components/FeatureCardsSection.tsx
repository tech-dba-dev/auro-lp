/* eslint-disable @next/next/no-img-element */

const features = [
  {
    icon: "/images/icon-matching.svg",
    title: "Intentional\nMatching",
    description:
      "AURO prioritizes alignment and shared intention over volume. Matches are designed to feel relevant, not endless.",
    // Figma: 138w x 101h (displayed landscape). SVG is portrait, needs rotate(90deg).
    // img gets SVG natural size (w=101, h=138), CSS rotates visually to 138x101
    imgW: 101,
    imgH: 138,
    displayH: 101, // visual height after rotation (for container)
    transform: "rotate(90deg)",
  },
  {
    icon: "/images/icon-awareness.svg",
    title: "Guided\nSelf-Awareness",
    description:
      "Through psychology-informed insights and optional symbolic frameworks, AURO helps users better understand themselves and how they relate to others, without labels or pressure.",
    // Figma: 179.33w x 78.3h (displayed landscape). SVG is portrait, needs rotate(90deg).
    // img gets SVG natural size (w=78, h=179), CSS rotates visually to 179x78
    imgW: 78,
    imgH: 179,
    displayH: 78, // visual height after rotation
    transform: "rotate(90deg)",
  },
  {
    icon: "/images/icon-modes.svg",
    title: "Relationship\nModes",
    description:
      "Dating and relationships are not static. AURO adapts to different stages, from dating to partnership, with experiences that evolve alongside you, for you.",
    // Figma: 105.88w x 105.15h (square). No rotation needed.
    imgW: 106,
    imgH: 106,
    displayH: 106,
    transform: undefined,
  },
];

export default function FeatureCardsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(48px, 5.208vw, 100px) clamp(20px, 5.469vw, 105px)",
      }}
    >
      {/* Background gradient blur */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)",
          width: "clamp(700px, 80vw, 1600px)",
          height: "clamp(600px, 50vw, 1000px)",
          borderRadius: "4465px",
          background:
            "linear-gradient(180deg, #85C6DD 2.88%, rgba(106, 161, 180, 0.30) 100%)",
          filter: "blur(347px)",
          opacity: 0.6,
        }}
      />
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          gap: "clamp(40px, 3.854vw, 74px)",
          maxWidth: "1570px",
        }}
      >
        {/* Header */}
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: "clamp(10px, 0.781vw, 15px)" }}
        >
          <h2
            className="text-granite font-medium uppercase"
            style={{
              fontSize: "clamp(24px, 2.188vw, 42px)",
              lineHeight: "clamp(32px, 2.865vw, 55px)",
            }}
          >
            Built to support how people actually relate
          </h2>
          <div
            className="text-granite text-center"
            style={{
              fontSize: "clamp(16px, 1.484vw, 28.49px)",
              lineHeight: "clamp(24px, 2.083vw, 40px)",
              maxWidth: "clamp(340px, 47.292vw, 908px)",
            }}
          >
            <p style={{ marginBottom: "clamp(16px, 1.25vw, 24px)" }}>
              AURO exists to help people approach connection with more clarity,
              intention, and self-understanding. Not just to meet someone, but to
              navigate relationships over time, across different stages and
              needs.
            </p>
            <p>
              It&apos;s designed to stay relevant beyond the first match,
              supporting reflection, alignment, and growth as relationships
              evolve.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="flex flex-col lg:flex-row w-full"
          style={{ gap: "clamp(24px, 3.542vw, 68px)" }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white-smoke flex flex-col items-center text-center flex-1"
              style={{
                borderRadius: "clamp(24px, 2.188vw, 42px)",
                padding: "clamp(32px, 3.021vw, 58px) clamp(20px, 1.719vw, 33px)",
                minHeight: "clamp(350px, 28.646vw, 550px)",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  height: `clamp(${Math.round(feature.displayH * 0.55)}px, ${((feature.displayH / 1920) * 100).toFixed(3)}vw, ${feature.displayH}px)`,
                  width: feature.transform ? `clamp(${Math.round(feature.imgH * 0.55)}px, ${((feature.imgH / 1920) * 100).toFixed(3)}vw, ${feature.imgH}px)` : undefined,
                  marginBottom: "clamp(12px, 1.042vw, 20px)",
                }}
              >
                <img
                  src={feature.icon}
                  alt=""
                  style={{
                    width: `clamp(${Math.round(feature.imgW * 0.55)}px, ${((feature.imgW / 1920) * 100).toFixed(3)}vw, ${feature.imgW}px)`,
                    height: `clamp(${Math.round(feature.imgH * 0.55)}px, ${((feature.imgH / 1920) * 100).toFixed(3)}vw, ${feature.imgH}px)`,
                    ...(feature.transform ? { transform: feature.transform } : {}),
                  }}
                />
              </div>
              <h3
                className="font-sagire text-granite whitespace-pre-line"
                style={{
                  fontSize: "clamp(28px, 2.466vw, 47.35px)",
                  lineHeight: "clamp(34px, 2.904vw, 55.75px)",
                  marginBottom: "clamp(12px, 1.042vw, 20px)",
                  WebkitTextStroke: "0.89px #3C4D47",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-granite"
                style={{
                  fontSize: "clamp(14px, 1.25vw, 24px)",
                  lineHeight: "clamp(22px, 1.771vw, 34px)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
