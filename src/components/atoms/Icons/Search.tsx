import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconSearch: React.FC<IIconProps> = ({
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
        d="M9.667 16a6.333 6.333 0 100-12.667 6.333 6.333 0 000 12.667zM16.667 16.667l-1.334-1.334"
        stroke="#CDFBFF" //"currentColor"
        strokeOpacity={0.6}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
