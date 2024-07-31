import ViewMailTopBar from "./ViewMailTopBar";
import TodayDivider from "./TodayDivider";
import MailContentCard from "./MailContentCard";
import ViewAllDivider from "./ViewAllDivider";
const ViewMail = () => {
  return (
    <div>
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
    </div>
  );
};
export default ViewMail;
