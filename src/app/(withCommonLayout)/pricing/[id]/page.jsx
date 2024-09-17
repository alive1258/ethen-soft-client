import Head from "next/head";
import ProductPriceDetails from "@/components/UI/ProductPrice/ProductPriceDetails/ProductPriceDetails";

const page = ({ params }) => {
  const { id } = params;

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: id,
    description: `Explore pricing plans for ${id}. Tailored solutions for your business.`,
    brand: "Ethen Soft",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "Varies",
      url: `https://www.ethensoft.com/pricing/${id}`,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Head>
        <title>{`${id} Pricing | Ethen Soft`}</title>
        <meta
          name="description"
          content={`Check out our detailed pricing plans for ${id}. We provide tailored solutions for your business needs.`}
        />
        <meta
          name="keywords"
          content={`${id} pricing, business solutions, web services pricing, custom software prices`}
        />
        <meta property="og:title" content={`${id} Pricing | Ethen Soft`} />
        <meta
          property="og:description"
          content={`Learn more about the pricing and plans for ${id}. Ethen Soft offers custom solutions for your business.`}
        />
        <meta property="og:image" content="/assets/images/price/og-image.jpg" />
        <meta
          property="og:url"
          content={`https://www.ethensoft.com/pricing/${id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${id} Pricing | Ethen Soft`} />
        <meta
          name="twitter:description"
          content={`Explore detailed pricing plans for ${id} on Ethen Soft.`}
        />
        <meta
          name="twitter:image"
          content="/assets/images/price/twitter-card.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ProductPriceDetails slug={id} />
    </>
  );
};

export default page;
