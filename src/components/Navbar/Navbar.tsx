import { useNavigate } from "react-router-dom";
import logo from "../../assets/svgs/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignInClick = (path: string) => {
    navigate(path);

  };

  return (
    <nav className="flex items-center justify-between px-6 py-6 lg:px-12 lg:py-8">
      <div className="max-h-6 max-w-20 lg:max-h-10 lg:max-w-32 cursor-pointer" onClick={() => handleSignInClick("/")}>
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex gap-6 lg:gap-14">
        <li className="text-xs text-c1 lg:text-base cursor-pointer" onClick={() => handleSignInClick("/features")}>Features</li>
        <li className="text-xs text-c1 lg:text-base cursor-pointer" onClick={() => handleSignInClick("/team")}>Team</li>
        <li
          className="text-xs text-c1 lg:text-base cursor-pointer"
          onClick={() => handleSignInClick("/sign-in")}
        >
          Sign In
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
