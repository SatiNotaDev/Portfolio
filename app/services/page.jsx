"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    descr:
      "As a React developer, I specialize in building responsive and interactive user interfaces. I excel in creating reusable components, managing state with hooks, and integrating RESTful APIs to develop efficient and user-friendly web applications.",
    link: "",
  },
  {
    num: "02",
    title: "Digital Marketing",
    descr:
      "I develop and implement effective strategies across various digital platforms. My approach includes social media management, email marketing, and content creation. Using data-driven methods, I optimize campaigns to increase engagement and conversions.",
    link: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    descr:
      "My focus is on understanding clients and their needs deeply. I create intuitive interfaces based on thorough user experience analysis. This approach allows me to develop solutions that fully meet the expectations of the target audience and enhance user satisfaction.",
    link: "",
  },
  {
    num: "04",
    title: "Logo Design",
    descr:
      "I craft visually striking and memorable logos that capture brand essence. Combining artistic creativity with strategic thinking, I ensure logos are versatile across various media. My designs effectively communicate brand values and enhance overall brand recognition.",
    link: "",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
              {services.map((service, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, ease: "easeOut"}}
                    className="flex-1 flex flex-col justify-center gap-6 group"
                  >
                    <div className="w-full flex justify-between items-center">
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {service.num}
                      </div>
                      <Link
                        href={service.link}
                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      >
                        <BsArrowDownRight className="text-primary text-3xl" />
                      </Link>
                    </div>
                    <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>
                    <p className="text-white/60">{service.descr}</p>
                    <div className="border-b border-white/20 w-full"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Services;