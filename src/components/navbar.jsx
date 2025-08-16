// src/components/navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studentsOpen, setStudentsOpen] = useState(false);

  const desktopDropRef = useRef(null);
  const mobileDropRef = useRef(null);

  // Close dropdown (desktop & mobile) when clicking outside
  useEffect(() => {
    const handleDocClick = (e) => {
      const inDesktop = desktopDropRef.current?.contains(e.target);
      const inMobile = mobileDropRef.current?.contains(e.target);
      if (inDesktop || inMobile) return;
      setStudentsOpen(false);
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  const studentSubPages = [
    {
      name: "4 Weeks Novice TVG Course",
      path: "/student_scholar/novice-course",
    },
    { name: "Bootcamps", path: "/student_scholar/bootcamps" },
    {
      name: "Personal Mentorship by Industry Expert",
      path: "/student_scholar/mentorship",
    },
    {
      name: "India’s leading Youth Awakening Programs & Courses",
      path: "/student_scholar/awakening-programs",
    },
    {
      name: "Student Engagement Programs",
      path: "/student_scholar/engagement-programs",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-300 text-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo3.png"
            alt="Tark-Vitark Logo"
            className="w-20 h-20 object-contain "
          />

          <span className="text-lg font-semibold">TarkVitarkGlobal</span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-red-700 transition-colors">
            Home
          </Link>

          {/* Desktop dropdown */}
          <div className="relative" ref={desktopDropRef}>
            <button
              onClick={() => setStudentsOpen((v) => !v)}
              aria-expanded={studentsOpen}
              className="flex items-center gap-1 hover:text-red-700 focus:text-red-700 transition-colors"
              type="button"
            >
              Students/Scholars
              <svg
                className={`w-4 h-4 transition-transform ${
                  studentsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {studentsOpen && (
              <div className="absolute top-full mt-2 w-56 bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                {studentSubPages.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-red-50 transition-colors"
                    onClick={() => setStudentsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/institutions"
            className="hover:text-red-700 transition-colors"
          >
            Institutions
          </Link>

          <Link to="/articles" className="hover:text-red-700 transition-colors">
            Articles
          </Link>

          <Link to="/about_us" className="hover:text-red-700 transition-colors">
            About us
          </Link>
        </nav>

        {/* Mobile: hamburger turns into X when open */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((v) => !v);
            setStudentsOpen(false);
          }}
          type="button"
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-100 px-4 pb-4 space-y-2 border-t border-gray-300">
          <Link
            to="/"
            className="block py-2 hover:text-red-700"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile dropdown */}
          <div ref={mobileDropRef}>
            <button
              onClick={() => setStudentsOpen((v) => !v)}
              aria-expanded={studentsOpen}
              className="flex w-full items-center justify-between py-2 hover:text-red-700 focus:text-red-700 transition-colors"
              type="button"
            >
              Students/Scholars
              <svg
                className={`w-4 h-4 transition-transform ${
                  studentsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {studentsOpen && (
              <div className="ml-3 mt-1 space-y-1">
                {studentSubPages.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-1 hover:text-red-700"
                    onClick={() => {
                      setStudentsOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/institutions"
            className="block py-2 hover:text-red-700"
            onClick={() => setMobileOpen(false)}
          >
            Institutions
          </Link>

          <Link
            to="/articles"
            className="hover:text-red-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Articles
          </Link>

          <Link
            to="/about_us"
            className="block py-2 hover:text-red-700"
            onClick={() => setMobileOpen(false)}
          >
            About us
          </Link>
        </div>
      )}
    </header>
  );
}
