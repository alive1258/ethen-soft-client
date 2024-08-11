import Image from "next/image";
import image1 from "../../../../../public/assets/images/works/1.png";
import image2 from "../../../../../public/assets/images/works/image 2.png";
import image3 from "../../../../../public/assets/images/works/3.png";
import image4 from "../../../../../public/assets/images/works/4.png";
import image5 from "../../../../../public/assets/images/works/5.png";
import image6 from "../../../../../public/assets/images/works/6.png";
import image7 from "../../../../../public/assets/images/works/7.png";
import image8 from "../../../../../public/assets/images/works/Group 8.png";
import image9 from "../../../../../public/assets/images/works/9.png";
import image10 from "../../../../../public/assets/images/works/10.png";
import image11 from "../../../../../public/assets/images/works/11.png";
import image12 from "../../../../../public/assets/images/works/12.png";
import Link from "next/link";
import WorkHoverEffect from "./WorkHoverEffect";

const AllWork = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          <div className="relative group col-span-2 row-span-2">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={image1}
              alt="work"
            />
            <WorkHoverEffect />
          </div>
          <div className="relative group col-span-1">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={image4}
              alt="work"
            />
            <WorkHoverEffect />
          </div>
          <div className="relative group col-span-1">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={image5}
              alt="work"
            />
            <WorkHoverEffect />
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          <div className="relative group col-span-1">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={image2}
              alt="work"
            />
            <WorkHoverEffect />
          </div>

          <div className="relative group col-span-1">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={image3}
              alt="work"
            />
            <WorkHoverEffect />
          </div>
          <div className="relative group col-span-2 row-span-2">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={image6}
              alt="work"
            />
            <WorkHoverEffect />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllWork;
