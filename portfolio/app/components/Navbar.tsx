"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiFileDownloadFill } from "react-icons/ri";
import { TbLetterH, TbLetterP } from "react-icons/tb";
import { Links } from "../type";

const Navbar = ({ links }: { links: Links }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex items-center">
        <TbLetterH className="w-8 h-8" />
        <TbLetterP className="w-8 h-8" />
      </div>

      <div className="flex items-center gap-4 text-2xl">
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}

        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}

        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        )}

        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}

        {links.resume && (
          <a
            href={`/resume/${links.resume}`}
            target="_blank"
            rel="noopener noreferrer"
            download
            title="Download Resume"
          >
            <RiFileDownloadFill />
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;