import Link from "next/link";

const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="max-w-[1280px] mx-6 md:mx-auto text-primary-muted mt-10 pt-6 border-t-[1px] border-[#D2D2D2] md:flex items-start justify-between">
        <p className="text-center pb-4">
          © {year} All rights reserved. EthenSoft
        </p>
        <ul className="flex items-center justify-between gap-8">
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterBottom;
