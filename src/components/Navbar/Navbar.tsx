import logo from "../../assets/svgs/logo.svg"

const Navbar = () => {
  return <nav className="flex items-center justify-between px-6 py-6 lg:px-12 lg:py-8">
    <div className="max-w-20 max-h-6 lg:max-w-32 lg:max-h-10">
      <img src={logo} alt="logo" />
    </div>
    <ul className="flex gap-6 lg:gap-14">
      <li className="text-c1 text-xs lg:text-base">Features</li>
      <li className="text-c1 text-xs lg:text-base">Team</li>
      <li className="text-c1 text-xs lg:text-base">Sign In</li>
    </ul> 
  </nav>;
};

export default Navbar;
