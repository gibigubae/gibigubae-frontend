// components/Kflat.tsx
import Image from "next/image";
import { FC } from "react";
import Navbar from "./Navbar";

// ---------------- Navbar + Hero ----------------
const HeroSection: FC = () => {
  return (
    <section className="w-full h-screen bg-[#f5f5f5] overflow-hidden relative">
      {/* Navbar */}
   <Navbar/>
      {/* Hero */}
      <div className="relative w-full h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden rounded-t-[200px]">
        {/* Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center bg-black/25">
          <h1 className="text-[#EED432] text-[30px] font-bold text-center font-['Noto_Sans_Ethiopic',sans-serif] mb-[10px]">
            ግቢጉባኤ ክፍላት
          </h1>
          <div className="text-[#EED432] text-[24px] animate-bounce">↓</div>
        </div>

        {/* Background Image */}
        <Image
          src="/images/Mask group.png"
          alt="Group of people in traditional clothing"
          fill
          className="z-10 object-cover blur-[3px]"
          priority
        />
      </div>
    </section>
  );
};

// ---------------- Carousel ----------------
const CarouselSection: FC = () => {
  return (
    <section className="px-[20px] py-[40px] bg-[#e8e8e8] font-['Noto_Sans_Ethiopic',sans-serif]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-bold text-[#2f3e8a]">ክፍላት</h2>
        <select className="border-none bg-transparent text-[12px] text-[#777] cursor-pointer">
          <option>
            መሄድ የሚፈልጉበትን የክፍላት ገጽ ይምረጡ(መዝሙር ክፍል)
          </option>
        </select>
      </div>

      {/* Divider */}
      <hr className="mt-[20px] border-none h-[1px] bg-[#999]" />

      {/* Carousel Title */}
      <h3 className="text-center text-[28px] font-bold my-[20px] text-[#1a1a1a]">
        መዝሙር ክፍል
      </h3>

      {/* Carousel Wrapper */}
      <div className="flex items-center justify-center relative mt-[20px] gap-[10px]">
        {/* Left Arrow */}
        <button className="bg-[rgba(255,255,255,0.8)] border-none text-[26px] w-[40px] h-[40px] rounded-full cursor-pointer">
          ←
        </button>

        {/* Carousel Items */}
        <div className="flex gap-[16px] overflow-x-auto scroll-smooth">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`relative rounded-[20px] overflow-hidden flex-shrink-0 ${
                index === 1
                  ? "w-[340px] h-[240px] z-[1]"
                  : "w-[280px] h-[200px]"
              }`}
            >
              <Image
                src={
                  index === 1
                    ? "/images/unsplash_t6a4eAD0ceU.png"
                    : "/images/erebu gubae 3.png"
                }
                alt={
                  index === 1
                    ? "Different spiritual gathering"
                    : "Spiritual gathering"
                }
                fill
                className="object-cover brightness-[85%]"
              />
              {index === 1 && (
                <div className="absolute inset-0 z-[2] bg-[rgba(0,0,0,0.2)] text-white flex flex-col justify-center items-center gap-[10px]">
                  <h4 className="text-[18px] font-bold">መዝሙር ክፍል</h4>
                  <button className="px-[14px] py-[6px] text-[12px] bg-black border-none rounded-[20px] text-[#EED432] cursor-pointer">
                    የበለጠ ያስሱ
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="bg-[rgba(255,255,255,0.8)] border-none text-[26px] w-[40px] h-[40px] rounded-full cursor-pointer">
          →
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-[20px] gap-[6px]">
        <span className="w-[12px] h-[12px] rounded-full bg-[#f9c737]"></span>
        <span className="w-[12px] h-[12px] rounded-full bg-[#ccc]"></span>
        <span className="w-[12px] h-[12px] rounded-full bg-[#ccc]"></span>
      </div>
    </section>
  );
};

// ---------------- Footer ----------------
const ArticleFooterSection: FC = () => {
  return (
    <div className="bg-[#dcdcdc] px-5 py-10 flex flex-col items-center">
      {/* Article Box */}
      <div className="bg-[#F3F6FF] rounded-[30px] p-10 w-full max-w-[900px] shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
        <p className="text-sm leading-[1.2] text-[#333] text-justify">
        መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። 
መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ።
መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ።መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ። መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ።  </p>

        {/* Extra Links */}
        <div className="mt-10">
          <h3 className="font-bold text-base mb-[15px] text-black">
            Extra Links
          </h3>
          <ul className="pl-5 text-[#444] text-sm list-none">
            <li className="mb-2 before:content-['-'] before:mr-2">
              Link item one
            </li>
            <li className="mb-2 before:content-['-'] before:mr-2">
              Link item two
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-8 w-full max-w-[900px] bg-[#eeeeee] px-5 py-4 rounded-2xl flex justify-between items-center">
        <button className="border-none bg-white px-5 py-2.5 rounded-lg text-sm cursor-pointer font-medium shadow-[0_2px_5px_rgba(0,0,0,0.08)]">
        ለበለጠ መረጃ
        </button>

        <div className="flex gap-5 text-lg">
          <span>🔗</span>
          <span>⭐</span>
        </div>

        <button className="bg-[#f3c741] border-none rounded-md px-5 py-2.5 text-sm font-semibold cursor-pointer shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
          Primary
        </button>
      </div>
    </div>
  );
};

// ---------------- Main Combined Component ----------------
const Kflat: FC = () => {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <ArticleFooterSection />
    </>
  );
};

export default Kflat;
