import Navbar from "@/components/shared/Navbar/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <h1>Navbar</h1>
    </>
  );
};

export default CommonLayout;
