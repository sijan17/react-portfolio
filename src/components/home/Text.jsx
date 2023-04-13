import React, { useEffect, useState } from "react";
import TextColorTransition from "../../helpers/TextColorTransition";

const Text = ({isVisible}) => {
	return (
		<div className={` flex flex-col ${isVisible ? "opacity-1  scale-[1]" : "opacity-0 scale-[0.8] " } duration-[3s]`}   >
			<div className="title text-[2.4em] hover:text-[#a855f7] duration-500 hover:-translate-y-2">
				<div className="flex gap-2">
					Hello !<div className="">👋</div>
				</div>
			</div>
			<div className="text-[2em] md:text-[3em] flex gap-4 group hover:translate-y-2 duration-500">
				<div className="duration-500">I'm </div>
				<div className={`name px-2 rounded-lg  text-[#a855f7]   ${isVisible ? "  " : ""} duration-[3s]`}>
					<TextColorTransition
						text="SIJAN PAUDEL"
						initialColor="#a855f7"
						finalColor="#db2777"
					/>
				</div>
			</div>
		</div>
	);
};

export default Text;
