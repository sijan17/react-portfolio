import Title from "../Title";
import Layout from "../Layout";
import Image from "./Image";
import Text from "./Text";

export default function About() {
	return (
		<Layout id="about">
			<Title title=" <About-Me/>" />
			<div  className="flex  flex-col w-full  gap-8  md:flex-row md:gap-4 overflow-hidden " >
	<Text />
				<Image />
			</div>
		</Layout>
	);
}
