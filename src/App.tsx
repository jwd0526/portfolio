import React, { useEffect } from "react";
import "./App.css";
import "./images/dan.jpg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Extra from "./components/Extra";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenHeaderElements = document.querySelectorAll(".hidden-header");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    Array.from(hiddenHeaderElements).map((el) => observer.observe(el));

    Array.from(hiddenElements).map((el) => observer.observe(el));

    return () => {
      Array.from(hiddenHeaderElements).map((el) => observer.unobserve(el));
      Array.from(hiddenElements).map((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className="desktop">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Extra />
      <Footer />
    </div>
  );
};

export default App;
