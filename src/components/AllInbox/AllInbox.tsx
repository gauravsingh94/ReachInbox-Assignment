import RelodeButton from "./RelodeButton";
import StackSvg from "../../assets/stack.svg";
import SearchBar from "./SearchBar";
import ReplyCount from "./ReplyCount";
import DropDownIcon from "../../assets/dropdown.svg";
import EmailListCard from "./EmailListCard";

const AllInBox = () => {
  return (
    <div className="bg-black w-72 flex flex-col items-center px-6 py-8 h-full border-r-[1px] border-[#FFFFFF33]">
      <div className="w-full flex items-center justify-between">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-[#4285F4] text-[20px] font-bold">All Inbox(s)</h1>
          <div>
            <img src={StackSvg} alt="" />
          </div>
        </div>
        <div>
          <RelodeButton />
        </div>
      </div>

      <div className="flex justify-start w-full">
        <div className="flex gap-2">
          <div className="font-bold">25/25</div>
          <span className="text-[#7F7F7F]">Inboxes selected</span>
        </div>
      </div>

      <div className="mt-2 w-full">
        <SearchBar />
      </div>

      <div className="w-full mt-2 flex justify-between">
        <div className="flex items-center gap-2">
          <div>
            <ReplyCount count={26} />
          </div>
          <div className="font-semibold">New Replies</div>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="font-semibold">Newest</h1>
          <div>
            <img src={DropDownIcon} alt="Drop Down Icon" />
          </div>
        </div>
      </div>

      <div className="mt-4 w-full flex-1 overflow-y-auto">
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
        <EmailListCard />
      </div>
    </div>
  );
};

export default AllInBox;
