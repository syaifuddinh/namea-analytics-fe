import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconArrowDown: React.FC<IIconProps> = ({
  size = IconSize.md,
  className,
}) => {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles(size, className)}
    >
      <path
        d="M2.965 7.215L6 10.25l3.035-3.035M6 1.75v8.415"
        stroke="#FF8C67"
        strokeWidth={1.2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
