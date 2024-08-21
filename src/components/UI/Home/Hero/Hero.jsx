import HeroDescription from "./HeroDescription";

const Hero = () => {
  return (
    <>
      <div className="scene bg-cover bg-no-repeat h-screen flex items-center">
        <div className="moon"></div>
        <HeroDescription />
      </div>
    </>
  );
};

export default Hero;
