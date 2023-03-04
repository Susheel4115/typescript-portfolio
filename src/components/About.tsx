import React from "react";
// import { CameraIcon } from "./profile/User";
import profile from "./profile/profile-pic.png";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto font-mono flex px-10 py-20 md:flex-row flex-col items-center mt-20">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm{" "}
            <span className="font-serif text-emerald-400">Susheel 🤍</span>.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps and do solving questions in leetcode😁.
          </h1>
          <p className="mb-8 leading-relaxed">
            A motivated individual who is good at problem-solving and
            programming, with an emphasis on writing clean and maintainable
            code. Experienced with data structures/algorithms and designing
            optimal solutions, aspiring to make a career in software engineering
            with a focus on full-stack development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black font-mono text-center bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 hover:text-white rounded-2xl  text-sm hover:rotate-5 transition duration-1000  ease-in-out"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black font-mono bg-purple-400 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 hover:text-white rounded-2xl text-sm hover:rotate-5 transition duration-1000  ease-in-out"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
          <img
            src={profile}
            alt="pic"
            className="rounded-full object-contain h-96 w-fit hover:rotate-360 transition duration-1000  ease-in-out cursor-pointer"
          />
          {/* <a href="" */}
        </div>
      </div>
    </section>
  );
}
