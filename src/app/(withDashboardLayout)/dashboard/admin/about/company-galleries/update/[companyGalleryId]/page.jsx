import UpdateCompanyGallery from "@/components/Dashboard/CompanyGallery/UpdateCompanyGallery";

const page = ({ params }) => {
  return (
    <>
      <UpdateCompanyGallery id={params?.companyGalleryId} />
    </>
  );
};

export default page;
