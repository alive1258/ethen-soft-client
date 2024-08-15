import DashboardNavbar from "@/components/Dashboard/DashboardShared/DashboardNavbar/DashboardNavbar";
import DashboardFooter from "@/components/Dashboard/DashboardShared/DashboardFooter/DashboardFooter";
import DashboardSidebar from "@/components/Dashboard/DashboardShared/DashboardSidebar/DashboardSidebar";

const layout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className=" flex items-start">
          <div className="w-72">
            <DashboardSidebar />
          </div>
          <div className={` w-full  min-w-[50%] p-0 m-0   pl-`}>
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
