import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center text-white"
    >
      <h1 className="text-5xl font-bold">MUHAMMAD Ali HUSNAIN</h1>
      <p className="mt-4 text-xl">Front-End Developer</p>
      <div className="mt-6">
        <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 rounded-full mr-4">View Projects</a>
        <a href="#contact" className="px-6 py-3 border border-white rounded-full">Contact Me</a>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
