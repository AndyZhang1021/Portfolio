"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "./button";
import {
  Calendar,
  CodeXml,
  DatabaseSearch,
  Download,
  ExternalLink,
  FileCodeCorner,
  Mail,
  MapPin,
  MonitorCheck,
  Phone,
  School,
  Send,
  UsersRound,
  Zap,
} from "lucide-react";

type SlideDirection = "horizontal" | "vertical";

type NavItem = {
  name: string;
  href: string;
};

type Project = {
  name: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

type SkillGroup = {
  name: string;
  icon: React.ReactNode;
  skillTechs: string[];
};

const NAV: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

const SLIDE_CLASS = "h-full w-full min-w-0 overflow-y-auto overflow-x-hidden px-0.5 py-1 lg:py-0";
const SECTION_CLASS =
  "min-h-full w-full min-w-0 py-4 sm:py-6 lg:py-0 flex flex-col gap-6 lg:gap-10 justify-start lg:justify-center";
const CHIP_CLASS = "rounded-full border border-gray-500/80 px-3 py-1 text-xs sm:text-sm";
const CARD_CLASS = "rounded-lg border border-purple-400/20 bg-white/5 backdrop-blur-sm";

const Heading = ({
  index,
  children,
  title,
}: {
  index: number;
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="shrink-0">
      <div className="flex items-end gap-3 sm:gap-4">
        <p className="text-sm text-purple-300/70 sm:text-base">0{index}</p>
        <p className="text-2xl font-bold uppercase text-white sm:text-3xl">{title}</p>
      </div>
      <p className="mt-1 text-sm font-light leading-6 sm:text-base">{children}</p>
      <div className="mt-4 h-0.5 w-16 bg-purple-400/60 sm:w-24"></div>
    </div>
  );
};

export function Main() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [swiperDirection, setSwiperDirection] = useState<SlideDirection>("vertical");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateDirection = () => {
      setSwiperDirection(mediaQuery.matches ? "vertical" : "horizontal");
    };

    updateDirection();
    mediaQuery.addEventListener("change", updateDirection);

    return () => mediaQuery.removeEventListener("change", updateDirection);
  }, []);

  useEffect(() => {
    swiper?.changeDirection(swiperDirection, true);
  }, [swiper, swiperDirection]);

  const slideTo = (index: number) => swiper?.slideTo(index);

  return (
    <div className="flex h-dvh w-full min-w-0 flex-col gap-4 overflow-hidden bg-[linear-gradient(135deg,#050506_0%,#0e1018_28%,#171127_54%,#102527_78%,#07070a_100%)] p-3 sm:p-4 lg:h-screen lg:flex-row lg:gap-8 lg:p-6 xl:gap-10">
      <nav className="shrink-0 lg:flex lg:w-36 lg:items-center xl:w-40" aria-label="Portfolio sections">
        <div className="flex w-full max-w-[23rem] justify-between gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:justify-start sm:gap-2 lg:flex-col lg:gap-8 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {NAV.map((nav, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={`${nav.name}_${i}`}
                className={`flex w-16 shrink-0 flex-col items-center gap-1 rounded-full px-1 py-2 text-center transition-all duration-300 sm:w-auto sm:min-w-max sm:flex-row sm:gap-2 sm:px-3 sm:text-left lg:min-w-0 lg:items-start lg:rounded-none lg:p-0 ${isActive ? "bg-white/10 lg:bg-transparent" : "hover:bg-white/5 lg:hover:bg-transparent"
                  }`}
                onClick={() => slideTo(i)}
                type="button">
                <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isActive ? "bg-purple-300/40" : ""}`}>
                  <span className={`flex h-2 w-2 items-center justify-center rounded-full transition-all duration-300 ${isActive ? "bg-purple-300/70" : "bg-white/70"}`}></span>
                </div>
                <div className="leading-4 sm:leading-5 lg:-mt-1">
                  <p className={`text-[11px] transition-all duration-300 sm:text-xs ${isActive ? "text-purple-300/70" : "text-white/70"}`}>
                    0{i + 1}
                  </p>
                  <p className="text-[11px] text-white/70 transition-all duration-300 sm:text-sm">{nav.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
      <div className="min-h-0 flex-1">
        <Swiper
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          direction={swiperDirection}
          className="h-full w-full"
          modules={[Mousewheel]}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide className={SLIDE_CLASS}>
            <Home onViewWork={() => slideTo(1)} onContact={() => slideTo(4)} />
          </SwiperSlide>
          <SwiperSlide className={SLIDE_CLASS}>
            <FeaturedProjects />
          </SwiperSlide>
          <SwiperSlide className={SLIDE_CLASS}>
            <Skills />
          </SwiperSlide>
          <SwiperSlide className={SLIDE_CLASS}>
            <Experience />
          </SwiperSlide>
          <SwiperSlide className={SLIDE_CLASS}>
            <Contact />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

const Home = ({ onViewWork, onContact }: { onViewWork: () => void; onContact: () => void }) => {
  const skills = ["React", "Next.js", "Gatsby", "Vite", "TypeScript", "Tailwind CSS", "Database Management", ".NET"];
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Weihao_Zhang_CV.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="min-h-full w-full flex flex-col justify-center min-w-0 py-4 sm:py-6 lg:py-0">
      <div className="grid min-h-full w-full min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-8">
        <div className="flex min-h-0 w-full max-w-[23rem] min-w-0 flex-col justify-center gap-6 sm:max-w-none lg:justify-around lg:gap-8">
          <div>
            <p className="text-sm text-purple-300 sm:text-base">FRONT-END DEVELOPER • PROJECT LEAD</p>
            <p className="mt-4 text-4xl font-bold leading-tight sm:text-5xl 2xl:text-6xl">
              Building Modern Web Experiences{" "}
              <span className="text-purple-300">That Deliver Real Business Value</span>
            </p>
          </div>
          <div className="h-0.5 w-14 bg-purple-400/60"></div>
          <div>
            <div className="text-base leading-7 sm:text-lg">
              <p className="mb-2 text-2xl font-bold sm:text-3xl">
                Hi, I&apos;m <span className="text-purple-300">Weihao Zhang.</span>
              </p>
              <p className="font-light">
                I&apos;m a Front-End Developer with over 4 years of experience delivering commercial websites and web
                applications.
              </p>
              <p className="font-light">
                I specialise in React, Next.js, Tailwind CSS, and modern JavaScript technologies, helping businesses
                transform ideas into fast, scalable, and user-focused digital products.
              </p>
              <p className="font-light mt-4">Furthermore, I&apos;m fluent in both English and Mandarin.</p>
            </div>
            <div className="my-8 flex flex-wrap items-center gap-3 sm:my-10 sm:gap-4">
              <Button onClick={onViewWork} className="gap-2">
                <MonitorCheck />
                View My Work
              </Button>
              <Button onClick={onContact} className="gap-2">
                <Phone />
                Contact Me
              </Button>
              <div className="h-8 w-px bg-gray-300/30" />
              <button
                onClick={downloadCV}
                type="button"
                className="inline-flex items-center justify-center rounded-full border-2 gap-2 border-sky-300 px-5 py-2 text-sm text-sky-300 transition-all duration-300 hover:bg-sky-300/10 sm:px-8 sm:text-base"
              >
                <Download />
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="flex min-h-0 min-w-0 items-center justify-center">
          <Image
            src="/home-bg.png"
            alt="Weihao Zhang portfolio hero visual"
            width={1536}
            height={1024}
            priority
            className="max-h-64 w-full object-contain sm:max-h-80 lg:max-h-none lg:scale-105 2xl:scale-125"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <div className="h-fit lg:col-span-2 lg:mt-auto">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs opacity-80 sm:text-sm lg:text-base">
            {skills.map((skill, i) => (
              <React.Fragment key={`skill_${i}`}>
                <p>{skill}</p>
                {skills[i + 1] && <p className="text-purple-300/70">•</p>}
              </React.Fragment>
            ))}
          </div>
          <div className={`${CARD_CLASS} grid grid-cols-1 gap-0 overflow-hidden sm:grid-cols-3`}>
            <StatItem icon={<Calendar className="h-10 w-10 text-purple-300 lg:h-12 lg:w-12" />} value="4+" label="Years Experience" />
            <StatItem
              icon={<CodeXml className="h-10 w-10 text-purple-300 lg:h-12 lg:w-12" />}
              value="10+"
              label="Commercial Projects"
            />
            <StatItem icon={<MapPin className="h-10 w-10 text-purple-300 lg:h-12 lg:w-12" />} value="Sydney" label="Australia" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => {
  return (
    <div className="flex items-center gap-4 border-b border-purple-400/20 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-8">
      {icon}
      <div className="leading-5">
        <p className="text-3xl sm:text-4xl">{value}</p>
        <p className="text-base font-light sm:text-lg">{label}</p>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const projects: Project[] = [
    {
      name: "CMASA",
      title: "Commercial Site",
      description: "Official website of The Chinese Medicine and Acupuncture Society of Australia",
      techStack: ["Gatsby", "Tailwind CSS", "TypeScript", "Material UI", "Responsive Design", "Swiper"],
      link: "https://cmasa.org.au",
      image: "/cmasa.png",
      imageWidth: 1903,
      imageHeight: 929,
    },
    {
      name: "Healthnex",
      title: "Commercial Site / Management System",
      description:
        "A modern healthcare platform integrated with different web portals focused on smooth collaboration among clinic members while maintaining data privacy with ease.",
      techStack: ["Gatsby", "Next.js", "Tailwind CSS", "TypeScript", "Material UI", ".NET", "Database"],
      link: "https://healthnex.com.au",
      image: "/healthnex.png",
      imageWidth: 1920,
      imageHeight: 929,
    },
    {
      name: "CartSniper",
      title: "Web Application",
      description: "A personal-use online price comparison tool for Coles and Woolworths products.",
      techStack: ["Gatsby", "Tailwind CSS", "Mobile-First Design", "RapidApi"],
      link: "https://wz-cart-sniper.vercel.app/",
      image: "/cart-sniper.png",
      imageWidth: 1402,
      imageHeight: 1122,
    },
    {
      name: "Aestate",
      title: "Management System",
      description: "A modern management system for agents to publish property ads and generate promotion videos using AI.",
      techStack: ["Gatsby", "Claude AI", "Tailwind CSS", "TypeScript", "Material UI", ".NET", "Database"],
      link: "",
      image: "/aestate.png",
      imageWidth: 1920,
      imageHeight: 929,
    },
  ];

  return (
    <div className={SECTION_CLASS}>
      <Heading index={1} title="Featured Projects">
        A selection of commercial websites and applications I&apos;ve helped design, develop and deliver for clients
        across different industries.
      </Heading>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, i) => (
          <div
            key={`project_${i}`}
            className="flex h-full min-h-[24rem] flex-col overflow-hidden rounded-lg transition-all duration-300 md:hover:-translate-y-3"
          >
            <div className="flex h-44 items-center justify-center rounded-t-lg bg-gray-50 p-3 sm:h-48 lg:h-50">
              <Image
                src={project.image}
                alt={`${project.name} project screenshot`}
                width={project.imageWidth}
                height={project.imageHeight}
                className="h-full w-full object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </div>
            <div className={`${CARD_CLASS} flex flex-1 flex-col justify-between gap-4 rounded-t-none border-t-0 p-4`}>
              <button
                title={project.link ? "View site" : "Private project"}
                className="flex w-full cursor-pointer justify-between gap-4 hover:underline disabled:cursor-default disabled:hover:no-underline"
                onClick={() => project.link && window.open(project.link, "_blank", "noopener,noreferrer")}
                type="button"
                disabled={!project.link}
              >
                <div className="text-left">
                  <p className="text-xl sm:text-2xl">{project.name}</p>
                  <p className="text-sm text-purple-400 sm:text-base">{project.title}</p>
                </div>
                {project.link && <ExternalLink className="h-6 w-6 shrink-0 text-purple-300" />}
              </button>
              <div className="text-sm leading-6 opacity-80">
                <p>{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((techStack, i) => (
                  <div className={CHIP_CLASS} key={`techStack_${i}`}>
                    {techStack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills: SkillGroup[] = [
    {
      name: "Front-End Development",
      icon: <FileCodeCorner className="h-11 w-11 text-purple-300 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />,
      skillTechs: ["React", "React Native", "Next.js", "Gatsby", "Vite", "Tailwind CSS", "TypeScript", "Material UI", "Zustand"],
    },
    {
      name: "Back-End Development",
      icon: <DatabaseSearch className="h-11 w-11 text-purple-300 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />,
      skillTechs: [".NET", "ASP.NET Core", "C#", "SQL", "Database Management"],
    },
    {
      name: "Professional Skills",
      icon: <UsersRound className="h-11 w-11 text-purple-300 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />,
      skillTechs: ["Leadership", "Project Management", "Client Communication", "Requirement Analysis", "Problem Solving", "Team Collaboration"],
    },
    {
      name: "AI & Tools",
      icon: <Zap className="h-11 w-11 text-purple-300 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />,
      skillTechs: ["ChatGPT", "Claude", "Gemini", "Git", "VS Code", "Agile Workflow"],
    },
  ];

  return (
    <div className={SECTION_CLASS}>
      <Heading index={2} title="Skills">
        Technologies and skills I use to build scalable, user-focused, and high-performance applications.
      </Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        {skills.map((skill, i) => (
          <div
            key={`skill_${i}`}
            className={`${CARD_CLASS} flex flex-col gap-4 p-5 transition-all duration-300 md:hover:-translate-y-3 sm:p-6 lg:p-8`}
          >
            {skill.icon}
            <p className="text-xl sm:text-2xl">{skill.name}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skill.skillTechs.map((skillTech, i) => (
                <div className={CHIP_CLASS} key={`skillTech_${i}`}>
                  {skillTech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Front-End Developer",
      company: "Vmor Technology",
      location: "Sydney CBD",
      description: [
        "Developed and maintained commercial websites and web applications for clients across different industries.",
        "Collaborated with stakeholders to understand business requirements, propose technical solutions and deliver high-quality products.",
        "Managed project timelines, coordinated development tasks and ensured projects were delivered successfully and on schedule.",
      ],
    },
    {
      date: "2018 - 2019",
      title: "Web Developer Intern",
      company: "ITCiti",
      location: "Sydney CBD",
      description: [
        "Worked on website development projects using WordPress, PHP, HTML, CSS and JavaScript.",
        "Assisted in website deployment and maintenance, database integration and provided IT support for business clients.",
      ],
    },
  ];

  const education = [
    {
      date: "2017 - 2019",
      uni: "Macquarie University",
      degree: "Bachelor of Digital Business",
      imgUrl: "/mq.png",
      imageWidth: 600,
      imageHeight: 600,
    },
    {
      date: "2020 - 2022",
      uni: "University of Technology Sydney",
      degree: "Master of Information Technology",
      imgUrl: "/uts.png",
      imageWidth: 225,
      imageHeight: 225,
    },
  ];

  return (
    <div className={SECTION_CLASS}>
      <Heading index={3} title="Experiences">
        A journey of continuous building solutions and delivering value to businesses.
      </Heading>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {experiences.map((experience, i) => (
            <div key={`experience_${i}`} className="grid grid-cols-[6rem_minmax(0,1fr)] gap-4 sm:grid-cols-[10rem_minmax(0,1fr)] lg:gap-8">
              <div className="flex shrink-0 flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-400/20">
                    <div className="h-3 w-3 rounded-full bg-purple-400/50" />
                  </div>
                  <p className="text-xs font-medium text-gray-300 sm:text-sm lg:text-base">{experience.date}</p>
                </div>
                {i < experiences.length - 1 && <div className="ml-2.25 h-full w-px flex-1 bg-purple-400/50"></div>}
              </div>

              <div className="min-w-0 border-l border-purple-400/20 pb-6 pl-4 sm:pl-6 lg:pl-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{experience.title}</h3>

                  <div className="flex items-center gap-2 text-purple-200">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <p className="text-sm">
                      {experience.company} - {experience.location}
                    </p>
                  </div>

                  <div className="mt-3 space-y-2">
                    {experience.description.map((description, index) => (
                      <div key={`description_${index}`} className="flex gap-3 text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        <p>{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <School className="h-6 w-6 text-purple-300" />
            <p className="text-lg font-bold uppercase sm:text-xl">Education</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {education.map((item, i) => (
              <div key={`education_${i}`} className={`${CARD_CLASS} p-5 transition-all duration-300 md:hover:-translate-y-3`}>
                <div className="flex justify-between gap-4">
                  <div>
                    <Image
                      src={item.imgUrl}
                      alt={`${item.uni} logo`}
                      width={item.imageWidth}
                      height={item.imageHeight}
                      className="h-14 w-14 rounded-lg object-contain"
                    />
                    <p className="mt-1 text-sm text-gray-300">{item.uni}</p>
                  </div>
                  <p className="shrink-0 text-sm text-purple-300">{item.date}</p>
                </div>
                <p className="mt-2 text-base font-semibold sm:text-lg">{item.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const email = "weihaoaz@gmail.com";

  return (
    <div className={SECTION_CLASS}>
      <Heading index={4} title="Get In Touch">
        Let&apos;s Build Something Great Together
      </Heading>
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8">
        <Image
          src="/contact-bg.png"
          alt="Contact illustration"
          width={1536}
          height={1024}
          className="max-h-64 w-full object-contain sm:max-h-80 lg:max-h-none"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-3xl leading-tight sm:text-4xl lg:text-5xl">Having a project in mind?</p>
            <p className="mt-2 text-sm leading-6 sm:text-base">
              I&apos;m always open to discussing new opportunities, interesting projects and collaborations.
            </p>
            <div className="my-8 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-purple-300" />
                <div className="min-w-0 leading-5">
                  <p className="opacity-80">Email</p>
                  <p className="break-all sm:break-normal">{email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-purple-300" />
                <div className="leading-5">
                  <p className="opacity-80">Location</p>
                  <p>Sydney, Australia</p>
                </div>
              </div>
            </div>
            <Button className="gap-2" onClick={() => (window.location.href = `mailto:${email}`)}>
              <p>Mail Me</p>
              <Send className="h-6 w-6 text-purple-300" />
            </Button>
          </div>
        </div>
      </div>

      <center className="text-xs leading-5 opacity-55 mt-8">
        <p className="text-sm">Copyrighted © 2026 Weihao Zhang</p>
        <p className="text-center mt-4">This personal portfolio website was fully designed and built by me using Next.js, Lucidchart, and Swiper.js</p>
        <p>The website was built entirely by hand, with AI-generated images used solely for visual content.</p>
      </center>
    </div>
  );
};
