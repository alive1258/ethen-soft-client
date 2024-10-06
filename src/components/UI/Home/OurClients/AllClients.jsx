import Image from "next/image";
import { FaUser } from "react-icons/fa";

const AllClients = ({ ourClient }) => {
  return (
    <>
      {ourClient?.profileImage ? (
        <Image
          src={ourClient?.profileImage}
          width={114}
          height={49}
          alt="client image"
        />
      ) : (
        <FaUser />
      )}
    </>
  );
};

export default AllClients;
