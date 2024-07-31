import SignUpTopBar from "../components/SignupComponent/SignupTopBar";
import SignupComponent from "../components/SignupComponent/SignupComponent";
const LoginPage = () => {
  return (
    <>
      <SignUpTopBar />
      <div className=" h-screen flex justify-center items-center ">
        <SignupComponent />
      </div>
    </>
  );
};
export default LoginPage;
