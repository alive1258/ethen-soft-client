import ProductPriceDetails from "@/components/UI/ProductPrice/ProductPriceDetails/ProductPriceDetails";

// Metadata function to generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const serviceData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${params?.id}`,
      {
        next: {
          revalidate: 30,
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
            url: service?.logo || "/default-image.png",
            alt: `${service?.title} logo`,
          },
        ],
        url: `https://www.ethensoft.com/pircing/${params?.id}`,
      },
      twitter: {
        card: "summary_large_image",
        title: service?.title || "Service Details",
        description: service?.metaDescription || "Learn more about our service",
        image: service?.logo || "/default-image.png",
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

// Generate static paths for SSG
export async function generateStaticParams({ params }) {
  const serviceData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services/${params?.id}`
  );
  const data = await serviceData?.json();
  const service = data?.data;

  // Generate paths for each service slug
  return [{ id: service?.slug }];
}

// Static Page Component
const Page = async ({ params }) => {
  const { id } = params;

  // Fetch service data for the static page
  const serviceData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services/${id}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const data = await serviceData?.json();
  const service = data?.data;

  // If service not found, show a message
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      {/* Render product price details with the fetched service data */}
      <ProductPriceDetails service={service} />
    </>
  );
};

export default Page;
