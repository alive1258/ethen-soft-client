import Link from "next/link";

const ButtonOutline = ({ content, url = "/", className }) => {
  return (
    <>
      <div className="text-center">
        <button
          className={`text-primary-base border border-primary-base font-normal px-4 py-2 rounded bg-white ${className}`}
        >
          <Link href={url}>{content}</Link>
        </button>
      </div>
    </>
  );
};

export default ButtonOutline;
