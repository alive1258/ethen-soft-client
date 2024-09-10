import ButtonOutline from "../../Button/ButtonOutline";
import Button from "../../Button/Button";
import Image from "next/image";
import product1 from "../../../../../public/assets/images/price/image 22.png";
import product2 from "../../../../../public/assets/images/price/image 23.png";

const ProductDetailsHero = () => {
  return (
    <div>
      <div className="contain">
        <div className="max-w-[1440px] mx-auto pt-32 px-5 md:px-20 main-text">
          <div className="flex items-center justify-between">
            {/* banner content  */}
            <div className="w-full">
              <div className="space-y-8 w-[522px]">
                <h1 className="text-primary-muted text-[32px] font-semibold">
                  Creative Multi-Prepose Next.js Project{" "}
                </h1>
                <p className="text-base font-normal text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,{" "}
                </p>
                <div className="flex items-center gap-4">
                  <ButtonOutline content="See Demos " />
                  <Button content="Buy Now" />
                </div>
              </div>
            </div>
            <div className="w-full flex items-end justify-end relative">
              <div className="absolute -bottom-2.5 -left-3">
                <Image src={product2} width={148} height={358} alt="product" />
              </div>
              <div>
                <div className="">
                  <Image
                    src={product1}
                    width={522}
                    height={396}
                    alt="product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wave wave1">
          <div className="single-wave"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHero;
