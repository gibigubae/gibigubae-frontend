import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-C6C6C6 rounded-xl font-sans shadow-sm">
      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-5 p-5 md:p-8">
        {/* Left Section */}
        <div className="flex flex-col items-start p-5 bg-gray-200 rounded-lg h-full">
          <div className="mb-5">
            <Image
              src="/images/logo.png"
              alt="Kflat Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="mb-4 text-gray-800 text-sm leading-5">
            <p>ነጋዊ ፋሲል, ነጋዊ ክፍል</p>
            <p>4ኛ ፎቅ ነጋዊ ፋሲል ተቋም አዲስ አበባ ኢትዮጵያ</p>
          </div>
          <div className="text-gray-800 text-sm leading-5">
            <p>companyemail@example.com</p>
            <p>+251-974-15-0725</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center p-5">
          <h3 className="text-gray-800 font-semibold text-lg mb-4">
            How often do you go to church?
          </h3>
          <div className="flex flex-col gap-2 text-gray-800 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="church" defaultChecked className="accent-blue-500" />
              Always
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="church" className="accent-blue-500" />
              Most of the time
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="church" className="accent-blue-500" />
              Once a week
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="church" className="accent-blue-500" />
              Sometimes
            </label>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row justify-between p-5">
          <div className="flex-1 md:mr-5 mb-5 md:mb-0">
            <h4 className="text-gray-800 font-semibold text-base mb-2">Quick Links</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Kflat</li>
              <li>Lebawie</li>
              <li>Meklit</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-gray-800 font-semibold text-base mb-2">Media</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>Merhagbirat</li>
              <li>Gallery</li>
              <li>Videos</li>
              <li>Trips</li>
              <li>Tutors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400 bg-gray-100 p-4 rounded-b-lg">
        <div className="mb-3 md:mb-0">
          <h4 className="text-gray-800 font-semibold text-base mb-2">Follow us on Social Networks</h4>
          <div className="flex gap-3">
            <Image src="/placeholder-facebook.png" alt="Facebook" width={24} height={24} />
            <Image src="/placeholder-email.png" alt="Email" width={24} height={24} />
            <Image src="/placeholder-youtube.png" alt="YouTube" width={24} height={24} />
            <Image src="/placeholder-instagram.png" alt="Instagram" width={24} height={24} />
          </div>
        </div>
        <p className="text-gray-600 text-xs text-center md:text-right">
          © 2025 AASTU GIBI GUBAE. All Rights are Reserved |{' '}
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> | Powered by{' '}
          <a href="#" className="text-blue-500 hover:underline">Gibigbae Design</a> Room.
        </p>
      </div>
    </div>
  );
};

export default Footer;
