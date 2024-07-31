interface PropsTypes {
  count: number;
}
const ReplyCount = ({ count }: PropsTypes) => {
  return (
    <div className="w-9 h-7 bg-[#ECECEC] dark:bg-[#222426] rounded-2xl flex justify-center items-center">
      <h1 className="text-[#5C7CFA] font-bold">{count}</h1>
    </div>
  );
};
export default ReplyCount;
