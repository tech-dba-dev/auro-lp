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
        {/* Mobile text */}
        <div
          className="lg:hidden flex flex-col"
          style={{
            padding: "clamp(32px, 8vw, 48px) clamp(24px, 6vw, 40px)",
            gap: "12px",
          }}
        >
          <h2
            className="text-granite font-medium uppercase"
            style={{
              fontSize: "clamp(20px, 5vw, 32px)",
              lineHeight: 1.3,
            }}
          >
            How Auro addresses this
          </h2>
          <div
            className="text-granite"
            style={{
              fontSize: "clamp(14px, 3.8vw, 20px)",
              lineHeight: 1.5,
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

          {/* Mobile phone mockup */}
          <div className="flex justify-center" style={{ marginTop: "8px", paddingBottom: "clamp(24px, 6vw, 40px)" }}>
            <div className="relative" style={{ width: "60%" }}>
              {/* Phone frame */}
              <div
                className="bg-granite relative overflow-hidden"
                style={{
                  width: "100%",
                  aspectRatio: "558 / 1174",
                  borderRadius: "clamp(24px, 6vw, 40px)",
                }}
              >
                <div
                  className="absolute overflow-hidden bg-white-smoke"
                  style={{
                    inset: "4px",
                    borderRadius: "clamp(20px, 5.5vw, 36px)",
                  }}
                >
                  <img
                    src="/images/phone-screen-auro.png"
                    alt="Auro app - You matched!"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full"
                  style={{ top: "2.2%", width: "30%", height: "3.5%" }}
                />
                {/* Home indicator */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-granite rounded-full"
                  style={{ bottom: "1%", width: "35%", height: "4px" }}
                />
              </div>
              {/* Side buttons */}
              <div className="absolute pointer-events-none" style={{ top: "18%", left: "0", width: "100%" }}>
                <div className="absolute bg-granite rounded-l-[1px]" style={{ left: "-2px", top: "0", width: "2px", height: "14px" }} />
                <div className="absolute bg-granite rounded-l-[1px]" style={{ left: "-2px", top: "20px", width: "2px", height: "22px" }} />
                <div className="absolute bg-granite rounded-l-[1px]" style={{ left: "-2px", top: "48px", width: "2px", height: "22px" }} />
                <div className="absolute bg-granite rounded-r-[1px]" style={{ right: "-2px", top: "26px", width: "2px", height: "28px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: sized to fit the full phone */}
        <div
          className="hidden lg:block"
          style={{ height: "clamp(520px, 46.875vw, 900px)" }}
        >
          {/* Desktop text — absolutely positioned */}
          <div
            className="absolute z-10 flex flex-col justify-center"
            style={{
              left: "clamp(32px, 6.771vw, 130px)",
              top: "0",
              bottom: "0",
              gap: "clamp(10px, 0.781vw, 15px)",
            }}
          >
            <h2
              className="text-granite font-medium uppercase"
              style={{
                fontSize: "clamp(24px, 2.083vw, 40px)",
                lineHeight: "clamp(32px, 2.865vw, 55px)",
                maxWidth: "clamp(320px, 31.042vw, 596px)",
              }}
            >
              How Auro addresses this
            </h2>
            <div
              className="text-granite"
              style={{
                fontSize: "clamp(16px, 1.484vw, 28.49px)",
                lineHeight: "clamp(24px, 2.083vw, 40px)",
                maxWidth: "clamp(340px, 37.76vw, 725px)",
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
          </div>

          {/* iPhone mockup — fully visible inside the card */}
          <div
            className="absolute"
            style={{
              right: "clamp(40px, 7.24vw, 139px)",
              top: "clamp(24px, 2.083vw, 40px)",
              width: "clamp(200px, 19.792vw, 380px)",
            }}
          >
            {/* Phone frame */}
            <div
              className="bg-granite relative overflow-hidden"
              style={{
                width: "100%",
                aspectRatio: "558 / 1174",
                borderRadius: "clamp(32px, 3.125vw, 60px)",
              }}
            >
              {/* Screen content */}
              <div
                className="absolute overflow-hidden bg-white-smoke"
                style={{
                  inset: "clamp(5px, 0.573vw, 11px)",
                  borderRadius: "clamp(28px, 2.708vw, 52px)",
                }}
              >
                <img
                  src="/images/phone-screen-auro.png"
                  alt="Auro app - You matched!"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Notch */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full"
                style={{
                  top: "clamp(12px, 1.362vw, 26.15px)",
                  width: "clamp(86px, 8.571vw, 164.55px)",
                  height: "clamp(26px, 2.556vw, 49.08px)",
                }}
              />
              {/* Home indicator */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bg-granite rounded-full"
                style={{
                  bottom: "clamp(6px, 0.573vw, 11px)",
                  width: "clamp(100px, 10.163vw, 195.13px)",
                  height: "clamp(3px, 0.272vw, 5.23px)",
                }}
              />
            </div>

            {/* Side buttons */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "clamp(60px, 6.25vw, 120px)",
                left: "0",
                width: "100%",
              }}
            >
              {/* Left buttons */}
              <div
                className="absolute bg-granite rounded-l-[2px]"
                style={{
                  left: "-3px",
                  top: "0",
                  width: "4px",
                  height: "clamp(24px, 2.344vw, 45px)",
                }}
              />
              <div
                className="absolute bg-granite rounded-l-[2px]"
                style={{
                  left: "-3px",
                  top: "clamp(40px, 4.167vw, 80px)",
                  width: "4px",
                  height: "clamp(38px, 3.646vw, 70px)",
                }}
              />
              <div
                className="absolute bg-granite rounded-l-[2px]"
                style={{
                  left: "-3px",
                  top: "clamp(90px, 8.854vw, 170px)",
                  width: "4px",
                  height: "clamp(38px, 3.646vw, 70px)",
                }}
              />
              {/* Right button (power) */}
              <div
                className="absolute bg-granite rounded-r-[2px]"
                style={{
                  right: "-3px",
                  top: "clamp(56px, 5.729vw, 110px)",
                  width: "4px",
                  height: "clamp(48px, 4.688vw, 90px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
