import UpdateHeroDescription from "@/components/Dashboard/HeroDescription/UpdateHeroDescription";

const page = ({ params }) => {
  return (
    <>
      <UpdateHeroDescription id={params?.heroId} />
    </>
  );
};

export default page;
