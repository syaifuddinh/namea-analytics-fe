import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconAdd: React.FC<IIconProps> = ({
  size = IconSize.md,
  className,
}) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles(size, className)}
    >
      <path
        d="M9 4.5V9m0 0v4.5M9 9h4.5M9 9H4.5"
        stroke="#CDFBFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
