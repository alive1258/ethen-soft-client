import DashboardNavbar from "@/components/Dashboard/DashboardShared/DashboardNavbar/DashboardNavbar";
import DashboardFooter from "@/components/Dashboard/DashboardShared/DashboardFooter/DashboardFooter";
import DashboardSidebar from "@/components/Dashboard/DashboardShared/DashboardSidebar/DashboardSidebar";

const layout = ({ children }) => {
  return (
    <>
      <div className="bg-black-solid">
        <div className=" flex items-start">
          <div className="w-72">
            <DashboardSidebar />
          </div>
          <div className={` w-full  min-w-[50%]`}>
            <DashboardNavbar />
            <div className="min-h-screen bg-black-solid px-10 pt-6">
              {children}
            </div>
            <DashboardFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
