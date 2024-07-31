import DropDownIcon from "../../assets/dropdown.svg";
const MeetingStatusList = () => {
  return (
    <div className="h-8 w-[180px] py-[6px] px-[8px] rounded-sm border-[1px] border-[#FFFFFF33]  bg-[#1F1F1F] text-[12px] flex items-center justify-between">
      <div>
        <div
          className="h-3 w-3 rounded-full flex justify-center items-center"
          style={{ backgroundColor: "#444234" }}
        >
          <div
            className="h-2 w-2 rounded-full glow-effect "
            style={{ backgroundColor: "#E6D162" }}
          ></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div>
          <h1>Meeting Completed</h1>
        </div>
        <div className="h-[13px] w-[8px] flex items-center">
          <img src={DropDownIcon} alt="Drop Down SVG" />
        </div>
      </div>
    </div>
  );
};
export default MeetingStatusList;
