import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-10 lg:px-20 pt-12 lg:pt-16">
      <div className="max-w-[1650px] mx-auto flex items-center justify-between relative">
        {/* Left nav - hidden in Figma (opacity: 0) */}
        <div className="flex items-center gap-10 invisible">
          <button className="flex items-center gap-2 text-white-smoke text-lg">
            Modes
            <Image src="/images/chevron.svg" alt="" width={12} height={6} />
          </button>
          <span className="text-white-smoke text-lg">FAQ</span>
        </div>

        {/* Logo centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/logo-nav.svg"
            alt="Auro"
            width={110}
            height={50}
          />
        </div>

        {/* Right nav */}
        <div className="flex items-center gap-10">
          <button className="flex items-center gap-2 text-white-smoke text-lg">
            Modes
            <Image src="/images/chevron.svg" alt="" width={12} height={6} />
          </button>
          <span className="text-white-smoke text-lg">FAQ</span>
        </div>
      </div>
    </nav>
  );
}
