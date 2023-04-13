import React from "react";
import Image from "./Image";
import Text from "./Text";
import {useState, useEffect, useRef} from "react"
 
const Home = () => {
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
		<div ref={animatedDivRef} id="home" className="flex mb-16  gap-16 md:gap-2  pt-16 md:pt-0 md:items-center justify-between flex-col md:flex-row md:min-h-[70vh]">
			<Text  isVisible={isVisible} />
			<Image isVisible={isVisible} />
		</div>
	);
};

export default Home;
