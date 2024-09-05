"use client";

const SelectForm = ({ label, text, register, errors, children }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-white mt-4">{label}</label>
      <select
        className="bg-black-muted px-4 py-2 text-white border border-[#828282] rounded focus:border-[#3A57E8] focus:outline-none placeholder:text-[#919191]"
        {...register(text, {
          required: `${label} is required`,
        })}
      >
        {children}
      </select>
      {errors?.[text] && (
        <span className="text-red-600 text-sm">{errors[text]?.message}</span>
      )}
    </div>
  );
};

export default SelectForm;
