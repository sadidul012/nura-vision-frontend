import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          LivelinessCheck API
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Verify user liveness in images and video streams. Fast, secure, and easy to integrate.
        </p>
        <a
          href="#docs"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
