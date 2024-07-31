import ViewMailTopBar from "./ViewMailTopBar";
import TodayDivider from "./TodayDivider";
import MailContentCard from "./MailContentCard";
import ViewAllDivider from "./ViewAllDivider";
import ReplyButton from "./ReplyButton";
import ReplyForm from "../ReplyEmail/SendEmailComponent";
import { useState } from "react";

const ViewMail = () => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  return (
    <div className="relative border-r-[1px] border-[#FFFFFF33] h-full bg-[#F4F6F8] dark:bg-black">
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
      <ReplyButton onClick={toggleReplyForm} />

      {showReplyForm && (
        <div className="fixed inset-x-0  bottom-0 flex justify-center items-end  z-50 p-4">
          <ReplyForm toggleFunction={toggleReplyForm} />
        </div>
      )}
    </div>
  );
};

export default ViewMail;
