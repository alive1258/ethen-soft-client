"use client";

import { MdOutlineCloudUpload } from "react-icons/md";
import { PiAlarmFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
import { LiaEditSolid } from "react-icons/lia";
import {
  useDeleteServiceFAQMutation,
  useGetAllServiceFAQsQuery,
} from "@/redux/api/serviceFAQApi";

const ServiceFAQ = () => {
  // fetched all faqs
  const { data, error, isLoading } = useGetAllServiceFAQsQuery();

  // define the faqs and meta
  const faqs = data?.data?.data;
  const meta = data?.data?.meta;

  // for delete faq
  const [deleteServiceFAQ] = useDeleteServiceFAQMutation();

  // delete faq function
  const handleDelete = async (faq) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete the FAQ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteServiceFAQ(faq?._id).unwrap();
        if (response?.success === true) {
          Swal.fire({
            title: "Deleted!",
            text: `The FAQ "${faq?.title}" has been successfully deleted.`,
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
      console.error("Delete FAQ error:", error);
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
          <span>All Service FAQs</span>
        </div>
        <Link
          href={"/dashboard/admin/home/service-faq/create"}
          className="flex items-center gap-1 cursor-pointer text-[#4D69FA] bg-[#F0EFFB] rounded-[50px] py-1 px-[10px]"
        >
          <MdOutlineCloudUpload />
          <span className="text-[13px] font-semibold">Create Service FAQ</span>
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
                    <span>Question</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Answer</span>
                  </th>
                  <th className="py-4 px-4 text-start">
                    <span>Service</span>
                  </th>
                  <th className="py-4 px-4 text-end rounded-r-xl">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {faqs?.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      (index + 1) % 2 === 0
                        ? "text-[#ECECEC]"
                        : " bg-[#1C1C1C] text-[#ECECEC]"
                    } text-[13px] px-[10px]`}
                  >
                    <td className="py-3 rounded-l-xl px-4">{index + 1}</td>
                    <td className="py-3 px-4">{item?.question}</td>
                    <td className="py-3 px-4">{item?.answer}</td>
                    <td className="py-3 px-4">{item?.service?.title}</td>
                    <td className="my-2 px-4 text-end rounded-r-xl">
                      <div className="flex items-center justify-end w-full gap-4">
                        <Link
                          href={`/dashboard/admin/home/service-faq/update/${item?._id}`}
                        >
                          <LiaEditSolid className="text-info-base text-2xl" />
                        </Link>
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

export default ServiceFAQ;
