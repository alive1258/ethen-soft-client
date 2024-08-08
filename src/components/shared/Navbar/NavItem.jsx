import logo from "../../../../public/assets/db/navbar.json";

const NavItem = async () => {
  const res = await fetch("../../../../public/assets/db/navbar.json", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);
  return (
    <>
      <div></div>
    </>
  );
};

export default NavItem;
