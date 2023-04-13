import React from "react";
import Experience from "../three/Experience";
import { Canvas, useFrame } from "@react-three/fiber";

const Image = () => {
	return (
		<div className="w-full md:w-1/2 lg:h-[70vh]  md:h-[50vh] h-[30vh]">
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 2000,
					position: [-3, 1.5, 4],
				}}
			>
				<Experience />
			</Canvas>
		</div>
	);
};

export default Image;
