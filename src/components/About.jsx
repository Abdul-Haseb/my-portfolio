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
      className="w-full lg:h-screen py-24 md:py-28 bg-gradient-to-b to-black from-gray-800 text-gray-300 flex items-center px-4"
      ref={ref}
    >
      <motion.div
        className="max-w-screen-xl mx-auto py-12 lg:py-16 text-gray-300"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration
      >
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-gray-100 to-cyan-200  bg-clip-text text-transparent text-justify mb-1">
          About
        </h3>
        <div className="w-24 md:w-28 lg:w-36 bg-gradient-to-r from-cyan-500 to-blue-500 h-1 mb-6" />
        <p className="md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent text-justify">
          Hi there! I`m Abdul Haseeb, a frontend developer with a passion for
          creating interactive web experiences. My journey into web development
          started about 1.5 years ago, and since then, I`ve been immersing
          myself in the world of coding, focusing on building clean and
          user-friendly web applications. What began as curiosity has now become
          my full-time pursuit, and I love every bit of it!
        </p>
        <p className="md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent text-justify my-4">
          My main focus has been on mastering React.js and working with tools
          like Tailwind CSS to create responsive and dynamic interfaces. I`m
          always excited to explore new libraries and frameworks that can make
          my projects more efficient and engaging. I`ve worked on projects that
          range from simple static websites to more complex applications
          involving Firebase for backend services, and I`ve learned so much
          about managing state, handling user authentication, and structuring
          code for scalability.
        </p>
        <p className="md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent text-justify">
          I believe that the best way to grow as a developer is by constantly
          challenging myself, so I`m always looking for opportunities to
          improve. Whether it`s debugging a tricky issue, finding a more
          efficient way to render components, or simply exploring new design
          trends, I find joy in the process of solving problems. I still have a
          lot to learn, but I`m proud of the progress I`ve made so far and
          excited about what`s to come.
        </p>
        <p className="md:text-lg leading-relaxed bg-gradient-to-r from-gray-100 to-cyan-200 bg-clip-text text-transparent text-justify mt-4">
          When I`m not coding, I enjoy keeping up with the latest in tech and
          design, reading about new ideas, and connecting with other developers
          in the community. I believe in the power of collaboration and am
          always open to new projects or just a chat about code. If you`re
          looking for someone who is eager to learn and can bring a fresh
          perspective to your next project, I`d love to hear from you!
        </p>
      </motion.div>
    </div>
  );
}
