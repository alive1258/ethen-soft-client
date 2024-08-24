import HeroDescription from "./HeroDescription";
import OurTechnology from "./OurTechnology";

const Hero = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/heros`, {
      next: {
        revalidate: 30,
      },
    });
    const heroDescriptions = await res.json();

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
        <div className="scene md:pt-0 pt-24 bg-cover bg-no-repeat h-screen md:flex items-center">
          <div className="container relative md:flex items-center justify-between md:gap-40">
            <div>
              <div className="moon md:block hidden"></div>
              {heroDescriptions?.data?.slice(0, 1)?.map((heroDescription) => (
                <HeroDescription
                  key={heroDescription?._id}
                  heroDescription={heroDescription}
                />
              ))}
            </div>

            <div className="md:pt-0 pt-20 md:pl-0 pl-3">
              {ourTechnologies?.data?.slice(0, 1)?.map((ourTechnology) => (
                <OurTechnology
                  key={ourTechnology?._id}
                  ourTechnology={ourTechnology}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Hero;
