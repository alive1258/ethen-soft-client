import { IoSettingsOutline } from "react-icons/io5";

const ProductServiceCard = () => {
  return (
    <>
      <div className="hover:bg-primary-base hover:scale-105 group duration-300 ease-in-out cursor-pointer  transition-all p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white  z-20">
        <IoSettingsOutline className="size-[38px] text-primary-base group-hover:text-white duration-200" />
        <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
          UI/UX Design
        </h6>
        <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration{" "}
        </p>
      </div>
    </>
  );
};

export default ProductServiceCard;
