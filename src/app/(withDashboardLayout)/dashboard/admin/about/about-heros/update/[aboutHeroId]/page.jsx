import UpdateAboutHero from "@/components/Dashboard/AboutHero/UpdateAboutHero";

const page = ({ params }) => {
  return (
    <>
      <UpdateAboutHero id={params?.aboutHeroId} />
    </>
  );
};

export default page;
