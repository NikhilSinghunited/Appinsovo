import { FaGooglePlay, FaApple, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Useful Links */}
        <div className="flex flex-col gap-5 w-full md:w-1/3">
          <h3 className="font-bold text-lg">Useful links</h3>
          <div className="flex gap-12">
            <ul className="space-y-3 font-semibold">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
            <ul className="space-y-3 font-semibold">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Faq
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Get Mobile App */}
        <div className="flex flex-col gap-5 w-full md:w-1/3">
          <h3 className="font-bold text-lg">Get mobile app</h3>
          <p className="text-gray-600">
            Take education on the go. Get our mobile app for <strong>FREE!</strong> on your Apple and Android devices.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center bg-black text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
            >
              <FaGooglePlay className="mr-2" />
              <span>Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center bg-black text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
            >
              <FaApple className="mr-2" />
              <span>App Store</span>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-5 w-full md:w-1/3">
          <h3 className="font-bold text-lg">Signup for newsletter</h3>
          <p className="text-gray-600">
            Corrupti quolores etmuqasa molestias epturite sinteam occaecati amet cupiditate mikume molareshe
          </p>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email.."
              className="w-full px-4 py-3 rounded-xl shadow-md border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-300 outline-none transition"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-md transition"
              aria-label="Subscribe"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
