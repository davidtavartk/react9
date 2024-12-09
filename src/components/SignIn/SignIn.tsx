import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <span>Sign In</span>{" "}
      <button onClick={goHome} className="bg-slate-300">
        Go Home
      </button>
    </div>
  );
};
export default SignIn;
