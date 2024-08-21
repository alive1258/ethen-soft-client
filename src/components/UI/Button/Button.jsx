const Button = ({ content, className }) => {
  return (
    <>
      <button
        className={`text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-[13px] md:text-base font-normal px-4 py-[10px] rounded-lg  ${className}`}
        // className={`bg-primary-base text-[10px] md:text-base font-normal px-4 py-2 rounded text-white ${className}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
