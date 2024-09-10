import Link from "next/link";
import React from "react";

const FooterOurService = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-services`, {
      next: {
        revalidate: 30,
      },
    });
    const ourServices = await res.json();
    return (
      <>
        <ul className="space-y-2 text-primary-muted list-disc list-inside text-sm md:text-base marker:text-primary-muted">
          {ourServices?.data?.slice(0, 8)?.map((service) => (
            <li key={service?._id}>
              <Link href={`/services#${service?.slug || service?.id}`}>
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  } catch {
    return null;
  }
};

export default FooterOurService;
