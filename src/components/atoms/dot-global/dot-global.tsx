import clsx from "clsx";
import { IDotProps } from "./types";

export const Dot: React.FC<IDotProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "h-2 w-2 rounded-full border-[3px] mr-2 justify-center mt-1.5",
        className
      )}
    />
  );
};
