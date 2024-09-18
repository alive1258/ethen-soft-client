import WorkDetails from "@/components/UI/WorksDetails/WorkDetails";
import React from "react";

const page = async ({ params }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/our-works/${params?.slug}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const ourWorks = await res.json();

    return (
      <>
        <WorkDetails ourWork={ourWorks?.data} />
      </>
    );
  } catch {
    return null;
  }
};

export default page;
