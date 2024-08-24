import Image from "next/image";
import icon from "../../../../../public/assets/images/trust.png";

const TrustCard = ({ trustUsDetail }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-2 py-4">
        <Image src={icon} width={88} height={88} alt="icon" />
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-black-base text-2xl font-semibold">
            {trustUsDetail?.title}
          </h1>
          <p className="text-black-base pr-5">{trustUsDetail?.description}</p>
        </div>
      </div>
    </>
  );
};

export default TrustCard;
