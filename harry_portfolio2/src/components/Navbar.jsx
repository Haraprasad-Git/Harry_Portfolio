import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbLetterH, TbLetterP } from "react-icons/tb";
import resume from "../assets/Haraprasad-Tripathy-Full-Stack 3Years.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <TbLetterH className="w-8 h-8" />
        <TbLetterP className="w-8 h-8" />
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/haraprasad-tripathy" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Hosting4Harry" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/Hp_tripathy" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/_h_a_r_r_y_boy_ig_" target="_blank">
          <FaInstagram />
        </a>
        <a href={resume} download >
           <RiFileDownloadFill />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;