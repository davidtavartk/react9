import logoWhite from "../../assets/svgs/logo-white.svg";
import phone from "../../assets/svgs/phone.svg";
import gmail from "../../assets/svgs/gmail.svg";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import instagram from "../../assets/svgs/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-c1 px-8 py-6 sm:px-12 md:py-20">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-16">
        <div>
          <img className="h-[30px] w-[100px]" src={logoWhite} alt="logo" />
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 md:mt-0">
          <div className="font-openSans flex gap-5 text-white">
            <img src={phone} alt="phone" />
            <span> Phone: +1-543-123-4567</span>
          </div>
          <div className="font-openSans flex gap-5 text-white">
            <img src={gmail} alt="gmail" />
            <span>example@fylo.com</span>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-white md:mt-0">
          <li className="cursor-pointer hover:text-[#6C9BFF]">About Us</li>
          <li className="cursor-pointer hover:text-[#6C9BFF]">Jobs</li>
          <li className="cursor-pointer hover:text-[#6C9BFF]">Press</li>
          <li className="cursor-pointer hover:text-[#6C9BFF]">Blog</li>
        </ul>
        <ul className="mt-6 flex flex-col gap-2 text-white md:mt-0">
          <li className="cursor-pointer hover:text-[#6C9BFF]">Contact Us</li>
          <li className="cursor-pointer hover:text-[#6C9BFF]">Terms</li>
          <li className="cursor-pointer hover:text-[#6C9BFF]">Privacy</li>
        </ul>

        <div className="m-auto mt-4 flex gap-4 md:mx-0 md:mt-0">
          <img src={facebook} alt="fb" className="cursor-pointer" />
          <img src={twitter} alt="x" className="cursor-pointer" />
          <img src={instagram} alt="insta" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
