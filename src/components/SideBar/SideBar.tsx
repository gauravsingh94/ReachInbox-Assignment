import CompanyLogo from "../../assets/company-logo.svg";
import HomeIcon from "../../assets/homeIcon.svg";
import InboxIcon from "../../assets/inbox.svg";
import Box from "../../assets/box.svg";
import PeopleSeach from "../../assets/peopleSearch.svg";
import SentIcon from "../../assets/sent.svg";
import ListIcon from "../../assets/list.svg";

const Sidebar = () => {
  const SideBarIcons = [
    HomeIcon,
    PeopleSeach,
    InboxIcon,
    SentIcon,
    ListIcon,
    Box,
  ];

  return (
    <div className="w-[56px] h-full bg-[#FAFAFA] dark:bg-[#101113] py-4 flex flex-col justify-between items-center gap-y-4 ">
      <img src={CompanyLogo} className="logo" alt="Vite logo" />

      <div className="p-2 flex flex-col justify-center items-between  ">
        <div className="flex justify-center items-center flex-col gap-y-8">
          {SideBarIcons.map((Icon, index) => (
            <div className="flex-grow">
              <img key={index} src={Icon} className="logo mb-4" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#054F31] h-8 w-8 rounded-full flex items-center justify-center">
        AS
      </div>
    </div>
  );
};

export default Sidebar;
