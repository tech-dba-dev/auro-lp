/* eslint-disable @next/next/no-img-element */

export default function StoreButtons() {
  return (
    <div className="flex items-center gap-[19px]">
      <a
        href="#"
        className="flex items-center justify-center bg-white h-[76px] w-[254px] gap-[13px] hover:opacity-90 transition-opacity"
        style={{
          borderRadius: "77px",
          border: "2.398px solid #FFF",
          padding: "11px 30px 10px 30px",
        }}
      >
        <img
          src="/images/playstore.svg"
          alt="Google Play"
          className="w-[40px] h-[46px]"
        />
        <div className="flex flex-col gap-[3px]">
          <span className="text-black text-[15px] font-normal font-[family-name:var(--font-inter)] leading-normal">
            Get in on
          </span>
          <img
            src="/images/google-play-text.svg"
            alt="Google Play"
            className="w-[141px] h-[29px]"
          />
        </div>
      </a>
      <a
        href="#"
        className="flex items-center bg-white h-[76px] w-[254px] gap-[13px] hover:opacity-90 transition-opacity"
        style={{
          borderRadius: "96px",
          border: "2.398px solid #FFF",
          padding: "11px 30px 10px 30px",
        }}
      >
        <img
          src="/images/apple.svg"
          alt="App Store"
          className="w-[37px] h-[45px]"
        />
        <div className="flex flex-col gap-[1.5px] font-[family-name:var(--font-inter)]">
          <span className="text-black text-[13.3px] font-normal leading-[1.26]">
            Download on the
          </span>
          <span className="text-black text-[20px] font-medium leading-none tracking-[-0.7px]">
            App Store
          </span>
        </div>
      </a>
    </div>
  );
}
