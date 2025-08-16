import React from "react";
import collageImg from "../assets/about_us/about_us.jpg";
import {
  FaDownload,
  FaRegEnvelope,
  FaGlobe,
  FaUserClock,
  FaHandsHelping,
  FaHeadset,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section (No Full-Width Bg Image) */}
      <section className="w-full py-12 bg-gradient-to-r from-[#ff6b35]/20 via-white to-[#ff6b35]/20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 text-center">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 text-center">
          Learn more about who we are and what we do
        </p>
      </section>

      {/* Two-Column About Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-14 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-5">
            Tark-Vitark Global is dedicated to reviving India’s timeless
            traditions of philosophical debate and modernizing them for today’s
            world. Our mission is to nurture critical thinkers, ethical leaders,
            and agents of positive change, inspired by the wisdom of Nalanda,
            Takshashila, and classical Samvad sabhas.
          </p>
          <h3 className="text-xl font-semibold text-[#ff6b35] mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700 mb-5">
            To empower individuals and organizations with dialogue, debate, and
            collaborative problem-solving rooted in ancient and modern
            knowledge.
          </p>
          <h3 className="text-xl font-semibold text-[#ff6b35] mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To provide world-class debate education, foster a community of
            global thinkers, and champion the use of reasoned discourse for
            public good.
          </p>
        </div>
        {/* Right: Image Collage */}
        <div className="flex justify-center">
          <img
            src={collageImg}
            alt="About us collage"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Action Button Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
        <a
          href="/brochure.pdf"
          download
          className="flex items-center gap-2 bg-[#ff6b35] hover:bg-[#e85a2d] text-white text-lg px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          <FaDownload className="w-5 h-5" />
          Download Brochure
        </a>
        <a
          href="/enquiry"
          className="flex items-center gap-2 border-2 border-[#ff6b35] hover:bg-[#ff6b35] hover:text-white text-[#ff6b35] text-lg px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          <FaRegEnvelope className="w-5 h-5" />
          Enquiry Now
        </a>
      </div>

      {/* Features / Highlights Strip */}
      <div className="w-full bg-white border-t border-b border-gray-200 py-6 mb-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 px-6">
          <div className="flex items-center gap-3">
            <FaUserClock className="text-[#ff6b35] w-8 h-8" />
            <span className="font-semibold text-gray-900 text-lg">
              10+ Years Experience
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaGlobe className="text-[#ff6b35] w-8 h-8" />
            <span className="font-semibold text-gray-900 text-lg">
              Global Clients
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaHandsHelping className="text-[#ff6b35] w-8 h-8" />
            <span className="font-semibold text-gray-900 text-lg">
              Community Focused
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaHeadset className="text-[#ff6b35] w-8 h-8" />
            <span className="font-semibold text-gray-900 text-lg">
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
