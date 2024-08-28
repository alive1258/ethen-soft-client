import Image from "next/image";
import team from "../../../../public/assets/images/testimonials/avatar.png";

const TeamCard = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#0000004D] to-[#00000099] rounded-lg relative  z-20">
        <Image
          className="pt-2 duration-500"
          src={team}
          width={305}
          height={396}
          alt="team"
        />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-primary-muted text-2xl font-semibold border-none border-b-2 border-b-primary-base">
            Steve Johnson
          </h1>
          <p className="text-primary-muted text-sm">Chief Executive Officer </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
