import Title from "../Title";
import Layout from "../Layout";
import ContactForm from "./ContactForm";

export default function About() {
	return (
		<Layout id="contact">
			<Title title="Say-Hello !" />

			<div className="flex items-center  w-full flex-col md:flex-row ">
				<ContactForm />
				<div className="hidden md:flex items-center justify-center w-1/2 hover:rotate-[-10deg] duration-500">
					<img
						src="/assets/img/letter-removebg.png"
						className="scale-x-[-1]"
					/>
				</div>
			</div>
		</Layout>
	);
}
