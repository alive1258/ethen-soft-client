import Image from "next/image";

import image2 from "../../../../public/assets/images/works/image 2.png";
import image5 from "../../../../public/assets/images/works/4.png";
import image3 from "../../../../public/assets/images/works/5.png";
import image4 from "../../../../public/assets/images/works/7.png";
import image6 from "../../../../public/assets/images/works/9.png";
import blend from "../../../../public/assets/images/pb.png";
import Button from "@/components/UI/Button/Button";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import WorkHoverEffect from "@/components/UI/Home/OurWorks/WorkHoverEffect";
import ProductsTab from "./ProductsTab";

const Products = () => {
  return (
    <>
      <div className="bg-[#F1F1F1] bg-opacity-[77%] pt-14">
        <div className="container bg-no-repeat pb-14 bg-none md:bg-[url('/assets/images/works/Vector.png'),url('/assets/images/bag.png'),url('/assets/images/round.png')] md:bg-[calc(100%_-_100px)_top,calc(60%_+_115px)_100px,right_bottom]">
          {/* section title and description  */}
          <SectionTitle
            subTitle="PRODUCTS"
            title="Our Products"
            width="250px"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
          />
          {/* tab  */}
          <ProductsTab />

          {/* all product  */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image4}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image2}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image3}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image5}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image3}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image5}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image3}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image6}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
            <div className="relative group">
              <Image
                className="rounded-lg object-cover w-full h-[294px]"
                src={image4}
                alt="product"
              />
              <WorkHoverEffect />
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Button content="View More" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
