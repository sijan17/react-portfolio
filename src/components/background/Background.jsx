
const Background = () => {
	return (
		<div >
		<img className="fixed w-screen top-0 left-0" src="/assets/img/bg-2.png" />
		<img className="hidden md:block md:absolute md:w-screen top-0 left-0" src="/assets/img/bg-1.png" />
		<div className="md:hidden absolute w-screen h-screen md:h-full  top-0 left-0 bg-[url('/assets/img/bg-1-mb.png')] " />
		</div>
	);
};

export default Background;
