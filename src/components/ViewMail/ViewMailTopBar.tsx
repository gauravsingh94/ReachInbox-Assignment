import MeetingStatusList from "./MeetingStatusList";
import MoveSelectList from "./MoveSelectList";
import ThreeDotButton from "./ThreeDotButton";

const ViewMailTopBar = () => {
  return (
    <div className="h-[70px] w-full px-5 flex justify-between items-center bg-white dark:bg-black border-b-[1px] border-borderColorLight dark:border-borderColorDark">
      <div>
        <p className="text-[14px] text-black dark:text-white">Orlando</p>
        <p className="text-[12px] text-[#7F7F7F]">orladom@gmail.com</p>
      </div>
      <div className="flex w-[45%] justify-between items-center gap-4">
        <MeetingStatusList />
        <MoveSelectList />
        <ThreeDotButton />
      </div>
    </div>
  );
};
export default ViewMailTopBar;
