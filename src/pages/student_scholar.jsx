import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Student_scholar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Students & Scholars</h1>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Student_scholar;
