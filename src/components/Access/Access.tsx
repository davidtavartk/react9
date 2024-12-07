import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Access = () => {
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
    <div className="m-auto bg-[#575988] px-12 py-16 text-white lg:gap-16 lg:px-12 lg:py-20">
      <div className="container m-auto flex flex-col gap-6 lg:flex-row">
        <div className="lg:itemss-start flex flex-col gap-6 lg:w-3/5 lg:gap-4">
          <h2 className="text-center text-lg font-bold lg:w-2/3 lg:text-start">
            Get early access today
          </h2>
          <p className="font-openSans text-center leading-6 lg:w-2/3 lg:text-start">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className="flex flex-col gap-3 lg:w-1/3 " onSubmit={handleSubmit} noValidate>
          <Input
            placeholder="email@example.com"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          {error && (
            <p className="text-sm text-white">Please check your email</p>
          )}
          <Button className="lg:w-1/2" type="submit">
            Get Started For Free
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Access;
