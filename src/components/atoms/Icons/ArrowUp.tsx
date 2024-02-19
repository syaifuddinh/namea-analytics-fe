import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconArrowUp: React.FC<IIconProps> = ({
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
        d="M9.035 4.785L6 1.75 2.965 4.785M6 10.25V1.835"
        stroke="currentColor" //#2BCDB9
        strokeWidth={1.2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
