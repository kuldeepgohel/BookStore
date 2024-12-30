import React from "react";
import Home from "./Home/Home";
import Course from "./Components/Course";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import  { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
