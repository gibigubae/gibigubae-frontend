"use client";
{/* this is just a mockup since I couldn't get the API routes*/}
import { Calendar } from "lucide-react";
import { useAppContext } from "./AppContext"; 
import translations from "@/lib/translations"; 

export default function UpcomingEventBanner() {
  const { language } = useAppContext();
  const t = translations[language];

  return (
    <div className="bg-black text-white py-2 px-4 text-center text-sm">
      <div className="flex items-center justify-center space-x-2">
        <Calendar className="w-4 h-4 text-yellow-400" />
        <span>
          {language === "AM"
            ? "መጪ መንፈሳዊ ጉዞ: ሰመሳህ ኪዳነ ምሕረት እና ኩኩያለሽ ማርያም"
            : "Upcoming Spiritual Trip: Kidane Mehret and Kukuyalesh Mariam"}
        </span>
        <span className="font-semibold text-yellow-400">
         
           {language === "AM"
            ? "ግንቦት 21, 2025"
            : " March 21, 2025"}
          </span>
      </div>
    </div>
  );
}
