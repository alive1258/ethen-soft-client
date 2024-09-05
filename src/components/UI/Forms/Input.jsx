"use client";

import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Input = ({
  label,
  type = "text",
  text,
  placeholder,
  register,
  errors,
  pattern,
  validate,
}) => {
  const [inputType, setInputType] = useState(type);
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = (type) => {
    setShowPass(!showPass);
    setInputType(type);
  };
  return (
    <div className="flex flex-col gap-3">
      <label className="text-white mt-4">{label} *</label>
      <div className="relative">
        <input
          className="w-full px-4 py-2 bg-transparent text-white border border-[#828282] rounded focus:border-[#3A57E8] focus:outline-none placeholder:text-[#919191]"
          type={inputType}
          placeholder={placeholder}
          {...register(text, {
            required: `${label} is required`,
            pattern: pattern,
            validate: validate,
          })}
        />
        {type === "password" &&
          (showPass ? (
            <FaEye
              onClick={() => handleShowPassword("password")}
              className="text-white absolute right-2 top-0 mt-3 cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => handleShowPassword("text")}
              className="text-white absolute right-2 top-0 mt-3 cursor-pointer"
            />
          ))}
      </div>
      {errors?.[text] && (
        <span className="text-red-600 text-sm">{errors[text]?.message}</span>
      )}
    </div>
  );
};

export default Input;
