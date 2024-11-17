import DashboardFooter from "@/components/Dashboard/DashboardShared/DashboardFooter/DashboardFooter";
import DashboardNavbar from "@/components/Dashboard/DashboardShared/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "@/components/Dashboard/DashboardShared/DashboardSidebar/DashboardSidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="bg-black-solid">
        <div className="flex items-start">
          <div className="w-72 ">
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
    </div>
  );
};

export default layout;
