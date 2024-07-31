import CloseIcon from "../../assets/closeIcon.svg";
const ReplyFormHeader = ({ title }: { title: string }) => (
  <div className="h-[38px] bg-[#23272C] px-8 flex items-center justify-between border-b-[1px] border-[#FFFFFF33]">
    <p className=" text-[#BAB9BD] font-semibold">{title}</p>
    <div>
      <img src={CloseIcon} alt="" />
    </div>
  </div>
);

export default ReplyFormHeader;
