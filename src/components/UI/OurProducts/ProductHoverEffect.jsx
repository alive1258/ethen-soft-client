import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProductHoverEffect = ({ product }) => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/10 to-[#000000]/100 rounded-lg p-6 transform duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-between">
        <div className="flex justify-end">
          <Link
            href={`${product?._id}`}
            className="bg-[#F4EDF7] size-11 rounded-full flex items-center justify-center cursor-pointer text-right"
          >
            <HiOutlineExternalLink className="size-5 text-primary-base" />
          </Link>
        </div>
        <div className="flex flex-col justify-end mt-auto">
          <div>
            <h1 className="text-white text-2xl font-semibold">
              {product?.type}
            </h1>
            <p className="text-white">{product?.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHoverEffect;
