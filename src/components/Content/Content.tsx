import hero2 from "../../assets/imgs/hero2.png";
import greenArrow from "../../assets/svgs/greenArrow.svg";
import Card from "../Card/Card";

const Content = () => {
  return (
    <div className="mt-10 pb-10 rounded-tl-[20%] rounded-tr-[20%] bg-[#F8F8FE] lg:rounded-tl-[30%] lg:rounded-tr-[30%]">
      <div className="container m-auto flex flex-col items-center justify-between gap-6 px-6 py-6 lg:flex-row-reverse lg:gap-16 lg:px-12 lg:py-20">
        <div>
          <img src={hero2} alt="heroImage" />
        </div>

        <div className="flex flex-col justify-between gap-5 lg:w-1/2">
          <h1 className="font-openSans text-center text-2xl font-bold leading-9 text-c1 lg:text-left">
            Stay productive, wherever you are
          </h1>
          <p className="font-openSans text-center text-sm font-normal leading-6 text-c1 lg:text-left">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="font-openSans text-center text-sm font-normal leading-6 text-c1 lg:text-left">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>

          <div className="m-auto pb-1 lg:m-0">
            <div className="inline-flex gap-2 border-b border-[#3DA08F] text-[#3DA08F] hover:text-[#71DFCC] hover:border-[#71DFCC]">
              <span>See how Fylo works</span>
              <img src={greenArrow} alt="arrow" />
            </div>
          </div>

          <Card />
        </div>
      </div>
    </div>
  );
};

export default Content;
