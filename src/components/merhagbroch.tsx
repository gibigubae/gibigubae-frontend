'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';

//
// === Gallery Component ===
//
const Gallery: React.FC = () => {
  return (
    <div className="relative w-[1441px] h-screen mx-auto overflow-hidden">
      <Image
        src="/images/unsplash_t6a4eAD0ceU.png"
        alt="Group of people in traditional attire"
        fill
        className="absolute w-full h-full object-cover rounded-t-[200px]"
        priority
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h1 className="text-[52px] font-normal text-[#e9ce23] font-['Abyssinica_SIL']">
          መርሐግብራት
        </h1>
      </div>
    </div>
  );
};

//
// === UpcomingEvent Component ===
//
const UpcomingEvent = () => {
  return (
    <div className="flex flex-col items-center px-5 py-10 bg-[#f9f9f9]">
      <h1 className="text-4xl font-bold text-[#2e2e2e] mb-6">UpComing</h1>

      <div className="relative max-w-[800px] w-full bg-white rounded-xl shadow-md overflow-hidden">
        <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#eee] p-2.5 rounded-full z-10 shadow-md">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#eee] p-2.5 rounded-full z-10 shadow-md">
          <ChevronRight size={24} />
        </button>

        <Image
          src="/images/poster.png"
          alt="Event Poster"
          width={800}
          height={450}
          className="w-full h-auto block"
        />

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#ffd400] text-black text-2xl font-bold px-8 py-2.5 rounded-md shadow-lg">
          10:00 AM
        </div>
      </div>

      <p className="mt-6 text-center text-[#555] text-base max-w-[700px]">
        Lorem lorem lorem home ipsum ipsum lorem lorem ipsum lorem ipsum lorem ipsum
        lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
      </p>

      <div className="mt-4 flex gap-2.5">
        <span className="w-5 h-1.5 rounded bg-[#ffd400]"></span>
        <span className="w-3 h-1.5 rounded bg-[#ccc]"></span>
        <span className="w-3 h-1.5 rounded bg-[#ccc]"></span>
      </div>
    </div>
  );
};

//
// === Events Component ===
//
interface Event {
  title: string;
  image: string;
  link: string;
}

const eventsData: Event[] = [
  {
    title: 'Wednesday Guba’e',
    image: '/images/Wednesday Gubae.png',
    link: '#',
  },
  {
    title: 'Course Sessions',
    image: '/images/course 1.png',
    link: '#',
  },
  {
    title: 'Semester Trips',
    image: '/images/guzo 1.png',
    link: '#',
  },
  {
    title: 'Abnet and Mezmur Tutor',
    image: '/images/begena.png',
    link: '#',
  },
];

const Events: React.FC = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-5 rounded-3xl max-w-[1400px] mx-auto">
      {/* Title + filter */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center justify-between w-full max-w-[500px]">
          <h1 className="text-3xl font-bold text-[#0f1a2b] text-center w-full">
            Events
          </h1>
          <button className="flex items-center gap-2 text-[#0f1a2b] bg-[#e0e0e0] px-3 py-1 rounded-lg text-sm font-medium hover:bg-[#d1d1d1] transition">
            <span>filter by</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-7"
              fill="none"
              viewBox="0 0 29 44"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 14.414V19a1 1 0 01-.553.894l-4 2A1 1 0 008 21v-6.586L3.293 6.707A1 1 0 013 6V4z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid of Event Cards: 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {eventsData.map((event, index) => (
          <a
            key={index}
            href={event.link}
            className="relative group rounded-xl overflow-hidden shadow-lg w-[500px]"
          >
            <div className="w-full h-[280px] relative overflow-hidden rounded-t-xl">
              <Image
                src={event.image}
                alt={event.title}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-5 rounded-xl">
              <h2 className="text-white text-xl font-semibold mb-2">{event.title}</h2>
              <span className="text-white text-sm underline">View More →</span>
            </div>
</a>
        ))}
      </div>
    </section>
  );
};

//
// === SpecialEvents Component ===
//
interface EventCardProps {
  title: string;
  description: string;
  imageSrc: string;
}// === SpecialEvents Component ===

// === SpecialEvents Component ===
// === SpecialEvents Component ===

interface EventCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, imageSrc }) => (
  <div className="w-[380px] h-[500px] bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
    <div className="w-[371px] h-[300px] mx-auto mb-2.5 relative overflow-hidden rounded-[20px]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        style={{ objectFit: 'cover', borderRadius: '20px' }}
        priority
      />
    </div>
    <div className="p-2.5 h-[200px] box-border overflow-y-auto flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-[#333333] mb-2">{title}</h3>
        <p className="text-sm text-[#666666] leading-[1.2]">{description}</p>
      </div>
     <span className="text-[#666666] text-sm underline">View More →</span>
    </div>
  </div>
);

const SpecialEvents: React.FC = () => {
  const events = [
    {
      title: "Kidus Rufael Cuba'e",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/images/rob-gubae 1.png',
    },
    {
      title: 'Kiddist Dingil Maryam Tsiwa',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/images/guzo 1.png',
    },
    {
      title: 'Metshaf Qesase',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imageSrc: '/images/metshaf.png',
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-6">
      <div className="max-w-[1349px] mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#333333] text-center mb-12">
          Special Events
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="bg-[#121211] text-white px-6 py-2 rounded-[15px] text-sm font-medium hover:bg-[#FFB300] transition-colors">
            With All
          </button>
        </div>
      </div>
    </section>
  );
};
//
// === Final Page Export ===
//
const MerhagbrochPage: React.FC = () => {
  return (
    <main className="space-y-10">
      <Navbar />
      <Gallery />
      <UpcomingEvent />
      <Events />
      <SpecialEvents />
    </main>
  );
};

export default MerhagbrochPage;
