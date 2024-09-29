"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "ecommerce",
    title: "Kraft Flowers",
    description:
      "Online flower shop website with product catalog, bouquet collections, and delivery services.",
    stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/work1.png",
    live: "https://kraftflowers.ru/",
    github: "",
  },
  {
    num: "02",
    category: "media",
    title: "W-Wave Radio",
    description:
      "Online radio station website with live streaming, podcasts, and various shows on topics like music, politics, history and culture.",
    stack: [{ name: "HTML 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/work2.png",
    live: "#",
    github: "https://github.com/SatiNotaDev/RadioSite-HTML-CSS-JS",
  },
  {
    num: "03",
    category: "ecommerce",
    title: "Flower Delivery",
    description:
      "Flower delivery service website with catalog of bouquets, ordering options, and dark floral aesthetic design.",
    stack: [{ name: "CSS" }, { name: "React" }],
    image: "/assets/work/work3.png",
    live: "#",
    github: "#",
  },
  {
    num: "04",
    category: "education",
    title: "HandPi Games",
    description:
      "Educational platform for learning sign language alphabet through interactive games and exercises.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Pyton" }],
    image: "/assets/work/work4.png",
    live: "#",
    github:
      "https://github.com/SatiNotaDev/IT-akademy-PROJECT-IoT-HandPi-Games",
  },
  {
    num: "05",
    category: "finance",
    title: "TFM",
    description:
      "Modular liquidity layer for Cosmos blockchain networks, offering features like swaps, transfers, trading and NFT functionality.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Next.js" }],
    image: "/assets/work/work5.png",
    live: "https://www.tfm.com/",
    github: "",
  },
  {
    num: "06",
    category: "ecommerce",
    title: "Cedar Lux",
    description:
      "Website for a company specializing in building craftsman spas and personalized backyard oasis, featuring product categories and satisfaction guarantee.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "WordPress" },
    ],
    image: "/assets/work/work6.png",
    live: "https://sweatdecks.com/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent mr-2">
                      {item.name}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/60"></div>
              <div className="flex items-center gap-4">
                {project.live && project.live !== "#" && (
                  <div>
                    <Link href={project.live} aria-label="View live project">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                )}
                {project.github && project.github !== "#" && (
                  <div>
                    <Link href={project.github} aria-label="View git project">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="h-[500px] xl:h-[620px] mb-12"
              onSlideChange={(swiper) =>
                setProject(projects[swiper.activeIndex])
              }
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="object-containt w-full h-full"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
      ) } </AnimatePresence>
  );
};

export default Work;
