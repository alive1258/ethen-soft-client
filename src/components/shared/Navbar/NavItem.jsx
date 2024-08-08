import logo from "../../../../public/assets/db/navbar.json";

const NavItem = async () => {
  const res = await fetch("@/assets/db/navbar.json", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const products = await res.json();
  console.log(products);
  return (
    <>
      <div></div>
    </>
  );
};

export default NavItem;
