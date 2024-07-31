import EmptyInboxSvg from "../../assets/EmptyInbox.svg";

const EmptyInbox = () => {
  return (
    <div className="flex flex-col mb-10 justify-center items-center">
      <div>
        <img src={EmptyInboxSvg} alt="" />
      </div>
      <div className=" mt-8">
        <h1 className="text-[24px] front-bold text-center">
          It’s the beginning of a legendary sales pipeline{" "}
        </h1>
        <p className="text-center text-[18px] text-[#9E9E9E] ">
          When you have inbound E-mails
        </p>
        <p className="text-center text-[18px] text-[#9E9E9E]">
          you’ll see them here
        </p>
      </div>
    </div>
  );
};
export default EmptyInbox;
