import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
          <a
            href="https://github.com/ALDY-Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            ALDY
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
