import { ArrowRightIcon } from "@heroicons/react/solid";
import profile from "./profile/profile-pic.png"
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 font-mono">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="title-font font-medium text-white mb-4 md:mb-0"
          href="#about"
        >
          
          <a href="#about" className="ml-3 text-xl text-[#6c6780] hover:text-white">
            Susheel Kumar
          </a>
          <img src={profile} alt="no pic" className="object-contain h-10 w-10 -ml-10 -mt-9 rounded-3xl"/>
          
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="flex-inline items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-0  mr-5 hidden md:block"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-20 -mr-10 -mt-5" />
        </a>
      </div>
    </header>
  );
}
