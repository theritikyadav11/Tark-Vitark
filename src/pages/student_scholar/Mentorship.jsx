import React from "react";
import { motion } from "framer-motion";

const Mentorship = () => {
  const mentorshipHighlights = [
    {
      title: "Individualized Guidance",
      description:
        "Tailored one-on-one sessions where mentees receive direct feedback on debate style, argumentation, and mastery of Purva Paksha techniques.",
    },
    {
      title: "Content Customization",
      description:
        "Personalized reading lists, debate topics, or philosophical texts chosen based on the mentee’s interests and current skill level.",
    },
    {
      title: "Role Modelling and Tradition",
      description:
        "Mentor demonstrates both Indian classical debating methods and how to adapt them for modern competitive or academic contexts.",
    },
    {
      title: "Community Access",
      description:
        "Mentees may also join small group workshops, alumni forums, or participate in exclusive Tark Vitark Global events for networking and deeper immersion.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          One-on-One Mentorship Programme
        </h2>
        <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          A structured mentorship initiative where{" "}
          <span className="font-semibold text-[#ff6b35]">
            experienced mentors
          </span>{" "}
          guide mentees through personalized learning, traditional debating
          techniques, and professional growth while fostering intellectual and
          academic excellence.
        </p>
      </div>

      {/* Mentorship Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
