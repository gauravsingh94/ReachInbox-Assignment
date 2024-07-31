import DropDownIcon from "../../assets/dropdown.svg";
import ToggleSwitch from "./ModeSwitch";
const NavBar = () => {
  return (
    <div className="w-full h-16 bg-white dark:bg-[#1F1F1F] px-8 flex justify-between items-center text-[#5B5F66] dark:text-white border border-borderColorLight dark:border-borderColorDark">
      <div className="font-bold ">Onebox</div>
      <div className="flex flex-row gap-6">
        <div>
          <ToggleSwitch />
        </div>
        <div className="flex justify-center items-center gap-3">
          Tim’s Workspace
          <div>
            <img src={DropDownIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
