/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <footer
      className="bg-white-smoke relative z-20"
      style={{
        borderRadius: "clamp(40px, 4.375vw, 84px) clamp(40px, 4.375vw, 84px) 0 0",
        marginTop: "clamp(-40px, -4.375vw, -84px)",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1820px",
          padding:
            "clamp(48px, 5vw, 96px) clamp(24px, 1.779vw, 34.14px) clamp(48px, 5vw, 96px)",
        }}
      >
        {/* Logo + Name */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center"
            style={{ gap: "clamp(20px, 2.083vw, 40px)" }}
          >
            <img
              src="/images/logo.svg"
              alt="Auro"
              style={{
                width: "clamp(44px, 4.5vw, 86.41px)",
                height: "clamp(50px, 5.078vw, 97.51px)",
              }}
            />
            <div
              className="text-teal"
              style={{
                fontSize: "clamp(16px, 1.484vw, 28.49px)",
                lineHeight: "clamp(20px, 1.779vw, 34.14px)",
              }}
            >
              <p>Auro</p>
              <p>social media</p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div
          style={{
            margin: "clamp(36px, 3.558vw, 68.29px) 0",
          }}
        >
          <div className="w-full h-px bg-teal/30" />
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between text-teal"
          style={{
            fontSize: "clamp(16px, 1.484vw, 28.49px)",
            lineHeight: "clamp(20px, 1.779vw, 34.14px)",
            gap: "clamp(16px, 1.25vw, 24px)",
          }}
        >
          <p>Copyright 2026 &copy; auro.com</p>
          <div
            className="flex flex-wrap"
            style={{ gap: "clamp(20px, 2.371vw, 45.52px)" }}
          >
            <a href="#" className="hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
