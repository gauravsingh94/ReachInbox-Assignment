interface PropsTypes {
  heading: string;
}
const HeadingDiv = ({ heading }: PropsTypes) => {
  return (
    <div className="bg-[#ECEFF3] dark:bg-[#23272C] text-[#454F5B] dark:text-white px-3 py-2 rounded-lg">
      <h1 className="text-[14px] font-semibold">{heading}</h1>
    </div>
  );
};
export default HeadingDiv;
