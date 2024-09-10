import BannerDetails from "./BannerDetails";

const Banner = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-heros`, {
      next: {
        revalidate: 30,
      },
    });
    const aboutHeros = await res.json();
    return (
      <>
        <div
          className="h-[80vh] container bg-no-repeat"
          style={{
            backgroundImage:
              "url(/assets/images/aboutUs/bg.png), url(/assets/images/aboutUs/Frame.png), url(/assets/images/works/Vecto.png)",
            backgroundPosition:
              "right top,  80px top,  right bottom, right calc(100% - 100px) top",
          }}
        >
          <div className="">
            {aboutHeros?.data?.slice(0, 1).map((aboutHero) => (
              <BannerDetails key={aboutHero?._id} aboutHero={aboutHero} />
            ))}
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Banner;
