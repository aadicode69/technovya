import React from "react";

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

          {/* buttons are here */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0">
            <button className="relative px-8 py-4 font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg border border-transparent hover:border-cyan-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-indigo-500/50 group">
              <span className="relative z-10">Explore More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg opacity-30 group-hover:opacity-80 transition-all duration-500 ease-in-out"></span>
            </button>
            <button className="relative px-8 py-4 font-semibold text-cyan-500 border border-cyan-500 rounded-lg bg-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-indigo-500/50 group">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg opacity-30 group-hover:opacity-80 transition-all duration-500 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
