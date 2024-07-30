import SendIcon from "../../assets/sent.svg";
const CampaignCard = () => {
  return (
    <div className="bg-[#222426] h-5 px-2 py-[3px] w-full rounded-lg flex justify-between items-center">
      <div className="h-[12px] w-[12px] ">
        <img src={SendIcon} alt="Send Icon" />
      </div>
      <h1 className="text-[10px]">Campaign Name</h1>
    </div>
  );
};
export default CampaignCard;
