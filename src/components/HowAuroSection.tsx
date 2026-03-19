/* eslint-disable @next/next/no-img-element */

export default function HowAuroSection() {
  return (
    <section
      className="relative"
      style={{
        padding: "clamp(24px, 3.125vw, 60px) clamp(20px, 5.469vw, 105px)",
      }}
    >
      {/* Custard card */}
      <div
        className="bg-custard overflow-hidden relative mx-auto"
        style={{
          borderRadius: "clamp(24px, 2.865vw, 55px)",
          maxWidth: "1710px",
        }}
      >
        {/* Background image */}
        <img
          src="/images/Frame 498.webp"
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ userSelect: "none" }}
        />

        {/* Mobile layout */}
        <div
          className="relative z-10 lg:hidden flex flex-col"
          style={{
            padding: "clamp(32px, 8vw, 48px) clamp(24px, 6vw, 40px) 0",
            gap: "clamp(12px, 3vw, 20px)",
          }}
        >
          <h2
            className="font-sagire"
            style={{
              fontSize: "clamp(20px, 5vw, 32px)",
              lineHeight: 1.3,
              color: "#3C4D47",
              fontWeight: 600,
              WebkitTextStroke: "1px #436D66",
            }}
          >
            How AURO addresses this
          </h2>
          <div
            style={{
              fontSize: "clamp(14px, 3.8vw, 20px)",
              lineHeight: 1.5,
              color: "#2F2F2F",
            }}
          >
            <p style={{ marginBottom: "12px" }}>
              AURO reframes dating as a process of understanding rather than
              selection. Instead of prioritising quantity, it supports clarity of
              intention, meaningful compatibility, and relationships that can
              evolve over time.
            </p>
            <p>
              By combining psychological insight with optional symbolic
              frameworks, AURO provides structure without prescribing outcomes,
              allowing people to connect with more awareness and less noise.
            </p>
          </div>
          {/* Join the waitlist button */}
          <button
            className="font-outfit"
            style={{
              backgroundColor: "#3C4D47",
              color: "#F4F3F1",
              height: "clamp(44px, 10vw, 60px)",
              paddingInline: "clamp(20px, 5vw, 32px)",
              borderRadius: "9999px",
              fontSize: "clamp(16px, 4vw, 22px)",
              fontWeight: 400,
              border: "none",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Join the waitlist
          </button>

          {/* Mobile phone image — colado embaixo, overflow visível */}
          <div className="flex justify-center" style={{ marginTop: "16px" }}>
            <img
              src="/images/iPhone 16 Pro Max.png"
              alt="Auro app - You matched!"
              draggable={false}
              className="pointer-events-none select-none"
              style={{
                width: "50%",
                maxWidth: "240px",
                height: "auto",
                userSelect: "none",
              }}
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div
          className="relative z-10 hidden lg:block"
          style={{ height: "clamp(520px, 46.875vw, 900px)" }}
        >
          {/* Desktop text */}
          <div
            className="absolute flex flex-col justify-center"
            style={{
              left: "clamp(32px, 6.771vw, 130px)",
              top: "0",
              bottom: "0",
              gap: "clamp(24px, 2.083vw, 40px)",
            }}
          >
            <h2
              className="font-sagire"
              style={{
                fontSize: "clamp(24px, 1.979vw, 38px)",
                lineHeight: 1.3,
                maxWidth: "clamp(320px, 31.042vw, 596px)",
                color: "#3C4D47",
                fontWeight: 600,
                WebkitTextStroke: "1px #436D66",
              }}
            >
              How AURO addresses this
            </h2>
            <div
              style={{
                fontSize: "clamp(16px, 1.484vw, 28.49px)",
                lineHeight: "clamp(24px, 2.083vw, 40px)",
                maxWidth: "clamp(340px, 37.76vw, 725px)",
                color: "#2F2F2F",
              }}
            >
              <p style={{ marginBottom: "clamp(16px, 1.25vw, 24px)" }}>
                AURO reframes dating as a process of understanding rather than
                selection. Instead of prioritising quantity, it supports clarity
                of intention, meaningful compatibility, and relationships that
                can evolve over time.
              </p>
              <p>
                By combining psychological insight with optional symbolic
                frameworks, AURO provides structure without prescribing
                outcomes, allowing people to connect with more awareness and
                less noise.
              </p>
            </div>
            {/* Join the waitlist button */}
            <button
              className="font-outfit"
              style={{
                backgroundColor: "#3C4D47",
                color: "#F4F3F1",
                height: "clamp(48px, 4.115vw, 79px)",
                paddingInline: "clamp(20px, 1.823vw, 35px)",
                borderRadius: "9999px",
                fontSize: "clamp(16px, 1.302vw, 25px)",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Join the waitlist
            </button>
          </div>

          {/* iPhone image */}
          <img
            src="/images/iPhone 16 Pro Max.png"
            alt="Auro app - You matched!"
            draggable={false}
            className="absolute pointer-events-none select-none"
            style={{
              right: "clamp(40px, 7.24vw, 139px)",
              bottom: "0",
              width: "clamp(250px, 29.3vw, 562px)",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}
