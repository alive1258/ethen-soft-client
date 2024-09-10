import Link from "next/link";

const FooterBottom = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className=" md:mx-auto text-primary-muted mt-10 pt-6 border-t-[1px] border-[#D2D2D2] ">
        <div className="md:flex items-start container justify-between">
          <p className="text-center pb-4">
            © {year} All rights reserved. Ethen Soft
          </p>
          <ul className="md:flex md:space-y-0 space-y-3 items-center justify-between gap-8">
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <span className="md:block hidden">|</span>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <span className="md:block hidden">|</span>
            <li>
              <Link href="/terms-condition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
