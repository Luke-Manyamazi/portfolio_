import logo from "../assets/lukeManyamaziLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="kr letters in white color" className="mx-2 w-14" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
