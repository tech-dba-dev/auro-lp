import SwipeCardStack from "./SwipeCardStack";

export default function DatingTodaySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(80px, 7.292vw, 140px) clamp(24px, 4.167vw, 80px)",
        background:
          "linear-gradient(135deg, rgba(118,169,185,0.25) 0%, rgba(118,169,185,0.12) 35%, rgba(244,243,241,0.4) 70%, rgba(244,243,241,0.15) 100%)",
      }}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-center lg:justify-center"
        style={{
          gap: "clamp(48px, 8.906vw, 171px)",
        }}
      >
        {/* Photo cards stack — swipeable */}
        <div
          className="relative shrink-0"
          style={{
            width: "clamp(300px, 31.979vw, 614px)",
            height: "clamp(430px, 44.063vw, 846px)",
          }}
        >
          <SwipeCardStack />
        </div>

        {/* Text content */}
        <div
          className="flex flex-col items-start"
          style={{
            gap: "clamp(12px, 0.781vw, 15px)",
            maxWidth: "clamp(340px, 35.208vw, 676px)",
          }}
        >
          <h2
            className="text-granite font-medium uppercase"
            style={{
              fontSize: "clamp(24px, 2.188vw, 42px)",
              lineHeight: "clamp(32px, 2.865vw, 55px)",
              maxWidth: "clamp(300px, 33.073vw, 635px)",
            }}
          >
            Dating today optimizes for activity, not alignment
          </h2>
          <div
            className="text-granite"
            style={{
              fontSize: "clamp(16px, 1.484vw, 28.49px)",
              lineHeight: "clamp(24px, 2.083vw, 40px)",
            }}
          >
            <p style={{ marginBottom: "clamp(16px, 1.25vw, 24px)" }}>
              Most modern dating platforms are designed to maximise speed,
              volume, and constant interaction. While this increases matches, it
              often reduces clarity, shared intention, and long-term
              compatibility between people.
            </p>
            <p>
              Over time, this leads to decision fatigue, misaligned
              expectations, and a growing sense of disengagement from dating
              altogether.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
