import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Credits Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gopi suseel kumar sathenapalli👩‍💻.
            All rights reserved.
          </p>
        </div>

        {/* Optional: Social Media Links */}
        <div className="mt-2 md:mt-0 flex space-x-4">
          <a
            href="https://github.com/Susheel4115"
            className="hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suseelkumar115/"
            className="hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
