import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <span>Team</span>{" "}
      <button onClick={goHome} className="bg-slate-300">
        Go Home
      </button>
    </div>
  );
};
export default Team;
