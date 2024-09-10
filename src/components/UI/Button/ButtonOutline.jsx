import Link from "next/link";

const ButtonOutline = ({ content, url = "/" }) => {
  return (
    <>
      <div className="text-center">
        <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[16px] font-medium  rounded-lg group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
            <Link href={url}>{content}</Link>
          </span>
        </button>
      </div>
    </>
  );
};

export default ButtonOutline;
