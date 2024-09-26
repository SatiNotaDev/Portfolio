"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
    {
      num: "01",
      title: "Web Development",
      descr:
        "As a React developer, I specialize in building responsive and interactive user interfaces. I excel in creating reusable components, managing state with hooks, and integrating RESTful APIs to develop efficient and user-friendly web applications.",
    },
    {
      num: "02",
      title: "Digital Marketing",
      descr:
        "I develop and implement effective strategies across various digital platforms. My approach includes social media management, email marketing, and content creation. Using data-driven methods, I optimize campaigns to increase engagement and conversions.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      descr:
        "My focus is on understanding clients and their needs deeply. I create intuitive interfaces based on thorough user experience analysis. This approach allows me to develop solutions that fully meet the expectations of the target audience and enhance user satisfaction.",
    },
    {
      num: "04",
      title: "Logo Design",
      descr:
        "I craft visually striking and memorable logos that capture brand essence. Combining artistic creativity with strategic thinking, I ensure logos are versatile across various media. My designs effectively communicate brand values and enhance overall brand recognition.",
    },
  ];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={0}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service, index) => {
                return (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold">
                                {service.num}
                            </div>
                            <BsArrowDownRight/>
                        </div>
                        <h2 className="text-xl">{service.title}</h2>
                        <p className="text">{service.descr}</p>
                        <div className="border-b border-white/20 w-full"></div>

                    </div>
                )
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
