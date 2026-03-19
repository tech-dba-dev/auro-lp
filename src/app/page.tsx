import HeroSection from "@/components/HeroSection";
import DatingTodaySection from "@/components/DatingTodaySection";
import HowAuroSection from "@/components/HowAuroSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";
import FindModeSection from "@/components/FindModeSection";
import DarkCTASection from "@/components/DarkCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white-smoke overflow-x-hidden">
      {/* Background decorations — camada de fundo com eclipse, planet e gradient */}
      <div
        className="absolute inset-0 w-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Eclipse — grande elipse azul, ocupa toda a largura */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Eclipse.webp"
          alt=""
          style={{
            position: "absolute",
            top: "clamp(500px, 80vw, 1500px)",
            left: "0",
            width: "100%",
            height: "clamp(4200px, 220vw, 4200px)",
            zIndex: 0,
          }}
        />
        {/* Planet — semicírculo colado à direita, por cima do eclipse */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Planet.webp"
          alt=""
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

      {/* Conteúdo — todas as seções vêm por cima do background */}
      <div className="relative mx-auto" style={{ zIndex: 1, maxWidth: "1920px" }}>
        <HeroSection />
        <DatingTodaySection />
        <HowAuroSection />
        <FeatureCardsSection />
        <div style={{ padding: "clamp(24px, 3.125vw, 60px) clamp(20px, 5.469vw, 105px)" }}>
          <div className="mx-auto" style={{ maxWidth: "1710px" }}>
            <FindModeSection />
          </div>
        </div>
        <DarkCTASection />
        <Footer />
      </div>
    </main>
  );
}
