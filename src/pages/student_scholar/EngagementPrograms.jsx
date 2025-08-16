import React from "react";

const EngagementPrograms = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900 border-l-4 border-red-500 pl-4">
        Student Engagement Programs
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our student engagement programs foster{" "}
        <span className="font-semibold text-red-600 hover:text-red-700 transition-colors">
          collaborative learning
        </span>{" "}
        and interaction through{" "}
        <span className="font-semibold text-red-600 hover:text-red-700 transition-colors">
          debate competitions
        </span>
        ,{" "}
        <span className="font-semibold text-red-600 hover:text-red-700 transition-colors">
          discussion forums
        </span>
        , and{" "}
        <span className="font-semibold text-red-600 hover:text-red-700 transition-colors">
          community projects
        </span>
        . These initiatives build confidence and encourage active participation
        in intellectual discourse.
      </p>
    </section>
  );
};

export default EngagementPrograms;
