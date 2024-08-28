import AboutDetails from "./AboutDetails";

const About = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-about`, {
      next: {
        revalidate: 30,
      },
    });
    const homeAboutDetails = await res.json();

    return (
      <>
        <div
          className="bg-[#f4edf7]  py-2 bg-no-repeat bg-bottom"
          // className="bg-[#f4edf7]  py-2 bg-no-repeat bg-bottom"
          style={{
            backgroundImage: "url(/assets/images/about/Ellipse-18.pn)",
          }}
        >
          <div
            className="container py-12 flex flex-col-reverse md:flex-row items-center bg-no-repeat gap-5"
            style={{
              backgroundImage: "url(/assets/images/about/Ellipse.png)",
            }}
          >
            {homeAboutDetails?.data?.slice(0, 1)?.map((homeAboutDetail) => (
              <AboutDetails
                key={homeAboutDetail?._id}
                homeAboutDetail={homeAboutDetail}
              />
            ))}
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default About;
