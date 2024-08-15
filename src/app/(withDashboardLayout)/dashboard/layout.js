import DashboardNavbar from "@/components/Dashboard/DashboardShared/DashboardNavbar/DashboardNavbar";
import DashboardFooter from "@/components/Dashboard/DashboardShared/DashboardFooter/DashboardFooter";

const layout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className=" flex items-start">
          <div className="w-72">{/* <Sidebar /> */}</div>
          <div className={` w-full  min-w-[50%] p-0 m-0   pl-2`}>
            <DashboardNavbar />
            <div className="h-screen bg-black-solid pt-2">{children}</div>
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
