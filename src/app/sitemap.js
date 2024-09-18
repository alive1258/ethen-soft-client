export default async function sitemap() {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services?limit=500`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const servicesData = await res?.json();
  const services = servicesData?.data?.data;

  const data = services?.map((service) => {
    return {
      url: `${baseUrl}/pricing/${service?.slug}`,
      lastModified: service?.updatedAt,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...data,
  ];
}
