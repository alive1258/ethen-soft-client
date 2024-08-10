import Link from "next/link";

const ButtonOutline = ({ content, url, className }) => {
  return (
    <>
      <button
        className={`bg-primary-base font-normal px-4 py-2 rounded text-white ${className}`}
      >
        <Link href={url}>{content}</Link>
      </button>
    </>
  );
};

export default ButtonOutline;
