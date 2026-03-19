/* eslint-disable @next/next/no-img-element */

export default function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[14px]">
      <a
        href="#"
        className="flex items-center justify-center bg-white hover:opacity-90 transition-opacity"
        style={{
          height: "clamp(48px, 3.5vw, 60px)",
          width: "clamp(160px, 12vw, 200px)",
          gap: "clamp(8px, 0.6vw, 10px)",
          borderRadius: "77px",
          border: "2px solid #FFF",
          padding: "8px 20px",
        }}
      >
        <img
          src="/images/playstore.svg"
          alt="Google Play"
          style={{ width: "clamp(24px, 1.8vw, 32px)", height: "clamp(28px, 2.1vw, 37px)" }}
        />
        <div className="flex flex-col gap-[2px]">
          <span
            className="text-black font-normal font-[family-name:var(--font-inter)] leading-normal"
            style={{ fontSize: "clamp(9px, 0.65vw, 11px)" }}
          >
            Get in on
          </span>
          <img
            src="/images/google-play-text.svg"
            alt="Google Play"
            style={{ width: "clamp(80px, 6vw, 105px)", height: "clamp(16px, 1.2vw, 22px)" }}
          />
        </div>
      </a>
      <a
        href="#"
        className="flex items-center bg-white hover:opacity-90 transition-opacity"
        style={{
          height: "clamp(48px, 3.5vw, 60px)",
          width: "clamp(160px, 12vw, 200px)",
          gap: "clamp(8px, 0.6vw, 10px)",
          borderRadius: "96px",
          border: "2px solid #FFF",
          padding: "8px 20px",
        }}
      >
        <img
          src="/images/apple.svg"
          alt="App Store"
          style={{ width: "clamp(22px, 1.6vw, 30px)", height: "clamp(26px, 1.9vw, 36px)" }}
        />
        <div className="flex flex-col gap-[1px] font-[family-name:var(--font-inter)]">
          <span
            className="text-black font-normal leading-[1.26]"
            style={{ fontSize: "clamp(8px, 0.6vw, 10px)" }}
          >
            Download on the
          </span>
          <span
            className="text-black font-medium leading-none tracking-[-0.5px]"
            style={{ fontSize: "clamp(13px, 0.95vw, 16px)" }}
          >
            App Store
          </span>
        </div>
      </a>
    </div>
  );
}
