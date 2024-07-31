import DropDownSvg from "../../assets/boldDropdownArrow.svg";
import VariableButtonIcon from "../../assets/variableButtonIcon.svg";
import PreviewEmailIcon from "../../assets/previewEmailIcon.svg";
import AIcon from "../../assets/aIcon.svg";
import AttachIcon from "../../assets/attachIcon.svg";
import AttachImageIcon from "../../assets/attachImageIcon.svg";
import EmojiIcon from "../../assets/emojiIcon.svg";
import PersonIcon from "../../assets/personIcon.svg";
import CodeIcon from "../../assets/braces.svg";

const ReplyFormFooter = () => (
  <div className="h-[54px] mt-auto mb-0 flex flex-row justify-start items-center px-4 border-t border-[#FFFFFF33] gap-6">
    <button className="w-[114px] h-[40px] flex justify-center items-center px-5 py-2 rounded-[4px] bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white space-x-2">
      <div>Send</div>
      <div>
        <img src={DropDownSvg} alt="Dropdown Arrow" />
      </div>
    </button>
    <div className="flex items-center gap-2 justify-center">
      <div>
        <img src={VariableButtonIcon} alt="Variable Button Icon" />
      </div>
      <p className="text-[#ADADAD]">Variables</p>
    </div>

    <div className="flex items-center gap-2 justify-center">
      <div>
        <img src={PreviewEmailIcon} alt="PreviewEmail Button Icon" />
      </div>
      <p className="text-[#ADADAD]">Variables</p>
    </div>

    <button>
      <img src={AIcon} alt="" />
    </button>
    <button>
      <img src={AttachIcon} alt="" />
    </button>
    <button>
      <img src={AttachImageIcon} alt="" />
    </button>
    <button>
      <img src={EmojiIcon} alt="" />
    </button>
    <button>
      <img src={PersonIcon} alt="" />
    </button>
    <button>
      <img src={CodeIcon} alt="" />
    </button>
  </div>
);

export default ReplyFormFooter;
