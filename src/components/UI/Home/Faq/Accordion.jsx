"use client";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordion = ({ accordion, isActive, onClick }) => {
  return (
    <div
      className={`${
        isActive ? "border-2" : ""
      } border-[#CBAEDA] rounded-lg p-4`}
    >
      <div
        className="flex items-center justify-between font-medium"
        onClick={onClick}
      >
        <h1 className="text-black-base">{accordion?.title}</h1>
        <p className="text-primary-base">
          {isActive ? (
            <FiMinus className="text-2xl" />
          ) : (
            <GoPlus className="text-2xl" />
          )}
        </p>
      </div>
      {isActive && (
        <div className="flex gap-1.5 pt-2">
          <p className="text-primary-base italic">Ans:</p>
          <h6 className="italic text-black-base pr-4">
            {accordion?.description}
          </h6>
        </div>
      )}
    </div>
  );
};

export default Accordion;
