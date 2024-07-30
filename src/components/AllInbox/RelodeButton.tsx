import RelodeSvg from "../../assets/relode.svg";
const RelodeButton = () => {
  return (
    <button className="w-8 h-8 rounded-md bg-[#25262B] flex justify-center items-center">
      <img src={RelodeSvg} alt="Relode Svg" />
    </button>
  );
};
export default RelodeButton;
