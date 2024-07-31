import ViewMailTopBar from "./ViewMailTopBar";
import TodayDivider from "./TodayDivider";
import MailContentCard from "./MailContentCard";
import ViewAllDivider from "./ViewAllDivider";
import ReplyButton from "./ReplyButton";
const ViewMail = () => {
  return (
    <div className="border-r-[1px] border-[#FFFFFF33] h-full bg-[#F4F6F8] dark:bg-black">
      <ViewMailTopBar />
      <div className="mb-8">
        <TodayDivider />
      </div>
      <div className="p-6">
        <MailContentCard />
      </div>
      <div>
        <ViewAllDivider />
      </div>
      <ReplyButton />
    </div>
  );
};
export default ViewMail;
