import clsx from "clsx";
import { ISearchProps } from "./types";
import { IconSearch } from "../Icons";

export const InputSearch: React.FC<ISearchProps> = ({
    name,
    placeholder,
    className,
    onChange,
    iconClassName,
    className1,
    paddingLeft = "6px",
    borderRadius = "6px",
    paddingRight = "6px",
    inputMarginLeft = "0.75rem"
}) => {
  return (
    <div
      className={clsx(
        "flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 py-[2px]",
        className
      )}
      style={{"paddingLeft": paddingLeft, "paddingRight": paddingRight, "borderRadius": borderRadius}}
    >
      <IconSearch className={iconClassName} />
      <input
        type="text"
        name={`${name}_keyword`}
        className={clsx(
          "bg-transparent border-0 text-gray-6 lg:text-sm w-full outline-none",
          className1
        )}
        style={{ fontWeight: 200, "marginLeft": inputMarginLeft }}
        placeholder={placeholder}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
