import Title from "../Title";
import Layout from "../Layout";
import ContactForm from "./ContactForm";
import {useState, useEffect, useRef} from "react"

export default function About() {
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


	return (
		<Layout id="contact" >
			<Title title="Say-Hello !" />

			<div ref={animatedDivRef} className="flex items-center  w-full flex-col md:flex-row overflow-hidden ">
				<ContactForm isVisible={isVisible} />
				<div className={`hidden md:flex items-center justify-center w-1/2 hover:rotate-[-10deg] duration-[2s] ${isVisible ? "opacity-1 translate-x-0" : "opacity-0 translate-x-[100%]"} `}>
					<img
						src="/assets/img/letter-removebg.png"
						className="scale-x-[-1]"
					/>
				</div>
			</div>
		</Layout>
	);
}
