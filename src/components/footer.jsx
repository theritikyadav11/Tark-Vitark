// src/components/Footer.jsx
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-6">
        {/* Left - Follow us */}
        <div className="flex items-center gap-4">
          <span className="text-red-700 font-semibold">Follow us on</span>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-pink-500 hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-600 hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" className="text-sky-400 hover:opacity-80">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-600 hover:opacity-80">
              <FaYoutube />
            </a>
            <a href="#" className="text-sky-500 hover:opacity-80">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Right - Contact */}
        <div className="text-center md:text-right text-sm leading-5">
          <p className="font-semibold">Contact us at</p>
          <a
            href="mailto:ytfbhopal@gmail.com"
            className="text-red-700 hover:underline"
          >
            tark_vitark@gmail.com
          </a>
          <p className="mt-1 font-medium text-gray-900">
            Bhopal, Madhya Pradesh, India
          </p>
        </div>
      </div>
    </footer>
  );
}
