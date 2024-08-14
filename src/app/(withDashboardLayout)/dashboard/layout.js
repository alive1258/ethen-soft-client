const layout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className=" flex items-start">
          <div className="w-72">{/* <Sidebar /> */}</div>
          <div className={` w-full  min-w-[50%] p-0 m-0   pl-2`}>
            {/* <TopNavbar /> */}
            <div className=" pt-2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
