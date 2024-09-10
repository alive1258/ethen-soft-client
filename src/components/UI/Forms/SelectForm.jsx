"use client";

const SelectForm = ({ label, text, register, errors, children }) => {
  return (
    <div className="flex flex-col gap-3 text-[#ADB5BD]">
      <label className="mt-4">{label}</label>
      <select
        className="w-full rounded-lg border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary bg-black-muted"
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
