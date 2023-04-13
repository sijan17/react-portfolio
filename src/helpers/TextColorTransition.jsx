import React, { useContext, useEffect, useRef, useState } from "react";

const TextColorTransition = ({
  initialColor = "white",
  finalColor = "purple",
  visibleAt = 0,
  text,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const renderLetters = () => {
    const letters = text.split("");

    return letters.map((letter, index) => (
      <span
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
        key={index}
        style={{
          color: isVisible ? finalColor : initialColor,
          transition: "color 0.1s ease " + index * 0.1 + "s",
        }}
      >
        {letter}
      </span>
    ));
  };

  return <div>{renderLetters()}</div>;
};

export default TextColorTransition;
