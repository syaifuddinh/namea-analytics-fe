import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconArrowLeft: React.FC<IIconProps> = ({
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
        d="M9.167 14.167L5 10m0 0l4.167-4.167M5 10h10"
        stroke="#CDFBFF"
        strokeOpacity={0.6}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
