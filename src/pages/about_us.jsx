import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import About from "../components/about";

const about_us = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default about_us;
