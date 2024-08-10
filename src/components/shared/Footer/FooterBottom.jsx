import Link from "next/link";

const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="max-w-[1280px] mx-auto text-primary-muted pt-6 pb-8 border-t-[1px] border-[#D2D2D2] flex items-start justify-between">
        <p>© {year} All rights reserved. EthenSoft</p>
        <ul className="flex items-center gap-8">
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
