import DropDownIcon from "../../assets/dropdown.svg";
const MoveSelectList = () => {
  return (
    <div className="h-8 py-[6px] px-[8px] rounded-sm border-[1px] border-[#FFFFFF33] w-[90px] bg-[#1F1F1F] text-[12px] flex items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <div>
          <h1>Move</h1>
        </div>
        <div className="h-[13px] w-[8px] flex items-center">
          <img src={DropDownIcon} alt="Drop Down SVG" />
        </div>
      </div>
    </div>
  );
};
export default MoveSelectList;
