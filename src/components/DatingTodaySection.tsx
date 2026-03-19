import SwipeCardStack from "./SwipeCardStack";

export default function DatingTodaySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "clamp(80px, 7.292vw, 140px) clamp(24px, 4.167vw, 80px)",
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
            className="font-sagire text-granite"
            style={{
              fontSize: "clamp(24px, 1.979vw, 38px)",
              lineHeight: "clamp(36px, 2.865vw, 55px)",
              letterSpacing: "0.04em",
              maxWidth: "clamp(300px, 33.073vw, 635px)",
              fontWeight: 600,
              WebkitTextStroke: "1px #436D66",
            }}
          >
            Most apps help you find someone. None of them help you keep showing up.
          </h2>
          <div
            className="text-granite"
            style={{
              fontSize: "clamp(16px, 1.484vw, 28.49px)",
              lineHeight: "clamp(24px, 2.083vw, 40px)",
            }}
          >
            <p>
              Dating platforms prioritise volume. That&apos;s one problem. The bigger
              one is what happens after, when life gets full, communication gets
              hard, and no one taught you how to stay intentional about someone
              you already chose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
