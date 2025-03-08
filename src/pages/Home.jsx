import React from "react";
import Terminal from "../components/Terminal";
import Navbar from "../components/Navbar";

const Home = () => {
  const beams = Array.from({ length: 50 }, (_, i) => i);

  return (
    <>
      <div className="relative h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          {beams.map((beam) => (
            <div
              key={beam}
              className="absolute w-[2px] h-[40vh] bg-blue-500 opacity-40 animate-move-beam"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-center space-y-8">
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Welcome to<span className="text-blue-500"> TechNovya</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Dive into the perfect blend of innovation and elegance. Experience
            the future of technology with stunning design and timeless
            sophistication.
          </p>
          
        </div>
      </div>
      <Terminal/>
    </>
  );
};

export default Home;
