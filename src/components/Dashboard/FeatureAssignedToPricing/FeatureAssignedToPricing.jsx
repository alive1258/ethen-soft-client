"use client";
import { MdOutlineCloudUpload } from "react-icons/md";
import { PiAlarmFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
import { LiaEditSolid } from "react-icons/lia";

import {
  useDeleteFeatureAssignedToPricingMutation,
  useGetAllFeatureAssignedToPricingQuery,
} from "@/redux/api/featureAssignedToPricingApi";

const FeatureAssignedToPricing = () => {
  // fetched all FeatureAssignedToPricing
  const { data, error, isLoading } = useGetAllFeatureAssignedToPricingQuery();

  // define the assignedFeature and meta
  const pricingFeatures = data?.data?.data;
  // const meta = data?.data?.meta;

  // for deleting assignedFeature
  const [deleteFeatureAssignedToPricing] =
    useDeleteFeatureAssignedToPricingMutation();

  // delete pricing feature function
  const handleDelete = async (data) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteFeatureAssignedToPricing(
          data?._id
        ).unwrap();
        if (response?.success) {
          Swal.fire({
            title: "Deleted!",
            text: `The assigned feature "${data?.title}" has been successfully deleted.`,
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
      console.error("Delete pricing feature error:", error);
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
          <span>All Assigned Features</span>
        </div>
        <Link
          href={"/dashboard/admin/home/feature-assigned-pricing/create"}
          className="flex items-center gap-1 cursor-pointer text-[#4D69FA] bg-[#F0EFFB] rounded-[50px] py-1 px-[10px]"
        >
          <MdOutlineCloudUpload />
          <span className="text-[13px] font-semibold">
            Add Assign Feature To Pricing
          </span>
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
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Pricing Title</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Pricing Feature</span>
                  </th>
                  <th className="py-4 px-4 text-end rounded-r-xl">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingFeatures?.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      (index + 1) % 2 === 0
                        ? "text-[#ECECEC]"
                        : " bg-[#1C1C1C] text-[#ECECEC]"
                    } text-[13px] px-[10px]`}
                  >
                    <td className="py-3 rounded-l-xl px-4">{index + 1}</td>
                    <td className="py-3 px-4">{item?.pricing?.title}</td>
                    <td className="py-3 px-4">{item?.pricingFeature?.name}</td>
                    <td className="my-2 px-4 text-end rounded-r-xl">
                      <div className="flex items-center justify-end w-full gap-4">
                        <button onClick={() => handleDelete(item)}>
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

export default FeatureAssignedToPricing;
