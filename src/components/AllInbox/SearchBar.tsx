import SearchIcon from "../../assets/searchIcon.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center h-7 w-full px-3 gap-3 rounded-sm bg-[#23272C] border border-1px border-[#FFFFFF33]">
      <img src={SearchIcon} alt="searchIcon" />
      <input
        className="w-full bg-transparent text-[#FFFFFF33] outline-none placeholder:text-[#FFFFFF33]"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
