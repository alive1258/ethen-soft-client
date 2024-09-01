import UpdateProfessionalService from "@/components/Dashboard/ProfessionalService/UpdateProfessionalService";

const page = ({ params }) => {
  return (
    <>
      <UpdateProfessionalService id={params?.professionalServiceId} />
    </>
  );
};

export default page;
