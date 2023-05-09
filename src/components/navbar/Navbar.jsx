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
        <div className="flex items-center justify-between  sticky pt-4 bg-[#1e293b] top-0 pb-2 z-[10]  px-4 lg:px-16  ">
            <Logo />
            <div className={`md:hidden hamburger relative`}>
                <RxHamburgerMenu
                    onClick={() => {
                        setIsMenuHidden(false);
                    }}
                    className={` ${
                        !isMenuHidden ? "opacity-0" : "opacity-1"
                    } h-8 w-8 transform transition-transform duration-[1s] ease-in-out ${
                        !isMenuHidden ? "-rotate-90" : "rotate-0"
                    } cursor-pointer text-[#a855f7]`}
                />
                <RxCross1
                    onClick={() => {
                        setIsMenuHidden(true);
                    }}
                    className={` absolute left-0 top-0 
                         h-8 w-8 transform transition-transform duration-[1s] ease-in-out ${
                        isMenuHidden ? "opacity-0 rotate-90 z-[-1]" : "rotate-0 opacity-1 z-[10]"
                    } cursor-pointer text-[#a855f7]`}
                />
                </div>
            <div
                className={`menu w-full md:w-auto  ${
                    isMenuHidden ? "hidden" : ""
                } md:flex border-2 rounded-lg md:border-none  absolute   top-[10vh]  duration-500  bg-[#1e293b] md:sticky md:min-w-auto flex-col md:flex-row justify-between lg:items-center shrink-0 gap-8 lg:w-1/2`}
            >
                <NavItem icon={AiOutlineHome} text="Home"  id="#home"  setIsMenuHidden={setIsMenuHidden} />
                <NavItem icon={MdDescription} text="About"  id="#about" setIsMenuHidden={setIsMenuHidden}    />
                <NavItem icon={BsCodeSlash} text="Projects"  id="#projects" setIsMenuHidden={setIsMenuHidden}    />
                <NavItem icon={AiOutlineContacts} text="Contact"  id="#contact" setIsMenuHidden={setIsMenuHidden}    />
            </div>
        </div>
    );
};

export default Navbar;
