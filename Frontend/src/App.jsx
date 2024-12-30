import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./Components/Course";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import Loading from "./Components/Loading"; // Loading spinner component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading with setTimeout
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading /> // Show loading spinner until content is loaded
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster />
        </>
      )}
    </div>
  );
};

export default App;
