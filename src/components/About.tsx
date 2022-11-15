import React from "react";
import { CameraIcon } from "./profile/User";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto font-mono flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Susheel.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am passionate about my work. Because I love what I do, I have a
            steady source of motivation that drives me to do my best. In my last
            job, this passion led me to challenge myself daily and learn new
            skills that helped me to do better work.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black font-mono text-center bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded-full text-sm"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 font-mono bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-sm"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
          <CameraIcon />
        </div>
      </div>
    </section>
  );
}
