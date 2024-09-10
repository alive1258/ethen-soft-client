import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";

const ProductServiceCard = ({ logo, title, description }) => {
  return (
    <>
      <div className="hover:bg-primary-base hover:scale-105 group duration-300 ease-in-out cursor-pointer  transition-all p-4 rounded-lg border border-primary-base flex flex-col items-center text-center gap-4 bg-white  z-20">
        <Image src={logo} width={32} height={32} alt="category_image" />
        <h6 className="font-semibold text-[#0D0F12] group-hover:text-white duration-200">
          {title}
        </h6>
        <p className="text-sm text-[#0D0F12s] font-normal group-hover:text-white duration-200">
          {description}
        </p>
      </div>
    </>
  );
};

export default ProductServiceCard;
