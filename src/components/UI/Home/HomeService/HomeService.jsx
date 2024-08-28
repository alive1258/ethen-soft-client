import SectionTitle from "../../SectionTitle/SectionTitle";

import HomeServiceCard from "./HomeServiceCard";

const HomeService = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-services`, {
      next: {
        revalidate: 30,
      },
    });
    const ourServices = await res.json();

    const services = [
      {
        id: 1,
        title: "Brand Strategy and Architecture",
        description:
          "We are your go-to place if you want a compelling brand identity. Whether it's crafting We are your go-to place if you want a compelling brand identity.",
        icon: "/../../../../../public/assets/images/services.png",
        variant: "B389C9",
      },
      {
        id: 2,
        title: "Advertising Content Development",
        description:
          "They say content is king. Well our content is not just catchy but downright magnet. They say content is king. Well our content is not just catchy but downright magnetic!",
        icon: "/public/assets/images/services.png",
        variant: "62C288",
      },
      {
        id: 3,
        title: "Web & Search Experience",
        description:
          "Conquering the web for you is something we specialize in. With our Web, UX/UI, and Conquering the web for you is something we specialize in. With our Web, UX/UI, and...",
        icon: "/public/assets/images/services.png",
        variant: "E37083",
      },
      {
        id: 4,
        title: "Brand Strategy and Architecture",
        description:
          "We are your go-to place if you want a compelling brand identity. Whether it's crafting We are your go-to place if you want a compelling brand identity.",
        icon: "/public/assets/images/services.png",
        variant: "E9B449",
      },
      {
        id: 5,
        title: "Advertising Content Development",
        description:
          "They say content is king. Well our content is not just catchy but downright magnet. They say content is king. Well our content is not just catchy but downright magnetic!",
        icon: "/public/assets/images/services.png",
        variant: "76C3DC",
      },
      {
        id: 6,
        title: "Web & Search Experience",
        description:
          "Conquering the web for you is something we specialize in. With our Web, UX/UI, and Conquering the web for you is something we specialize in. With our Web, UX/UI, and...",
        icon: "/public/assets/images/services.png",
        variant: "31BAAE",
      },
      {
        id: 7,
        title: "Brand Strategy and Architecture",
        description:
          "We are your go-to place if you want a compelling brand identity. Whether it's crafting We are your go-to place if you want a compelling brand identity.",
        icon: "/public/assets/images/services.png",
        variant: "E9B449",
      },
      {
        id: 8,
        title: "Advertising Content Development",
        description:
          "They say content is king. Well our content is not just catchy but downright magnet. They say content is king. Well our content is not just catchy but downright magnetic!",
        icon: "/public/assets/images/services.png",
        variant: "76C3DC",
      },
      {
        id: 9,
        title: "Web & Search Experience",
        description:
          "Conquering the web for you is something we specialize in. With our Web, UX/UI, and Conquering the web for you is something we specialize in. With our Web, UX/UI, and...",
        icon: "/public/assets/images/services.png",
        variant: "E37083",
      },
      {
        id: 10,
        title: "Brand Strategy and Architecture",
        description:
          "We are your go-to place if you want a compelling brand identity. Whether it's crafting We are your go-to place if you want a compelling brand identity.",
        icon: "/public/assets/images/services.png",
        variant: "E9B449",
      },
      {
        id: 11,
        title: "Advertising Content Development",
        description:
          "They say content is king. Well our content is not just catchy but downright magnet. They say content is king. Well our content is not just catchy but downright magnetic!",
        icon: "/public/assets/images/services.png",
        variant: "76C3DC",
      },
      {
        id: 12,
        title: "Web & Search Experience",
        description:
          "Conquering the web for you is something we specialize in. With our Web, UX/UI, and Conquering the web for you is something we specialize in. With our Web, UX/UI, and...",
        icon: "/public/assets/images/services.png",
        variant: "31BAAE",
      },
    ];
    return (
      <>
        <div className="max-w-[1440px] mx-auto bg-no-repeat bg-left-bottom bg-none md:bg-[url('/assets/images/bg-shape.png')]">
          <div className="container mt-10 bg-no-repeat bg-none md:bg-[url('/assets/images/icons.png')]">
            <SectionTitle
              subTitle="SERVICES"
              title="Our Services"
              description="We take digital experience to the next level"
            />
            <div className="my-10 grid grid-cols-2 md:col-end-3 lg:grid-cols-4 gap-x-5 gap-y-6">
              {ourServices?.data?.map((service) => (
                <HomeServiceCard service={service} key={service?._id} />
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

export default HomeService;
