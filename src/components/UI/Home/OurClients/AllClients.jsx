import Image from "next/image";

const AllClients = ({ ourClient }) => {
  return (
    <>
      <Image
        src={ourClient?.image}
        width={114}
        height={49}
        alt="client image"
      />
    </>
  );
};

export default AllClients;
