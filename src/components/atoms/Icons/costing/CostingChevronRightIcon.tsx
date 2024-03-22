import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const CostingChevronRightIcon: React.FC<IIconProps> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 7l6 5-6 5"
        stroke="#CDFBFF"
        strokeOpacity={0.6}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
