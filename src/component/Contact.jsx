import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, freelance work, or
            exciting projects.
            <br />
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
                <div className="text-cyan-400 text-3xl">
                  <MdOutlineMailOutline />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shahadgul905@gmail.com&su=Hiring%20Inquiry&body=Hi%20Shahad,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    shahadgul905@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
                <div className="text-cyan-400 text-3xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="https://wa.me/923149001368"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    +92 314 9001368
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
                <div className="text-cyan-400 text-3xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Peshawar, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 bg-slate-900 p-5 mt-7 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
              <h2 className="font-semibold">Connect with me</h2>
              <a
                href="https://www.linkedin.com/in/shahadgul"
                target="_blank"
                className="text-3xl text-white hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.github.com/shahadgul"
                target="_blank"
                className="text-3xl text-white hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shahadgul905@gmail.com&su=Hiring%20Inquiry&body=Hi%20Shahad,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white hover:text-cyan-400 transition"
              >
                <MdOutlineMailOutline />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <form className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <div className="mb-6">
              <label className="block mb-2">Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2">Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-400"
              ></textarea>
            </div>

            <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-transparent hover:text-cyan-400 border-2 border-cyan-400 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
