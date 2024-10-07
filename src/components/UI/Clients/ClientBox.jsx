import Image from "next/image";

const ClientBox = () => {
  return (
    <div className="size-[200px] p-2 mr-6 my-2.5 bg-white rounded-lg shadow-custom-box-shadow border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
      <Image
        className="flex w-full h-full"
        src={client?.profileImage}
        width={200}
        height={200}
        alt="client_image"
      />

      <div className="size-[200px] mr-6 my-2.5 bg-white rounded-lg shadow-custom-box-shadow border border-transparent hover:border-primary-base cursor-pointer duration-300 flex justify-center items-center">
        <Image src={client?.image} width={145} height={48} alt="client icon" />
      </div>
    </div>
  );
};

export default ClientBox;
