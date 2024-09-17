import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

const TeamCard = ({ team }) => {
  return (
    <>
      <div className="rounded-lg shadow-lg group  hover:scale-105 duration-300 ease-in-out transition-all ">
        <Image
          className="md:h-[330px] rounded-t-lg w-full duration-500"
          src={team?.image}
          width={305}
          height={350}
          alt="team"
        />
        <div className="p-3 w-full">
          <h1 className="text-2xl text-center font-semibold">{team?.name}</h1>

          <p className="text-lg text-center font-medium">{team?.position}</p>
          <div className="text-sm text-center font-semibold opacity-0 group-hover:opacity-100 duration-300 flex space-x-2 items-center justify-center">
            <a href={`mailto:${team?.email}`} className="flex items-center ">
              <MdMarkEmailUnread className=" social-icons hover:bg-[#c07fe0] text-[#c07fe0]" />
            </a>
            <a
              target="blank"
              href={`${team?.linked_in_url}`}
              className="flex items-center "
            >
              <IoLogoLinkedin className="social-icons hover:bg-[#0A66C2] text-[#0A66C2]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
