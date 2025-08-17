import React from "react";
import { motion } from "framer-motion";

const NoviceCourse = () => {
  const courseInfo = [
    {
      week: "Week 1",
      topics: [
        "Introduction & Orientation",
        "Ancient Indian & Contemporary perspective on Holistic Development",
        "Digital Content Consumption management & way forward",
      ],
    },
    {
      week: "Week 2",
      topics: [
        "Overcoming setbacks (Karma Yoga perspective)",
        "Art of Reading Newspaper and Self-awareness",
        "Exercises: Daily self-reflection, mood journaling",
        "Design personal or group projects addressing real-world challenges",
      ],
    },
    {
      week: "Week 3",
      topics: [
        "Public Speaking Techniques: Breath, voice, body language",
        "Listening Skills: The art of Shravanam (attentive listening)",
        "Debate Skills: Basics of Purva Paksha and Uttara Paksha (argument & counter-argument)",
        "Case studies: Ancient debates and their relevance in modern times",
      ],
    },
    {
      week: "Week 4",
      topics: [
        "Building rapport and trust (Sakhya Bhava)",
        "Conflict resolution with respect (Samvada tradition)",
        "Alumni support and lifelong learning network",
        "Storytelling and visual communication",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          4 Weeks – Novice Tark Vitark Global Course
        </h2>
        <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          This curriculum blends{" "}
          <span className="font-semibold text-[#ff6b35]">
            traditional Indian intellectual techniques
          </span>{" "}
          (such as Purva Paksha) with{" "}
          <span className="font-semibold text-[#ff6b35]">
            contemporary skill-building
          </span>{" "}
          for a holistic personality enhancement journey. The course is designed
          to be{" "}
          <span className="font-semibold text-[#ff6b35]">
            interactive, physically engaging, and practical
          </span>{" "}
          using Traditional & Modern scripts, group discussions, collaborative
          planning, and presentation time.
        </p>
      </div>

      {/* Weekly Modules */}
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
        Weekly Course Breakdown
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {courseInfo.map((week, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gradient-to-br from-[#ff6b35]/10 via-white to-[#ff6b35]/10"
          >
            <h4 className="text-xl font-semibold text-[#ff6b35] mb-3">
              {week.week}
            </h4>
            <ul className="list-disc list-outside pl-5 text-gray-700 space-y-2">
              {week.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NoviceCourse;
