"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa"
export default function MainFooter() {
  const [churchAttendance, setChurchAttendance] = useState("always")

  return (
    <footer className="bg-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex  mb-6">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
          </div>
         
          <ul className="space-y-4">
            <li className="text-sm text-gray-700">⚲ አቃቂ ቃሊቲ, አዲስ አበባ</li>
            <li className="text-sm text-gray-700">⚲ ፋንታ ደብረ ጽጌ ቅዱስ ሩፋኤል እና ቅድስት አርሴማ</li>
            <li className="text-sm text-gray-700">✉ companyemail@example.com</li>
            <li className="text-sm text-gray-700">☎ +251-974-15-0725</li>
          </ul>
        </div>

        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 mb-4">How often do you go to church?</h3>
          <div className="space-y-3">
            {["always", "most", "once", "sometimes"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="church-attendance"
                  value={option}
                  checked={churchAttendance === option}
                  onChange={() => setChurchAttendance(option)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Follow us on Social Networks</h4>
            <div className="flex gap-4 mt-4 ">
                 <Link href="https://facebook.com/yourpage" target="_blank">
                   <FaFacebookF className="text-black-600 hover:text-orange-400 text-xl" />
                 </Link>

                 <Link href="https://instagram.com/yourpage" target="_blank">
                    <FaInstagram className="text-black-600 hover:text-orange-400 text-xl" />
                 </Link>

                <Link href="https://t.me/yourchannel" target="_blank">
                  <FaTelegramPlane className="text-black-600 hover:text-orange-400 text-xl" />
                </Link>
             </div>

          </div>
        </div>

    
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Kflat</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Lebawie</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Meklit</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">About Us</Link></li>
              
             
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Media</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Merhagbirat</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Gallery</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Videos</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Trips</Link></li>
              <li><Link href="#" className="text-sm text-gray-700 hover:text-orange-400">Tutors</Link></li>
            </ul>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-200 border-t border-gray-300 py-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center text-sm text-gray-600">
          <div className="flex items-center">
            <span>© 2025 AASTU GIBI GUBAE. All Rights Reserved | </span>
            <Link href="#" className="text-green-600 hover:underline mx-1">Privacy Policy</Link>
            <span>| Powered by </span>
            <Link href="#" className="text-green-600 hover:underline ml-1">Gibigubae Design Room</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
