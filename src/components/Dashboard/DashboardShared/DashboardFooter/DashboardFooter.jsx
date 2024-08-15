const DashboardFooter = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full bg-black-muted px-6 py-4 flex items-center justify-between text-[#ECECEC]">
        <div>{year} &copy; EthenSoft.</div>
        <p>Design & Develop by EthenSoft</p>
      </div>
    </>
  );
};

export default DashboardFooter;
