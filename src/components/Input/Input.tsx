import { InputProps } from "../types/AtomTypes";

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  name,
  className = "",
}: InputProps) => {
  return (
    <div className={`flex w-full items-center rounded-sm ${className}`}>
      <input
        className="w-full px-5 py-3 text-xs placeholder:text-[#C2C2C2] text-[#767575] focus:outline-none"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
