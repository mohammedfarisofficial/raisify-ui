import { ReactNode } from "react";
import "./style.scss";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
  return <button id="btn">hi {children} test</button>;
};
