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
        <div className="flex items-center justify-between sticky w-full sticky pt-4 bg-[#1e293b] top-0 z-[1000000000] ">
            <Logo />
            <div className={`md:hidden hamburger`}>
                <RxHamburgerMenu
                    onClick={() => {
                        setIsMenuHidden(false);
                    }}
                    className={` ${
                        !isMenuHidden ? "hidden" : ""
                    } h-8 w-8 transform transition-transform duration-500 ease-in-out ${
                        !isMenuHidden ? "rotate-90" : "rotate-0"
                    } cursor-pointer text-[#a855f7]`}
                />
                <RxCross1
                    onClick={() => {
                        setIsMenuHidden(true);
                    }}
                    className={` ${
                        isMenuHidden ? "hidden" : ""
                    } h-8 w-8 transform transition-transform duration-500 ease-in-out ${
                        isMenuHidden ? "rotate-90" : "rotate-0"
                    } cursor-pointer text-[#a855f7]`}
                />
            </div>
            <div
                className={`menu w-full md:w-auto  ${
                    isMenuHidden ? "hidden" : ""
                } md:flex  absolute   top-[10vh]  duration-500  bg-[#1e293b] md:sticky md:min-w-auto flex-col md:flex-row justify-between lg:items-center shrink-0 gap-8 lg:w-1/2`}
            >
                <NavItem icon={AiOutlineHome} text="Home"  id="#home" />
                <NavItem icon={MdDescription} text="About"  id="#about" />
                <NavItem icon={BsCodeSlash} text="Projects"  id="#projects" />
                <NavItem icon={AiOutlineContacts} text="Contact"  id="#contact" />
            </div>
        </div>
    );
};

export default Navbar;
