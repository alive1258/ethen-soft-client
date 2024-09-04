"use client";

const Textarea = ({
  label,
  text,
  placeholder = "Write your message here ",
  register,
  errors,
}) => {
  return (
    <>
      <div className=" flex flex-col gap-3">
        <label className="text-white mt-4"> {label} </label>
        <textarea
          className="h-[170px] px-4 py-2 w-full bg-transparent border text-white border-[#828282] rounded focus:border-[#3A57E8] focus:outline-none placeholder:text-[#919191]"
          placeholder={placeholder}
          {...register(text, { required: `${label} is required` })}
        />
        {errors?.[text] && (
          <span className="text-red-600 text-sm">{errors[text]?.message}</span>
        )}
      </div>
    </>
  );
};

export default Textarea;
