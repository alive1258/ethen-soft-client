"use client";

import { MdOutlineCloudUpload } from "react-icons/md";
import { PiAlarmFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";

import { truncateCharacters } from "@/utils/descriptionTextCounter";
import { LiaEditSolid } from "react-icons/lia";

import Image from "next/image";
import {
  useDeleteOurProductsMutation,
  useGetAllOurProductsQuery,
} from "@/redux/api/ourProductApi";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { filterBySearchQuery } from "@/utils/filterBySearchQuery";

const OurProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // fetched all products
  const { data, error, isLoading } = useGetAllOurProductsQuery();
  // user formate name for better understand

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filters companies based on the search query
  const filteredData = filterBySearchQuery(data?.data, searchQuery);

  const [deleteOurProducts] = useDeleteOurProductsMutation();

  const handleDeleteOurProducts = async (data) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: `Are you sure you want to delete the Our products "${data?.title}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await deleteOurProducts(data?._id).unwrap();
        if (response?.success === true) {
          Swal.fire({
            title: "Deleted!",
            text: `The Our products "${data?.title}" has been successfully deleted.`,
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
      console.error("Delete Our products error:", error);
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
      <div className="md:px-6 px-4 py-7 mt-6 bg-primary-base mx-6 rounded-lg">
        {/* Table header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">All Our products</h1>
          <div className="flex items-center space-x-4">
            {/* Search input with icon */}
            <div className="relative w-full max-w-xs">
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for..."
                className="bg-primary-base border border-gray-700 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
            </div>
            {/* Link to create a new company */}
            <Link href="/dashboard/admin/our-products/create">
              <button className="btn w-60">Create Our products</button>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full pt-6">
          <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-primary-base text-[#ADB5BD] border-gray-200 mb-10 rounded-lg">
              <thead>
                <tr className="bg-primary-base text-start text-[13px] ">
                  <th className="py-4 px-4 text-start rounded-l-xl">ID</th>
                  <th className="py-4 px-4 text-start rounded-l-xl">Image</th>
                  <th className="py-4 px-4 text-start">title Name</th>
                  <th className="py-4 px-4 text-start">color_code</th>

                  <th className="py-4 px-4 text-end rounded-r-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData?.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`${
                        (index + 1) % 2 === 0
                          ? "text-[#ECECEC]"
                          : "bg-[#1C1C1C] text-[#ECECEC]"
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
                      <td className="py-3 px-4 ">
                        <p>{truncateCharacters(item?.title, 30)}</p>
                      </td>
                      <td className="py-3 px-4 ">
                        <p>
                          {truncateCharacters(
                            item?.color_code?.name || "No Company Name",
                            30
                          )}
                        </p>
                      </td>

                      <td className="my-2 px-4 text-end rounded-r-xl">
                        <div className="flex items-center justify-end w-full gap-4">
                          <Link
                            href={`/dashboard/admin/our-products/update/${item?.slug}`}
                          >
                            <LiaEditSolid className="text-info-base text-2xl" />
                          </Link>
                          <button onClick={() => handleDeleteAttribute(item)}>
                            <MdDelete className="text-danger-base text-2xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  // Display message when no companies match the search criteria
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-6 text-red-600 text-2xl font-bold"
                    >
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
