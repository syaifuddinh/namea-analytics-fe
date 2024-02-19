import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconSmallChevronDown: React.FC<IIconProps> = ({
  size = IconSize.md,
  className,
}) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles(size, className)}
    >
      <g clipPath="url(#clip0_497_11898)">
        <path
          d="M4.667 6.667L8 10l3.333-3.333H4.666z"
          fill="#CDFBFF"
          fillOpacity={0.6}
        />
      </g>
      <defs>
        <clipPath id="clip0_497_11898">
          <path fill="#fff" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
