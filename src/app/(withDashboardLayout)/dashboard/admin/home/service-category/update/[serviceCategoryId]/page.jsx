import UpdateServiceCategory from "@/components/Dashboard/ServiceCategory/UpdateServiceCategory";

const UpdateServiceCategoryPage = ({ params }) => {
  console.log(params?.serviceCategoryId);
  return (
    <div>
      <UpdateServiceCategory id={params?.serviceCategoryId} />
    </div>
  );
};

export default UpdateServiceCategoryPage;
