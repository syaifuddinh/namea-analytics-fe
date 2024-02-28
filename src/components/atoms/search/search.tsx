import clsx from "clsx";
import { ISearchProps } from "./types";
import { IconSearch } from "../Icons";

export const InputSearch: React.FC<ISearchProps> = ({
  name,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 rounded-md px-[6px] py-[2px] mr-2",
        className
      )}
    >
      <IconSearch />
      <input
        type="text"
        name={`${name}_keyword`}
        className={
          "ml-3 bg-transparent border-0 text-gray-6 lg:text-sm w-full outline-none"
        }
        style={{ fontWeight: 200 }}
        placeholder={placeholder}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
