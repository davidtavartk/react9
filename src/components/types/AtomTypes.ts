import { ReactNode } from "react";

export interface InputProps {
  placeholder: string;
  className?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search"; // ChatGPTsgan Vnaxe
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  name?: string;
}

export interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";  // ChatGPTsgan Vnaxe
  className?: string;
}
