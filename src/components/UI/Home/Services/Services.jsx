import SectionTitle from "../../SectionTitle/SectionTitle";

const Services = () => {
  const services = [
    {
      id: 1,
      ttile: "Brand Strategy and Architecture",
      description:
        "We are your go-to place if you want a compelling brand identity. Whether it's crafting We are your go-to place if you want a compelling brand identity.",
      image: "/public/assets/images/services.png",
      variant: "B389C9",
    },
    {
      id: 2,
      ttile: "Advertising Content Development",
      description:
        "They say content is king. Well our content is not just catchy but downright magnet. They say content is king. Well our content is not just catchy but downright magnetic!",
      image: "/public/assets/images/services.png",
      variant: "62C288",
    },
    {
      id: 3,
      ttile: "Web & Search Experience",
      description:
        "Conquering the web for you is something we specialize in. With our Web, UX/UI, and Conquering the web for you is something we specialize in. With our Web, UX/UI, and...",
      image: "/public/assets/images/services.png",
      variant: "E37083",
    },
    {
      id: 4,
      ttile: "Brand Strategy and Architecture",
      description:
        "We are your go-to place if you want a compelling brand identity. Whether it's crafting We are your go-to place if you want a compelling brand identity.",
      image: "/public/assets/images/services.png",
      variant: "E9B449",
    },
    {
      id: 5,
      ttile: "Advertising Content Development",
      description:
        "They say content is king. Well our content is not just catchy but downright magnet. They say content is king. Well our content is not just catchy but downright magnetic!",
      image: "/public/assets/images/services.png",
      variant: "76C3DC",
    },
    {
      id: 6,
      ttile: "Web & Search Experience",
      description:
        "Conquering the web for you is something we specialize in. With our Web, UX/UI, and Conquering the web for you is something we specialize in. With our Web, UX/UI, and...",
      image: "/public/assets/images/services.png",
      variant: "31BAAE",
    },
  ];
  return (
    <>
      <div className="mt-32"></div>
      <SectionTitle
        subTitle="SERVICES"
        title="Our Services"
        description="We take digital experience to the next level"
      />
      <div className="grid grid-cols-1 md:col-end-3 lg:grid-cols-4"></div>
    </>
  );
};

export default Services;
