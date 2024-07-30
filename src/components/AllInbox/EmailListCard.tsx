import Status from "./Status";
import CampaignCard from "./CampaignCard";
const EmailListCard = () => {
  return (
    <div className="bg-black h-28 w-full p-3 border-t-[1px] border-b-[1px] border-[#33383F]">
      <div className="flex justify-between items-center mb-2 ">
        <div>
          <p className="text-[14px] font-semibold">Beata@gmail.com</p>
        </div>
        <div>
          <p className="text-[14px] text-[#FCFCFC66]">Mar 7</p>
        </div>
      </div>

      <div>
        <p className="text-[#E1E0E0] text-[12px]">I've tried a lot and .</p>
      </div>

      <div className="mt-2 flex gap-2">
        <Status status="Interested" />
        <CampaignCard />
      </div>
    </div>
  );
};
export default EmailListCard;
