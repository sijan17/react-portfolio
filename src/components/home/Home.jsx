import React from "react";
import Image from "./Image";
import Text from "./Text";
 
const Home = () => {
	return (
		<div  id="home" className="flex mb-16  gap-16 md:gap-2  pt-16 md:pt-0 md:items-center justify-between flex-col md:flex-row md:min-h-[70vh]  px-4 lg:px-16 ">
			<Text   />
			<Image />
		</div>
	);
};

export default Home;
