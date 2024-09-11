import Products from "@/components/UI/OurProducts/Products";

const page = () => {
  return (
    <>
      <section>
        {/* work banner  */}
        <div className="bg-blue-400 md:h-[350px] h-[200px]"></div>

        {/* work section */}
        <Products />
      </section>
    </>
  );
};

export default page;
