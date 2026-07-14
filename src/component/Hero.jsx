//import { useEffect, useState } from "react";
import Profile from "../assets/Profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Resume from "../assets/Shahad Gul Resume.pdf";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  /*const titles = [
    "Frontend Developer",
    "React.js Developer",
    "JavaScript Developer",
    "Mern stack Developer",
    "Building scalable web app",
    "clean maintainable & modular code",
    "Developing responsive web app",
    "mobile-first interfaces",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);*/
  return (
    <section
      id="home"
      className="min-h-screen mt-15 bg-slate-950 text-white flex items-center"
    >
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={Profile}
              alt="Profile"
              className="relative w-72 md:w-96 rounded-full border-4 border-cyan-500 shadow-2xl"
            />
          </div>
        </div>
        <div>
          <p className="text-cyan-400 font-semibold mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Shahad Gul
          </h1>
          <div className="text-cyan-400">
            <TypeAnimation
              sequence={[
                "I'm a Frontend Developer", // Types 'One'
                1000, // Waits 1s
                "I'm a React.js Developer", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "I'm a JavaScript Developer",
                1000,
                "I'm a MERN Stack Developer",
                1000,
                "I'm building scalable web applications",
                1000,
                "I'm writing clean & maintainable code",
                1000,
                "I'm developing responsive web app",
                1000,
                "I'm creating mobile-first interfaces",
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
          </div>
          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            I build responsive, modern, and user-friendly web applications using
            React, Node.js, JavaScript, Tailwind CSS, Bootstrap, and custom CSS
            <br />
            Turning ideas into fast, scalable digital experiences.
          </p>
          <div className="mt-8 flex items-center gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/shahadgul"
              target="_blank"
              className="bg-slate-800 p-3 rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shahadgul905@gmail.com&su=Hiring%20Inquiry&body=Hi%20Shahad,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              className="bg-slate-800 p-3 rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <MdOutlineMailOutline />
            </a>

            <a
              href="https://github.com/shahadgul"
              target="_blank"
              className="bg-slate-800 p-3 rounded-full text-white hover:bg-cyan-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={Resume} download="Shahad_Gul_Resume.pdf">
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-transparent hover:text-cyan-500 border-2 border-cyan-500">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
