import ReachInboxLogo from "../../assets/ReachInboxLogo.svg";

const SignUpTopBar = () => {
  return (
    <div className="w-full h-16 bg-black border border-[#FFFFFF33] px-8 flex justify-center items-center ">
      <div className="font-bold">
        <img src={ReachInboxLogo} alt="" />
      </div>
    </div>
  );
};

export default SignUpTopBar;
