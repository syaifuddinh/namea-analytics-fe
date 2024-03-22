import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const IconThreeDotVertical: React.FC<IIconProps> = ({
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
        d="M10.001 4.166v.009m0 5.825v.008m0 5.825v.008m0-10.841a.833.833 0 110-1.667.833.833 0 010 1.667zm0 5.833a.833.833 0 110-1.667.833.833 0 010 1.667zm0 5.833a.834.834 0 110-1.667.834.834 0 010 1.667z"
        stroke="#CDFBFF"
        strokeOpacity={0.6}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
