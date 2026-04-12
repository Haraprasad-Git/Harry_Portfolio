"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiFileDownloadFill, RiMailFill } from "react-icons/ri";
import { TbLetterH, TbLetterP } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { Links } from "../type";

const Navbar = ({ links, setVisible }: { links: Links; setVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <TbLetterH className="w-8 h-8" />
        <TbLetterP className="w-8 h-8" />
      </div>

      <div className="flex items-center gap-2 lg:gap-4 text-2xl">
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

        {/* {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        )} */}

        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}

        {/* {links.resume && (
          <a
            href={`/resume/${links.resume}`}
            target="_blank"
            rel="noopener noreferrer"
            download
            title="Download Resume"
          >
            <RiFileDownloadFill />
          </a>
        )} */}

        <a href="#!" rel="noopener noreferrer" onClick={() => setVisible(true)}>
          <RiMailFill />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;