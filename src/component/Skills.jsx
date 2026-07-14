import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPhp,
  SiCplusplus,
  SiVite,
} from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, level: 95 },
      { name: "CSS", icon: FaCss3Alt, level: 90 },
      { name: "Bootstrap", icon: FaBootstrap, level: 90 },
      { name: "Tailwind", icon: RiTailwindCssFill, level: 90 },
      { name: "JavaScript", icon: IoLogoJavascript, level: 85 },
      { name: "React", icon: FaReact, level: 85 },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 70 },
      { name: "Express.js", icon: SiExpress, level: 75 },
      { name: "Php", icon: SiPhp, level: 50 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 85 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "VS Code", icon: VscVscode, level: 95 },
      { name: "Vite", icon: SiVite, level: 90 },
      { name: "NPM", icon: FaNpm, level: 90 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 60 },
      { name: "MySQL", icon: SiMysql, level: 70 },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "C++", icon: SiCplusplus, level: 85 },
      { name: "C#", icon: FaCode, level: 75 },
      { name: "Java", icon: FaJava, level: 75 },
      { name: "Python", icon: FaPython, level: 70 },
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                {category.title}
              </h3>

              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div key={skill.name} className="mb-5">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <Icon className="text-2xl text-cyan-400" />

                        <span>{skill.name}</span>
                      </div>

                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-cyan-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
