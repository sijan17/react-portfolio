import React from "react";
// import Experience from "../three/Experience";
// import { Canvas, useFrame } from "@react-three/fiber";
import Animation from "../../helpers/Animation"

const Image = ({isVisible}) => {
	return (
		<Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s" moreclass="w-full h-full  md:w-1/2 lg:h-[70vh]  md:h-[50vh]   hover:scale-[1.1] duration-[2s]">
			{/*<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 2000,
					position: [-3, 1.5, 4],
				}}
			>
				<Experience />
			</Canvas>*/}

		<img src="/assets/img/work.png" />
		</Animation>
	);
};

export default Image;
