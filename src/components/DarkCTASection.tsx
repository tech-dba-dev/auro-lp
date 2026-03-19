/* eslint-disable @next/next/no-img-element */

import StoreButtons from "./StoreButtons";

export default function DarkCTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #79C3AE 0%, #3C4D47 97%)",
        opacity: 0.86,
        padding:
          "clamp(100px, 14.896vw, 286px) clamp(24px, 5.469vw, 105px) clamp(200px, 22vw, 422px)",
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
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left — large */}
        <img
          src="/images/star1.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(80px, 10.417vw, 200px)",
            height: "clamp(80px, 10.417vw, 200px)",
            left: "3%",
            top: "8%",
          }}
        />
        {/* Top-left — small */}
        <img
          src="/images/star5.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(40px, 5.208vw, 100px)",
            height: "clamp(40px, 5.208vw, 100px)",
            left: "14%",
            top: "5%",
          }}
        />
        {/* Top-right — large */}
        <img
          src="/images/star4.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(70px, 9.375vw, 180px)",
            height: "clamp(70px, 9.375vw, 180px)",
            right: "2%",
            top: "6%",
          }}
        />
        {/* Mid-right — small */}
        <img
          src="/images/star5.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(40px, 5.208vw, 100px)",
            height: "clamp(40px, 5.208vw, 100px)",
            right: "6%",
            top: "38%",
          }}
        />
        {/* Bottom-left — medium */}
        <img
          src="/images/star3.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(50px, 6.771vw, 130px)",
            height: "clamp(50px, 6.771vw, 130px)",
            left: "5%",
            bottom: "12%",
          }}
        />
        {/* Bottom-right — medium */}
        <img
          src="/images/star2.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(50px, 6.771vw, 130px)",
            height: "clamp(50px, 6.771vw, 130px)",
            right: "5%",
            bottom: "10%",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center mx-auto"
        style={{
          gap: "clamp(24px, 2.188vw, 42px)",
          maxWidth: "1368px",
        }}
      >
        <h2
          className="text-white-smoke font-sagire"
          style={{
            fontSize: "clamp(32px, 3.802vw, 73px)",
            lineHeight: "clamp(40px, 4.688vw, 90px)",
            fontWeight: 400,
          }}
        >
          The relationship doesn&apos;t start at the match.
          <br />
          And it doesn&apos;t end there either.
        </h2>
        <button
          className="font-outfit"
          style={{
            backgroundColor: "#3C4D47",
            color: "#F4F3F1",
            width: "clamp(180px, 13.646vw, 262px)",
            height: "clamp(48px, 3.958vw, 76px)",
            borderRadius: "9999px",
            fontSize: "clamp(18px, 1.51vw, 29px)",
            fontWeight: 400,
            border: "none",
            cursor: "pointer",
          }}
        >
          Join the waitlist
        </button>
      </div>
    </section>
  );
}
