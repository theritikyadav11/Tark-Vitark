import React from "react";
import { motion } from "framer-motion";

const Mentorship = () => {
  const mentorshipHighlights = [
    {
      title: "1-on-1 Guidance",
      description:
        "Work closely with industry experts who provide personalized mentorship tailored to your growth path.",
    },
    {
      title: "Career Insights",
      description:
        "Gain valuable industry knowledge, academic expertise, and practical advice to shape your professional journey.",
    },
    {
      title: "Intellectual Growth",
      description:
        "Develop critical thinking, communication, and leadership skills with the support of experienced mentors.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Personal Mentorship by Industry Expert
        </h2>
        <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          This program connects students and scholars with{" "}
          <span className="font-semibold text-[#ff6b35]">
            experienced mentors
          </span>{" "}
          who share industry insights, academic expertise, and career advice to
          help mentees grow both intellectually and professionally.
        </p>
      </div>

      {/* Mentorship Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentorshipHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-8 rounded-2xl transition bg-gradient-to-br from-[#ff6b35]/10 via-white to-[#ff6b35]/10"
          >
            <h3 className="text-2xl font-semibold text-[#ff6b35] mb-3">
              {highlight.title}
            </h3>
            <p className="text-gray-700">{highlight.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mentorship;
