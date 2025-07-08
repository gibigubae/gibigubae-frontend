"use client"
import { useState, useRef, useEffect, useCallback } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Quote } from "lucide-react"


import UpcomingEventBanner from "@/components/UpcomingEvents"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const HERO_TITLE_AMHARIC = "እንኳን ወደ አ/አ/ሳ/ቴ/ዩ ግቢጉባኤ ድህረገጽ በሰላም መጡ።"
const HERO_SUBTITLE_AMHARIC = "ይህ የግቢ ጉባኤ ማህበር ይህ የግቢ ጉባኤ ማህበር ይህ የግቢ ጉባኤ ማህበር።"
const HERO_BUTTON_AMHARIC = "ይመዝገቡ"

const GALLERY_IMAGES = [
  { id: "1", src: "/images/img.png", alt: "Gallery image 1" },
  { id: "2", src: "/images/img.png", alt: "Gallery image 2" },
  { id: "3", src: "/images/img.png", alt: "Gallery image 3" },
  { id: "4", src: "/images/img.png", alt: "Gallery image 4" },
]

const DEPARTMENT_CARDS_DATA = [
  {
    id: "1",
    image: "/images/batch.png",
    title: "ባች ክፍል",
    description: "ባች ክፍል እና ተግባሩ ባች ክፍል እና ተግባሩ  ባች ክፍል እና ተግባሩ ባች ክፍል እና ተግባሩ ባች ክፍል እና ተግባሩ ",
    features: ["በስሩ ያሚገኙ ንዑስ ክፍላት  'በስሩ ያሚገኙ ንዑስ ክፍላት' 'በስሩ ያሚገኙ ንዑስ ክፍላት' 'በስሩ ያሚገኙ ንዑስ ክፍላት'"],
  },
  {
    id: "2",
    image: "/images/mezmur.png",
    title: "መዝሙር ክፍል",
    description: "መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ መዝሙር ክፍል እና ተግባሩ",
    features: ["በስሩ ያሚገኙ ንዑስ ክፍላት  'በስሩ ያሚገኙ ንዑስ ክፍላት' 'በስሩ ያሚገኙ ንዑስ ክፍላት' 'በስሩ ያሚገኙ ንዑስ ክፍላት'"],
  },
  {
    id: "3",
    image: "/images/tt.png",
    title: "ትምህርት ክፍል",
    description: "ትምህርት ክፍል እና ተግባሩ ትምህርት ክፍል እና ተግባሩ ትምህርት ክፍል እና ተግባሩ ትምህርት ክፍል እና ተግባሩ",
    features: ["በስሩ ያሚገኙ ንዑስ ክፍላት  'በስሩ ያሚገኙ ንዑስ ክፍላት' 'በስሩ ያሚገኙ ንዑስ ክፍላት' 'በስሩ ያሚገኙ ንዑስ ክፍላት'"],
  },
]

const QUOTE_DATA = [
  {
    id: 1,
    text: "ትምህርተኛህ ለበለጠለም ያደናቅፍል ፤ የሚያስተምረኝም ተማሪያየ ነው።",
    reference: "ሉቃስ 17: 35",
    image: "/images/The Last Supper.png",
    alt: "The Last Supper",
  },
  {
    id: 2,
    text: "እግዚአብሔር ፍቅር ነው፤ የሚወድም በእግዚአብሔር ይኖራል፤ እግዚአብሔርም በእርሱ ይኖራል።",
    reference: "1 ዮሐንስ 4: 16",
    image: "/images/The Last Supper.png",
    alt: "The Last Supper",
  },
  {
    id: 3,
    text: "በእግዚአብሔር ፊት ንጹህና ያልተረከሰ ሃይማኖት ይህ ነው፤ ወላጅ አልባዎችንና ባልቤቶችን በመከራቸው መጠየቅ።",
    reference: "ያዕቆብ 1: 27",
    image: "/images/The Last Supper.png",
    alt: "The Last Supper",
  },
]


interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "link"
  onClick?: () => void
  ariaLabel?: string
}

function Button({ children, className = "", variant = "default", onClick, ariaLabel }: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantClasses = {
    default: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    link: "bg-transparent hover:bg-transparent text-current underline p-0 focus:ring-transparent",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}


interface UseCarouselScrollProps {

  ref: React.RefObject<HTMLElement | null>;
  itemWidth: number 
  gap: number 
  itemCount: number 
}

function useCarouselScroll({ ref, itemWidth, gap, itemCount }: UseCarouselScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToItem = useCallback((index: number) => {
    setCurrentIndex(index)
    if (ref.current) {
      ref.current.scrollTo({
        left: index * (itemWidth + gap),
        behavior: "smooth",
      })
    }
  }, [ref, itemWidth, gap])

  const handleScroll = useCallback(() => {
    if (!ref.current) return
    const scrollLeft = ref.current.scrollLeft
    const newIndex = Math.round(scrollLeft / (itemWidth + gap))
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }, [ref, itemWidth, gap, currentIndex])

  return { currentIndex, scrollToItem, handleScroll }
}


function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const total = QUOTE_DATA.length
  const t = QUOTE_DATA[currentQuote]

  const next = useCallback(() => setCurrentQuote((p: number) => (p + 1) % total), [total]);  
  const prev = useCallback(() => setCurrentQuote((p: number) => (p === 0 ? total - 1 : p - 1)), [total]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev])

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 bg-gray-100 dark:bg-[#1a2332]">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="relative">
          <Image
            src={t.image || "/images/The Last Supper.png"}
            alt={t.alt}
            width={800}
            height={300}
            className="w-full h-auto object-cover rounded-2xl transition-all duration-500"
            priority={true} 
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="absolute top-6 left-6 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-yellow-500 text-2xl font-serif">"</span>
          </div>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Previous quote"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            aria-label="Next quote"
          >
            ›
          </button>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-8">
            <p className="text-lg md:text-xl font-medium mb-4 text-center leading-relaxed">{t.text}</p>
            <div className="flex items-center">
              <div className="h-0.5 w-6 bg-yellow-500"></div>
              <span className="mx-2 text-sm">{t.reference}</span>
              <div className="h-0.5 w-6 bg-yellow-500"></div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 transition-all duration-500"
              style={{ width: `${((currentQuote + 1) / total) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-4">
          {QUOTE_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuote(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === currentQuote ? "bg-yellow-500 scale-125" : "bg-yellow-700 hover:bg-yellow-600"
              }`}
              aria-label={`Go to quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function DepartmentSection() {
  const departmentRef = useRef<HTMLDivElement>(null)
  const ITEM_WIDTH = 400;
  const GAP_WIDTH = 24; 


  const { currentIndex: currentSlide, scrollToItem, handleScroll: handleDepartmentScroll } = useCarouselScroll({
    
    ref: departmentRef,
    itemWidth: ITEM_WIDTH,
    gap: GAP_WIDTH,
    itemCount: DEPARTMENT_CARDS_DATA.length,
  });

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#1a2332]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">ክፍላት</h2>

          <div className="flex justify-center gap-2 mb-8">
            {DEPARTMENT_CARDS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-yellow-400" : "bg-slate-300"
                }`}
                aria-label={`Go to department slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={() => scrollToItem((currentSlide - 1 + DEPARTMENT_CARDS_DATA.length) % DEPARTMENT_CARDS_DATA.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 dark:bg-[#FFD300] hover:bg-yellow-500 dark:hover:bg-yellow-400 text-slate-800 dark:text-[#1a2332] w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            onClick={() => scrollToItem((currentSlide + 1) % DEPARTMENT_CARDS_DATA.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 dark:bg-[#FFD300] hover:bg-yellow-500 dark:hover:bg-yellow-400 text-slate-800 dark:text-[#1a2332] w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            →
          </button>

          <div
            ref={departmentRef}
            onScroll={handleDepartmentScroll}
            className="grid md:grid-cols-3 gap-6 px-16 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {DEPARTMENT_CARDS_DATA.map((card, index) => (
              <div
                key={card.id}
                className="bg-slate-800 dark:bg-[#2a3441] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image || "/images/placeholder.svg"}
                    alt={card.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                    priority={index === 0} 
                  />
                </div>

                <div className="p-6 text-yellow-400">
                  <h3 className="text-xl font-bold mb-4 text-center">{card.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 text-yellow-300">{card.description}</p>
                  <div className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-400 text-xs mt-1">—</span>
                        <span className="text-xs text-yellow-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/kiflatPage">
                      <span className="text-xs text-yellow-500 hover:underline cursor-pointer">ተጨማሪ ይመልከቱ</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const ITEM_WIDTH = 400; 
  const GAP_WIDTH = 24;
  
  const { currentIndex: currentGalleryIndex, scrollToItem: scrollGalleryToIndex, handleScroll: handleGalleryScroll } = useCarouselScroll({
   
    ref: galleryRef,
    itemWidth: ITEM_WIDTH,
    gap: GAP_WIDTH,
    itemCount: GALLERY_IMAGES.length,
  });

  return (
    <section className="py-20 bg-white dark:bg-[#1a2332]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={galleryRef}
          onScroll={handleGalleryScroll}
          className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="flex-none w-[400px] rounded-lg overflow-hidden">
              <Image
                src={image.src || "/images/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover"
                priority={image.id === "1"}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollGalleryToIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentGalleryIndex ? "bg-yellow-500" : "bg-yellow-300"
              }`}
              aria-label={`Go to gallery image ${idx + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallerpage">
            <button className="bg-gray-800 dark:bg-[#FFD300] text-white dark:text-[#1a2332] px-8 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-yellow-400 transition-colors">
              በለጠ ያስሱ
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1a2332] text-gray-800 dark:text-white transition-colors duration-300">
      <UpcomingEventBanner />
      <Navbar />

      <section className="relative min-h-[140vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Hero Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50 dark:bg-[#1a2332]/80" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 mt-10">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Image src="/images/logo.png" alt="Church Logo" width={96} height={96} className="object-contain" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#FFD300] uppercase">
            {HERO_TITLE_AMHARIC}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {HERO_SUBTITLE_AMHARIC}
          </p>

          <Link href="/registerpage">
            <button className="bg-[#0F1525] hover:bg-gray-400 text-[#FFD300] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              {HERO_BUTTON_AMHARIC}
            </button>
          </Link>

          <button
            aria-label="Scroll Down"
            onClick={() => {
              const element = document.getElementById("big-rectangle-section")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="mt-8 mx-auto flex flex-col items-center text-[#FFD300] hover:text-yellow-400 cursor-pointer"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      <section
        id="big-rectangle-section"
        className="-mt-15 relative z-30 bg-[#E1E1E1] dark:bg-[#2a3441] rounded-xl max-w-6xl mx-auto px-8 py-12 flex justify-between items-center text-black dark:text-white shadow-lg border border-black dark:border-gray-600"
      >
        <div className="text-lg font-semibold">
          ሳምንታዊ መርሃግብራት <p className="text-sm">ፋንታ ደብረ ጽጌ ቅዱስ ሩፋኤል ወቅድስት አርሴማ</p>
        </div>
        <div className="text-lg font-semibold">
          የአንድነት መንፈሳዊ ጉዞዎች <p className="text-sm">ቢያንስ አንዴ በየሴሚስተሩ</p>
        </div>
        <div className="text-lg font-semibold">
          200+ የአብነት ተማሪዎች <p className="text-sm">በግቢ ጉባኤያችን ትምህርት ክፍል</p>
        </div>
        <div className="text-lg font-semibold">
          Mahibere Kidusan Support <p className="text-sm">Ethiopian orthodox</p>
        </div>
      </section>

      <section className="-mt-10 relative z-40 w-full max-w-6xl flex justify-between gap-6 px-8 mx-auto">
        {["8000+ አባላቶች", "500+ የአለሁ በወሬ አባላቶች ", "10+ የግቢ ጉባኤ ክፍላት"].map((label, index) => (
          <div
            key={index}
            className="flex-1 bg-[#F5F5F4] dark:bg-[#2a3441] text-black dark:text-white rounded-lg py-6 px-4 shadow-md flex items-center justify-center font-medium border border-black dark:border-gray-600"
          >
            {label}
          </div>
        ))}
      </section>

      <GallerySection />

      <section className="relative bg-slate-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-lg font-semibold mb-8">
            መጪ መርሃ-ግብሮች
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="relative h-full min-h-[300px]"> 
              <Image
                src="/images/Course.png"
                alt="upcoming programs"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>

            <div className="space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Quote className="text-orange-400 w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-slate-700 text-lg leading-relaxed mb-4">
                        "ከብር ይልቅ ትምህርትን ፥ ከተፈተነ ወርቅም ይልቅ ዕውቀትን ተቀበሉ።"
                      </blockquote>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span> ምሳሌ 8፥10 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-700 text-sm">👤</span>
                    </div>
                    <div>
                      <p className="text-slate-700 mb-2">ከ3-5 ኛ ዓመት ተማሪዎች ኮርስ ነገ ሐሙስ ይቀጥላል።</p>

                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <span>📍</span>
                        <span>ፋንታ ደብረ ጽጌ ቅዱስ ሩፋኤል እና ቅድስት አርሴማ ቤተ ክርስቲያን</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <span>📅</span>
                        <span>ሐሙስ፡ 11/07/2017 ዓ/ም</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <span>🕥</span>
                        <span>10:45 - 12:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#1a2332]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/placeholder.svg"
                alt="Brief History Background"
                fill
                className="object-cover -z-10 absolute inset-0 rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>

              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-yellow-400/30 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-yellow-400/30 rounded-full"></div>

              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
                <h2 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-8 text-center">A brief History</h2>

                <div className="space-y-6 text-white/90 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>

                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/aboutus">
                    <Button variant="link" className="text-yellow-400 hover:text-yellow-300 text-lg font-semibold p-0">
                      READ MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DepartmentSection />
      <QuoteSection />
      <Footer />
    </main>
  )
}