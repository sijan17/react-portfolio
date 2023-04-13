import { useState, useEffect } from "react";

const HoverColor = ({ text, initialColor, finalColor, delay }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [colorArray, setColorArray] = useState(
    text.split("").map(() => initialColor)
  );

  const handleMouseEnter = () => {
    setIsHovering(true);
    colorArray.forEach((color, index) => {
      setTimeout(() => {
        const newColorArray = [...colorArray];
        newColorArray[index] = finalColor;
        setColorArray(newColorArray);
      }, index * delay);
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setColorArray(text.split("").map(() => initialColor));
  };

  return (
    <span
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {colorArray.map((color, index) => (
        <span key={index} style={{ color }}>
          {text.charAt(index)}
        </span>
      ))}
    </span>
  );
};

export default HoverColor;
