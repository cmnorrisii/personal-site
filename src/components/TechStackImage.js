import React from "react";

const TechStackImage = ({ value }) => {
  return (
    <img className="tech-stack-item-image" src={value.image} alt={value.alt} />
  );
};

export default TechStackImage;
