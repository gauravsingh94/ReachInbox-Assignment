import ReplyFormInputField from "./ReplyFormInputField";
import ReplyFormFooter from "./ReplyFormFooter";
import ReplyFormTextArea from "./ReplyFormTextArea";
import ReplyFormHeader from "./ReplyFormHeader";

const ReplyForm = () => {
  return (
    <div className="h-[534px] w-[752px] bg-[#141517] rounded-md border-[1px] border-[#FFFFFF33] flex flex-col">
      <ReplyFormHeader title="Reply" />
      <ReplyFormInputField label="To:" />
      <ReplyFormInputField label="From:" />
      <ReplyFormInputField label="Subject:" />
      <ReplyFormTextArea />
      <div className="mt-auto">
        <ReplyFormFooter />
      </div>
    </div>
  );
};

export default ReplyForm;
