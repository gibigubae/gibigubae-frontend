"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useAppContext } from "./AppContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, setIsDarkMode, language, setLanguage } = useAppContext();

  const toggleLanguage = () => {
    setLanguage(language === "AM" ? "EN" : "AM");
  };

  const navLinks = (
    <>
      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">
        {language === "AM" ? "ቀዳሚ ገጽ" : "Home"}
      </Link>
      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">
        {language === "AM" ? "ክፍላት" : "Sections"}
      </Link>
      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">
        {language === "AM" ? "መርሃ-ግብራት" : "Programs"}
      </Link>
      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">
        {language === "AM" ? "ልባዌ" : "Lebawie"}
      </Link>
      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">
        {language === "AM" ? "መክሊት" : "Meklit"}
      </Link>
      <Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">
        {language === "AM" ? "ስለ ማህበሩ" : "About Us"}
      </Link>
      <Link
        href="#"
        className="text-yellow-600 border border-yellow-500 rounded-lg px-4 py-1 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
      >
        {language === "AM" ? "ያግኙን" : "Contact"}
      </Link>
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-1/6" />

        <div className="hidden md:flex items-center space-x-8">{navLinks}</div>

        <div className="flex items-center space-x-4">
         
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button onClick={toggleLanguage} className="text-sm text-gray-700 dark:text-gray-300">
            {language === "AM" ? "EN" : "AM"}
          </button>

         
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pt-4 space-y-4">{navLinks}</div>
      )}
    </nav>
  );
}
