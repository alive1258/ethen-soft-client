import Image from "next/image";

const ClientBox = ({ client }) => {
  return (
    <>
      <div className="size-[200px] mr-6 my-2.5 bg-white rounded-lg shadow-custom-box-shadow border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
        <Image src={client?.icon} width={145} height={48} alt="client icon" />
      </div>
    </>
  );
};

export default ClientBox;
