import clsx from "clsx";
import { IDotProps } from "./types";

export const Dot: React.FC<IDotProps> = ({ className = "", profit }) => {
  return (
    <div
      className={`flex ${
        profit ? "bg-dot-blue-border" : "bg-alert-2"
      } h-3.5 w-3.5 rounded-full items-center justify-center ${className}`}
    >
      <div
        className={`${
          profit ? "bg-dot-blue" : "bg-alert-10"
        } h-2 w-2 rounded-full`}
      />
    </div>
  );
};
