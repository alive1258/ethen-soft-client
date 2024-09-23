import Marquee from "react-fast-marquee";
import SectionTitle from "../SectionTitle/SectionTitle";
import ClientBox from "./ClientBox";

const Clients = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/customers?isClient=true`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const data = await res.json();
    const ourClients = data?.data?.data;

    // demo clients
    // const clients = [
    //   {
    //     icon: "/assets/images/clients/Descript.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Lattice.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Lowes.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Descript.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Lattice.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Lowes.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Descript.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Lattice.png",
    //   },
    //   {
    //     icon: "/assets/images/clients/Lowes.png",
    //   },
    // ];
    return (
      <>
        <div
          className="pt-14 bg-no-repeat"
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
            description="Our Happy Clients Who Trust and Rely on Our Services for Web Solutions, Custom Software, and Mobile Applications"
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
              {ourClients?.map((client, index) => (
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
              {ourClients?.map((client, index) => (
                <ClientBox client={client} key={index} />
              ))}
            </Marquee>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Clients;
