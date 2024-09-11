"use client";

import { MdOutlineCloudUpload, MdOutlineModeEditOutline } from "react-icons/md";
import { PiAlarmFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";

import { truncateCharacters } from "@/utils/descriptionTextCounter";
import { LiaEditSolid } from "react-icons/lia";
import {
  useDeleteOurServiceMutation,
  useGetAllOurServicesQuery,
} from "@/redux/api/ourServiceApi";
import Image from "next/image";

const OurServices = () => {
  // fetched all services
  const { data, error, isLoading } = useGetAllOurServicesQuery();
  // user formate name for better understand
  const services = data?.data?.data;
  const meta = data?.data?.meta;
  const [deleteOurServices] = useDeleteOurServiceMutation();
  const handleDeleteOurServices = async (services) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete the Our Services "${services?.title}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteOurServices(services?._id).unwrap();
        if (response?.success === true) {
          Swal.fire({
            title: "Deleted!",
            text: `The Our Services "${services?.title}" has been successfully deleted.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `${response?.message}`,
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.error("Delete Our Services error:", error);
      Swal.fire({
        title: "Error!",
        text: `An error occurred: ${error.data || error.message}`,
        icon: "error",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[85vh] w-full">
        <h1>Loading...........</h1>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="h-[75px] md:px-10 mt-5 rounded-t-[26px] flex justify-between items-center px-3 text-[#ADB5BD] bg-black-muted">
        <div className="flex items-center gap-1 text-[#ADB5BD] text-base font-semibold">
          <PiAlarmFill />
          <span>All Our Services</span>
        </div>
        <Link
          href={"/dashboard/admin/home/our-services/create"}
          className="flex items-center gap-1 cursor-pointer text-[#4D69FA] bg-[#F0EFFB] rounded-[50px] py-1 px-[10px]"
        >
          <MdOutlineCloudUpload />
          <span className="text-[13px] font-semibold">Add Our Services</span>
        </Link>
      </div>

      <div className="md:px-10 px-4 mt-3">
        <div className="mx-auto w-full">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-black-muted text-[#ADB5BD] border-gray-200 mb-10 rounded-lg">
              <thead>
                <tr className="bg-black-muted text-start text-[13px] overflow-hidden">
                  <th className="py-4 px-4 text-start rounded-l-xl">
                    <span>ID</span>
                  </th>{" "}
                  <th className="py-4 px-4 text-start">
                    <span>Logo</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Title</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Sub Description</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Meta key</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Color Code</span>
                  </th>
                  <th className="py-4 px-4 text-end rounded-r-xl">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {services?.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      (index + 1) % 2 === 0
                        ? "text-[#ECECEC]"
                        : " bg-[#1C1C1C] text-[#ECECEC]"
                    } text-[13px] px-[10px]`}
                  >
                    <td className="py-3 rounded-l-xl px-4">{index + 1}</td>
                    <td className="py-3 px-4">
                      <Image
                        width={14}
                        height={14}
                        className="h-12 w-12 py-1 bg-[#FFF3D4]"
                        src={item?.logo}
                        alt="image"
                      />
                    </td>
                    <td className="py-3 px-4">{item?.title}</td>
                    <td className="py-3 px-4">
                      {truncateCharacters(item?.subDescription, 20)}
                    </td>
                    <td className="py-3 px-4">
                      {truncateCharacters(item?.metaKey, 20)}
                    </td>
                    <td className="py-3 px-4">{item?.colorCode}</td>
                    <td className="my-2 px-4 text-end rounded-r-xl">
                      <div className="flex items-center justify-end w-full gap-4">
                        <Link
                          href={`/dashboard/admin/home/our-services/update/${item?.slug}`}
                        >
                          <LiaEditSolid className="text-info-base text-2xl" />
                        </Link>
                        <button onClick={() => handleDeleteOurServices(item)}>
                          <MdDelete className="text-danger-base text-2xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
