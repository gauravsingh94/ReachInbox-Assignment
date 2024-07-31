const DetailsCard = () => {
  return (
    <div className="text-[12px] flex flex-col gap-4 px-3">
      <div className="flex justify-between items-center ">
        <p>Name</p>
        <p className="text-[#B9B9B9]">Orlando</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Contact No</p>
        <p className="text-[#B9B9B9]">+54-906282786</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Email ID</p>
        <p className="text-[#B9B9B9]">orlando@gmail.com</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Linkedin</p>
        <p className="text-[#B9B9B9]">linkedin.com/in/timvadde/</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Company Name</p>
        <p className="text-[#B9B9B9]">Reachinbox</p>
      </div>
    </div>
  );
};
export default DetailsCard;
