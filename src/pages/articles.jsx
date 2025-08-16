import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaNewspaper, FaArrowRight } from "react-icons/fa";

const Articles = () => {
  // Sample Articles Data
  const articles = [
    {
      title: "Reviving the Art of Debate in Modern Education",
      excerpt:
        "How classical Indian logic and debate traditions can transform the way we approach learning in the 21st century.",
      link: "#",
      date: "March 5, 2025",
    },
    {
      title: "The Role of Dialogue in Policy Making",
      excerpt:
        "Exploring how constructive discourse rooted in philosophy can contribute to effective governance and decision-making.",
      link: "#",
      date: "February 20, 2025",
    },
    {
      title: "Debate Pedagogy for the Youth",
      excerpt:
        "Innovative ways to integrate debate and critical thinking into school curriculums to nurture future leaders.",
      link: "#",
      date: "January 28, 2025",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-12 bg-gradient-to-r from-[#ff6b35]/20 via-white to-[#ff6b35]/20 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 text-center">
          Articles & Insights
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl">
          Explore thought leadership, perspectives, and research on debate,
          dialogue, and intellectual traditions.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {article.title}
              </h2>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm text-gray-500">{article.date}</span>
              <a
                href={article.link}
                className="flex items-center gap-2 text-[#ff6b35] font-semibold hover:underline"
              >
                Read More <FaArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Highlight Strip */}
      <div className="w-full bg-white border-t border-b border-gray-200 py-6 mb-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 px-6">
          <div className="flex items-center gap-3">
            <FaNewspaper className="text-[#ff6b35] w-8 h-8" />
            <span className="font-semibold text-gray-900 text-lg">
              Fresh Perspectives Every Month
            </span>
          </div>
          <a
            href="/subscribe"
            className="bg-[#ff6b35] hover:bg-[#e85a2d] text-white px-6 py-3 rounded-lg font-semibold shadow transition"
          >
            Subscribe
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Articles;
