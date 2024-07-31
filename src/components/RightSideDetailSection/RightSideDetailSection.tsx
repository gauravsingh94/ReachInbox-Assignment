import HeadingDiv from "./HeadingDiv";
import DetailsCard from "./DetailsCard";
import CampaignNameCard from "./CampaignNameCard";
const RightSideDetailSection = () => {
  return (
    <div className="w-64 px-2">
      <div className="mb-4">
        <HeadingDiv heading="Lead Details" />
      </div>

      <div className="mb-4">
        <DetailsCard />
      </div>

      <div className="mb-4">
        <HeadingDiv heading="Activities" />
      </div>

      <div className="mb-4 flex justify-center">
        <CampaignNameCard />
      </div>
    </div>
  );
};
export default RightSideDetailSection;
