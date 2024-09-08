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
  value,
  validate,
  onchange,
}) => {
  const [inputType, setInputType] = useState(type);
  const [showPass, setShowPass] = useState(false);

  const handleShowPassword = (type) => {
    setShowPass(!showPass);
    setInputType(type);
  };
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[#ADB5BD] mt-4">{label} *</label>
      <div className="relative">
        <input
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
          type={inputType}
          value={value}
          onchange={onchange}
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
