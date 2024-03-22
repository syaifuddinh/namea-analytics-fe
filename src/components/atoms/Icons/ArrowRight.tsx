import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconArrowRight: React.FC<IIconProps> = ({
  size = IconSize.md,
  className,
}) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles(size, className)}
    >
      <path
        d="M10.833 5.833L15 10m0 0l-4.167 4.166M15 10H5"
        stroke="#CDFBFF"
        strokeOpacity={0.6}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
