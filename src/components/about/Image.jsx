import Animation from "../../helpers/Animation"
export default function Image(){
	

	return (
		<Animation before="opacity-0 scale-[0.8]" after="opacity-1 scale-[1]" duration="2s"  moreclass="hover:rotate-[-20deg] min-h-[333px] bg-cover    md:min-w-[40%] flex items-center justify-around   bg-[url('/assets/img/code.png')]" />
		);	
}