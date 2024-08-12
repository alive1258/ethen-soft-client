import Image from "next/image";
import image1 from "../../../../../public/assets/images/gallery/1.png";
import image2 from "../../../../../public/assets/images/gallery/2.png";
import image3 from "../../../../../public/assets/images/gallery/3.png";
import image4 from "../../../../../public/assets/images/gallery/4.png";

const ImageGallery = () => {
  return (
    <>
      <div className="container -mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Image
          className="roundedlg "
          src={image1}
          width={305}
          height={420}
          alt="gallery image"
        />
        <Image
          className="roundedlg mt-20 hover:mt-0 duration-500"
          src={image2}
          width={305}
          height={420}
          alt="gallery image"
        />
        <Image
          className="roundedlg "
          src={image3}
          width={305}
          height={420}
          alt="gallery image"
        />
        <Image
          className="roundedlg mt-20 hover:mt-0 duration-500"
          src={image4}
          width={305}
          height={420}
          alt="gallery image"
        />
      </div>
    </>
  );
};

export default ImageGallery;
