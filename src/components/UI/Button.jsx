const Button = ({ content }) => {
  return (
    <>
      <button className="bg-primary-base font-normal px-4 py-2 rounded text-white">
        {content}
      </button>
    </>
  );
};

export default Button;
