import Image from "next/image";
import image4 from "../../../../public/assets/images/works/7.png";
import Button from "@/components/UI/Button/Button";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";
import WorkHoverEffect from "@/components/UI/Home/OurWorks/WorkHoverEffect";
import ProductHoverEffect from "./ProductHoverEffect";

// Generate static paths for SSG
export async function generateStaticParams() {
  const productsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/our-products`
  );
  const data = await productsData?.json();
  const products = data?.data;

  // Generate paths for each products
  return products.map((product) => ({
    id: products?.slug,
  }));
}

const Products = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-products`, {
      next: {
        revalidate: 30,
      },
    });
    const ourProducts = await res.json();
    return (
      <>
        <div className="bg-[#F1F1F1] bg-opacity-[77%] pt-14">
          <div className="container bg-no-repeat pb-14 bg-none md:bg-[url('/assets/images/works/Vector.png'),url('/assets/images/bag.png'),url('/assets/images/round.png')] md:bg-[calc(100%_-_100px)_top,calc(60%_+_115px)_100px,right_bottom]">
            {/* tab  */}
            {/* <ProductsTab /> */}
            {/* section title and description  */}
            <SectionTitle
              subTitle="PRODUCTS"
              title="Our Products"
              width="250px"
              description="All the products are created our team. You can check our projects by clicking on each products."
            />
            {/* all product  */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
              {ourProducts?.data?.map((product) => (
                <div className="relative group" key={product?._id}>
                  <Image
                    className="rounded-lg object-cover w-full h-[294px]"
                    height={200}
                    width={200}
                    src={product?.image}
                    alt="product"
                  />
                  <ProductHoverEffect product={product} />
                </div>
              ))}

              <div className="relative group">
                <Image
                  className="rounded-lg object-cover w-full h-[294px]"
                  src={image4}
                  height={200}
                  width={200}
                  alt="product"
                />
                <WorkHoverEffect />
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <Button content="View More" />
            </div>
          </div>
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default Products;
