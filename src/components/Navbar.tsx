import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[60px] flex justify-center items-center bg-white font-['Noto_Sans_Ethiopic',sans-serif] z-10 relative">
      <ul className="list-none flex gap-[30px] text-[14px] font-semibold text-[#1d1d1d]">
        <li className="cursor-pointer">ቀዳሚ ገጽ</li>
        <li className="cursor-pointer">ክፍላት</li>
        <li className="cursor-pointer">መርሐ-ግብራት</li>
        <li className="cursor-pointer">ልባዌ</li>
        <li className="cursor-pointer">መክሊት</li>
        <li className="cursor-pointer">ስለ ማህበሩ</li>
        <li className="cursor-pointer border-[1.5px] border-[#C58129] px-[10px] py-[4px] rounded-[30px] text-[#C58129]">
          ያግኙን
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
