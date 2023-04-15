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
import Animation from "../../helpers/Animation"


export default function Text(){

	return (
					<div  
      className={`title  flex flex-col gap-4 md:gap-8 text-[1.1em] md:text-[1.4em] md:w-[60%] duration-[2s] 
      }`} >
      <Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s">
					<div className={` hover:-translate-y-2 duration-500`} >
						<span className="text-[#d946ef] " >Coding </span> is fun. Isn't it ? 😉
						<br />
  
					</div>
          </Animation>
          <Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s">
					<div className="hover:-translate-y-2 duration-500">
						Well, I <span className="text-red-500 ">❤️</span> it anyways.
						My field of Interest's are building new <span className="text-[#d946ef] ">Web Technologies
						and Products </span> and also in areas related to <span className="text-[#d946ef] ">Cybersecurity.</span>
					</div>
          </Animation>

         <Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s">
					<div className="hover:-translate-y-2 duration-500">
						Whenever possible, I apply my passion for
						developing products with
						 Modern Javascript Library and Frameworks like
						<span className="text-[#d946ef] "> React.js</span> and <span className="text-[#d946ef] ">Next.js</span>. 
					</div>
          </Animation>
          <Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s">
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
      </Animation>

      <Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s">

<div className="flex my-4 w-full justify-around items-center">
        <a href="/assets/pdf/resume_sijan.pdf">
          <div className="flex items-center gap-2 md:gap-4  p-2 border rounded-lg hover:bg-[#6d28d9] duration-500 hover:scale-[1.1] ">
            <FiDownload className="w-5 h-5 " />
            <span>DOWNNLOAD CV</span>
          </div>
        </a>
      </div>
      </Animation>
      </div>
     
		);
}