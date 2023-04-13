import Title from "../Title";
import Layout from "../Layout";
import { FiDownload } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiExpress,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";
export default function About() {
	return (
		<Layout id="about">
			<Title title=" <About-Me/>" />
			<div  className="flex  flex-col w-full  gap-8  md:flex-row md:gap-4 overflow-hidden ">
				<div className="title  flex flex-col gap-4 md:gap-8 md:text-[1.2em]  duration-500 md:w-[60%]">
					<div className="hover:-translate-y-2 duration-500">
						<span className="text-[#d946ef] ">Coding </span> is fun. Isn't it ? 😉
						<br />
  
					</div>
					<div className="hover:-translate-y-2 duration-500">
						Well, I <span className="text-red-500 ">❤️</span> it anyways.
						My field of Interest's are building new <span className="text-[#d946ef] ">Web Technologies
						and Products </span> and also in areas related to <span className="text-[#d946ef] ">Cybersecurity.</span>
						<br />
					</div>
					<div className="hover:-translate-y-2 duration-500">
						Whenever possible, I apply my passion for
						developing products with
						<span className="text-[#d946ef] "> Node.js </span>{" "}
						and Modern Javascript Library and Frameworks like
						<span className="text-[#d946ef] "> React.js</span> and <span className="text-[#d946ef] ">Next.js</span>. 
					</div>
					<div className="text-blue flex justify-between hover:translate-x-[10px] hover:text-[#6d28d9] duration-500 items-center w-full">
        <SiHtml5 className="h-5 w-5 inline" />
        <SiCss3 className="h-5 w-5 inline" />{" "}
        <SiJavascript className="h-5 w-5 inline" />
        <SiReact className="h-5 w-5 inline" />
        <SiNodedotjs className="h-5 w-5 inline" />{" "}
        <SiMongodb className="h-5 w-5 inline" />
        <SiPhp className="h-5 w-5 inline" />
        <SiMysql className="h-5 w-5 inline" />{" "}
        <SiExpress className="h-5 w-5 inline" />
        <SiTailwindcss className="h-5 w-5 inline" />
        <SiThreedotjs className="h-5 w-5 inline" />
      </div>

					<div className="flex my-4 w-full justify-around items-center">
        <a href="/assets/pdf/resume_sijan.pdf">
          <div className="flex items-center gap-2 md:gap-4  p-2 border rounded-lg hover:bg-[#6d28d9] duration-500 hover:scale-[1.1] ">
            <FiDownload className="w-5 h-5 " />
            <span>DOWNNLOAD CV</span>
          </div>
        </a>
      </div>
				</div>
				<div className="hover:rotate-[-20deg] min-h-[333px] bg-cover    md:min-w-[40%] flex items-center justify-around duration-500  bg-[url('/assets/img/code.png')]"></div>
			</div>
		</Layout>
	);
}
