import Image from "next/image";
import React from "react";

const WorkDetails = ({ ourWork }) => {
  return (
    <div>
      <div className="bg-pink-400 h-[350px]"></div>

      <div className="container my-12">
        {/* Blog Image Section */}
        <div className="">
          <Image
            className="h-[400px] w-full"
            src={ourWork?.image}
            width={1280}
            height={600}
            alt="blog details"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-20">
          <div>{ourWork?.title}</div>
          <div dangerouslySetInnerHTML={{ __html: ourWork?.description }}></div>
        </div>

        {/* Related Blogs Section */}
      </div>
    </div>
  );
};

export default WorkDetails;
