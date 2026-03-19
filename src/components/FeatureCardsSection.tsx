/* eslint-disable @next/next/no-img-element */

const features = [
  {
    icon: "/images/Frame-447.webp",
    title: "Intentional\nMatching",
    description:
      "Less noise. More signal. Matches based on how you actually relate, not just who's nearby.",
  },
  {
    icon: "/images/Frame-454.webp",
    title: "Guided\nSelf-Awareness",
    description:
      "Prompts and reflections that help you understand your patterns, how you communicate, what you need, how you show up under pressure.",
  },
  {
    icon: "/images/Frame-491.webp",
    title: "Relationship\nModes",
    description:
      "One app for the whole relationship. Whether you're still finding each other or already building something, AURO moves with you.",
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
            className="font-sagire text-granite"
            style={{
              fontSize: "clamp(24px, 2.188vw, 42px)",
              lineHeight: "clamp(32px, 2.865vw, 55px)",
              fontWeight: 600,
              WebkitTextStroke: "1px #436D66",
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
              AURO is designed to support connection with more awareness and
              context. Not just to help people meet, but to help them understand
              how they relate, over time and across different stages.
            </p>
            <p>
              It&apos;s built to remain relevant beyond the first match,
              supporting reflection and growth as relationships evolve.
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
                padding:
                  "clamp(32px, 3.021vw, 58px) clamp(20px, 1.719vw, 33px)",
                minHeight: undefined,
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  marginBottom: "clamp(12px, 1.042vw, 20px)",
                }}
              >
                <img
                  src={feature.icon}
                  alt=""
                  draggable={false}
                  className="pointer-events-none select-none"
                  style={{
                    height: "clamp(50px, 5.5vw, 106px)",
                    width: "auto",
                    userSelect: "none",
                  }}
                />
              </div>
              <h3
                className="font-sagire text-granite whitespace-pre-line"
                style={{
                  fontSize: "clamp(28px, 2.448vw, 47px)",
                  lineHeight: "clamp(34px, 2.865vw, 55px)",
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
