import React from "react";
import OurTechnology from "./OurTechnology";

const Technology = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/technologies`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const ourTechnologies = await response.json();

    return (
      <>
        {ourTechnologies?.data?.map((ourTechnology) => (
          <OurTechnology
            key={ourTechnology?._id}
            ourTechnology={ourTechnology}
          />
        ))}
      </>
    );
  } catch (error) {}
};

export default Technology;
