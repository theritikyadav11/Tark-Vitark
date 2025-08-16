import React from "react";
import { motion } from "framer-motion";

const Bootcamps = () => {
  const bootcamps = [
    {
      title: "Debate Mastery",
      description:
        "Develop advanced strategies in classical and modern debate formats with guidance from expert mentors.",
    },
    {
      title: "Public Speaking",
      description:
        "Gain confidence on stage, enhance delivery, and master persuasion through practice-driven training.",
    },
    {
      title: "Leadership Skills",
      description:
        "Sharpen critical thinking, decision-making, and team leadership for real-world intellectual challenges.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Bootcamps
        </h2>
        <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Our Bootcamps offer immersive, short-term training sessions focused on{" "}
          <span className="font-semibold text-[#ff6b35]">
            advanced debate strategies, public speaking, and leadership skills
          </span>
          . Participants engage with experts to gain hands-on experience and
          personalized feedback to elevate their intellectual abilities.
        </p>
      </div>

      {/* Bootcamp Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bootcamps.map((bootcamp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#ff6b35]/10 via-white to-[#ff6b35]/10"
          >
            <h3 className="text-2xl font-semibold text-[#ff6b35] mb-3">
              {bootcamp.title}
            </h3>
            <p className="text-gray-700">{bootcamp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bootcamps;
