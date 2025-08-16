import React from "react";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-semibold text-[#ff6b35] uppercase tracking-widest mb-4 text-center"
      >
        As trailblazers of India's intellectual legacy
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug max-w-3xl mx-auto mb-10 text-center"
      >
        Tark Vitark Global is the first center of its kind to champion classical
        debate methodologies for the modern world.
      </motion.h1>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
          Welcome to Tark Vitark Global
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At Tark Vitark Global, we are on a mission to revive and modernize
          India’s timeless traditions of philosophical debate—particularly the
          Purva Paksha–Uttara Paksha methodology—and bring them into the heart
          of education, governance, and public policy.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          We believe that ancient Indian dialectical traditions—refined over
          centuries in the halls of Nalanda, Takshashila, and our grand
          philosophical Samvad sabhas—can provide powerful tools for critical
          thinking, ethical leadership, and democratic governance in the 21st
          century. By merging these traditions with modern debate formats,
          global communication skills, and public policy frameworks, we are
          preparing the thinkers, leaders, and changemakers of tomorrow.
        </p>
      </motion.div>

      {/* Who We Work With */}
      <div className="w-full bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-4 border-[#ff6b35] pl-4">
            Who We Work With
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6 text-gray-700 text-lg">
            {[
              "Schools, universities, and coaching institutes",
              "Public policy think tanks, NGOs, and government bodies",
              "Cultural and philosophical research centers",
              "Global debate and public speaking organizations",
              "Governance and leadership academies",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-[#ff6b35] rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Main;
