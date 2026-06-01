"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import React from "react";
import { Button } from "./button";
import { Calendar, Code, CodeXml, DatabaseSearch, ExternalLink, FileCodeCorner, Mail, MapPin, Send, UsersRound, Zap } from "lucide-react";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div>{children}</div>
    </div>
  )
}

const Heading = ({ index, children, title }: { index: number, children: React.ReactNode, title?: string }) => {
  return (
    <div>
      <div className="flex items-end gap-4">
        <p className="text-purple-300/70">0{index}</p>
        <p className="text-3xl text-white uppercase font-bold">{title}</p>
      </div>
      <p className="font-light mt-1">{children}</p>
      <div className="w-25 h-0.5 bg-purple-400/60 mt-4"></div>
    </div>

  )
}
export function Main() {

  return (
    <Swiper
      mousewheel
      direction="vertical"
      className="h-full"
      modules={[Mousewheel]}>
      <SwiperSlide className="h-full">
        <Home />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <FeaturedProjects />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <Skills />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <Experience />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
}

const Home = () => {
  const SKILLS = ["React", "Next.js", "Gatsby", "Vite", "Typescript", "Tailwind CSS", "Databse Management", ".NET"]
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 h-full">
        <div className="h-full flex flex-col justify-around">
          <div>
            <p className="text-purple-300">FRONT-END DEVELOPER • PROJECT LEAD</p>
            <p className="text-6xl font-bold mt-4">Building Modern Web Experiences <span className="text-purple-300">That Deliver Real Business Results</span></p>
          </div>
          <div className="w-14 h-0.5 bg-purple-400/60"></div>
          <div>
            <div className="mt-8 text-lg leading-7">
              <p className="text-2xl font-bold mb-2">Hi, I'm <span className="text-purple-300">Weihao Zhang.</span></p>
              <p className="font-light">I'm a Front-End Developer with over 4 years of experience delivering commercial websites and web applications.</p>
              <p className="font-light">I specialise in React, Next.js, Tailwind CSS, and modern JavaScript technologies, helping businesses transform ideas into fast, scalable, and user-focused digital products.</p>
            </div>
            <div className="flex items-center gap-4 my-10">
              <Button>View My Work</Button>
              <Button>Contact Me</Button>
            </div>
          </div>
        </div>
        <div className="col-span-2 h-fit mt-auto">
          <div className="flex items-center justify-center gap-4 opacity-80 mb-4">
            {SKILLS.map((skill: string, i: number) => (
              <React.Fragment key={`skill_${i}`}>
                <p>{skill}</p>
                {SKILLS[i + 1] && <p>•</p>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-2 border rounded-2xl border-gray-500/50">
            <div className="flex items-center gap-4 p-8 flex-1">
              <Calendar size={50} color="#dab2ff" />
              <div className="leading-5">
                <p className="text-4xl">4+</p>
                <p className="text-lg font-light">Years Experience</p>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-500/80"></div>
            <div className="flex items-center gap-4 p-8 flex-1">
              <CodeXml size={50} color="#dab2ff" />
              <div className="leading-5">
                <p className="text-4xl">10+</p>
                <p className="text-lg font-light">Commerical Projects</p>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-500/80"></div>
            <div className="flex items-center gap-4 p-8 flex-1">
              <MapPin size={50} color="#dab2ff" />
              <div className="leading-5">
                <p className="text-4xl">Sydney</p>
                <p className="text-lg font-light">Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const FeaturedProjects = () => {
  const PROJECTS = [
    {
      name: "CMASA",
      title: "Commerical Site",
      description: "Offical website of The Chinese Medicine and Acupuncture Society of Australia",
      techStack: ["Gatsby", "Tailwind CSS", "TypeScript", "Material UI", "Responsive Design", "Swiper"],
      link: "https://cmasa.org.au",
      image: "/cmasa.png",
    },
    {
      name: "Healthnex",
      title: "Commerical Site / Management System",
      description: "A modern healthcare platform intergrated with different web portals focused on smooth collaboration among clinic members while maintaining data privacy with ease.",
      techStack: ["Gatsby", "Next.js", "Tailwind CSS", "TypeScript", "Material UI", ".NET", "Database"],
      link: "https://healthnex.com.au",
      image: "/healthnex.png",
    },
    {
      name: "CartSniper",
      title: "Web Application",
      description: "A personal-use online price comparison tool for coles / woolis products.",
      techStack: ["Gatsby", "Tailwind CSS", "Mobile-First Design", "RapidApi"],
      link: "https://wz-cart-sniper.vercel.app/",
      image: "/cart-sniper.png",
    },
    {
      name: "Aestate",
      title: "Management System",
      description: "A modern management system for agent to publish property ads, and generate promotion ad video using AI.",
      techStack: ["Gatsby", "Claude AI", "Tailwind CSS", "TypeScript", "Material UI", ".NET", "Database"],
      link: "",
      image: "/aestate.png",
    }
  ]
  return (
    <div className="h-full flex flex-col gap-10 justify-center">
      <Heading index={1} title="Featured Projects">
        A selection of commerical websites and applications I've helped designed, develop and deliver for clients across different industries.
      </Heading>

      <div className="grid grid-cols-4 gap-4">
        {PROJECTS.map((project: any, i: number) => (
          <div key={`project_${i}`} className="rounded-xl overflow-hidden border border-gray-900 flex flex-col h-120">
            <div className="bg-gray-50 h-50 rounded-t-xl">
              <img src={project.image} className="h-full w-full object-contain" />
            </div>
            <div className="p-4 bg-gray-950 rounded-b-xl flex flex-col justify-between gap-4 flex-1 h-full">
              <button
                title="View site"
                className="w-full flex justify-between gap-4 hover:underline cursor-pointer"
                onClick={() => window.open(project.link)}>
                <div className="text-left">
                  <p className="text-2xl">{project.name}</p>
                  <p className="text-purple-400">{project.title}</p>
                </div>
                <ExternalLink size={25} color="#dab2ff" />
              </button>
              <div className="text-sm opacity-80 leading-6">
                <p>{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((techStack: string, i: number) => (
                  <div className="rounded-2xl px-3 py-1 text-sm border border-gray-500/80" key={`techStack_${i}`}>
                    {techStack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const Skills = () => {
  const SKILLS = [
    {
      name: "Front-End Development",
      icon: <FileCodeCorner size={60} color="#dab2ff" />,
      skillTechs: ["React", "React Native", "Next.js", "Gatsby", "Vite", "Tailwind CSS", "TypeScript", "Material UI", "Zustand"],
    },
    {
      name: "Back-End Development",
      icon: <DatabaseSearch size={60} color="#dab2ff" />,
      skillTechs: [".NET", "ASP.NET Core", "C#", "SQL", "Database Management"],
    },
    {
      name: "Professional Skills",
      icon: <UsersRound size={60} color="#dab2ff" />,
      skillTechs: ["Leadership", "Project Management", "Client Communication", "Requirment Analysis", "Problem Solving", "Team Collaboration"],
    },
    {
      name: "AI & Tools",
      icon: <Zap size={60} color="#dab2ff" />,
      skillTechs: ["ChatGPT", "Claude", "Gemini", "Git", "VS Code", "Agile Workflow"],
    },
  ]
  return (
    <div className="h-full flex flex-col gap-10 justify-center">
      <Heading index={2} title="Skills">
        Technologies and skills I use to build scalable, user-focused, and high-performance applications.
      </Heading>
      <div className="grid grid-cols-4 gap-6">
        {SKILLS.map((skill: any, i: number) => (
          <div key={`skill_${i}`} className="flex flex-col gap-4 rounded-xl border border-gray-900 bg-gray-950 p-8">
            {skill.icon}
            <p className="text-2xl">{skill.name}</p>
            <div className="flex flex-wrap gap-3">
              {skill.skillTechs.map((skillTech: string, i: number) => (
                <div className="rounded-2xl px-3 py-1 text-sm border border-gray-500/80" key={`skillTech_${i}`}>
                  {skillTech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const Experience = () => {
  return (
    <div></div>
  )
}
const Contact = () => {
  return (
    <div className="h-full flex flex-col gap-10 justify-center">
      <Heading index={4} title="Get In Touch">Let's Build Something Great Together</Heading>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p>I'm always open to discussing new opportunities, interesting projects and collaborations.</p>
          <div className="flex flex-col gap-4 my-8">
            <div className="flex items-center gap-4">
              <Mail size={25} color="#dab2ff" />
              <p>weihaozhangdev@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={25} color="#dab2ff" />
              <p>Sydney, Australia</p>
            </div>
          </div>
          <Button className="flex items-center gap-2" onClick={() => { }}>
            <p>Mail Me</p>
            <Send size={25} color="#dab2ff" />
          </Button>
        </div>
      </div>
    </div>
  )
}