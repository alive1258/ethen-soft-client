"use client";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const Accordion = ({ accordion, isActive, onClick }) => {
  return (
    <div
      className={`${
        isActive ? "border-2" : ""
      } border-[#CBAEDA] rounded-lg p-1`}
    >
      <div
        className={`flex items-center justify-between font-medium cursor-pointer p-3 rounded-lg duration-150 ${
          isActive
            ? "bg-btn text-white"
            : "bg-white hover:bg-primary-base text-black-base group group"
        }`}
        onClick={onClick}
      >
        <h1
          className={`text-sm md:text-base ${
            isActive ? "text-white" : "text-black-base group-hover:text-white"
          }`}
        >
          {accordion?.question}
        </h1>
        <div
          className={`${
            isActive ? "text-white" : "text-primary-base group-hover:text-white"
          }`}
        >
          {isActive ? (
            <FiMinus className="text-2xl" />
          ) : (
            <GoPlus className="text-2xl" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="flex gap-1.5 pt-2">
          <h6 className="text-[13px] md:text-base text-black-base pr-4">
            {accordion?.answer}
          </h6>
        </div>
      )}
    </div>
  );
};

export default Accordion;
