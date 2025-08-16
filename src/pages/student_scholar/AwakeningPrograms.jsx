import React from "react";
import { motion } from "framer-motion";

const AwakeningPrograms = () => {
  const programs = [
    {
      title: "Workshops",
      description:
        "Hands-on interactive sessions designed to cultivate critical thinking and leadership among students.",
    },
    {
      title: "Seminars",
      description:
        "Engaging talks and debates that spark intellectual curiosity and encourage youth to voice their perspectives.",
    },
    {
      title: "Cultural Programs",
      description:
        "Celebrating India’s heritage while nurturing creativity, values, and a sense of belonging in young hearts.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          India’s Leading Youth Awakening Programs & Courses
        </h2>
        <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Our youth awakening initiatives aim to inspire and empower the next
          generation through{" "}
          <span className="font-semibold text-[#ff6b35]">
            workshops, seminars, and cultural programs
          </span>
          . These activities promote critical dialogue, ethical leadership, and
          active citizenship among young minds.
        </p>
      </div>

      {/* Program Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#ff6b35]/10 via-white to-[#ff6b35]/10"
          >
            <h3 className="text-2xl font-semibold text-[#ff6b35] mb-3">
              {program.title}
            </h3>
            <p className="text-gray-700">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwakeningPrograms;
