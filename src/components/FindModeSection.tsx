/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const datingFeatures = [
  {
    title: "Intentional Matching",
    description:
      "AURO prioritizes alignment and shared intention over volume. Matches are designed to feel relevant, not endless",
  },
  {
    title: "Guided Discovery",
    description:
      "Light prompts and insights that help users understand themselves and others more clearly",
  },
  {
    title: "Reduced Noise",
    description:
      "Design choices that limit decision fatigue and comparison",
  },
  {
    title: "Clarity of Intention",
    description:
      "Space to express what you're looking for, without pressure or performance",
  },
];

const coupleFeatures = [
  {
    title: "Shared Insight",
    description:
      "Tools that help couples reflect on patterns, dynamics, and communication",
  },
  {
    title: "Relationship Alignment",
    description:
      "Support for navigating expectations, values, and long-term direction together",
  },
  {
    title: "Ongoing Relevance",
    description:
      "Designed to be used beyond milestones, as a continuous support layer",
  },
  {
    title: "Non-prescriptive Guidance",
    description:
      "Encourages reflection and dialogue without instruction or judgement",
  },
];

export default function FindModeSection() {
  const [activeTab, setActiveTab] = useState<"dating" | "couple">("dating");
  const [expanded, setExpanded] = useState(false);

  const isDating = activeTab === "dating";

  return (
    <div className="relative">
    <section
      className="relative overflow-hidden"
      style={{
        borderRadius: "clamp(24px, 2.865vw, 55px)",
        padding: "clamp(40px, 3.906vw, 75px) clamp(24px, 3.958vw, 76px) clamp(60px, 5.208vw, 100px)",
        background: isDating
          ? "linear-gradient(180deg, #4098BE 1%, #3FA3C2 30%, #3FA3C2 61%, #30A3C9 77%, #30A3C9 95%)"
          : "linear-gradient(180deg, rgb(153, 66, 100) 23%, rgb(185, 84, 123) 45%, rgb(230, 106, 154) 69%, rgb(248, 113, 165) 82%, rgb(233, 78, 138) 100%)",
        transition: "background 0.5s ease",
      }}
    >
      {/* Noise overlay */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="noise-find">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" mode="normal" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          filter: "url(#noise-find)",
          backgroundColor: "transparent",
          mixBlendMode: "overlay",
          borderRadius: "inherit",
        }}
      />

      {/* Header */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{ gap: "clamp(8px, 0.677vw, 13px)" }}
      >
        {/* Title */}
        <h2
          className="text-white-smoke font-medium uppercase text-center"
          style={{
            fontSize: "clamp(24px, 2.188vw, 42px)",
            lineHeight: "clamp(36px, 3.405vw, 65.39px)",
          }}
        >
          Find the{" "}
          <span
            className="font-sagire inline-flex items-center justify-center lowercase relative overflow-hidden"
            style={{
              background: isDating ? "#557A86" : "#FBE1EC",
              color: isDating ? "#F4F3F1" : "#994264",
              borderRadius: "clamp(16px, 1.667vw, 32px)",
              width: "clamp(80px, 7.083vw, 136px)",
              height: "clamp(30px, 2.656vw, 51px)",
              fontSize: "clamp(18px, 1.719vw, 33px)",
              lineHeight: 1,
              fontWeight: 400,
              transition: "background 0.3s ease",
              verticalAlign: "text-top",
              position: "relative",
              top: "1px",
            }}
          >
            mode
          </span>{" "}
          that works for you
        </h2>

        {/* Toggle */}
        <div
          className="bg-white-smoke flex items-center"
          style={{
            borderRadius: "clamp(32px, 3.047vw, 58.5px)",
            padding: "clamp(3px, 0.234vw, 4.5px)",
            width: "clamp(320px, 31.25vw, 600px)",
            height: "clamp(44px, 3.75vw, 72px)",
          }}
        >
          <button
            onClick={() => {
              setActiveTab("couple");
              setExpanded(false);
            }}
            className="relative flex-1 flex items-center justify-center font-medium transition-all duration-300 overflow-hidden"
            style={{
              height: "100%",
              borderRadius: "clamp(28px, 2.8vw, 54px)",
              background: !isDating ? "#FBE1EC" : "transparent",
              color: !isDating ? "#994264" : "#557A86",
              fontSize: "clamp(16px, 1.563vw, 30px)",
              lineHeight: "clamp(24px, 2.188vw, 42px)",
              boxShadow: !isDating
                ? "0px 15px 22.5px -4.5px rgba(0,0,0,0.1)"
                : "none",
            }}
          >
            {!isDating && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  filter: "url(#noise-find)",
                  backgroundColor: "transparent",
                  mixBlendMode: "overlay",
                  borderRadius: "inherit",
                }}
              />
            )}
            <span className="relative z-10">Couple</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("dating");
              setExpanded(false);
            }}
            className="relative flex-1 flex items-center justify-center font-medium transition-all duration-300 overflow-hidden"
            style={{
              height: "100%",
              borderRadius: "clamp(28px, 2.8vw, 54px)",
              background: isDating ? "#557A86" : "transparent",
              color: isDating ? "#F4F3F1" : "#557A86",
              fontSize: "clamp(16px, 1.563vw, 30px)",
              lineHeight: "clamp(24px, 2.188vw, 42px)",
              boxShadow: isDating
                ? "0px 15px 22.5px -4.5px rgba(0,0,0,0.15)"
                : "none",
            }}
          >
            {/* Noise on active dating button */}
            {isDating && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  filter: "url(#noise-find)",
                  backgroundColor: "transparent",
                  mixBlendMode: "overlay",
                  borderRadius: "inherit",
                }}
              />
            )}
            <span className="relative z-10">Dating</span>
          </button>
        </div>
      </div>

      {/* Dating illustration — desktop, collapsed */}
      {isDating && !expanded && (
        <div
          className="hidden lg:flex absolute items-end justify-center pointer-events-none"
          style={{
            left: "0",
            width: "52%",
            bottom: "clamp(20px, 3vw, 60px)",
            zIndex: 1,
          }}
        >
          <img
            src="/images/IMG_0558-1.webp"
            alt="Dating mode illustration"
            draggable={false}
            className="pointer-events-none select-none"
            style={{
              width: "clamp(280px, 28vw, 540px)",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
      )}

      {/* Dating illustration — desktop, expanded */}
      {isDating && expanded && (
        <div
          className="hidden lg:flex absolute justify-center pointer-events-none"
          style={{
            left: "0",
            width: "52%",
            top: "55%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <img
            src="/images/IMG_0558-1.webp"
            alt="Dating mode illustration"
            draggable={false}
            className="pointer-events-none select-none"
            style={{
              width: "clamp(280px, 28vw, 540px)",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
      )}

      {/* Couple illustration — desktop, collapsed */}
      {!isDating && !expanded && (
        <div
          className="hidden lg:flex absolute items-end justify-center pointer-events-none"
          style={{
            left: "0",
            width: "52%",
            bottom: "-27.5%",
            zIndex: 1,
          }}
        >
          <img
            src="/images/IMG_0558-2.webp"
            alt="Couple mode illustration"
            draggable={false}
            className="pointer-events-none select-none"
            style={{
              width: "clamp(280px, 28vw, 540px)",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
      )}

      {/* Couple illustration — desktop, expanded */}
      {!isDating && expanded && (
        <div
          className="hidden lg:flex absolute justify-center pointer-events-none"
          style={{
            left: "0",
            width: "52%",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <img
            src="/images/IMG_0558-2.webp"
            alt="Couple mode illustration"
            draggable={false}
            className="pointer-events-none select-none"
            style={{
              width: "clamp(280px, 28vw, 540px)",
              height: "auto",
              userSelect: "none",
            }}
          />
        </div>
      )}

      {/* Mode illustration — mobile, in flow */}
      <div
        className="lg:hidden flex justify-center"
        style={{
          marginTop: "clamp(16px, 2vw, 32px)",
        }}
      >
        <img
          src={isDating ? "/images/IMG_0558-1.webp" : "/images/IMG_0558-2.webp"}
          alt={isDating ? "Dating mode illustration" : "Couple mode illustration"}
          draggable={false}
          className="pointer-events-none select-none"
          style={{
            width: "clamp(200px, 50vw, 340px)",
            height: "auto",
            userSelect: "none",
          }}
        />
      </div>

      {/* Text content — right side on desktop, centered on mobile */}
      <div
        className="find-mode-text relative z-10 flex flex-col items-start"
        style={{
          gap: "clamp(16px, 1.25vw, 24px)",
          marginTop: "clamp(30px, 7.292vw, 140px)",
        }}
      >
          {/* Description text */}
          <div
            className="text-white-smoke"
            style={{
              fontSize: "clamp(16px, 1.484vw, 28.49px)",
              lineHeight: "clamp(24px, 1.979vw, 38px)",
            }}
          >
            {isDating ? (
              <>
                <p style={{ marginBottom: "clamp(16px, 1.25vw, 24px)" }}>
                  For those who are done swiping into a void. Dating Mode helps you
                  find someone worth choosing, by understanding what you actually
                  need before you find it.
                </p>
                <p>
                  The focus is on relevance, shared direction, and meaningful
                  interaction, rather than speed or volume.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "clamp(16px, 1.25vw, 24px)" }}>
                  Couple Mode is designed for people already in a relationship who
                  want to grow with more awareness and intention. It supports
                  reflection, communication, and alignment over time, recognising
                  that relationships evolve rather than remain static.
                </p>
                <p>
                  The focus shifts from matching to understanding and shared growth,
                  while building something longlasting.
                </p>
              </>
            )}
          </div>

          {/* Expandable feature cards — both modes */}
          {expanded && (
            <div
              className="flex flex-col"
              style={{ gap: "clamp(16px, 1.927vw, 37px)" }}
            >
              {(isDating ? datingFeatures : coupleFeatures).map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white-smoke flex items-center"
                  style={{
                    borderRadius: "clamp(20px, 2.135vw, 41px)",
                    padding: "clamp(20px, 2.083vw, 40px)",
                    gap: "clamp(16px, 2.24vw, 43px)",
                  }}
                >
                  <img
                    src={isDating ? "/images/heart-teal.svg" : "/images/heart-pink.svg"}
                    alt=""
                    style={{
                      width: "clamp(24px, 2.146vw, 41.19px)",
                      height: "clamp(20px, 1.841vw, 35.35px)",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ color: isDating ? "#557A86" : "#994264" }}>
                    <p
                      className="font-medium"
                      style={{
                        fontSize: "clamp(16px, 1.25vw, 24px)",
                        lineHeight: "clamp(24px, 1.979vw, 38px)",
                      }}
                    >
                      {feature.title}
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(14px, 1.042vw, 20px)",
                        lineHeight: "clamp(20px, 1.563vw, 30px)",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Go deeper / See less button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-white-smoke"
            style={{
              gap: "clamp(8px, 0.625vw, 12px)",
              fontSize: "clamp(16px, 1.484vw, 28.49px)",
              lineHeight: "clamp(22px, 1.873vw, 35.96px)",
              padding: "clamp(6px, 0.625vw, 12px) clamp(12px, 1.249vw, 23.97px)",
            }}
          >
            <img
              src="/images/chevron-down.svg"
              alt=""
              style={{
                width: "clamp(12px, 1.042vw, 20px)",
                height: "clamp(6px, 0.521vw, 10px)",
                transform: expanded ? "rotate(180deg)" : undefined,
                transition: "transform 0.3s ease",
              }}
            />
            {expanded ? "See less" : "Go deeper"}
          </button>
        </div>
    </section>

    </div>
  );
}
