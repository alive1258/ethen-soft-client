import Link from "next/link";
import Image from "next/image";
import n404Pic from "../../public/assets/images/n404Pic.png";
import Button from "@/components/UI/Button/Button";

const NotFoundPage = () => {
  return (
    <>
      <div className="w-full mx-auto pt-20">
        <div>
          {/* Error message display */}
          <div className="text-center mt-20">
            <div className="flex justify-center items-center">
              <Image width={450} height={450} src={n404Pic} alt="image" />
            </div>

            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {/* Displaying error status text or message */}
            <p className="text-primary-base font-semibold">
              <i>page not Found</i>
            </p>
          </div>

          {/* Button to navigate back to home page */}
          <div className="text-center mt-6">
            <Link href="/">
              <Button content="Go Back to Home" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
