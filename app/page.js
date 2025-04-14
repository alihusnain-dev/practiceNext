"use client"
import React from 'react'
import { motion } from 'framer-motion';
const page = () => {
  return (
    <>
      <main className="bg-gray-900 text-white font-sans">

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Hi, I'm <span className="text-purple-300">Ali Husnain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-xl text-gray-300"
          >
            Front-End Developer | Designer | Tech Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 space-x-4"
          >
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition">
              View Projects
            </a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact Me
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto" id="about" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            I'm a passionate Front-End Developer with experience in building responsive and dynamic websites using modern technologies like React, Tailwind CSS, and Next.js. I also explore graphic design and digital marketing.
          </p>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-800 px-6" id="services" data-aos="fade-up">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Web Development', desc: 'Building fast, responsive, and modern websites.' },
                { title: 'Graphic Design', desc: 'Creating visually appealing logos, banners, and interfaces.' },
                { title: 'Digital Marketing', desc: 'SEO, content strategy, and social media growth.' },
              ].map((service, i) => (
                <div key={i} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition">
                  <h3 className="text-xl font-semibold mb-3 text-purple-300">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-20 px-6 max-w-6xl mx-auto" id="projects" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Portfolio V1',
                link: 'https://alihusnain-dev.github.io/portfolio',
              },
              {
                name: 'Portfolio V2',
                link: 'http://mahportfolio2.rf.gd/contact.html',
              },
              {
                name: 'Vercel Portfolio',
                link: 'https://portfolio-gamma-lyart-54.vercel.app/',
              },
            ].map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-6 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.name}</h3>
                <p className="text-gray-400">Click to view live project</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-6 bg-gray-900" id="contact" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form className="max-w-xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
          &copy; {new Date().getFullYear()} Ali Husnain. All rights reserved.
        </footer>
      </main>
    </>
  );
}
export default page