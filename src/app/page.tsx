"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <AnimatedBackground />
      <Hero />

      {/* Analytics Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>

        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"
          >
            Delivering Excellence at Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-16"
          >
            Empowering businesses with enterprise-grade networking solutions
            that combine cutting-edge technology, unwavering reliability, and
            world-class support. Our mission is to build the digital
            infrastructure that powers Africa's next generation of business
            innovation.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {[
              {
                name: "Enterprise",
                count: "200+",
                label: "Enterprise Clients",
                icon: (
                  <svg
                    className="w-6 h-6 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                name: "Coverage",
                count: "15+",
                label: "Cities Covered",
                icon: (
                  <svg
                    className="w-6 h-6 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                name: "Support",
                count: "24/7",
                label: "Technical Support",
                icon: (
                  <svg
                    className="w-6 h-6 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                name: "Uptime",
                count: "99.9%",
                label: "Network Uptime",
                icon: (
                  <svg
                    className="w-6 h-6 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12H18L15 21L9 3L6 12H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300 text-center">
                  <div className="text-blue-400 flex justify-center">
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    {stat.count}
                  </motion.div>
                  <div className="text-white/70 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
              Enterprise Network Solutions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto text-center">
              Delivering high-performance networking infrastructure for
              businesses that never stop
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Dedicated Fiber",
                description:
                  "Ultra-fast, reliable fiber optic connections with guaranteed bandwidth and uptime SLAs.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16L16 12L12 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                features: [
                  "99.99% Uptime",
                  "Dedicated Bandwidth",
                  "24/7 Support",
                ],
              },
              {
                title: "Network Management",
                description:
                  "24/7 monitored infrastructure with proactive maintenance and real-time optimization.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7V12L15 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                features: [
                  "Real-time Monitoring",
                  "Traffic Analysis",
                  "Performance Tuning",
                ],
              },
              {
                title: "Data Security",
                description:
                  "Enterprise-grade security protocols with advanced threat detection and prevention.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                features: [
                  "Threat Prevention",
                  "Encryption",
                  "Compliance Ready",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent rounded-3xl transform group-hover:translate-y-[-4px] transition-transform duration-300"></div>
                <div className="relative p-8 rounded-3xl border border-white/10 backdrop-blur-sm h-full flex flex-col">
                  <div className="text-blue-400 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-white/60">
                        <svg
                          className="w-5 h-5 mr-3 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Showcase Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-blue-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600"
          >
            Trusted by Leading Businesses
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "Vodacom",
                logo: "/logos/vodacom.png",
                quote:
                  "Datamass has been instrumental in enhancing our network infrastructure with their reliable fiber solutions.",
                author: "Network Operations Director",
                role: "Enterprise Division",
              },
              {
                company: "Standard Bank",
                logo: "/logos/standard-bank.png",
                quote:
                  "Their enterprise-grade security and dedicated support have been crucial for our banking operations.",
                author: "IT Infrastructure Manager",
                role: "Digital Banking",
              },
              {
                company: "Multichoice",
                logo: "/logos/multichoice.png",
                quote:
                  "The high-speed connectivity and reliability provided by Datamass supports our broadcasting needs perfectly.",
                author: "Technical Director",
                role: "Operations",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative h-full p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-sm flex flex-col">
                  <div className="relative w-[160px] h-14 mb-6 mx-auto">
                    <Image
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      fill
                      className="object-contain hover:opacity-90 transition-opacity duration-300"
                      sizes="160px"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {testimonial.company}
                  </h3>
                  <p className="text-white/70 mb-8 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold">
                      {testimonial.company[0]}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {testimonial.author}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 skew-y-3"
        ></motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              Ready to Transform Your Network?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose the path that best fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Schedule a Demo",
                description:
                  "See our solutions in action with a personalized demo tailored to your needs.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10L19.553 7.724C19.7054 7.64784 19.8748 7.61188 20.0466 7.61954C20.2184 7.62719 20.3834 7.67821 20.5275 7.76733C20.6716 7.85645 20.7898 7.98054 20.8717 8.12897C20.9537 8.2774 20.997 8.44493 20.998 8.616V15.384C20.997 15.5551 20.9537 15.7226 20.8717 15.871C20.7898 16.0195 20.6716 16.1436 20.5275 16.2327C20.3834 16.3218 20.2184 16.3728 20.0466 16.3805C19.8748 16.3881 19.7054 16.3522 19.553 16.276L15 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                buttonText: "Book Demo",
                buttonStyle:
                  "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
              },
              {
                title: "Talk to Sales",
                description:
                  "Get expert advice on the perfect networking solution for your business.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                buttonText: "Contact Sales",
                buttonStyle: "bg-white/10 hover:bg-white/20 backdrop-blur-sm",
              },
              {
                title: "Quick Start",
                description:
                  "Ready to go? Get started with our standard enterprise packages.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                buttonText: "Get Started",
                buttonStyle:
                  "bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm",
              },
            ].map((cta, index) => (
              <motion.div
                key={cta.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="text-blue-400 mb-6">{cta.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {cta.title}
                  </h3>
                  <p className="text-white/70 mb-8 flex-grow">
                    {cta.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full ${cta.buttonStyle} transition-all duration-300 font-semibold text-white w-full mt-auto`}
                  >
                    {cta.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4 md:mb-0"
          >
            Datamass™
          </motion.div>
          <motion.nav
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </Link>
          </motion.nav>
        </div>
      </footer>
    </main>
  );
}
