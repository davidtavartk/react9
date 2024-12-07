import image from "../../assets/imgs/image.png";

const Card = () => {
  return (
    <div className="relative flex flex-col gap-4 rounded-[4px] bg-white px-6 py-4 pt-12 max-w-[356px]">
      <span className="absolute top-6 text-3xl text-c1">“</span>
      <p className="text-[10px] leading-5 text-c1">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex items-center gap-3">
        <img className="h-10 w-10" src={image} alt="image" />
        <div className="flex flex-col items-center text-start">
          <span className="font-openSans mr-auto text-[9px] font-bold">
            Kyle Burton
          </span>
          <span className="font-openSans mr-auto text-[6px]">
            Founder & CEO, Huddle
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
