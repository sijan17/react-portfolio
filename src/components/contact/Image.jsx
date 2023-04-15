import Animation from "../../helpers/Animation"
export default function Image(){



	return (
		<Animation before="opacity-0 rotate-[-30deg] scale-[0.8]" after="opacity-1 scale-[1] translate-y-[-40px] " duration="2s" moreclass="hidden md:flex items-center justify-center w-1/2 hover:rotate-[-10deg] ">
          <img
            src="/assets/img/letter-removebg.png"
            className="scale-x-[-1]"
          />
    </Animation>
		);	
}