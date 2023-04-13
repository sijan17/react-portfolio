import {useState, useEffect, useRef} from "react"

export default function Title({ title }) {

		const animatedDivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change this value as per your requirement
    );

    if (animatedDivRef.current) {
      observer.observe(animatedDivRef.current);
    }

    return () => {
      if (animatedDivRef.current) {
        observer.unobserve(animatedDivRef.current);
      }
    };
  }, []);
	const getLetters = () => {
		let data = [];
		for (let i = 0; i < title.length; i++) {
			i % 2 == 0
				? data.push(
						<div
							key={i}
							className="group-hover:-translate-y-1 duration-300"
						>
							{title[i]}
						</div>
				  )
				: data.push(
						<div
							key={i}
							className="group-hover:translate-y-1 duration-300"
						>
							{title[i]}
						</div>
				  );
		}
		return data;
	};

	const data = getLetters();

	return (
		<div ref={animatedDivRef} className={`title flex text-[2.4em]  md:text-[3em] text-center text-[#d946ef] group hover:text-[#6d28d9] hover:scale-x-[1.1] duration-[1s] ${isVisible ? "opacity-1" : "opacity-0"} `}>
			{data}
		</div>
	);
}
