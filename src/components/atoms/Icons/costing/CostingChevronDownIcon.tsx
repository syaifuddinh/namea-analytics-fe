import { IIconProps, IconSize } from "./types";
import { styles } from "./helpers";

export const CostingChevronDownIcon: React.FC<IIconProps> = (props) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={10}
        height={6}
        fill="none"
        {...props}
      >
        <path
          stroke="#CDFBFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          d="M9 1 5 5 1 1"
        />
      </svg>
  );
};
