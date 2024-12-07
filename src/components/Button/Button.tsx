import { ButtonProps } from "../types/AtomTypes";

const Button = ({ type, children, className = "" }: ButtonProps) => {
  return (
    <>
      <button
        className={`h-10 w-full rounded-sm bg-[#2F65F8] py-3 text-sm font-bold text-white drop-shadow-custom hover:bg-[#6C9BFF] active:bg-[#5d8df5] ${className}`}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
