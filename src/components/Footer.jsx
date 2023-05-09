export default function Footer(){
	return (
		<div className="text-center text-lg  scale-[0.8] hover:scale-[1] duration-500 group overflow-hidden flex gap-2 items-center justify-center"  > 
		<div className="group-hover:text-xl group-hover:animate-spin ">©</div>
		<div className="group-hover:rotate-[360deg] "> Sijan Paudel, </div>
		 <div className="group-hover:animate-pulse group-hover:text-blue-500 duration-[3s] cursor-pointer text-blue-500">
		 <a href="https://en.wikipedia.org/wiki/Vikram_Samvat">2079</a>
		 </div> 
		 </div	>
		);
}
