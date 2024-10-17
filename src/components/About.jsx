import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.1, // Animation triggers when 10% of the section is visible
  });

  return (
    <div
      id="about"
      className="w-full lg:h-screen py-20 md:py-0 bg-gradient-to-b to-black from-gray-800 text-gray-300 px-4 flex items-center"
      ref={ref}
    >
      <motion.div
        className="max-w-screen-xl mx-auto px-4 py-16 text-gray-300"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify mb-1">
          About Me
        </h2>
        <div className="w-32 lg:w-52 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 mb-6" />
        <p className="mb-4 md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify">
          Hi! I`m Abdul Haseeb, a passionate frontend developer with a strong
          focus on building interactive and functional web applications. I have
          hands-on experience with modern JavaScript frameworks, primarily
          React.js, and I enjoy turning complex problems into simple, elegant
          solutions. Over the past 1.5 years, I`ve been honing my skills by
          working on various projects involving React, Firebase, Tailwind CSS,
          and other cutting-edge technologies.
        </p>
        <p className="mb-4 md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify">
          Whether it`s building a dynamic user interface, integrating APIs, or
          ensuring seamless authentication, I aim to create efficient,
          user-friendly experiences. As I continue to grow as a developer, I`m
          always eager to learn new tools and refine my coding practices. I
          believe that well-structured code and attention to detail are key to
          delivering quality software.
        </p>
        <p className="md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify">
          If you`re looking for a dedicated developer to collaborate on
          innovative projects, feel free to get in touch!
        </p>
      </motion.div>
    </div>
  );
}
