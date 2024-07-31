interface PropsTypes {
  heading: string;
}
const HeadingDiv = ({ heading }: PropsTypes) => {
  return (
    <div className="bg-[#23272C] px-3 py-2 rounded-lg">
      <h1 className="text-[14px] font-semibold">{heading}</h1>
    </div>
  );
};
export default HeadingDiv;
