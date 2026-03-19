/* eslint-disable @next/next/no-img-element */

export default function BgTestPage() {
  return (
    <main
      className="relative overflow-x-hidden"
      style={{ backgroundColor: "#F4F3F1" }}
    >
      {/* ── Background decorations ── */}
      <div
        className="absolute inset-0 w-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Eclipse — grande elipse azul, começa abaixo do hero, cobre várias seções */}
        <img
          src="/images/Eclipse.webp"
          alt="Eclipse"
          style={{
            position: "absolute",
            top: "clamp(500px, 80vw, 1500px)",
            left: "0",
            width: "100%",
            height: "clamp(2000px, 160vw, 3100px)",
            zIndex: 0,
          }}
        />
        {/* Planet — semicírculo colado à direita, por cima do eclipse */}
        <img
          src="/images/Planet.webp"
          alt="Planet"
          style={{
            position: "absolute",
            top: "clamp(500px, 80vw, 1500px)",
            right: "clamp(-300px, -15vw, -280px)",
            width: "clamp(1000px, 70vw, 1340px)",
            height: "clamp(1400px, 110vw, 2100px)",
            zIndex: 1,
          }}
        />
      </div>

      {/* ── Content sections (placeholder blocks) ── */}
      <div className="relative" style={{ zIndex: 1 }}>

        {/* 1 — HeroSection */}
        <section
          className="relative w-full overflow-clip rounded-bl-[40px] rounded-br-[40px] lg:rounded-bl-[84px] lg:rounded-br-[84px] min-h-svh lg:min-h-0 lg:aspect-[1920/1678]"
          style={{
            border: "2px dashed rgba(85,122,134,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={label}>1 — HeroSection</span>
        </section>

        {/* 2 — DatingTodaySection */}
        <section
          className="relative overflow-hidden"
          style={{
            padding: "clamp(80px, 7.292vw, 140px) clamp(24px, 4.167vw, 80px)",
            minHeight: "clamp(590px, 58.333vw, 1120px)",
            border: "2px dashed rgba(85,122,134,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={label}>2 — DatingTodaySection</span>
        </section>

        {/* 3 — HowAuroSection */}
        <section
          className="relative"
          style={{
            padding: "clamp(24px, 3.125vw, 60px) clamp(20px, 5.469vw, 105px)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              borderRadius: "clamp(24px, 2.865vw, 55px)",
              maxWidth: "1710px",
              border: "2px dashed rgba(85,122,134,0.5)",
              padding: "clamp(40px, 4vw, 80px)",
              minHeight: "clamp(400px, 40vw, 800px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={label}>3 — HowAuroSection (custard card)</span>
          </div>
        </section>

        {/* 4 — FeatureCardsSection */}
        <section
          className="relative overflow-hidden"
          style={{
            padding: "clamp(48px, 5.208vw, 100px) clamp(20px, 5.469vw, 105px)",
            border: "2px dashed rgba(85,122,134,0.5)",
          }}
        >
          <div
            className="mx-auto flex flex-col items-center"
            style={{ gap: "clamp(40px, 3.854vw, 74px)", maxWidth: "1570px" }}
          >
            <span style={label}>4 — FeatureCardsSection</span>
            <div className="flex flex-col lg:flex-row w-full" style={{ gap: "clamp(20px, 1.5vw, 30px)" }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    borderRadius: "clamp(24px, 2.188vw, 42px)",
                    padding: "clamp(32px, 3.021vw, 58px) clamp(20px, 1.719vw, 33px)",
                    minHeight: "clamp(350px, 28.646vw, 550px)",
                    border: "2px dashed rgba(85,122,134,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ ...label, fontSize: "14px" }}>Card {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — FindModeSection */}
        <div style={{ padding: "clamp(24px, 3.125vw, 60px) clamp(20px, 5.469vw, 105px)" }}>
          <div className="mx-auto" style={{ maxWidth: "1710px" }}>
            <section
              className="relative overflow-hidden"
              style={{
                borderRadius: "clamp(24px, 2.865vw, 55px)",
                padding: "clamp(40px, 3.906vw, 75px) clamp(24px, 3.958vw, 76px) clamp(60px, 5.208vw, 100px)",
                border: "2px dashed rgba(85,122,134,0.5)",
                minHeight: "clamp(500px, 45vw, 900px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={label}>5 — FindModeSection</span>
            </section>
          </div>
        </div>

        {/* 6 — ImagePlaceholderSection */}
        <div style={{ padding: "0 clamp(20px, 5.469vw, 105px) clamp(24px, 3.125vw, 60px)" }}>
          <div className="mx-auto" style={{ maxWidth: "1710px" }}>
            <section
              className="relative flex items-center justify-center"
              style={{
                height: "clamp(400px, 56.25vw, 1080px)",
                borderRadius: "clamp(24px, 2.865vw, 55px)",
                border: "2px dashed rgba(85,122,134,0.5)",
              }}
            >
              <span style={label}>6 — ImagePlaceholderSection</span>
            </section>
          </div>
        </div>

        {/* 7 — DarkCTASection — gradient + noise direto via CSS */}
        <section
          className="relative overflow-hidden"
          style={{
            padding: "clamp(100px, 14.896vw, 286px) clamp(24px, 5.469vw, 105px) clamp(200px, 22vw, 422px)",
            background: "linear-gradient(180deg, #79C3AE 0%, #3C4D47 97%)",
            opacity: 0.86,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Noise overlay */}
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.55"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.25" />
              </feComponentTransfer>
              <feBlend in="SourceGraphic" mode="normal" />
            </filter>
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              filter: "url(#noise)",
              backgroundColor: "transparent",
              mixBlendMode: "overlay",
            }}
          />
          <span style={{ ...label, color: "#F4F3F1", position: "relative", zIndex: 1 }}>
            7 — DarkCTASection (CSS gradient + noise)
          </span>
        </section>

        {/* 8 — Footer */}
        <footer
          className="relative"
          style={{
            backgroundColor: "#F4F3F1",
            borderRadius: "clamp(40px, 4.375vw, 84px) clamp(40px, 4.375vw, 84px) 0 0",
            marginTop: "clamp(-100px, -10vw, -192px)",
            zIndex: 20,
            border: "2px dashed rgba(85,122,134,0.5)",
          }}
        >
          <div
            className="mx-auto"
            style={{
              maxWidth: "1820px",
              padding: "clamp(48px, 5vw, 96px) clamp(24px, 1.779vw, 34.14px) clamp(48px, 5vw, 96px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={label}>8 — Footer (z-20, por cima do gradient)</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

const label: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "clamp(16px, 1.5vw, 28px)",
  fontWeight: "bold",
  color: "#557A86",
  textAlign: "center",
};
