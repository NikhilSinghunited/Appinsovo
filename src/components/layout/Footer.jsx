import { FaGooglePlay, FaApple, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Useful Links */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <h3 className="font-bold text-lg">Useful links</h3>
          <div className="flex gap-10">
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#">Faq</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Get Mobile App */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <h3 className="font-bold text-lg">Get mobile app</h3>
          <p>
            Take education on the go. Get our mobile app for FREE! on your Apple and android devices
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded">
              <FaGooglePlay className="mr-2" />
              <span>Google Play</span>
            </a>
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded">
              <FaApple className="mr-2" />
              <span>App Store</span>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <h3 className="font-bold text-lg">Signup for newsletter</h3>
          <p>
            Corrupti quolores etmuqasa molestias epturite sinteam occaecati amet cupiditate mikume molareshe
          </p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email.."
              className="w-full px-4 py-3 rounded-xl shadow-md focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-lg">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
