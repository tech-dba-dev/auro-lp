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
    <main className="relative bg-white-smoke overflow-x-hidden">
      {/* Background decorations — camada de fundo com eclipse, planet e gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Eclipse — grande elipse azul/teal, posicionada à esquerda */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/eclipse.svg"
          alt=""
          style={{
            position: "absolute",
            top: "clamp(800px, 80vw, 1536px)",
            left: "clamp(-400px, -35vw, -672px)",
            width: "clamp(1600px, 171.8vw, 3299px)",
            height: "clamp(2200px, 232.6vw, 4465px)",
          }}
        />
        {/* Planet — círculo com textura, posicionado à direita */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/planet.svg"
          alt=""
          style={{
            position: "absolute",
            top: "clamp(680px, 68.3vw, 1311px)",
            left: "clamp(200px, 33.5vw, 643px)",
            width: "clamp(1000px, 108.6vw, 2085px)",
            height: "clamp(1000px, 108.6vw, 2085px)",
          }}
        />
        {/* Gradient — no fundo da página, o footer fica por cima */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gradient.svg"
          alt=""
          style={{
            position: "absolute",
            bottom: 0,
            left: "clamp(-200px, -19.2vw, -368px)",
            width: "clamp(1400px, 148.4vw, 2850px)",
            height: "clamp(1200px, 126.5vw, 2428px)",
          }}
        />
      </div>

      {/* Conteúdo — todas as seções vêm por cima do background */}
      <div className="relative" style={{ zIndex: 1 }}>
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
