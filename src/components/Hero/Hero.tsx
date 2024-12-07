import { ChangeEvent, FormEvent, useState } from "react";
import hero from "../../assets/imgs/hero.png";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Hero = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      console.log("Form submitted:", email);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError(false);
    }
  };

  return (
    <div className="container m-auto flex flex-col items-center justify-between gap-6 px-6 py-6 lg:flex-row-reverse lg:gap-16 lg:px-12 lg:py-20">
      <div>
        <img src={hero} alt="heroImage" />
      </div>

      <div className="flex flex-col justify-between gap-5 lg:w-1/2">
        <h1 className="font-openSans text-center text-2xl font-bold leading-9 text-c1 lg:text-left">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-openSans text-center text-sm font-normal leading-6 text-c1 lg:text-left">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form
          className="flex w-full flex-col justify-between gap-4 md:flex-row  md:relative"
          onSubmit={handleSubmit}
          noValidate
        >
          <Input
            placeholder="Enter Your email"
            className={`border md:w-3/5 ${error ? "border-[red]" :"border-[#07043B]"}`}
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          {error && (
            <p className="text-sm text-red md:absolute md:top-14">Please check your email</p>
          )}
          <Button className="md:w-2/5" type="submit">
            Get Started
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
