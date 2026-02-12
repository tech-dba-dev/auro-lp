import HeroSection from "@/components/HeroSection";
import DatingTodaySection from "@/components/DatingTodaySection";
import HowAuroSection from "@/components/HowAuroSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";
import FindModeSection from "@/components/FindModeSection";
import ImagePlaceholderSection from "@/components/ImagePlaceholderSection";
import DarkCTASection from "@/components/DarkCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white-smoke">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/eclipse.svg"
          alt=""
          className="absolute top-[1536px] left-[-672px] w-[3299px] h-[4465px]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/planet.svg"
          alt=""
          className="absolute top-[1311px] left-[643px] w-[2085px] h-[2085px]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gradient.svg"
          alt=""
          className="absolute top-[6531px] left-[-368px] w-[2850px] h-[2428px]"
        />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <DatingTodaySection />
        <HowAuroSection />
        <FeatureCardsSection />
        <div style={{ padding: "clamp(24px, 3.125vw, 60px) clamp(20px, 5.469vw, 105px)" }}>
          <div className="mx-auto" style={{ maxWidth: "1710px" }}>
            <FindModeSection />
          </div>
        </div>
        <div style={{ padding: "0 clamp(20px, 5.469vw, 105px) clamp(24px, 3.125vw, 60px)" }}>
          <div className="mx-auto" style={{ maxWidth: "1710px" }}>
            <ImagePlaceholderSection />
          </div>
        </div>
        <DarkCTASection />
        <Footer />
      </div>
    </main>
  );
}
