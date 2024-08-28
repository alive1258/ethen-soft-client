import DetailsDataAnalysis from "./DetailsDataAnalysis";

const DataAnalysis = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/our-deals`, {
      next: {
        revalidate: 30,
      },
    });
    const ourDeals = await res.json();
    return (
      <>
        <div className="container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ourDeals?.data?.map((deal) => (
            <DetailsDataAnalysis key={deal?._id} deal={deal} />
          ))}
        </div>
      </>
    );
  } catch {
    return null;
  }
};

export default DataAnalysis;
