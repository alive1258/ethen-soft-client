import Link from "next/link";
import Image from "next/image";
import WorkHoverEffect from "./WorkHoverEffect";
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

const AllWork = ({ ourWorkDetails }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(0, 1).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-2 row-span-2">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image1}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}

          {ourWorkDetails?.data?.slice(1, 2).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image2}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
          {ourWorkDetails?.data?.slice(2, 3).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image3}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(3, 4).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image4}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
          {ourWorkDetails?.data?.slice(4, 5).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image5}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
          {ourWorkDetails?.data?.slice(5, 6).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-2 row-span-2">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image6}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(6, 7).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-2 row-span-2">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image7}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}

          {ourWorkDetails?.data?.slice(7, 8).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image8}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
          {ourWorkDetails?.data?.slice(8, 9).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image9}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-5">
          {ourWorkDetails?.data?.slice(9, 10).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image10}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}

          {ourWorkDetails?.data?.slice(10, 11).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-1">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image11}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
          {ourWorkDetails?.data?.slice(11, 12).map((ourWorkDetail, index) => (
            <div key={index} className="relative group col-span-2 row-span-2">
              <Image
                className="rounded-lg object-cover w-full h-full"
                src={image12}
                alt="work"
              />

              <WorkHoverEffect ourWorkDetail={ourWorkDetail} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllWork;
