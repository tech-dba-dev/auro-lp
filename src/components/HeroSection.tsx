/* eslint-disable @next/next/no-img-element */

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-clip rounded-bl-[40px] rounded-br-[40px] lg:rounded-bl-[84px] lg:rounded-br-[84px] min-h-svh lg:min-h-0 lg:aspect-[1920/1678]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none rounded-bl-[40px] rounded-br-[40px] lg:rounded-bl-[84px] lg:rounded-br-[84px]">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          src="/images/hero-bg-2.webp"
        />
      </div>

      {/* ===== MOBILE / TABLET (< 1024px) ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-svh px-6 py-16 lg:hidden gap-10">
        <img alt="Auro" src="/images/logo-nav.svg" style={{ width: "88px", height: "40px" }} />

        <div className="flex flex-col items-center gap-5 text-[#f4f3f1] text-center max-w-[400px]">
          <p className="font-light text-lg leading-[1.4]">
            Not just for meeting someone.
          </p>
          <p
            className="font-sagire text-[26px] sm:text-[32px] leading-[1.25]"
            style={{ WebkitTextStrokeWidth: "0.6px", WebkitTextStrokeColor: "#f4f3f1" }}
          >
            For understanding yourself and how you relate.
          </p>
          <p className="font-light text-lg leading-[1.4]">
            And building connections that last.
          </p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <a
            href="#"
            className="bg-white overflow-clip relative shrink-0"
            style={{ width: "150px", height: "46px", borderRadius: "46px", border: "2px solid #FFF" }}
          >
            <div className="absolute -translate-y-1/2 left-[12px] top-1/2">
              <img alt="" src="/images/playstore.svg" className="w-[22px] h-[26px]" />
            </div>
            <div className="absolute -translate-y-1/2 flex flex-col gap-[1px] items-start left-[42px] top-1/2">
              <p className="font-[family-name:var(--font-inter)] text-[10px] text-black leading-normal">Get in on</p>
              <img alt="Google Play" src="/images/google-play-text.svg" className="w-[82px] h-[17px]" />
            </div>
          </a>
          <a
            href="#"
            className="bg-white overflow-clip relative shrink-0"
            style={{ width: "150px", height: "46px", borderRadius: "46px", border: "2px solid #FFF" }}
          >
            <div className="absolute -translate-y-1/2 left-[12px] top-1/2">
              <img alt="" src="/images/apple.svg" className="w-[20px] h-[24px]" />
            </div>
            <div className="absolute -translate-y-1/2 flex flex-col gap-px items-start left-[40px] top-1/2 w-[95px]">
              <p className="font-[family-name:var(--font-inter)] text-[9px] text-black leading-tight">Download on the</p>
              <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] text-black leading-none tracking-[-0.3px]">App Store</p>
            </div>
          </a>
        </div>
      </div>

      {/* ===== DESKTOP (>= 1024px) ===== */}
      {/* Navbar */}
      <div
        className="hidden lg:flex items-center justify-between absolute z-20"
        style={{ top: "7.45%", left: "8.02%", width: "85.83%" }}
      >
        <div className="flex items-center gap-[42px] opacity-0">
          <div className="flex items-center gap-2">
            <p className="text-[#f4f3f1] text-[28.49px] leading-[42px]">Modes</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0.972168 0.972168L6.97217 6.97217L12.9722 0.972168" stroke="#F4F3F1" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[#f4f3f1] text-[28.49px] leading-[42px]">FAQ</p>
        </div>
        <img alt="Auro" src="/images/logo-nav.svg" style={{ width: "136.195px", height: "62px" }} />
        <div className="flex items-center gap-[42px]">
          <div className="flex items-center gap-2">
            <p className="text-[#f4f3f1] text-[28.49px] leading-[42px]">Modes</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0.972168 0.972168L6.97217 6.97217L12.9722 0.972168" stroke="#F4F3F1" strokeWidth="1.94444" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[#f4f3f1] text-[28.49px] leading-[42px]">FAQ</p>
        </div>
      </div>

      {/* Desktop content — Figma values at 1920px, scaled proportionally */}
      <div
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center z-10"
        style={{ top: "21.81%", gap: "clamp(30px, 2.917vw, 56px)" }}
      >
        <div
          className="flex flex-col items-center text-[#f4f3f1] text-center"
          style={{ width: "min(967.765px, 50.4vw)", gap: "clamp(13px, 1.302vw, 24.99px)" }}
        >
          <p
            className="w-full"
            style={{ fontSize: "clamp(26px, 2.502vw, 48.045px)", fontWeight: 300, lineHeight: 1 }}
          >
            Not just for meeting someone.
          </p>
          <p
            className="font-sagire w-full"
            style={{
              fontSize: "clamp(38px, 3.813vw, 73.212px)",
              lineHeight: "1.234",
              WebkitTextStrokeWidth: "clamp(0.6px, 0.059vw, 1.14px)",
              WebkitTextStrokeColor: "#f4f3f1",
            }}
          >
            For understanding yourself and how you relate.
          </p>
          <p
            className="w-full"
            style={{ fontSize: "clamp(26px, 2.502vw, 48.045px)", fontWeight: 300, lineHeight: 1 }}
          >
            And building connections that last.
          </p>
        </div>

        {/* Store buttons — 254×76 at 1920px, scaled */}
        <div className="flex items-center" style={{ gap: "clamp(10px, 1.011vw, 19.417px)" }}>
          {/* Google Play */}
          <a
            href="#"
            className="bg-white shrink-0 hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden"
            style={{
              width: "clamp(170px, 13.229vw, 254px)",
              height: "clamp(50px, 3.958vw, 76px)",
              padding: "clamp(6px, 0.574vw, 11.02px) clamp(16px, 1.549vw, 29.752px) clamp(5px, 0.53vw, 10.177px) clamp(16px, 1.558vw, 29.902px)",
              gap: "clamp(8px, 0.695vw, 13.34px)",
              borderRadius: "77px",
              border: "2.398px solid #FFF",
            }}
          >
            <img alt="" src="/images/playstore.svg" className="shrink-0" style={{ width: "clamp(26px, 2.084vw, 40.012px)", height: "clamp(30px, 2.386vw, 45.8px)" }} />
            <div className="flex flex-col gap-[2px] items-start min-w-0">
              <p className="font-[family-name:var(--font-inter)] text-black leading-normal" style={{ fontSize: "clamp(12px, 0.993vw, 19.068px)" }}>Get in on</p>
              <img alt="Google Play" src="/images/google-play-text.svg" style={{ width: "clamp(90px, 7.343vw, 140.994px)", height: "clamp(18px, 1.492vw, 28.623px)" }} />
            </div>
          </a>
          {/* App Store */}
          <a
            href="#"
            className="bg-white shrink-0 hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden"
            style={{
              width: "clamp(170px, 13.229vw, 254px)",
              height: "clamp(50px, 3.958vw, 76px)",
              padding: "clamp(6px, 0.574vw, 11.02px) clamp(16px, 1.549vw, 29.752px) clamp(5px, 0.53vw, 10.177px) clamp(16px, 1.558vw, 29.902px)",
              gap: "clamp(8px, 0.695vw, 13.34px)",
              borderRadius: "96px",
              border: "2.398px solid #FFF",
            }}
          >
            <img alt="" src="/images/apple.svg" className="shrink-0" style={{ width: "clamp(24px, 1.932vw, 37.1px)", height: "clamp(28px, 2.323vw, 44.588px)" }} />
            <div className="flex flex-col gap-[1px] items-start text-black min-w-0">
              <p className="font-[family-name:var(--font-inter)] leading-tight" style={{ fontSize: "clamp(10px, 0.87vw, 16.708px)" }}>Download on the</p>
              <p className="font-[family-name:var(--font-inter)] font-medium leading-none" style={{ fontSize: "clamp(16px, 1.318vw, 25.314px)", letterSpacing: "-0.5px" }}>App Store</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
