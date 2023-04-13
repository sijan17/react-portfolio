import Title from "../Title";
import Layout from "../Layout";
import Project from "./Project";
import {projectData} from "../../constants/projectData"
export default function About() {
	return (
		<Layout id="projects">
			<Title title="<Projects/>" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projectData.map((project, index) => <Project key={index} data={project} />)}
			</div>
		</Layout>
	);
}
