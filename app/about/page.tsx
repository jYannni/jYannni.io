"use client";
import { Beer, CalendarDays, CalendarPlus, ChefHat, GraduationCap, Laptop2, Radar, School } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const history = [
  {
    icon: <Laptop2 size={30} />,
    href: "https://www.coursera.org", // Link
    label: "Coursera Certificate", // Sub-title
    handle: "Build AI Apps with ChatGPT, Dall-E, and GPT-4", // Title
    description: `"Dodgy Dave's" Stock Analyser`, // Description
    information: "I built a stock analyser using the OpenAI API, the Polygon API and a simple web interface.", // Information
    date: "20 April 2024", // Date
    diploma: "https://github.com/jYannni/jYannni/blob/main/Certifications%20and%20Diplomas/Scrimba-BuildAIApps.pdf" // Diploma
  },
  {
    icon: <School size={30} />,
    href: "https://www.open.ac.uk/",
    label: "Studying at",
    handle: "the Open University",
    description: "BSc (Hons) Computing & IT (Software)",
    information: "Currently studying towards a degree in Computing & IT (Software) with the Open University.",
    date: "August 2026",
    diploma: ".",
  },
  {
    icon: <CalendarPlus size={30} />,
    href: "",
    label: "",
    handle: "Career Progression",
    description: "Looking to change career from IT Support to Web Development",
    information: "After the Web Development course, I was fascinated in learning more, new languages, how to code and what I could build. This lead me to look at new ways to study and improve upon my skills.",
  },
  {
    icon: <GraduationCap size={30} />,
    href: "https://www.lewagon.com/",
    label: "Graduated",
    handle: "Le Wagon",
    description: "Batch #882 Full-Stack Web Development",
    information: "Studied and built web applications, including an AirBnB clone and NOHS (Network Optimised Healthcare Support) using Ruby, Ruby on Rails, JavaScript, HTML and CSS.",
    date: "17 June 2022",
    diploma: "https://github.com/jYannni/jYannni/blob/main/Certifications%20and%20Diplomas/LeWagonDiploma.pdf"
  },
  {
    icon: <CalendarDays size={30} />,
    href: "",
    label: "",
    handle: "Career Change",
    description: "Looking to change career from IT Support to Web Development",
    information: "Due to a loss in the family, I was travelling more than expected, this lead to an interest in changing career paths.",
  },
  {
    icon: <Radar size={30} />,
    href: "https://www.priorityoneit.co.uk/",
    label: "Worked at",
    handle: "Priority One IT",
    description: "1st Line Technician",
    information: "Providing IT Administration and Support online and and in-person to multiple companies and individuals in the UK (and some abroad).",
    date: "May 2019 - Spetember 2020"
  },
  {
    icon: <ChefHat size={30} />,
    href: "https://www.melroseandmorgan.com/",
    label: "Worked at",
    handle: "Melrose and Morgan",
    description: "Team Member",
    information: "Working at their Gloucester Ave. location.",
  },
  {
    icon: <Beer size={30} />,
    href: "https://www.camdentownbrewery.com/",
    label: "Worked at",
    handle: "Camden Town Brewery",
    description: "Waiter and Bar Staff",
    information: "Working at the original Bistro Pub based in Hampstead and their largest brewery in Enfield.",
  },
  {
    icon: <Radar size={30} />,
    href: "https:/www.mintel.com/",
    label: "Worked at",
    handle: "Mintel",
    description: "IT Support and Administrator",
    information: "Providing in-house IT Administration and Support to multiple departments and individuals across the comapny including their own bespoke software.",
    date: "June 2017 - March 2018"
  },
  // {
  //   icon: <Laptop2 size={30} />,
  //   href: "", // Link
  //   label: "Label",  // Sub-title
  //   handle: "Handle", // Title
  //   description: "Description", // Description
  //   information: "Information",  // Information
  //   date: "Date" // Date
  //   diploma: "Diploma" // Diploma
  // },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-20 lg:gap-16">
          {history.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 sm:p-8"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium items-center text-center duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.description}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.information}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.date}
                  </span>
                  {s.diploma && (
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.diploma !== "." ? (
                        <a href={s.diploma} target="_blank" rel="noopener noreferrer">
                          View Diploma
                        </a>
                      ) : <p>Degree Soon to be Added</p>}
                    </span>
                  )}
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
