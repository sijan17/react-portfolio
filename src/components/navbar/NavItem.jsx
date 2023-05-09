import React, { useState } from "react";
import TextColorTransition from "../../helpers/TextColorTransition";
import Animation from "../../helpers/Animation";
const NavItem = ({
  icon: Icon,
  text,
  active,
  id,
  setIsMenuHidden,
  border = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scroll = () => {
    const section = document.querySelector(id);
    if (section) {
      setIsMenuHidden(true);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      onClick={scroll}
      className={`flex p-4 ${
        border ? " border-b border-[#8d8991] " : ""
      }  md:border-none  w-full md:w-auto md:p-0 text-[1.2em] justify-center items-center relative cursor-pointer duration-300`}
    >
      <div
        className={`h-0.5 w-full bg-[#a855f7]  absolute bottom-0 ${
          isHovered ? "transform scale-x-100" : "transform scale-x-0"
        } transition-transform duration-500 ease-in-out`}
      ></div>
      <div
        className="text-center flex gap-2 items-center  py-2 rounded-lg group "
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <Animation
          before="opacity-0"
          after="opacity-1"
          duration="1s"
          moreclass="flex gap-4  items-center "
        >
          <Icon className="h-6 w-6  duration-300 group-hover:rotate-x-[12deg]" />
          <div className="group">
            <TextColorTransition
              text={text}
              initialColor="white"
              finalColor="#a855f7"
              group={true}
            />
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default NavItem;
