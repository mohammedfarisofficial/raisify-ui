import { ReactNode } from "react";

interface Props {
  label?: string;
  placeholder?: string;
}

export const TextField = ({ label, placeholder }: Props): ReactNode => {
  return (
    <div className="bg-blue-400 min-w-96">
      <p className="text-lg">{label}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
