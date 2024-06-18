import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Button = ({ children }: Props): ReactNode => {
  return (
    <button
      className="bg-white h-35 min-w-90 h-9 px-5 border-r-35 rounded-[35px] text-base text-black font-medium"
      id="btn flex items-center"
    >
      {children}
    </button>
  );
};
