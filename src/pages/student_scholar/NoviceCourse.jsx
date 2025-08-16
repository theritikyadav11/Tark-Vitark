import React from "react";

const NoviceCourse = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900 border-l-4 border-amber-500 pl-4">
        4 Weeks Novice TVG Course
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        This intensive 4-week course introduces beginners to the fundamentals of{" "}
        <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors">
          Tark-Vitark Global’s debate methodologies
        </span>
        . Students will learn{" "}
        <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors">
          classical and modern argumentation techniques
        </span>{" "}
        designed to sharpen{" "}
        <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors">
          critical thinking
        </span>{" "}
        and{" "}
        <span className="font-semibold text-amber-600 hover:text-amber-700 transition-colors">
          communication skills
        </span>{" "}
        in a supportive environment.
      </p>
    </section>
  );
};

export default NoviceCourse;
