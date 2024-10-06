"use client";

const Textarea = ({
  label,
  text,
  placeholder = "Write your text here ",
  register,
  errors,
}) => {
  return (
    <>
      <div className=" flex flex-col gap-3">
        <label className="text-[#ADB5BD] mt-4"> {label} </label>
        <textarea
          className="w-full min-h-32 rounded-md border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-info-base active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input text-black dark:focus:border-primary"
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
