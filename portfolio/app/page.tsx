import { Download } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./components/button";
import { Main } from "./components/main";


export default function Home() {
  const NAV = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Case Study", href: "/case-study" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ]



  return (
    <main className="flex flex-col flex-1 h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Header */}
      {/* <div className="flex items-center justify-between p-4 h-16">
        <p className="text-xl">Weihao Zhang</p>
        <div>
          <Button className="flex items-center gap-4">
            <p>My CV</p>
            <Download size={18} />
          </Button>
        </div>
      </div> */}
      {/* End Header */}
      {/* Main Content */}
      <div className="flex gap-10 p-4 flex-1 min-h-0">
        <div className="flex flex-col gap-8 justify-center">
          {NAV.map((nav: any, i: number) => (
            <button key={`${nav.name}_${i}`} className="flex items-start gap-2">
              <div className="w-5 h-5 flex items-center justify-center rounded-full border">
                <span className="w-2 h-2 flex items-center justify-center rounded-full border bg-white"></span>
              </div>
              <div className="text-left leading-5 -mt-1">
                <p className="opacity-70 text-sm">0{i + 1}</p>
                <p>{nav.name}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="flex-1 min-h-0">
          <Main />
        </div>

      </div>
      {/* End Main Content */}
    </main>
  );
}
