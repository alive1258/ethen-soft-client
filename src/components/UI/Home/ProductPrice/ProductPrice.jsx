import Link from "next/link";
import Button from "../../Button/Button";
import SectionTitle from "../../SectionTitle/SectionTitle";
import PricingCard from "./PricingCard";
import ProductPriceSection from "./ProductPriceSection";

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
      <div className="container md:mt-28 mt-16 bg-white z-30">
        <SectionTitle
          subTitle="PRODUCT PRICING"
          title="Our Product Price"
          description="We take digital experience to the next level"
        />
        {/* all pricing  */}
        <div>
          <ProductPriceSection prices={prices} />
        </div>
        {/* View All Products button  */}
        <div className="mx-auto mt-10 w-44 text-center">
          <Link href="/pricing">
            <Button content="View All Products" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
