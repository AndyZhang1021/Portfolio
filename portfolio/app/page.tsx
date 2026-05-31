import Image from "next/image";

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
    <main className="flex flex-col flex-1 justify-between bg-zinc-50 font-sans dark:bg-black">
      <div>
        {/* Header */}
        <div className="flex justify-between p-4">
          <div>Weihao Zhang</div>
          <div>
            <button className="text-white rounded-3xl px-8 py-2" style={{ background: "linear-gradient(90deg,rgba(28, 189, 252, 1) 0%, rgba(190, 135, 222, 1) 70%)" }}>My CV</button>
          </div>
        </div>
        {/* End Header */}
        {/* Main Content */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-8">
            {NAV.map((nav: any, i: number) => (
              <button
                className="flex items-start gap-2"
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full border">
                  <span className="w-2 h-2 flex items-center justify-center rounded-full border"></span>
                </div>
                <div className="text-left leading-5">
                  <p>0{i + 1}</p>
                  <p>{nav.name}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="flex-1">

          </div>
        </div>
        {/* End Main Content */}
      </div>
      {/* <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main> */}
    </main>
  );
}
