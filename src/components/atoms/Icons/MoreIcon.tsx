import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const MoreIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#CDFBFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.6}
      strokeWidth={1.5}
      d="M10 4.166v.009M10 10v.008m0 5.825v.008M10 5a.833.833 0 1 1 0-1.667A.833.833 0 0 1 10 5Zm0 5.833a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Zm0 5.833A.834.834 0 1 1 10 15a.834.834 0 0 1 0 1.667Z"
    />
  </svg>
  );
};
