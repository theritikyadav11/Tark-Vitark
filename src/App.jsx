// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About_us from "./pages/about_us";
import Student_scholar from "./pages/student_scholar";

import NoviceCourse from "./pages/student_scholar/NoviceCourse";
import Bootcamps from "./pages/student_scholar/Bootcamps";
import Mentorship from "./pages/student_scholar/Mentorship";
import AwakeningPrograms from "./pages/student_scholar/AwakeningPrograms";
import EngagementPrograms from "./pages/student_scholar/EngagementPrograms";

import Articles from "./pages/articles";
import Institutions from "./pages/Institutions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About_us />} />

        <Route path="/student_scholar" element={<Student_scholar />}>
          <Route index element={<NoviceCourse />} />
          <Route path="novice-course" element={<NoviceCourse />} />
          <Route path="bootcamps" element={<Bootcamps />} />
          <Route path="mentorship" element={<Mentorship />} />
          <Route path="awakening-programs" element={<AwakeningPrograms />} />
          <Route path="engagement-programs" element={<EngagementPrograms />} />
        </Route>

        <Route path="/articles" element={<Articles />} />
        <Route path="/institutions" element={<Institutions />} />
      </Routes>
    </Router>
  );
};

export default App;
