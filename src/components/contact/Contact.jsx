import Title from "../Title";
import Layout from "../Layout";
import ContactForm from "./ContactForm";
import Image from "./Image"

export default function About() {
	return (
		<Layout id="contact" >
			<Title title="Say-Hello !" />

			<div className="flex items-center  w-full flex-col md:flex-row overflow-hidden ">
				<ContactForm  />
				<Image />
			</div>
		</Layout>
	);
}
