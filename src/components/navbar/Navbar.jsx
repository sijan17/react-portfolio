import React, { useState } from "react";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import NavItem from "./NavItem";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  return (
    <div className="flex w-full rounded-md items-center justify-between  fixed left-0 py-2 md:py-4 bg-[#1e293b]  top-0 z-[10]  px-8 lg:px-32  ">
      <Logo />
      <div className={`md:hidden hamburger relative`}>
        <RxHamburgerMenu
          onClick={() => {
            setIsMenuHidden(false);
          }}
          className={`${
            !isMenuHidden ? "opacity-0" : "opacity-1"
          } h-8 w-8 transform transition-transform duration-[1s] ease-in-out ${
            !isMenuHidden ? "-rotate-90" : "rotate-0"
          } cursor-pointer text-[#d1ced4]`}
        />
        <RxCross1
          onClick={() => {
            setIsMenuHidden(true);
          }}
          className={` absolute left-0 top-0 
                         h-8 w-8 transform transition-transform duration-[1s] ease-in-out ${
                           isMenuHidden
                             ? "opacity-0 rotate-90 z-[-1]"
                             : "rotate-0 opacity-1 z-[10]"
                         } cursor-pointer text-[#d1ced4]`}
        />
      </div>
      <div
        className={`menu w-full bg-[#1c2431] overflow-hidden md:w-auto md:bg-transparent  ${
          isMenuHidden ? "left-[150vw]" : "left-0"
        } md:flex  rounded-lg md:border-none  absolute top-full   z-[5]  duration-700  md:sticky md:min-w-auto flex-col md:flex-row justify-between lg:items-center shrink-0 gap-8 lg:w-1/2`}
      >
        <NavItem
          icon={AiOutlineHome}
          text="Home"
          id="#home"
          setIsMenuHidden={setIsMenuHidden}
        />
        <NavItem
          icon={MdDescription}
          text="About"
          id="#about"
          setIsMenuHidden={setIsMenuHidden}
        />
        <NavItem
          icon={BsCodeSlash}
          text="Projects"
          id="#projects"
          setIsMenuHidden={setIsMenuHidden}
        />
        <NavItem
          icon={AiOutlineContacts}
          text="Contact"
          id="#contact"
          border={false}
          setIsMenuHidden={setIsMenuHidden}
        />
      </div>
    </div>
  );
};

export default Navbar;
