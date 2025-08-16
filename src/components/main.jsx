import React from "react";

const Main = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
      {/* Tagline */}
      <p className="text-sm font-semibold text-[#ff6b35] uppercase tracking-widest mb-4">
        As trailblazers of India's intellectual legacy
      </p>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug max-w-3xl mb-10">
        Tark Vitark Global is the first center of its kind to champion classical
        debate methodologies for the modern world.
      </h1>

      {/* Welcome Message */}
      <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
        Welcome to Tark Vitark Global
      </p>

      <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-8">
        At Tark Vitark Global, we are on a mission to revive and modernize
        India’s timeless traditions of philosophical debate—particularly the
        Purva Paksha–Uttara Paksha methodology—and bring them into the heart of
        education, governance, and public policy.
      </p>

      {/* Philosophy Section */}
      <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-14">
        We believe that ancient Indian dialectical traditions—refined over
        centuries in the halls of Nalanda, Takshashila, and our grand
        philosophical Samvad sabhas—can provide powerful tools for critical
        thinking, ethical leadership, and democratic governance in the 21st
        century. By merging these traditions with modern debate formats, global
        communication skills, and public policy frameworks, we are preparing the
        thinkers, leaders, and changemakers of tomorrow.
      </p>

      {/* Who We Work With */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#ff6b35] pl-4">
        Who We Work With
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6 text-gray-700 text-lg max-w-4xl">
        {[
          "Schools, universities, and coaching institutes",
          "Public policy think tanks, NGOs, and government bodies",
          "Cultural and philosophical research centers",
          "Global debate and public speaking organizations",
          "Governance and leadership academies",
        ].map((item) => (
          <li key={item} className="flex items-center gap-4">
            <span className="flex-shrink-0 w-6 h-6 bg-[#ff6b35] rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
