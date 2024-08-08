const ServicesHeader = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="border-t border-purple-300 w-1/4"></div>
      <div className="flex items-center mx-4">
        <div className="rounded-full bg-purple-300 h-2 w-2 mr-2"></div>
        <h2 className="text-purple-600 font-bold text-xl">SERVICES</h2>
        <div className="rounded-full bg-purple-300 h-2 w-2 ml-2"></div>
      </div>
      <div className="border-t border-purple-300 w-1/4"></div>
    </div>
  );
};

export default ServicesHeader;
