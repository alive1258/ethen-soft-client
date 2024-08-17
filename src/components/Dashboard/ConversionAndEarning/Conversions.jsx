import Example from "./ConversionData";
import Select from "./Select/Select";

const Conversions = () => {
  return (
    <>
      <div className="w-full bg-black-muted rounded-lg p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-[#D3D3D3] font-medium"> Conversions</h1>
          <Select />
        </div>
        <Example />
      </div>
    </>
  );
};

export default Conversions;
