import HeroDescription from "./HeroDescription";

const Hero = () => {
  return (
    <>
      <div className="scene md:pt-0 pt-24 bg-cover bg-no-repeat h-screen md:flex items-center">
        <HeroDescription />
      </div>
    </>
  );
};

export default Hero;
