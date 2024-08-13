import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionTitle from "../SectionTitle/SectionTitle";
import ClientBox from "./ClientBox";

const Clients = () => {
  const clients = [
    {
      icon: "/assets/images/clients/Descript.png",
    },
    {
      icon: "/assets/images/clients/Lattice.png",
    },
    {
      icon: "/assets/images/clients/Lowes.png",
    },
    {
      icon: "/assets/images/clients/Descript.png",
    },
    {
      icon: "/assets/images/clients/Lattice.png",
    },
    {
      icon: "/assets/images/clients/Lowes.png",
    },
    {
      icon: "/assets/images/clients/Descript.png",
    },
    {
      icon: "/assets/images/clients/Lattice.png",
    },
    {
      icon: "/assets/images/clients/Lowes.png",
    },
  ];
  return (
    <>
      <div
        className="container pt-14 bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/images/aboutUs/Frame.png), url(/assets/images/clients/1.png), url(/assets/images/clients/2.png), url(/assets/images/clients/3.png)",
          backgroundPosition:
            "left top, right -10px top, right -65px top, right -85px top",
          backgroundSize: "auto, 145px, 140px, 155px",
        }}
      >
        <SectionTitle
          subTitle="CLIENT"
          title="Our Clients"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore. "
        />
        <div className="py-12">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {clients?.map((client, index) => (
              <ClientBox client={client} key={index} />
            ))}
          </Marquee>

          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="right"
          >
            {clients?.map((client, index) => (
              <ClientBox client={client} key={index} />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Clients;
