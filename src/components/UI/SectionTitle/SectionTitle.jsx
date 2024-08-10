const SectionTitle = ({ subTitle, title, description, width = "270px" }) => {
  return (
    <>
      <div
        className={`max-w-[270px] relative flex justify-center items-center mx-auto`}
        style={{ maxWidth: width }}
      >
        <h2 className="section-heading relative text-primary-base">
          <span className="text-primary-base font-medium relative bg-white px-3 z-10">
            {subTitle}
          </span>
        </h2>
        <div className="flex absolute left-0 items-center">
          <div className="section-dot bg-primary-base mr-1"></div>
          <div className="section-dash bg-primary-base"></div>
        </div>
        <div className="flex absolute right-0 items-center">
          <div className="section-dash bg-primary-base"></div>
          <div className="section-dot bg-primary-base ml-1"></div>
        </div>
      </div>
      <h1 className="text-center text-primary-base text-[40px] font-semibold my-4">
        {title}
      </h1>
      <h4 className="max-w-[500px] mx-auto text-black-base text-xl text-center">
        {description}
      </h4>
    </>
  );
};

export default SectionTitle;
