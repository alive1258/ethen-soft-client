import Hero from "@/components/UI/Home/Hero/Hero";

const page = async () => {
  //   const res = await fetch("http://localhost:5000/api/v1/products", {
  //     cache: "no-store",
  //   });
  //   const products = await res.json();
  return (
    <>
      <Hero />
    </>
  );
};

export default page;
