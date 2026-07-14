import styles from "../Style/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 py-5 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
      <div className="text-3xl font-bold text-white cursor-pointer">
        Port<span className="text-cyan-400">folio</span>
      </div>
      <ul className="hidden md:flex items-center gap-10 text-white font-medium">
        <li>
          <a href="#Hero" className={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" className={styles.link}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.link}>
            Contact
          </a>
        </li>
      </ul>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=shahadgul905@gmail.com&su=Hiring%20Inquiry&body=Hi%20Shahad,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
      >
        <button className={styles.button}>Hire Me</button>
      </a>
    </nav>
  );
};

export default Navbar;
