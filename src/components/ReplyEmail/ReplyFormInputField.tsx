const ReplyFormInputField = ({ label }: { label: string }) => (
  <div className="h-8 border-b border-[#FFFFFF33] flex items-center gap-3 px-8">
    <label className="text-[#BAB9BD]" htmlFor={label.toLowerCase()}>
      {label}
    </label>
    <input
      id={label.toLowerCase()}
      className="w-full bg-[#141517] border-none focus:outline-none"
      type="text"
    />
  </div>
);

export default ReplyFormInputField;
