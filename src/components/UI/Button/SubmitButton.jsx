const SubmitButton = ({ text }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full bg-btn text-[#fff] font-medium py-2 px-4 mt-6 rounded"
      >
        {text}
      </button>
    </>
  );
};

export default SubmitButton;
