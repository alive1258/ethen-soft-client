"use client";
import DashboardNavbar from "@/components/Dashboard/DashboardShared/DashboardNavbar/DashboardNavbar";
import DashboardFooter from "@/components/Dashboard/DashboardShared/DashboardFooter/DashboardFooter";
import DashboardSidebar from "@/components/Dashboard/DashboardShared/DashboardSidebar/DashboardSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Layout = ({ children }) => {
  const { sidebarMobileStatus, sidebarToggleStatus } = useSelector(
    (state) => state.sidebarToggle
  );

  const sidebarRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dispatch(sidebarMobileToggle());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      <div className={`bg-[#0a1520] text-white  `}>
        <div className="flex items-start lg:gap-1  duration-300">
          <div>
            <div
              className={`${
                sidebarToggleStatus
                  ? "-translate-x-full  duration-500  ease-in-out"
                  : " duration-500  ease-in-out"
              }`}
            >
              {!sidebarToggleStatus && (
                <div className="hidden lg:block ">
                  <DashboardSidebar />
                </div>
              )}
            </div>

            {sidebarMobileStatus && (
              <div className=" lg:hidden  top-16 fixed bg-[#0000006b]  h-full overflow-y-auto w-full z-[999]  ">
                <DashboardSidebar
                  sidebarMobileStatus={sidebarMobileStatus}
                  sidebarRef={sidebarRef}
                />
              </div>
            )}
          </div>
          <div className="w-full min-h-screen flex flex-col">
            <DashboardNavbar />
            <div className="flex-grow mb-6">{children}</div>
            <DashboardFooter className="bottom-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
