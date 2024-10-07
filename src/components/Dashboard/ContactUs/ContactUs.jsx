"use client";

import { PiAlarmFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import {
  useDeleteContactUsMutation,
  useGetAllContactUsQuery,
} from "@/redux/api/contactUsApi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";

const ContactUs = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllContactUsQuery({ page });

  const messages = data?.data?.data;
  const meta = data?.data?.meta;

  const [deleteContactUs] = useDeleteContactUsMutation();

  const handleDelete = async (message) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete the message with title "${message?.subject}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteContactUs(message?._id).unwrap();
        if (response?.success === true) {
          Swal.fire({
            title: "Deleted!",
            text: `The message "${message?.title}" has been successfully deleted.`,
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
      console.error("Delete message error:", error);
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

  const previousPage = () => {
    if (page > 1) setPage(page - 1);
  };
  const nextPage = () => {
    if (page < meta.total / meta.limit) setPage(page + 1);
  };

  return (
    <>
      <div className="h-[75px] md:px-10 mt-5 rounded-t-[26px] flex justify-between items-center px-3 text-[#ADB5BD] bg-black-muted">
        <div className="flex items-center gap-1 text-[#ADB5BD] text-base font-semibold">
          <PiAlarmFill />
          <span>All ContactUs Messages</span>
        </div>
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
                    <span>Name</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Email</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Subject</span>
                  </th>
                  <th className="py-4 px-4 text-start col-span-3">
                    <span>Message</span>
                  </th>
                  <th className="py-4 px-4 text-end rounded-r-xl">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {messages?.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      (index + 1) % 2 === 0
                        ? "text-[#ECECEC]"
                        : " bg-[#1C1C1C] text-[#ECECEC]"
                    } text-[13px] px-[10px]`}
                  >
                    <td className="py-3 rounded-l-xl px-4">{index + 1}</td>

                    <td className="py-3 px-4">{item?.name}</td>
                    <td className="py-3 px-4">{item?.email}</td>
                    <td className="py-3 px-4 lg:max-w-40">{item?.subject}</td>
                    <td className="py-3 px-4 lg:max-w-60">{item?.message}</td>
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
        {/* paginate  */}
        <div className="flex gap-4 justify-center items-center my-6 ">
          <button
            onClick={previousPage}
            className=" bg-white border hover:border-info-base rounded-sm p-2 hover:bg-info-base hover:text-white"
          >
            <BiLeftArrow />
          </button>
          <div className="text-white font-semibold">
            <p>
              Page {page} of {Math.ceil(meta.total / meta.limit)}
            </p>
          </div>
          <button
            onClick={nextPage}
            className=" bg-white border hover:border-info-base rounded-sm p-2 hover:bg-info-base hover:text-white"
          >
            <BiRightArrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
