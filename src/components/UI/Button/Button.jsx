const Button = ({ content, className }) => {
  return (
    <>
      <button
        className={`bg-primary-base text-[10px] md:text-base font-normal px-4 py-2 rounded text-white ${className}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
