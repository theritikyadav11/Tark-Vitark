import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaSchool, FaUniversity, FaHandshake } from "react-icons/fa";

const Institutions = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 bg-gradient-to-r from-[#ff6b35]/20 via-white to-[#ff6b35]/20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 text-center">
          Institutions Partnership & Alliances
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl">
          At Tark Vitark Global, we believe in the power of collaboration to
          enrich learning and expand opportunities. Our strategic partnerships
          and alliances serve as the backbone of a vibrant intellectual
          ecosystem.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-10">
        {/* Intro Paragraph */}
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We nurture critical thinking, persuasive communication, and
            scholarly excellence through meaningful collaborations across
            educational and academic institutions.
          </p>
        </div>

        {/* Partnerships */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Schools & Coaching Centers */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FaSchool className="text-[#ff6b35] w-8 h-8" />
              <h2 className="text-2xl font-bold text-gray-900">
                Schools & Coaching Centers
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Partnership with schools and coaching institutes helps us widen
              grassroots outreach, nurturing young debaters early and creating a
              pipeline for advanced training.
            </p>
          </div>

          {/* Academic Collaborations */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <FaUniversity className="text-[#ff6b35] w-8 h-8" />
              <h2 className="text-2xl font-bold text-gray-900">
                Academic Collaborations & MoUs
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              We join hands with State & Central Government bodies,
              universities, think tanks, and institutions to co-create
              curriculum, facilitate guest lectures, and pursue joint projects
              integrating classical Indian logic with modern public policy
              frameworks.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-[#ff6b35]/10 to-white p-8 rounded-2xl shadow-inner">
          <div className="flex items-center gap-3 mb-3">
            <FaHandshake className="text-[#ff6b35] w-8 h-8" />
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We seek meaningful collaborations that share our commitment to
            quality education, cultural authenticity, and innovation in debate
            pedagogy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Institutions;
