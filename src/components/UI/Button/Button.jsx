const Button = ({ content, className }) => {
  return (
    <>
      <button
        className={`bg-primary-base font-normal px-4 py-2 rounded text-white ${className}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
