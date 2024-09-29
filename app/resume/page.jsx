"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "A professional with expertise in digital marketing and web development. Two years ago, I moved to France where I quickly adapted and continued my professional growth. I'm confident that my technical skills and drive for growth make me a valuable asset to any team working on innovative web projects.",
  info: [
    { fieldName: "Name", fielValue: "Sati Saakian" },
    { fieldName: "Phone", fielValue: "+33 6 02 20 96 62" },
    { fieldName: "Telegram", fielValue: "sati_saakian" },
    { fieldName: "Email", fielValue: "notasati24@gmail.com" },
    { fieldName: "Experience marketing", fielValue: "8+ Years" },
    { fieldName: "Experience development", fielValue: "1+ Years" },
    { fieldName: "Languages", fielValue: "Fr, Rus, Eng" },
  ],
};

const experience = {
  icon: "s/assets/resume/badge.svg",
  title: "My experiance",
  description:
    "Starting my career in marketing, I developed skills in SEO, SMM, and advertising campaign management. My passion for technology then led me to web development, where I now focus on Full Stack technologies, including React and Node.js. My diverse experience allows me to work effectively at the intersection of technology and business.",
  item: [
    {
      company: "Plan9",
      position: "Junior front-end developpeur",
      duration: "mars - aout 2024",
    },
    {
      company: "Médiathèque de Tarentaize",
      position: "Stagiaire en informatique",
      duration: "jan - fev 2024",
    },
    {
      company: "MTS télécommunications",
      position: "Junior front-end developpeur",
      duration: "mai - oct 2022",
    },
    {
      company: "MTS télécommunications",
      position: "Responsable marketing digital",
      duration: "jan 2022 - mai 2022",
    },
    {
      company: "Centre de certification MÉJOREGIONTEST",
      position: "Responsable marketing digital",
      duration: "2019-2020",
    },
    {
      company: "China today",
      position: "Responsable marketing",
      duration: "2017-2019",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Diverse educational background, combining university training in marketing with recent specialization in web development. Continuous commitment to learning and improving technical and language skills.",
  item: [
    {
      institution: "IT-Akademy (fr)",
      program: "Full-stack developeur",
      duration: "may 2024 - avril 2025",
    },
    {
      institution: "Projexia (fr)",
      program: "Cours de français В1-В2",
      duration: "nov 2023 - mars 2024",
    },
    {
      institution: "Skillbox - formation en ligne (rus)",
      program: "Front-End Developpeur",
      duration: "2021 - 2023",
    },
    {
      institution: "Université Économique d'État de Saint-Pétersbourg",
      program: "Spécialiste en relations publiques et marketing",
      duration: "2008 - 2013",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Versatile professional with a unique blend of web development and digital marketing expertise. Proficient in full-stack technologies including HTML, CSS, JavaScript, React, and Node.js, complemented by strong skills in SEO, SMM, and data analytics, enabling the creation of comprehensive, user-centric digital solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwid.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
    {
      icon: <SiFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-w-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-w-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[230px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[290px] min-w-[60px] text-center lg:text-left">
                            {item.program}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalized">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[780px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl text-accent">{item.fielValue}</span>

                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
