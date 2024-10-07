import Image from "next/image";
import Button from "../Button/Button";
import job from "../../../../public/assets/images/job.png";

const JobCard = ({ careerOpportunity }) => {
  return (
    <>
      <div className="rounded-lg bg-white hover:shadow-custom-10px duration-300">
        <Image
          className="w-full rounded-tr-lg"
          width={413}
          height={250}
          src={job}
          alt="job circular icon"
        />
        <div className="p-5">
          <span className="text-sm text-primary-base font-medium pb-4">
            Developer
          </span>
          <p className="text-sm text-black-base font-medium">
            Application Deadline: July 30, 2024
          </p>
          <h1 className="text-black-base text-xl font-semibold py-6">
            Frontend Developer
          </h1>
          <p className="text-black-base text-sm">
            We are seeking a talented and passionate Frontend Developer ot join
            our team.
          </p>
          <Button content="Apply Now" className="mt-6" />
        </div>
      </div>
    </>
  );
};

export default JobCard;
