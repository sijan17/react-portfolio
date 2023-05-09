import {useEffect , useState, useRef} from "react"

export default function Text({children, before, after, duration, moreclass}){
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
		<div ref={animatedDivRef} className={`${moreclass && moreclass} duration-[${duration}]  ${
        isVisible ? after : before }`}>{children}</div>
		);
}