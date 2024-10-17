import { PiArrowFatLinesRightThin } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      id="home"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 px-4 pt-16 md:pt-32"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-fit md:h-full pt-32 md:pt-0 gap-10">
        {/* Image section */}
        <div className="order-1 md:order-2 flex items-center justify-center relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/assets/heroImage.png"
            alt="My Profile"
            className="liquid-effect rounded-full sm:w-[75%] lg:w-full z-10"
          />
        </div>

        {/* Text section with framer motion */}
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold md:font-bold">
            I`m a Frontend Developer
          </h2>
          <p className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent max-w-md py-4 md:text-lg font-medium md:tracking-wider">
            I`ve 1.5 years of experience building websites. I love to work on
            web applications using technologies like React, Tailwind CSS, and
            Next.js.
          </p>
          <motion.button
            className="group text-white px-4 md:px-6 py-2 hover:scale-110 transition-transform duration-500  md:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Portfolio{" "}
            <span>
              <PiArrowFatLinesRightThin
                className="text-white group-hover:rotate-90 transition-all duration-200 ease-in ml-2"
                size={20}
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
