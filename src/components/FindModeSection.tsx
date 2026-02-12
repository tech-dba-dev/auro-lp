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
    <section
      className="relative overflow-hidden"
      style={{
        borderRadius: "clamp(24px, 2.865vw, 55px)",
        padding: "clamp(40px, 3.906vw, 75px) clamp(24px, 3.958vw, 76px) clamp(60px, 5.208vw, 100px)",
        background: isDating
          ? "linear-gradient(180deg, rgb(64, 152, 190) 23%, rgb(63, 163, 194) 45%, rgb(63, 163, 194) 69%, rgb(48, 163, 201) 82%, rgb(48, 163, 201) 96%)"
          : "linear-gradient(180deg, rgb(153, 66, 100) 23%, rgb(185, 84, 123) 45%, rgb(230, 106, 154) 69%, rgb(248, 113, 165) 82%, rgb(233, 78, 138) 100%)",
        transition: "background 0.5s ease",
      }}
    >
      {/* Header */}
      <div
        className="flex flex-col items-center"
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
            className="font-sagire inline-flex items-center justify-center lowercase"
            style={{
              background: isDating ? "#76A9B9" : "#FBE1EC",
              color: isDating ? "#F4F3F1" : "#994264",
              borderRadius: "clamp(24px, 2.469vw, 47.39px)",
              padding: "clamp(2px, 0.215vw, 4.12px) clamp(8px, 0.751vw, 14.42px)",
              fontSize: "clamp(20px, 1.717vw, 32.97px)",
              lineHeight: "clamp(24px, 2.147vw, 41.21px)",
              fontWeight: 300,
              transition: "background 0.3s ease, color 0.3s ease",
            }}
          >
            mode
          </span>{" "}
          that works for you
        </h2>

        {/* Tabs */}
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
              setActiveTab("dating");
              setExpanded(false);
            }}
            className="flex-1 flex items-center justify-center font-medium transition-all duration-300"
            style={{
              height: "100%",
              borderRadius: isDating ? "clamp(36px, 3.594vw, 69px)" : "clamp(8px, 0.625vw, 12px)",
              background: isDating ? "#76A9B9" : "transparent",
              color: isDating ? "#F4F3F1" : "#994264",
              fontSize: "clamp(16px, 1.563vw, 30px)",
              lineHeight: "clamp(24px, 2.188vw, 42px)",
              boxShadow: isDating
                ? "0px 15px 22.5px rgba(0,0,0,0.1), 0px 6px 9px rgba(0,0,0,0.1)"
                : "none",
            }}
          >
            Dating
          </button>
          <button
            onClick={() => {
              setActiveTab("couple");
              setExpanded(false);
            }}
            className="flex-1 flex items-center justify-center font-medium transition-all duration-300"
            style={{
              height: "100%",
              borderRadius: !isDating ? "clamp(36px, 3.594vw, 69px)" : "clamp(8px, 0.625vw, 12px)",
              background: !isDating ? "#FBE1EC" : "transparent",
              color: !isDating ? "#994264" : "#557A86",
              fontSize: "clamp(16px, 1.563vw, 30px)",
              lineHeight: "clamp(24px, 2.188vw, 42px)",
              boxShadow: !isDating
                ? "0px 15px 22.5px rgba(0,0,0,0.1), 0px 6px 9px rgba(0,0,0,0.1)"
                : "none",
            }}
          >
            Couple
          </button>
        </div>
      </div>

      {/* Placeholder image — absolute, bleeds from top into content area */}
      <div
        className="hidden lg:block absolute"
        style={{
          width: "45%",
          aspectRatio: "1",
          left: 0,
          top: expanded ? "50%" : "clamp(80px, 7.813vw, 150px)",
          transform: expanded ? "translateY(-50%)" : undefined,
          transition: "top 0.4s ease, transform 0.4s ease",
          mixBlendMode: isDating ? "luminosity" : undefined,
        }}
      >
        <img
          src={isDating ? "/images/dating-placeholder.png" : "/images/couple-placeholder.png"}
          alt={isDating ? "Dating mode illustration" : "Couple mode illustration"}
          className="w-full h-full object-cover"
        />
        <p
          className="text-white-smoke text-center uppercase font-normal absolute left-1/2 -translate-x-1/2"
          style={{
            fontSize: "clamp(16px, 1.591vw, 30.55px)",
            lineHeight: "clamp(24px, 2.188vw, 42px)",
            bottom: "10%",
          }}
        >
          placeholder
        </p>
      </div>

      {/* Mobile image — in flow */}
      <div
        className="lg:hidden relative mx-auto"
        style={{
          width: "clamp(240px, 60vw, 400px)",
          aspectRatio: "1",
          marginTop: "clamp(16px, 2vw, 32px)",
        }}
      >
        <img
          src={isDating ? "/images/dating-placeholder.png" : "/images/couple-placeholder.png"}
          alt={isDating ? "Dating mode illustration" : "Couple mode illustration"}
          className="w-full h-full object-cover"
          style={{
            mixBlendMode: isDating ? "luminosity" : "normal",
          }}
        />
        <p
          className="text-white-smoke text-center uppercase font-normal absolute left-1/2 -translate-x-1/2"
          style={{
            fontSize: "clamp(16px, 1.591vw, 30.55px)",
            lineHeight: "clamp(24px, 2.188vw, 42px)",
            bottom: "10%",
          }}
        >
          placeholder
        </p>
      </div>

      {/* Text content — right side on desktop */}
      <div
        className="flex flex-col items-start"
        style={{
          gap: "clamp(16px, 1.25vw, 24px)",
          maxWidth: "clamp(300px, 31.198vw, 599px)",
          marginLeft: "52%",
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
                  Dating Mode is designed for people seeking connection with clarity
                  and intention. It supports discovering compatibility beyond surface
                  attraction, helping users navigate dating with more awareness and
                  less noise.
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
  );
}
