import ImgPng from "../../assets/googleIcon.png";
import CreateAccountButton from "./CreateAccountButton";
const SignupComponent = () => {
  return (
    <div className="h-72  w-[500px] py-[6px] px-6 rounded-xl border-[1px] border-[#FFFFFF33]  bg-[#141517] text-[12px] flex flex-col justify-center items-center gap-4">
      <div>
        <h1 className="text-[20px] font-semibold">Create a new account</h1>
      </div>
      <div className="h-12 w-full rounded-sm border border-[#FFFFFF33] flex gap-3 justify-center items-center">
        <div>
          <img className="w-8 h-8" src={ImgPng} alt="" />
        </div>
        <div className="text-[16px] text-gray-300">Sign Up with Google</div>
      </div>
      <div className="mt-4">
        <CreateAccountButton />
      </div>
      <div>
        <p className="text-gray-500 text-[12px]">
          Aleardy have an account ?<a className=" text-gray-300k">Sign In</a>
        </p>
      </div>
    </div>
  );
};
export default SignupComponent;
