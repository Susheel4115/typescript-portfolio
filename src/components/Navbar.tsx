import { useState } from "react";
import profile from "./profile/profile-pic.png";
export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };
  return (
    <header className="fixed bg-gray-800 sm:sticky top-0 z-10 font-mono">
      <div className="container mx-auto flex flex-wrap p-4  md:flex-row items-center">
        <img
          src={profile}
          alt=""
          className="h-8 w-8 rounded-full mb-4 mt-3 md:mb-0 ml-5"
        />
        <a
          className="title-font font-medium text-white mt-3 md:mb-0 ml-3 text-xl text-blue-100 hover:text-white cursor-pointer"
          href="https://www.linkedin.com/in/suseelkumar115/"
        >
          Susheel Kumar👩‍💻
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center md:justify-evenly ">
          <a href="#projects" className="mr-8 ml-5 hover:text-white">
            Past Work👷‍♂️
          </a>
          <a href="#skills" className="mr-8 hover:text-white ">
            Skills🤹‍♀️
          </a>
          <a
            href="#testimonials"
            className="mr-8 hover:text-white hidden sm:inline-block"
          >
            Competative Programming🦹‍♀️
          </a>
          <a
            href="#resume"
            onClick={handleShowModal}
            className="mr-8 hover:text-white"
          >
            Resume💌
          </a>
          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-xl font-bold mb-4">Resume</h2>
                <p>
                  Please drop me the requirements exactly what you're looking
                  for in the contact form with your gmail. So that I can get a
                  mail from you and I will reply back to that mail with my
                  resume.💌
                </p>
                <button
                  className="bg-green-800 text-white rounded p-1 pr-5 pl-5   ml-1 mt-4"
                  onClick={handleHideModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </nav>
        <a
          href="#contact"
          className="flex-inline items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-0  mr-5 hidden md:block"
        >
          Hire Me🙌
        </a>
      </div>
    </header>
  );
}
