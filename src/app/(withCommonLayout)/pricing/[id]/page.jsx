import Head from "next/head";
import ProductPriceDetails from "@/components/UI/ProductPrice/ProductPriceDetails/ProductPriceDetails";

// Metadata function to generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const serviceData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${params?.id}`,
      {
        next: {
          revalidate: 30, // Revalidate the cache every 30 seconds
        },
      }
    );

    const data = await serviceData?.json();
    const service = data?.data;

    // Return the metadata to be used by Next.js for SEO purposes
    return {
      title: service?.title || "Service Details",
      description:
        service?.metaDescription || "Detailed information about our services",
      openGraph: {
        title: service?.title || "Service Details",
        description: service?.metaDescription || "Learn more about our service",
        images: [
          {
            url: service?.logo || "/default-image.png", // Default image if logo is not available
            alt: `${service?.title} logo`,
          },
        ],
        url: `https://www.ethensoft.com/pircing/${params?.id}`,
      },
    };
  } catch (error) {
    console.error(error);

    // Return default metadata if there's an error
    return {
      title: "Service Not Found",
      description: "The service you are looking for does not exist.",
    };
  }
}
const page = ({ params }) => {
  const { id } = params;

  return (
    <>
      <ProductPriceDetails slug={id} />
    </>
  );
};

export default page;
