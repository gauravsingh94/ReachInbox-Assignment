const TodayDivider = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Line */}
      <div className="w-full border-t-[1px]  border-borderColorLight dark:border-borderColorDark mt-6"></div>

      {/* Box with text */}
      <div className="absolute bg-[#EEF1F4] dark:bg-[#171819] top-1/2 flex items-center justify-center w-14 h-6  ">
        <span className="text-[#637381] dark:text-white text-[10px]">
          Today
        </span>
      </div>
    </div>
  );
};
export default TodayDivider;
