"use client";
import { useState } from "react";
import Accordion from "./Accordion";

const AccordionList = ({ accordions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          accordion={accordion}
          isActive={activeIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionList;
