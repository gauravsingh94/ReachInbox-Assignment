import CampaignStep from "./CampaignStep";
const CampaignNameCard = () => {
  return (
    <div>
      <h1>Campaign Name</h1>
      <div className="flex text-[12px] gap-2 mt-4">
        <p>3 Steps</p>
        <p>|</p>
        <p>5 Days in Sequence</p>
      </div>

      <CampaignStep stepNumber={1} status="Sent" date="3rd, Feb" />
      <CampaignStep stepNumber={2} status="Opened" date="3rd, Feb" />
      <CampaignStep stepNumber={3} status="Sent" date="3rd, Feb" />
    </div>
  );
};
export default CampaignNameCard;
