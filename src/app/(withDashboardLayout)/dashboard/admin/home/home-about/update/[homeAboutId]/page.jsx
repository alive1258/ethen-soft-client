import UpdateHomeAbout from "@/components/Dashboard/HomeAbout/UpdateHomeAbout";

const page = ({ params }) => {
  return (
    <>
      <UpdateHomeAbout id={params?.homeAboutId} />
    </>
  );
};

export default page;
