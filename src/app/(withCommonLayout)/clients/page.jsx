import Image from "next/image";
import blendImage from "../../../../public/assets/images/Gradient2.png";
import Clients from "@/components/UI/Clients/Clients";
import Testimonials from "@/components/UI/Home/Testimonials/Testimonials";

const ClientPage = () => {
  return (
    <>
      {/* client banner  */}
      <div className="bg-blue-400 md:h-[350px] h-[200px]"></div>
      <Clients />
      <Testimonials />
    </>
  );
};

export default ClientPage;
