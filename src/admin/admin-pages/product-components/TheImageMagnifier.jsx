import React, { useState } from "react";

const TheImageMagnifier = ({ imageUrl }) => {
  const [magnify, setMagnify] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDoubleClick = () => {
    setMagnify(!magnify);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      onMouseLeave={() => {
        setMagnify(false);
        setPosition({ x: 0, y: 0 });
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: magnify ? 9999 : "auto",
      }}
    >
      <img
        className="rounded-md cursor-zoom-in"
        src={imageUrl}
        alt="Product Image"
        style={{
          width: "100%",
          height: "100%",
          transform: magnify
            ? `scale(2.5) translate(${position.x}px, ${position.y}px)`
            : "none",
          transition: "transform 0.2s ease-in-out",
          position: magnify ? "absolute" : "static",
        }}
      />
    </div>
  );
};

export default TheImageMagnifier;
