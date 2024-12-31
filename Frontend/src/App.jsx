import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./Components/Course";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import Loading from "./Components/Loading"; // Loading spinner component
import About from "./Components/About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading /> 
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Toaster />
        </>
      )}
    </div>
  );
};

export default App;
