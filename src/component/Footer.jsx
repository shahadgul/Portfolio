import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/30">
                <FaCode />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Shahad
                  <span className="text-blue-500">.</span>
                </h2>

                <p className="text-gray-400 text-sm">Frontend Developer</p>
              </div>
            </div>

            <p className="text-gray-400 leading-8">
              Passionate Frontend Developer creating modern, responsive and
              interactive web applications using React, Tailwind CSS and
              JavaScript.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/shahadgul"
                target="_blank"
                className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/shahadgul"
                target="_blank"
                className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shahadgul905@gmail.com&su=Hiring%20Inquiry&body=Hi%20Shahad,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-500 duration-300 hover:translate-x-2 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-blue-500 duration-300">
                Responsive Websites
              </li>

              <li className="hover:text-blue-500 duration-300">
                React Development
              </li>

              <li className="hover:text-blue-500 duration-300">Tailwind CSS</li>

              <li className="hover:text-blue-500 duration-300">
                JavaScript ES6+
              </li>

              <li className="hover:text-blue-500 duration-300">
                REST API Integration
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Contact</h3>

            <div className="space-y-5 text-gray-400">
              <p>📧 Shahadgul905@gmail.com</p>

              <p>📍 Peshawar, Pakistan</p>

              <p>💼 Available for Freelance</p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shahadgul905@gmail.com&su=Hiring%20Inquiry&body=Hi%20Shahad,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-400 flex items-center gap-2 text-center">
            Made by Shahad gul using React & Tailwind CSS
          </p>

          <p className="text-gray-500 text-center">
            © 2026 Shahad Gul. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll Top */}

      <button
        onClick={scrollTop}
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 transition duration-300 flex items-center justify-center"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
