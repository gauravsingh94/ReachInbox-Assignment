import ReplyIcon from "../../assets/reply.svg";

const ReplyButton = () => {
  return (
    <div className="w-[136px] h-11 flex justify-center items-center px-[24px] py-[8px] mx-[24px] bg-gradient-to-r from-[#4B63DD] to-[#0524BF] rounded-[4px] gap-4 absolute bottom-4 left-94">
      <div>
        <img src={ReplyIcon} alt="" />
      </div>
      Reply
    </div>
  );
};
export default ReplyButton;
