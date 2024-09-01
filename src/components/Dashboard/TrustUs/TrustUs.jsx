"use client";

import { MdOutlineCloudUpload, MdOutlineModeEditOutline } from "react-icons/md";
import { PiAlarmFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
import { truncateCharacters } from "@/utils/descriptionTextCounter";
import { LiaEditSolid } from "react-icons/lia";

import Image from "next/image";
import {
  useDeleteTrustUsMutation,
  useGetAllTrustUsQuery,
} from "@/redux/api/trustUsApi";

const TrustUs = () => {
  const { data, error, isLoading } = useGetAllTrustUsQuery();
  const [deleteTrustUs] = useDeleteTrustUsMutation();

  if (error) {
    console.error("Error fetching hero descriptions:", error);
    return <p>Error fetching hero descriptions.</p>;
  }

  const handleDeleteTrustUs = async (data) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete the Trust Us "${data?.title}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteTrustUs(data?._id).unwrap();
        if (response?.success === true) {
          Swal.fire({
            title: "Deleted!",
            text: `The Trust Us "${data?.title}" has been successfully deleted.`,
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
      console.error("Delete Trust Us error:", error);
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
          <span>All Trust Us</span>
        </div>
        <Link
          href={"/dashboard/admin/home/trust-us/create"}
          className="flex items-center gap-1 cursor-pointer text-[#4D69FA] bg-[#F0EFFB] rounded-[50px] py-1 px-[10px]"
        >
          <MdOutlineCloudUpload />
          <span className="text-[13px] font-semibold">Add Trust Us</span>
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
                    <span>Image</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Title</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Description</span>
                  </th>

                  <th className="py-4 px-4 text-end rounded-r-xl">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item, index) => (
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
                        src={item?.image}
                        alt="image"
                      />
                    </td>
                    <td className="py-3 px-4">
                      {truncateCharacters(item?.title, 30)}
                    </td>

                    <td className="py-3 px-4">
                      {truncateCharacters(item?.description, 30)}
                    </td>
                    <td className="my-2 px-4 text-end rounded-r-xl">
                      <div className="flex items-center justify-end w-full gap-4">
                        <Link
                          href={`/dashboard/admin/home/trust-us/update/${item?._id}`}
                        >
                          <LiaEditSolid className="text-info-base text-2xl" />
                        </Link>
                        <button onClick={() => handleDeleteTrustUs(item)}>
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

export default TrustUs;
