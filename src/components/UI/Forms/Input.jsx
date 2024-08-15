"use client";

const Input = ({ label, type = "text", text, placeholder, register }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-white mt-4">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2 bg-transparent border border-[#828282] rounded focus:border-[#3A57E8] focus:outline-none placeholder:text-[#919191]"
        placeholder={placeholder}
        {...register(text, { required: true })}
      />
    </div>
  );
};

export default Input;
