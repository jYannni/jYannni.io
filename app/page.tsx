"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { TypeAnimation } from 'react-type-animation';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blogs" },
  { name: "About", href: "/about" },
];
const firstSetOfWords = [
  "Full-Stack Developer", 2500,
  "Undergrad Student", 2500,
  "Creative Thinker", 2500,
  "Software Engineer", 2500,
  "Tech Enthusiast", 2500,
  "Problem Solver", 2500,
];

const secondSetOfWords = [
  "design websites", 1000,
  "build responsive applications", 1000,
  "create automation tools", 1000,
  "use databases", 1000,
  "utilise and integrate chatbots", 1000,
  "work with machine learning models", 1000,
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 hover:font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={6942}
      />
      <div className="mb-16 text-center animate-fade-in">
      <h2 className="text-xs sm:text-sm md:text-md font-semibold text-zinc-500">
        Hey there, I'm Yanko,<br />
        I am a{" "}
        <TypeAnimation
          sequence={firstSetOfWords}
          repeat={Infinity}
          speed={50}
          style={{ fontSize: '1em', fontWeight: '900' }}
        />,<br /> online I go by
      </h2>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-6xl text-transparent duration-1420 bg-white cursor-default text-edge-outline animate-title font-bladeRunner sm:text-8xl md:text-9xl whitespace-nowrap bg-clip-text p-3 ">
        jYannni
      </h1>
      <br />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md font-medium text-zinc-500">
          I{" "}
          <TypeAnimation
            sequence={secondSetOfWords}
            repeat={Infinity}
            speed={50}
            style={{ fontSize: '1em', fontWeight: '900' }}
          /><br />to solve real-world problems that makes life easier for everyone.
        </h2>
        <br />
        <h3 className="text-md font-medium text-zinc-500">
          With the power of technology,<br />
          I plan on making the world a better place.
        </h3>
      </div>
    </div>
  );

}
