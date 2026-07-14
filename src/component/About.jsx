function About() {
  return (
    <section id="about" className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4">
            A brief introduction about my education and development journey.
          </p>
        </div>

        {/* About Content */}
        <div className="space-y-8">
          <p className="text-lg text-gray-300 leading-8">
            I'm <span className="text-cyan-400 font-semibold">Shahad Gul</span>,
            a passionate MERN Stack Developer who enjoys building modern,
            responsive, and user-friendly web applications. I love learning new
            technologies and continuously improving my development skills by
            creating real-world projects.
          </p>

          <p className="text-lg text-gray-300 leading-8">
            During my university studies, I developed a strong programming
            foundation by learning C++, C#, Java, Python,Web Development, App
            Dev, Database Systems, Data Structures & Algorithms (DSA), and
            Software Engineering concepts. <br />
            These subjects helped me understand problem-solving, programming
            logic, and application development.
          </p>

          <p className="text-lg text-gray-300 leading-8">
            My primary focus is the MERN Stack. I build responsive frontend
            interfaces and scalable backend applications using modern web
            technologies.
          </p>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                University Knowledge
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>• C++</li>
                <li>• C#</li>
                <li>• Java</li>
                <li>• JavaScript (ES6+)</li>
                <li>• Php</li>
                <li>• Python</li>
                <li>• Database Systems</li>
                <li>• Data Structures & Algorithms</li>
                <li>• Object-Oriented Programming</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                MERN Stack Skills
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>• HTML5</li>
                <li>• CSS3</li>
                <li>• Bootstrap</li>
                <li>• Tailwind CSS</li>
                <li>• JavaScript (ES6+)</li>
                <li>• React.js</li>
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
