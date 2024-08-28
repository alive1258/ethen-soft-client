import Image from "next/image";
import image1 from "../../../../../public/assets/images/gallery/1.png";
import image2 from "../../../../../public/assets/images/gallery/2.png";
import image3 from "../../../../../public/assets/images/gallery/3.png";
import image4 from "../../../../../public/assets/images/gallery/4.png";

const ImageGallery = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/company-galleries`,
      {
        next: {
          revalidate: 30,
        },
      }
    );
    const companyGalleries = await res.json();
    return (
      <>
        <div className="container -mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {companyGalleries?.data?.map((gallery, index) => (
            <div key={gallery?._id}>
              <Image
                className={`rounded-lg shadow-md cursor-pointer hover:shadow-2xl duration-500 ${
                  index === 1 || index === 3 ? "mt-20" : ""
                }`}
                src={gallery.image}
                width={305}
                height={420}
                alt="gallery image"
              />
            </div>
          ))}

          {/* <Image
            className="roundedlg mt-20 hover:mt-0 duration-500"
            src={image4}
            width={305}
            height={420}
            alt="gallery image"
          />  */}
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default ImageGallery;
