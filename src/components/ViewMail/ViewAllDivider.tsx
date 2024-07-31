import ViewMoreSvg from "../../assets/viewMore.svg";
const ViewAllDivider = () => {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Line */}
      <div className="w-full border-t-[1px] border-borderColorLight dark:border-borderColorDark mt-6"></div>

      {/* Box with text */}
      <div className="absolute bg-[#EEF1F4]  dark:bg-[#171819] top-1/2 flex items-center justify-center  h-6 w-28  gap-2">
        <div>
          <img src={ViewMoreSvg} alt="View More SVG" />
        </div>
        <p className="text-[#637381] dark:text-white text-[10px]">
          View all <span className="text-[#5C7CFA]">4</span> replies
        </p>
      </div>
    </div>
  );
};
export default ViewAllDivider;
