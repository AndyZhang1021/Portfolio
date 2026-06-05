"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import React, { useState } from "react";
import { Button } from "./button";
import { Calendar, Code, CodeXml, DatabaseSearch, ExternalLink, FileCodeCorner, Mail, MapPin, School, Send, UsersRound, Zap } from "lucide-react";

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
  const NAV = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ]
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="flex gap-10 p-4 flex-1 min-h-0">
      <div className="flex flex-col gap-8 justify-center">
        {NAV.map((nav: any, i: number) => {
          const isActived = i === activeIndex;
          return (
            <button key={`${nav.name}_${i}`} className={`flex items-start gap-2 transition-all duration-300`} onClick={() => swiper?.slideTo(i)}>
              <div className={`w-4 h-4 flex items-center justify-center rounded-full ${isActived ? "bg-purple-300/40" : ""} transition-all duration-300`}>
                <span className={`w-2 h-2 flex items-center justify-center rounded-full ${isActived ? "bg-purple-300/70" : "bg-white/70"} transition-all duration-300`}></span>
              </div>
              <div className="text-left leading-5 -mt-1">
                <p className={`text-xs ${isActived ? "text-purple-300/70" : "text-white/70"} transition-all duration-300`}>0{i + 1}</p>
                <p className={`text-sm text-white/70 transition-all duration-300`}>{nav.name}</p>
              </div>
            </button>
          )
        })}
      </div>
      <div className="flex-1 min-h-0">
        <Swiper
          mousewheel
          direction="vertical"
          className="h-full"
          modules={[Mousewheel]}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
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
      </div>
    </div>
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
            <p className="text-6xl font-bold mt-4">Building Modern Web Experiences <span className="text-purple-300">That Deliver Real Business Value</span></p>
          </div>
          <div className="w-14 h-0.5 bg-purple-400/60"></div>
          <div>
            <div className="mt-8 text-lg leading-7">
              <p className="text-3xl font-bold mb-2">Hi, I'm <span className="text-purple-300">Weihao Zhang.</span></p>
              <p className="font-light">I'm a Front-End Developer with over 4 years of experience delivering commercial websites and web applications.</p>
              <p className="font-light">I specialise in React, Next.js, Tailwind CSS, and modern JavaScript technologies, helping businesses transform ideas into fast, scalable, and user-focused digital products.</p>
            </div>
            <div className="flex items-center gap-4 my-10">
              <Button>View My Work</Button>
              <Button>Contact Me</Button>
            </div>
          </div>
        </div>
        <div>
          <img src="/home-bg.png" className="w-full object-contain scale-125" />
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
          <div className="flex items-center gap-2 border rounded-2xl border-purple-400/20 bg-white/5 backdrop-blur-lg">
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
          <div key={`project_${i}`} className="rounded-xl overflow-hidden flex flex-col h-120 hover:-translate-y-5 transition-all duration-300">
            <div className="bg-gray-50 h-50 rounded-t-xl">
              <img src={project.image} className="h-full w-full object-contain" />
            </div>
            <div className="p-4 rounded-b-xl flex flex-col justify-between gap-4 flex-1 h-full border border-t-0 border-purple-400/20 bg-white/5 backdrop-blur-sm">
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
          <div key={`skill_${i}`} className="flex flex-col gap-4 rounded-xl border border-purple-400/20 bg-white/5 backdrop-blur-sm p-8 hover:-translate-y-5 transition-all duration-300">
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
  const EXPERIENCES = [
    {
      date: "2021 - Present",
      title: "Front-End Developer",
      company: "Vmor Technology",
      location: "Sydney CBD",
      description: [
        "Developed and maintained a commerical websites and web applications for clients across different industries.",
        "Collaborated with stakeholders to understand business requirements, propse technical solutiosn and deliver high-quality products.",
        "Managed project timelines, coordinated development tasks and ensure projects were delviered successfully and on schedule.",
      ],
    },
    {
      date: "2018 - 2019",
      title: "Web Developer Intern",
      company: "ITCiti",
      location: "Sydney CBD",
      description: [
        "Worked on website development projects using WordPress, PHP, HTML, CSS and JavaScript.",
        "Assisted in website deployment and maintenance, database integration and provided IT supports for business clients",
      ],
    }
  ]

  const EDUCATION = [
    {
      date: "2017 - 2019",
      uni: "Macquarie University",
      degree: "Bachelor of Digital Business",
      imgUrl: "/mq.png",
    },
    {
      date: "2020 - 2022",
      uni: "University of Technology Sydney",
      degree: "Master of Information Technology",
      imgUrl: "/uts.png",
    },
  ]

  return (
    <div className="h-full flex flex-col gap-10 justify-center">
      <Heading index={3} title="Experiences">
        A journey of continuous building solutions and delivering value to businesses.
      </Heading>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {EXPERIENCES.map((experience, i) => (
            <div key={`experience_${i}`} className="flex gap-12">
              {/* Timeline */}
              <div className="w-45 shrink-0 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center bg-purple-400/20 rounded-full w-5 h-5">
                    <div className="h-3 w-3 rounded-full bg-purple-400/50" />
                  </div>
                  <p className="text-gray-300 font-medium">{experience.date}</p>
                </div>
                {i < EXPERIENCES.length - 1 && <div className="flex-1 h-full w-px bg-purple-400/50 ml-2.25"></div>}
              </div>

              {/* Content */}
              <div className="flex-1 border-l border-purple-400/20 pl-8 pb-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-white">{experience.title}</h3>

                  <div className="flex items-center gap-2 text-purple-200">
                    <MapPin size={16} />
                    <p className="text-sm">
                      {experience.company} · {experience.location}
                    </p>
                  </div>

                  <div className="mt-3 space-y-2">
                    {experience.description.map((description: string, index: number) => (
                      <div key={`description_${index}`} className="flex gap-3 text-gray-300 leading-7">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                        <p>{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <School size={25} color="#dab2ff" />
            <p className="text-xl uppercase font-bold">EDUCATION</p>
          </div>
          {EDUCATION.map((education, i) => (
            <div key={`education_${i}`}
              className="rounded-2xl border border-purple-400/20 bg-white/5 backdrop-blur-sm p-5 hover:-translate-y-5 transition-all duration-300">
              <div className="flex justify-between">
                <div>
                  <img src={education.imgUrl} className="h-14 w-14 rounded-lg object-contain" />
                  <p className="mt-1 text-gray-300 text-sm">{education.uni}</p>
                </div>
                <p className="text-sm text-purple-300">{education.date}</p>
              </div>
              <p className="font-semibold text-lg mt-2">{education.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
const Contact = () => {
  const email = "weihaozhangdev@gmail.com"
  return (
    <div className="h-full flex flex-col gap-10 justify-center">
      <Heading index={4} title="Get In Touch">Let's Build Something Great Together</Heading>
      <div className="grid grid-cols-2 gap-8">
        <img src="/contact-bg.png" className="w-full object-contain" />
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-5xl">Having a project in mind?</p>
            <p className="mt-2">I'm always open to discussing new opportunities, interesting projects and collaborations.</p>
            <div className="flex flex-col gap-4 my-8">
              <div className="flex items-center gap-4">
                <Mail size={25} color="#dab2ff" />
                <div className="leading-5">
                  <p className="opacity-80">Email</p>
                  <p>{email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={25} color="#dab2ff" />
                <div className="leading-5">
                  <p className="opacity-80">Location</p>
                  <p>Sydney, Australia</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-4">
                <p className="text-xl font-mono text-[#dab2ff]">in</p>
                <div className="leading-5">
                  <p className="opacity-80">LinkedIn</p>
                  <p>https://au.linkedin.com/in/weihao-zhang-15b6962b5</p>
                </div>
              </div> */}
            </div>
            <Button className="flex items-center gap-2" onClick={() => window.location.href = email}>
              <p>Mail Me</p>
              <Send size={25} color="#dab2ff" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}