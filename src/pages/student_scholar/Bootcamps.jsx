import React from "react";
import { motion } from "framer-motion";

const Bootcamps = () => {
  const programInfo = [
    {
      label: "Target Audience",
      value:
        "Grades 9–12 or college students interested in philosophy, debate, law, management, Indian traditions & communications.",
    },
    {
      label: "Duration",
      value:
        "2–3 weeks (10–12 sessions, 2 hours each), adaptable for intensive or regular cohorts.",
    },
    {
      label: "Delivery",
      value:
        "Online (Zoom, Google Meet) with options for in-person workshops for special cohorts.",
    },
    {
      label: "Group Size",
      value: "12–20 students per batch for optimal interaction.",
    },
  ];

  const bootcampModules = [
    {
      title: "1. Introduction to Tark Vitark",
      description:
        "Overview of Indian debate traditions, Purva Paksha methodology, and Greece & Roman traditions.",
    },
    {
      title: "2. Foundations of Argumentation",
      description:
        "Building sound arguments, comparing global debating styles, and learning key categories (pramana, hetu, paksha, etc.).",
    },
    {
      title: "3. Techniques of Purva Paksha",
      description:
        "Step-by-step practice of presenting, critiquing, and responding through role-play and drills.",
    },
    {
      title: "4. Rebuttal & Counter-argument",
      description:
        "Master Uttara Paksha, refutation, and effective responses in debate cross-examinations.",
    },
    {
      title: "5. Debate Formats",
      description:
        "Explore Indian debate formats (Charcha, Samvada, Vada) and modern adaptations through group activities.",
    },
    {
      title: "6. Application Labs",
      description:
        "Mock debates, ethical dilemmas, and case studies using both Indian and global methodologies.",
    },
    {
      title: "7. Communication & Style",
      description:
        "Sharpen public speaking, persuasive delivery, and digital presentation skills.",
    },
    {
      title: "8. Feedback & Assessment",
      description:
        "Peer feedback, mentor critique, and performance-based evaluation with certification.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Tark Vitark Global Bootcamp Programme
        </h2>
        <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          An immersive{" "}
          <span className="font-semibold text-[#ff6b35]">2–3 week program</span>{" "}
          designed for students eager to master{" "}
          <span className="font-semibold text-[#ff6b35]">
            classical Indian debate traditions, modern argumentation, and public
            speaking
          </span>
          . Delivered by expert mentors through interactive sessions and
          real-world applications.
        </p>
      </div>

      {/* Program Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {programInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#ff6b35]/10 via-white to-[#ff6b35]/10"
          >
            <h3 className="text-lg font-semibold text-[#ff6b35] mb-2">
              {info.label}
            </h3>
            <p className="text-gray-700">{info.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Modules */}
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
        Bootcamp Module Outline
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {bootcampModules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gradient-to-br from-[#ff6b35]/10 via-white to-[#ff6b35]/10"
          >
            <h4 className="text-xl font-semibold text-[#ff6b35] mb-2">
              {module.title}
            </h4>
            <p className="text-gray-700">{module.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Bootcamps;
