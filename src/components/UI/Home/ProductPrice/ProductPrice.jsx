import Link from "next/link";
import Button from "../../Button/Button";
import SectionTitle from "../../SectionTitle/SectionTitle";
import PricingCard from "./PricingCard";

const ProductPrice = () => {
  const prices = [
    {
      _id: 1,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 2,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 3,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 4,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 5,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 6,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 7,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
    {
      _id: 8,
      title: "Advertising Content Development",
      price: 5,
      description:
        "They say content is king. Well our content is not just catchy but downright magnetic!...",
      sub_description: "ui/ux designui/ux design",
      icon: "/assets/images/services.png",
      color_code: "#62C288",
    },
  ];
  return (
    <>
      <div className="container py-10 bg-white z-30">
        <SectionTitle
          subTitle="PRODUCT PRICING"
          title="Our Product Price"
          description="We take digital experience to the next level"
        />
        {/* all pricing  */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6">
          {prices?.map((item) => (
            // price card
            <PricingCard item={item} key={item?._id} />
          ))}
        </div>
        {/* View All Products button  */}
        <div className="text-center mt-10">
          <Link href="/price">
            <Button content="View All Products" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
