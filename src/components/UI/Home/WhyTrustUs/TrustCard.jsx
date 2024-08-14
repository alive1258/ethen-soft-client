import Image from "next/image";
import icon from "../../../../../public/assets/images/trust.png";

const TrustCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 px-2 py-4">
        <div className="flex justify-center">
          <Image src={icon} width={88} height={88} alt="icon" />
        </div>
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-black-base text-2xl font-semibold">
            Protect your Business
          </h1>
          <p className="text-black-base pr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore
          </p>
        </div>
      </div>
    </>
  );
};

export default TrustCard;
