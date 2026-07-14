import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Calculator from "../assets/Calculator.png";
import Portfolio from "../assets/Portfolio.png";
//import todo from "../assets/todo.png";
//import weather from "../assets/weather.png";
//import social from "../assets/social.png";
//import clock from "../assets/clock.png";

const projects = [
  {
    title: "Calculator App",
    image: Calculator,
    description: "A responsive calculator built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/shahadgul",
    live: "https://calculator-tjx4.vercel.app/",
    isLive: true,
  },

  {
    title: "Todo App",
    // image: todo,
    description:
      "A task management application with add, edit and delete functionality.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/shahadgul",
    live: "#",
    isLive: true,
  },

  {
    title: "Portfolio",
    image: Portfolio,
    description:
      "Personal portfolio website showcasing my projects, skills, and experience.",
    tech: ["HTML", "Tailwind css", "React"],
    github: "https://github.com/shahadgul",
    isLive: true,
  },

  {
    title: "Social Media UI",
    //image: social,
    description: "A responsive social media interface design.",
    tech: ["React.js", "Bootstrap"],
    github: "https://github.com/shahadgul",
    isLive: false,
  },

  {
    title: "Digital Clock",
    //image: clock,
    description: "Digital clock built with JavaScript.",
    tech: ["React.js", "Bootstrap"],
    github: "https://github.com/shahadgul",
    isLive: false,
  },
  {
    title: "Weather App",
    //image: weather,
    description: "Weather application using API integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shahadgul",
    isLive: false,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            A collection of projects that showcase my learning and development
            journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  {project.isLive && (
                    <span className="text-xs bg-green-600 px-2 py-1 rounded-full">
                      Live
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mt-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.isLive && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-cyan-400 text-black px-4 py-2 rounded-lg hover:bg-cyan-300 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
