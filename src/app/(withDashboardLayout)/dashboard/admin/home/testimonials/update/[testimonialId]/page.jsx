import UpdateTestimonials from "@/components/Dashboard/Testimonial/UpdateTestimonial";

const page = ({ params }) => {
  return (
    <>
      <UpdateTestimonials id={params?.testimonialId} />
    </>
  );
};

export default page;
