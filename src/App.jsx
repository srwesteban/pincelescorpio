import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Certificates from "./sections/Certificates";
import WhatsAppButton from "./components/WhatsApp";

const App = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
         <About /> {/*
        <Certificates /> */}
        <Projects />
        {/* <Experiences />
        <Contact /> */}
        <Footer />
      </div>
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </>
  );
};

export default App;
