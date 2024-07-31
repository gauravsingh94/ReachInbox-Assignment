import SendStatusIcon from "../../assets/sendStatus.svg";
import OpenedMessageIcon from "../../assets/openedMessage.svg";
import MessageIconSvg from "../../assets/messageIcon.svg";

interface PropsType {
  stepNumber: number;
  status: "Sent" | "Opened";
  date: string;
}

const CampaignStep = ({ stepNumber, status, date }: PropsType) => {
  return (
    <div className="flex items-center my-6">
      <div className="relative flex items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#23272C] border-[1px] border-[#FFFFFF33] ">
          <img src={MessageIconSvg} alt={MessageIconSvg} />
        </div>
        {stepNumber < 3 && (
          <div className="absolute left-1/2 top-8 w-px h-[40px] bg-[#23272C] transform -translate-x-1/2"></div>
        )}
      </div>
      <div className="ml-4">
        <h2 className="text-[13px] text-white">Step {stepNumber}: Email</h2>
        <div className="flex gap-2 items-center">
          <div className="h-[13px] w-[13px]">
            {status === "Sent" && <img src={SendStatusIcon} alt="Sent" />}
            {status === "Opened" && (
              <img src={OpenedMessageIcon} alt="Opened" />
            )}
          </div>
          <p className="text-gray-400 text-[10px]">
            {status} <span className="text-white">{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignStep;
