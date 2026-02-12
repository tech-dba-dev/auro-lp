"use client";

import Image from "next/image";
import { useState } from "react";

export default function ModeSection() {
  const [activeTab, setActiveTab] = useState<"dating" | "couple">("dating");

  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-[1710px] mx-auto px-6">
        <div
          className="rounded-[55px] overflow-hidden relative min-h-[700px] lg:min-h-[750px]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),
              linear-gradient(180deg, rgb(64, 152, 190) 23%, rgb(63, 163, 194) 45%, rgb(63, 163, 194) 69%, rgb(48, 163, 201) 82%, rgb(48, 163, 201) 96%),
              linear-gradient(180deg, rgb(71, 140, 163) 23%, rgb(104, 152, 168) 45%, rgb(121, 162, 174) 69%, rgb(38, 137, 170) 82%, rgb(25, 107, 135) 100%)
            `,
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center pt-16 lg:pt-20 px-6">
            <h2 className="text-3xl lg:text-[42px] font-medium uppercase leading-tight text-white-smoke text-center mb-2">
              Find the{" "}
              <span className="inline-flex items-center justify-center bg-teal-light px-4 py-1 rounded-full">
                <span className="font-sagire text-2xl lg:text-[28px] text-white-smoke">
                  mode
                </span>
              </span>{" "}
              that works for you
            </h2>

            {/* Tabs */}
            <div className="mt-4 bg-white-smoke rounded-full p-1 flex w-[400px] lg:w-[480px] h-[56px] lg:h-[60px]">
              <button
                onClick={() => setActiveTab("dating")}
                className={`flex-1 rounded-full text-lg lg:text-xl font-medium transition-all ${
                  activeTab === "dating"
                    ? "bg-teal-light text-white-smoke shadow-lg"
                    : "text-teal"
                }`}
              >
                Dating
              </button>
              <button
                onClick={() => setActiveTab("couple")}
                className={`flex-1 rounded-full text-lg lg:text-xl font-medium transition-all ${
                  activeTab === "couple"
                    ? "bg-teal-light text-white-smoke shadow-lg"
                    : "text-teal"
                }`}
              >
                Couple
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-20 mt-12 gap-12">
            {/* Image placeholder */}
            <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px]">
              <Image
                src="/images/dating-photo.png"
                alt="Dating mode"
                fill
                className="object-contain mix-blend-luminosity"
              />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white-smoke text-xl uppercase text-center">
                placeholder
              </p>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-6 max-w-[500px] lg:pt-8">
              <div className="text-lg lg:text-[22px] leading-relaxed text-white-smoke">
                <p className="mb-6">
                  Dating Mode is designed for people seeking connection with
                  clarity and intention. It supports discovering compatibility
                  beyond surface attraction, helping users navigate dating with
                  more awareness and less noise.
                </p>
                <p>
                  The focus is on relevance, shared direction, and meaningful
                  interaction, rather than speed or volume.
                </p>
              </div>

              <button className="flex items-center gap-3 text-white-smoke text-lg lg:text-[22px] group">
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  width={20}
                  height={10}
                />
                <span>Go deeper</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
