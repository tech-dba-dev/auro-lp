/* eslint-disable @next/next/no-img-element */

import StoreButtons from "./StoreButtons";

export default function DarkCTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #8DAFB3 0%, #9AB8BA 20%, #A0BDB9 40%, #92B3AF 60%, #84A9A6 80%, #7BA19F 100%)",
        padding:
          "clamp(100px, 14.896vw, 286px) clamp(24px, 5.469vw, 105px) clamp(120px, 17.083vw, 328px)",
      }}
    >
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Star 12 — top-left large (184px at 1414w) */}
        <img
          src="/images/star1.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(92px, 13.014vw, 184px)",
            height: "clamp(92px, 13.014vw, 184px)",
            left: "-5.23%",
            top: "5.06%",
          }}
        />
        {/* Star 21 — top-left small (85px at 1414w) */}
        <img
          src="/images/star5.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(44px, 6.012vw, 85px)",
            height: "clamp(44px, 6.012vw, 85px)",
            left: "3.11%",
            top: "0",
          }}
        />
        {/* Star 18 — bottom-left (108px at 1414w) */}
        <img
          src="/images/star3.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(54px, 7.639vw, 108px)",
            height: "clamp(54px, 7.639vw, 108px)",
            left: "-1.48%",
            bottom: "6.28%",
          }}
        />
        {/* Star 17 — top-right large (143px at 1414w) */}
        <img
          src="/images/star4.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(72px, 10.113vw, 143px)",
            height: "clamp(72px, 10.113vw, 143px)",
            right: "-2.4%",
            top: "15.88%",
          }}
        />
        {/* Star 20 — middle-right (85px at 1414w) */}
        <img
          src="/images/star5.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(44px, 6.012vw, 85px)",
            height: "clamp(44px, 6.012vw, 85px)",
            right: "3.25%",
            top: "36.13%",
          }}
        />
        {/* Star 19 — bottom-right (92px at 1414w) */}
        <img
          src="/images/star2.svg"
          alt=""
          className="absolute mix-blend-color-dodge"
          style={{
            width: "clamp(46px, 6.507vw, 92px)",
            height: "clamp(46px, 6.507vw, 92px)",
            right: "4.67%",
            bottom: "5.58%",
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
        <div>
          <h2
            className="text-white-smoke font-medium uppercase"
            style={{
              fontSize: "clamp(24px, 2.188vw, 42px)",
              lineHeight: "clamp(36px, 3.75vw, 72px)",
            }}
          >
            You&apos;ve seen how AURO approaches connection.
          </h2>
          <p
            className="text-white-smoke"
            style={{
              fontSize: "clamp(20px, 1.667vw, 32px)",
              lineHeight: "clamp(30px, 3.75vw, 72px)",
            }}
          >
            Join early access and experience it for yourself
          </p>
        </div>
        <StoreButtons />
      </div>
    </section>
  );
}
